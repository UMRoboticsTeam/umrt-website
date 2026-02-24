<template>
  <div 
    class="member-card-container" 
    ref="memberCard"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="cardStyle"
  >
    <div class="card-border">
      <div class="member-inner">
        
        <div class="holo-base"></div>
        <div class="holo-radiant" ref="radiantLayer"></div>
        <div class="holo-sheen" ref="sheenLayer"></div>
        
        <div class="content-wrapper">
          <div class="card-top-row">
            <h4 class="name">{{ name }}</h4>
            <div class="class-icon-wrapper">
              <i :class="['bi', typeIcon || 'bi-star-fill']"></i>
            </div>
          </div>

          <div class="pic-frame">
            <img :src="img" class="member-img" :alt="name">
          </div>

          <div class="role-banner">
            <span class="role-text">{{ role }}</span>
          </div>

          <div class="info-area">
            <p class="description">{{ desc }}</p>
            <div v-if="parsedSocials" class="social-links">
              <a v-for="(url, platform) in parsedSocials" :key="platform" :href="url" target="_blank">
                <i :class="['bi', `bi-${platform}`]"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  desc: { type: String, required: true },
  socials: { type: String, default: "" },
  color: { type: String, default: null },
  typeIcon: { type: String, default: 'bi-cpu' }
});

const memberCard = ref(null);
const radiantLayer = ref(null);
const sheenLayer = ref(null);

const themes = {
  aqua: { base: '#4D6B6B', accent: '#7FB3B3' },
  raspberry: { base: '#6B4D55', accent: '#B37F8E' },
  orange: { base: '#6B5A4D', accent: '#B3967F' },
  purple: { base: '#564D6B', accent: '#8F7FB3' },
  slate: { base: '#4D546B', accent: '#7F8BB3' }
};

const cardTheme = computed(() => {
  if (props.color && themes[props.color]) return themes[props.color];
  const keys = Object.keys(themes);
  const index = props.name.length % keys.length;
  return themes[keys[index]];
});

const cardStyle = computed(() => ({
  '--card-base': cardTheme.value.base,
  '--card-accent': cardTheme.value.accent,
}));

const parsedSocials = computed(() => {
  try { return props.socials ? JSON.parse(props.socials) : null; } 
  catch (e) { return null; }
});

const handleMouseMove = (e) => {
  const card = memberCard.value;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const px = (x / rect.width) * 100;
  const py = (y / rect.height) * 100;

  // Tilt Logic
  const rotateX = (50 - py) / 4; 
  const rotateY = (px - 50) / 4;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

  // Radiant Effect Logic
  // We shift the background position and the opacity
  radiantLayer.value.style.backgroundPosition = `${px}% ${py}%`;
  radiantLayer.value.style.opacity = '0.5';

  // Sheen (The white light streak)
  sheenLayer.value.style.backgroundPosition = `${px}% ${py}%`;
  sheenLayer.value.style.opacity = '0.3';
};

const handleMouseLeave = () => {
  memberCard.value.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  radiantLayer.value.style.opacity = '0.1';
  sheenLayer.value.style.opacity = '0';
};
</script>

<style scoped>
.member-card-container {
  /* Use a variable so we can change it in one place */
  --card-base-width: 15rem; 
  
  width: var(--card-base-width);
  aspect-ratio: 1 / 1.55; /* Proportions are now locked */
  margin: 0.5rem;
  transition: transform 0.2s ease-out;
  flex-shrink: 0; /* Prevents flexbox from squishing them */
}

@media (max-width: 576px) {
  .member-card-container {
    /* Scale down for mobile to fit 2-per-row */
    --card-base-width: 44vw; /* Roughly 2 cards + margins */
    margin: 0.25rem;
  }
  
  /* Scale down text slightly so it fits the smaller card */
  .name { font-size: 0.85rem !important; }
  .role-text { font-size: 0.6rem !important; }
  .description { font-size: 0.65rem !important; }
  .class-icon-wrapper { width: 22px !important; height: 22px !important; font-size: 0.7rem !important; }
}

.card-border {
  height: 100%;
  width: 100%;
  background: #181818;
  padding: 8px;
  border-radius: 14px;
  box-shadow: 0 20px 30px rgba(0,0,0,0.5);
}

.member-inner {
  position: relative;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  background: var(--card-base);
  display: flex;
  flex-direction: column;
}

/* HOLO EFFECT STACK 
*/

/* 1. The Rainbow Radiant (The "Conic" Prism look) */
.holo-radiant {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.1;
  transition: opacity 0.2s ease;
  mix-blend-mode: soft-light;
  /* background-image: conic-gradient(
    from 0deg,
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000
  ); */
  background-image: 
  radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 20%,
    rgba(255, 255, 255, 0) 40%
  ),
  conic-gradient(
    from 0deg,
    #ff0000, #ff7f00, #ffff00,
    #00ff00, #0000ff, #4b0082,
    #8b00ff, #ff0000
  );
  background-size: 200% 200%;
  filter: brightness(0.5) contrast(1.2);
  mask-image: url("https://png.pngtree.com/png-clipart/20240316/original/pngtree-white-stars-seamless-pattern-png-png-image_14603964.png");
  mask-size: contain;
  /* mask-type: alpha; */
}

/* 2. The Light Sheen (A sharp beam of light) */
.holo-sheen {
  position: absolute;
  inset: 0;
  z-index: 3;
  opacity: 0;
  mix-blend-mode: screen;
  background: linear-gradient(
    115deg,
    transparent 20%,
    rgba(255,255,255,0.7) 45%,
    rgba(255,255,255,0.8) 50%,
    rgba(255,255,255,0.7) 55%,
    transparent 80%
  );
  background-size: 250% 250%;
  transition: opacity 0.2s ease;
}

/* Content Container - Needs higher Z-index than holo */
.content-wrapper {
  position: relative;
  z-index: 2;
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Styling for the Portrait Layout */
.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px 8px 4px;
}

.name {
  min-width: 0;
  font-size: 1.1rem;
  white-space: nowrap;
  font-weight: 900;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 1px rgba(0,0,0,1);
  flex: 1;
  text-align: left;
}

.class-icon-wrapper {
  background: rgba(0,0,0,0.3);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;

  flex-shrink: 0;
}

.pic-frame {
  width: 100%;
  height: 80%;
  border: 2px solid #bbb;
  box-shadow: inset 0 0 15px #000;
  /* box-shadow: 2px 2px 0px 0px #0008, -2px -2px 0px 0px #0008 ; */
  border-radius: 4px;
  overflow: hidden;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.role-banner {
  /* background: rgba(0,0,0,0.7); */
  background: rgba(0,0,0,1);
  margin-top: -15px;
  width: 85%;
  align-self: center;
  padding: 5px;
  border: 2px solid var(--card-accent);
  border-radius: 4px;
  text-align: center;
  backdrop-filter: blur(4px);
}

.role-text {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-area {
  margin-top: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description {
  font-size: 0.75rem;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 5px;
  font-weight: 500;
  line-height: 1.3;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 5px;
}

.social-links i {
  color: #fff;
  font-size: 1.1rem;
}
</style>