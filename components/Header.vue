<template>
  <header>

    <!-- <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink" id="mainNav"> -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink">
      <div class="container px-2 px-lg-1">

        <!-- <img :src="UMRTLogo" class="" style="height: 64px; padding: 0; margin: 0;"> -->
        <!-- <a class="navbar-brand" href="/">UofM Robotics Team</a> -->
        <!-- <a class="navbar-brand" href="/">UMRT</a> -->
        <a class="navbar-brand" href="/"><img :src="UMRTLogo" class="" style="height: 64px; padding: 0; margin: 0;"></a>
        
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item"><a class="nav-link" href="/#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/team">The Team</a></li>
            <li class="nav-item"><a class="nav-link" href="/competitions">Competitions</a></li>
            <li class="nav-item"><a class="nav-link" href="/sponsorships">Sponsorships</a></li>
            <li class="nav-item"><a class="nav-link" href="/#join">Join Us!</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>
</script>

<script setup>
import UMRTLogo from "@/assets/images/umrt-logo-transparent.png"
import HeroImg from '@/assets/images/TeamPhoto-1.jpg'

onMounted(() => {
  document.addEventListener('scroll', () => {
      // var y;
      // y = window.scrollY;
      // document.documentElement.dataset.scroll = (y < 80 ? 0 : y);
      // document.documentElement.dataset.scroll = window.scrollY;
      // document.documentElement.dataset.scroll = (window.scrollY < 80 ? 0 : window.scrollY);

      document.documentElement.dataset.scroll = (window.scrollY < 20 ? 0 : 1);
  });
})
</script>

<style scoped>
/* header {
  background-color: RGB(255, 0, 0);
} */

/* nav {
  background-color: #242529;
  color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
html:is([data-scroll='0']) nav {
  background-color: #24252900;
  box-shadow: none;
} */
header {

}
nav {
  background: #24252900;
  /* background: linear-gradient(180deg, rgba(53,54,59,0) 0%, rgba(36,37,41,0) 85%); */
  box-shadow: none;
  
  /* transition: background-color 0.2s ease; */
  transition: all 0.4s ease;
}
nav::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(53,54,59,1) 0%, rgba(36,37,41,1) 85%);
  z-index: -1;
  transition: all 0.4s ease;
  opacity: 0;
}
html:is([data-scroll='1']) nav::before {
  opacity: 1;
  color: #ffffff;
  box-shadow: 0 0 15px 0px #000000FF;
}

.navbar {
  padding: 2px;
  
}

.navbar-collapse .show {
  background-color: #24252990;
}

.dropdown .dropdown-menu {
  transition: all 0.4s ease;
  padding: 0 20px;
  color: #ffffff8c;

  /* border: none; */
  /* min-width: 200px; */
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;

  background-color: #24252900;
  box-shadow: none;
  
  /* color: var(--bs-nav-link-hover-color); */
  color: #ffffff8C;
}
html:is([data-scroll='1']) .dropdown .dropdown-menu {
  /* background-color: #242529; */
  color: #ffffff;
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
  /* box-shadow: 0 0 15px 0px #000000FF; */
  
  
}

.dropdown-item {
  display: block;
  /* width: 100%; */
  /* padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); */
  clear: both;
  font-weight: 400;
  /* color: var(--bs-dropdown-link-color); */
  color: #ffffff8C;
  text-align: inherit;
  text-decoration: none;
  /* white-space: nowrap; */
  background-color: transparent;
  border: 0;

  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}
.dropdown-item:hover {
  color: #ffffffBF;
}




.nav-item {
  padding: 5px
}

/* .nav-link:hover, .nav-link:focus {
  color: #00f;
} */


.nav-item .nav-link {
  /* color: #ffffff; */
  /* font-size: 20px; */
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 5px;
  position: relative;
  transition: color 0.5s ease;
}

.nav-item .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #fff2 10%, #ffff, #fff2 90%);
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.6s;
  animation: shimmer 2s linear infinite;
}

.nav-item .nav-link:hover {
  color: #ffffff;
}

.nav-item .nav-link:hover::after {
  opacity: 1;
  
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  /* 50% {
    background-position: 200% 0;
  } */
  100% {
    background-position: -200% 0;
  }
}


</style>
