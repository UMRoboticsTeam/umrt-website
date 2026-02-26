<template>
  <section class="page-section" :style="sectionStyle" :id="id">
    <div class="container px-0">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-10 text-center position-relative">
          <h2 v-if="title" class="mt-0">{{ title }}</h2>
          <hr v-if="title" class="divider divider-light" />
          
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  theme: { type: String, default: 'light' },
  title: { type: String, required: false },
  id: { type: String, required: false },
  img: { type: String, required: false }
});

const themeStyles = {
  light: { bg: "#f8f9fa", text: "#212529" },
  dark: { bg: "#212529", text: "#ffffff" },
  primary: { bg: "#05225b", text: "#ffffff" }
};

const sectionStyle = computed(() => {
  const selected = themeStyles[props.theme] || themeStyles.light;
  return {
    backgroundColor: selected.bg,
    color: selected.text,
    position: 'relative',
    overflow: 'hidden' // Keeps the rover from driving off the screen edges
  };
});
</script>

<style scoped>
.page-section {
  padding: 4rem 0;
  min-height: 200px;
}
.divider {
  max-width: 3.25rem;
  border-width: 0.2rem;
  border-color: currentColor;
  opacity: 1;
  margin: 1.5rem auto;
}
</style>