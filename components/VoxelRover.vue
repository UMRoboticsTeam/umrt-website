<template>
  <div ref="container" class="voxel-wrapper">
    <div
      v-if="has3DError"
      class="voxel-error"
    >
      <div class="voxel-error-content">
        <h2>3D Graphics Unavailable</h2>
        <p>
          This device or browser does not support the graphics
          features required to display this animation.
        </p>
      </div>
    </div>

    <div
      v-else
      ref="threeCanvas"
      class="voxel-container"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const threeCanvas = ref(null);
const container = ref(null);
const has3DError = ref(false);

let scene, camera, renderer, frameId;
let rover1, rover2;
const environmentObjects = [];
const particles = [];

// Configuration
const scrollSpeed = 0.06;
const groundColor = 0xb85c38;

onMounted(() => {
  // Check WebGL before doing any Three.js initialization.
  if (!isWebGLAvailable()) {
    show3DError();
    return;
  }

  try {
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xd4a373, 15, 30);

    // 2. Camera Setup
    const width = container.value.clientWidth;
    const height = container.value.clientHeight;
    const aspect = width / height;
    const d = 6;

    camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      1000
    );

    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    // 3. Renderer Setup
    // This can throw if WebGL exists but cannot actually be initialized.
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    threeCanvas.value.appendChild(renderer.domElement);

    // Optional: handle WebGL context loss after initialization.
    renderer.domElement.addEventListener(
      'webglcontextlost',
      onWebGLContextLost,
      false
    );

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;

    dirLight.shadow.camera.left = -10;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -10;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;

    scene.add(dirLight);

    // 5. Ground
    const groundGeo = new THREE.PlaneGeometry(100, 100);

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Unable to create 2D canvas context.');
    }

    ctx.fillStyle = '#b85c38';
    ctx.fillRect(0, 0, 64, 64);

    ctx.strokeStyle = '#a14a2a';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 64, 64);

    const groundTex = new THREE.CanvasTexture(canvas);
    groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping;
    groundTex.repeat.set(40, 40);

    const groundMat = new THREE.MeshPhongMaterial({
      map: groundTex
    });

    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;

    scene.add(ground);

    // 6. Load Models
    const loader = new GLTFLoader();

    const setupModel = (gltf, x, z) => {
      const model = gltf.scene;

      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });

      model.scale.set(1.5, 1.5, 1.5);
      model.rotation.y = 3 * Math.PI / 2;
      model.position.set(x, 0, z);

      scene.add(model);

      return model;
    };

    loader.load(
      '/3d/prairie_pioneer.glb',
      (gltf) => {
        rover1 = setupModel(gltf, -2, 0);
      },
      undefined,
      (error) => {
        console.error('Failed to load prairie_pioneer.glb:', error);
      }
    );

    loader.load(
      '/3d/project_perry.glb',
      (gltf) => {
        rover2 = setupModel(gltf, 2, -1.5);
      },
      undefined,
      (error) => {
        console.error('Failed to load project_perry.glb:', error);
      }
    );

    // 7. Environment Logic
    const createEnvironmentPiece = () => {
      const isRock = Math.random() > 0.3;
      const size = 0.2 + Math.random() * 0.6;

      const geo = isRock
        ? new THREE.BoxGeometry(size, size * 0.6, size)
        : new THREE.BoxGeometry(0.2, size * 2, 0.2);

      const color = isRock
        ? new THREE.Color().setHSL(
            0,
            0,
            0.3 + Math.random() * 0.2
          )
        : new THREE.Color().setHSL(
            0.3,
            0.4,
            0.2 + Math.random() * 0.2
          );

      const mat = new THREE.MeshPhongMaterial({ color });
      const mesh = new THREE.Mesh(geo, mat);

      const side = Math.random() > 0.5 ? 1 : -1;
      const x = side * (4 + Math.random() * 6);

      mesh.position.set(
        x,
        isRock ? size / 4 : size,
        20
      );

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      scene.add(mesh);
      environmentObjects.push(mesh);
    };

    // 8. Dirt/Smoke Logic
    const createDirt = (rover, xOffset) => {
      if (!rover) return;

      const p = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.12, 0.12),
        new THREE.MeshPhongMaterial({
          color: 0xa14a2a,
          transparent: true,
          opacity: 0.8
        })
      );

      p.position.set(
        rover.position.x +
          xOffset +
          (Math.random() * 2 - 1) * 0.1,
        0.1,
        rover.position.z - 1.2
      );

      p.userData.life = 1.0;

      scene.add(p);
      particles.push(p);
    };

    // 9. Animation Loop
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.05;

      groundTex.offset.y -= scrollSpeed / 2.5;

      [rover1, rover2].forEach((r, i) => {
        if (r) {
          r.position.y =
            Math.abs(Math.sin(time * 0.3 + i)) * 0.12;

          r.position.z +=
            Math.sin(time * 0.3 + i) * 0.01;

          r.rotation.x =
            Math.sin(time * 0.3 + i) * -0.02;

          r.position.x +=
            (Math.random() - 0.5) * 0.02;

          r.position.x = THREE.MathUtils.lerp(
            r.position.x,
            i === 0 ? -2 : 2,
            0.1
          );

          if (Math.random() > 0.8) {
            createDirt(r, -0.6);
            createDirt(r, 0.6);
          }
        }
      });

      // Move environment
      if (Math.random() > 0.96) {
        createEnvironmentPiece();
      }

      for (
        let i = environmentObjects.length - 1;
        i >= 0;
        i--
      ) {
        const obj = environmentObjects[i];

        obj.position.z -= scrollSpeed;

        if (obj.position.z < -20) {
          scene.remove(obj);
          environmentObjects.splice(i, 1);

          obj.geometry.dispose();
          obj.material.dispose();
        }
      }

      // Move dirt
      for (
        let i = particles.length - 1;
        i >= 0;
        i--
      ) {
        const p = particles[i];

        p.position.z -= scrollSpeed * 0.8;
        p.position.y += 0.01;
        p.userData.life -= 0.02;

        p.scale.setScalar(p.userData.life);

        if (p.userData.life <= 0) {
          scene.remove(p);
          particles.splice(i, 1);

          p.geometry.dispose();
          p.material.dispose();
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', onWindowResize);

  } catch (error) {
    console.error('Failed to initialize 3D renderer:', error);
    show3DError();
  }
});

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');

    return !!(
      window.WebGLRenderingContext &&
      (
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl')
      )
    );
  } catch {
    return false;
  }
}

function show3DError() {
  has3DError.value = true;

  if (frameId) {
    cancelAnimationFrame(frameId);
    frameId = null;
  }

  if (renderer) {
    renderer.dispose();
    renderer = null;
  }
}

function onWebGLContextLost(event) {
  event.preventDefault();
  console.error('WebGL context was lost.');
  show3DError();
}

function onWindowResize() {
  if (!container.value || !camera || !renderer) {
    return;
  }

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  if (height === 0) {
    return;
  }

  const aspect = width / height;
  const d = 6;

  camera.left = -d * aspect;
  camera.right = d * aspect;
  camera.top = d;
  camera.bottom = -d;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId);
  window.removeEventListener('resize', onWindowResize);

  if (renderer?.domElement) {
    renderer.domElement.removeEventListener(
      'webglcontextlost',
      onWebGLContextLost
    );
  }

  if (renderer) {
    renderer.dispose();
  }
});
</script>

<style scoped>
.voxel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.voxel-container {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.voxel-error {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.voxel-error-content {
  max-width: 28rem;
  text-align: center;
}

.voxel-error-content h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.voxel-error-content p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
</style>