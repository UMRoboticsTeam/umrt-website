<template>
  <!-- <div class="col-xl-4 col-md-6 mt-4 mt-lg-5"> -->
  <!-- <div class="col-xl-4 col-md-6 mt-4 mt-lg-5"> -->
  <!-- <div class="col-lg-4 col-5 m-1"> -->
  <div class="m-1">
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
    <div class="d-flex" style="justify-content: center;">
      <slot></slot>
    </div>
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

  /* width: 32rem; */
}

@media only screen and (max-width: 600px) {
  .subsystem {width: 22rem; font-size: 0.2em;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .subsystem {width: 22rem; font-size: 0.8em;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .subsystem {width: 22rem; font-size: 0.8em;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .subsystem {width: 30.8rem; font-size: 0.9em;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .subsystem {width: 39.6rem; font-size: 1em;}
}
.system-header {
  /* overflow: hidden; */
  /* scale: 2; */
  /* background-size: cover; */
  /* background-position: center; */
  /* padding: 0px; */
  /* margin: 0px; */
  border-radius: 5px;
}
h2 {
  color: white;
}
</style>