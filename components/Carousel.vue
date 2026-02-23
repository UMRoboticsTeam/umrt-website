<template>
  <div class="carousel-wrapper" @mouseenter="pauseScroll" @mouseleave="startScroll">
    <div class="carousel-ctrl">
      <button class="ctrl-btn left" @click="scroll('left')">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button class="ctrl-btn right" @click="scroll('right')">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>

    <div id="lightgallery" ref="galleryRef" class="gallery-container">
      <div v-for="(imgUrl, path) in images" :key="path" class="gallery-item">
        <img :src="imgUrl" alt="Showcase Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const glob = import.meta.glob('@/assets/images/showcase/*.jpg', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [key, value.default])
);

const galleryRef = ref(null);
let scrollInterval = null;

const scroll = (direction) => {
  const el = galleryRef.value;
  const scrollAmount = el.offsetWidth * 0.8;
  if (direction === 'left') {
    el.scrollLeft -= scrollAmount;
    // If at start, loop to end
    if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth;
  } else {
    el.scrollLeft += scrollAmount;
    // If at end, loop to start
    if (el.scrollLeft >= el.scrollWidth - el.offsetWidth) el.scrollLeft = 0;
  }
};

const startScroll = () => {
  scrollInterval = setInterval(() => scroll('right'), 3000);
};

const pauseScroll = () => {
  clearInterval(scrollInterval);
};

onMounted(() => {
  startScroll();
});

onUnmounted(() => {
  pauseScroll();
});
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 350px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.3);
  background: #000;
  overflow: hidden;
}

.gallery-container {
  display: flex;
  height: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  gap: 10px;
  padding: 10px;
}

.gallery-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.gallery-item {
  flex: 0 0 auto;
  height: 100%;
}

.gallery-item img {
  height: 100%;
  width: auto;
  border-radius: 4px;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.02);
}

/* Modern Floating Controls */
.carousel-ctrl {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 20;
  pointer-events: none;
}

.ctrl-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.3s;
  opacity: 0; /* Hidden by default */
}

.carousel-wrapper:hover .ctrl-btn {
  opacity: 1; /* Show on hover */
}

.ctrl-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}
</style>