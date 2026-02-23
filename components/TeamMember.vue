<template>
  <div 
    class="member-card-container" 
    ref="memberCard"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="{ '--card-accent': cardTheme.color }"
  >
    <div class="card-border">
      <div class="member-inner" :style="{ background: cardTheme.gradient }">
        
        <div class="shine" ref="shineLayer"></div>
        <div class="sparkles" ref="sparkleLayer"></div>
        
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
            <a v-for="(url, platform) in parsedSocials" 
               :key="platform" :href="url" target="_blank">
              <i :class="['bi', `bi-${platform}`]"></i>
            </a>
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
  typeIcon: { type: String, default: 'bi-cpu' } // The "Class" icon
});

const memberCard = ref(null);
const shineLayer = ref(null);
const sparkleLayer = ref(null);

// Desaturated "Matte" Palette
const themes = {
  aqua: { color: '#7FB3B3', gradient: 'linear-gradient(135deg, #7FB3B3 0%, #4D6B6B 100%)' },
  raspberry: { color: '#B37F8E', gradient: 'linear-gradient(135deg, #B37F8E 0%, #6B4D55 100%)' },
  orange: { color: '#B3967F', gradient: 'linear-gradient(135deg, #B3967F 0%, #6B5A4D 100%)' },
  purple: { color: '#8F7FB3', gradient: 'linear-gradient(135deg, #8F7FB3 0%, #564D6B 100%)' },
  slate: { color: '#7F8BB3', gradient: 'linear-gradient(135deg, #7F8BB3 0%, #4D546B 100%)' }
};

const cardTheme = computed(() => {
  if (props.color && themes[props.color]) return themes[props.color];
  const keys = Object.keys(themes);
  const index = props.name.length % keys.length;
  return themes[keys[index]];
});

const parsedSocials = computed(() => {
  try { return props.socials ? JSON.parse(props.socials) : null; } 
  catch (e) { return null; }
});

const handleMouseMove = (e) => {
  const card = memberCard.value;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y - rect.height/2) / (rect.height/2)) * -12;
  const rotateY = ((x - rect.width/2) / (rect.width/2)) * 12;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  
  const pX = (x / rect.width) * 100;
  const pY = (y / rect.height) * 100;

  // Move the light sheen
  shineLayer.value.style.background = `radial-gradient(circle at ${pX}% ${pY}%, rgba(255,255,255,0.25) 0%, transparent 50%)`;
  
  // Move the sparkle pattern (foil effect)
  sparkleLayer.value.style.backgroundPosition = `${pX}% ${pY}%`;
  sparkleLayer.value.style.opacity = '0.4';
};

const handleMouseLeave = () => {
  memberCard.value.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  shineLayer.value.style.background = 'transparent';
  sparkleLayer.value.style.opacity = '0';
};
</script>

<style scoped>
.member-card-container {
  width: 17rem;
  aspect-ratio: 1 / 1.55;
  margin: 1.5rem;
  transition: transform 0.2s ease-out;
}

.card-border {
  height: 100%;
  width: 100%;
  background: #1a1a1a;
  padding: 8px; /* The classic thick card border */
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

.member-inner {
  position: relative;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.1);
}

/* --- THE HOLO EFFECTS --- */
.shine {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  mix-blend-mode: soft-light;
}

.sparkles {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  mix-blend-mode: color-dodge;
  /* Adjusting this background changes the "Foil" pattern */
  /* background-image: 
    radial-gradient(circle at 50% 50%, #fff3 1px, transparent 1px),
    radial-gradient(circle at 10% 10%, #fff3 1px, transparent 1px);
  background-size: 20px 20px, 35px 35px; */
}

/* --- LAYOUT --- */
.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px 6px 4px;
}

.name {
  font-size: 1.05rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.class-icon-wrapper {
  background: rgba(255,255,255,0.2);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.4);
  color: #fff;
  font-size: 0.9rem;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}

.pic-frame {
  width: 100%;
  height: 80%;
  border-radius: 2px;
  overflow: hidden;
  border: 3px solid #222;
  box-shadow: inset 0 0 10px #000;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.role-banner {
  background: rgba(0,0,0,0.6);
  margin-top: -12px;
  z-index: 6;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 4px;
  text-align: center;
  border: 1px solid var(--card-accent);
  border-radius: 4px;
  backdrop-filter: blur(2px);
}

.role-text {
  color: #eee;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
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
  color: #f0f0f0;
  line-height: 1.2;
  padding: 5px;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 5px;
}

.social-links i {
  color: #fff;
  font-size: 1rem;
  opacity: 0.8;
}
</style>