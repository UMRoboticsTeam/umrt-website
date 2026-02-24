<template>
  <div class="system-container">
    <div class="system-header" :style="`background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${img});` ">
      <h3 class="name">{{ name }}</h3>
      <div class="header-line" :style="`background-color: var(--card-accent, #7FB3B3)`"></div>
    </div>

    <div class="members-grid">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.system-container {
  width: 100%;
  margin-bottom: 3rem;
}

.system-header {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-size: cover !important;
  background-position: center !important;
  margin-bottom: 1rem;
}

.members-grid {
  display: flex;
  /* Desktop: auto-fit based on the 15rem card width */
  /* grid-template-columns: repeat(auto-fit, minmax(15rem, 0fr)); */
  justify-content: center;
  /* gap: 1rem; */
}

@media (max-width: 576px) {
  .members-grid {
    /* Mobile: Force exactly two columns */
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem;
    padding: 0 5px;
  }
}
.name {
  color: white;
}
</style>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
})
</script>
