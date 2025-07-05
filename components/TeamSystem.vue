<template>
  <!-- <div class="col-xl-4 col-md-6 mt-4 mt-lg-5"> -->
  <!-- <div class="col-xl-4 col-md-6 mt-4 mt-lg-5"> -->
  <div class="col-lg-3 col-md-4 col-6">
    <div class="subsystem">
      <!-- <div class="py-3"> -->
      
      <!-- <div class="mt-3 system-header" :style="`background-image: url(${img})`"> -->
      <div class="mt-3 system-header"
        :style="`background: linear-gradient(to bottom, #404040A0 0%, #404040F0 100%), url(${img}); 
                background-size: cover; background-position: center;`">
        <!-- background: linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), URL(bgImgUrl) -->
        <h2 class="name">{{ name }}</h2>
        <!-- <p class="description">{{ desc }}</p> -->
      </div>

      <!-- <div class="pic"> -->
        <!-- <img src="/assets/img/subsystem-embedded.jpg" class="img-fluid"> -->
        <!-- <img :src="img" class="img-fluid"> -->
        <!-- <img :src="img"> -->
      <!-- </div> -->
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
})
</script>

<style scoped>

.subsystem {
  padding: 0 !important;
  /* height: 100px; */
  border-radius: 50px;
}
.system-header {
  /* overflow: hidden; */
  /* scale: 2; */
  /* background-size: cover; */
  /* background-position: center; */
  /* padding: 0px; */
  /* margin: 0px; */
}
h2 {
  color: white;
}
</style>