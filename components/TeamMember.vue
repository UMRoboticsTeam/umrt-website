<template>
  <!-- <div class="col-xl-4 col-md-6 "> -->
    <div class="member d-flex" ref="memberCard">
      <div class="shine"></div>
      <div class="pic">
        <img :src="img" class="img-fluid" alt="member image">
      </div>
      <div class="member-info">
        <h4 class="name">{{ name }}</h4>
        <h6 class="role">{{ role }}</h6>
        <p style="display: block;" class="description">{{ desc }}</p>
        <div class="social" ref="socialsDiv" id="socialsDiv"></div>
      </div>
    </div>
</template>
  
<style scoped>
.member {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  background: var(--member-background );


  display: flex;
  flex-direction: column;
  /* position: relative; */
  transition: all 0.1s ease;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.35);
  /* background-image: url('@/assets/images/members/metal.jpg'); */
  /* object-fit: fill; */
  background: #808080;
  /* width: 240px; */
  /* height: 400px; */
  overflow: hidden;

  /* flex: 0 0 calc(100% / 9);
  box-sizing: border-box; */
  /* width: 50%; */
  aspect-ratio: 3 / 5;

  /* transition: all s ease; */
  /* width: 18em; */
  /* width: 30%; */
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .member {width: 10rem; font-size: 0.2em; margin: 0.5rem;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .member {width: 10rem; font-size: 0.8em; margin: 0.5rem;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .member {width: 10rem; font-size: 0.8em; margin: 0.5rem;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .member {width: 14rem; font-size: 0.9em; margin: 0.7rem;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .member {width: 18rem; font-size: 1em; margin: 0.9rem;}
}

.pic {
  overflow: hidden;
  /* max-width: 230px; */
  /* max-height: 268px; */
}
.pic img {
  border-radius: 7px;
  object-fit: cover;
  
}

.member-info {
  /* padding-left: 20px; */
}


.social {
  transition: all 0.2s ease;
}


.shine {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%); */
  opacity: 0;
  pointer-events: none; /* Prevent interference with mouse events */
  /* transition: background 0.4s ease; */
}

.member:hover .shine {
  opacity: 1; /* Make the shine effect visible on hover */
}

.member-info {
  text-align: left;
  /* position: absolute; */
  /* align-self: flex-end; */
  /* background: #F0F0F080; */
}
</style>

<!-- <div class="col-xl-4 col-md-6">
  <div class="member d-flex my-2">
      <div class="pic">
          <img src="/assets/team/C.Pagtakhan.jpg" class="img-fluid" alt="member image">
      </div>
      <div class="member-info flex-grow">
          <h4 class="name">Connor Pagtakhan</h4>
          <h6 class="role flex">Treasurer &amp; <w class="webmaster" style="">Webmaster</w></h6>
          <p style="display: block;" class="description">4th Year Computer Engineering Undergraduate Student</p>
          <div class="social">
          <a href="https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"><i class="bi bi-linkedin"></i></a><a href="https://www.instagram.com/cpagtakhan/"><i class="bi bi-instagram"></i></a></div>
      </div>
  </div>
</div> -->
  
<script setup>
import { ref, onMounted, useTemplateRef } from 'vue';

  const props = defineProps({
    img: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    desc: { type: String, required: true },
    socials: { type: String, required: false },
  })

// const elem = useTemplateRef('socials-div')
const memberCard = ref(null);
const socialsDiv = ref(null);

const handleMouseMove = (event) => {
  const card = memberCard.value;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 5;
  const rotateY = ((x - centerX) / centerX) * -5;

  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  // card.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;


  const shineLayer = card.querySelector('.shine');
  // shineLayer.style.background = `radial-gradient(ellipse at ${x}px ${y}px, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 80%)`;
  shineLayer.style.background = `radial-gradient(ellipse at ${x}px ${y}px, #FFFFFF18 0%, #FFFFFF00 50%, #FFFFFF00 95%, #FFFFFF30 100%)`;
  // card.style.background = `#808080 radial-gradient(ellipse at ${x}px ${y}px, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 40%)`;

  socialsDiv.value.style.display = 'flex';
};

const handleMouseLeave = () => {
  const card = memberCard.value;

  card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  card.style.background = '#808080';


  // const shineLayer = memberCard.value.querySelector('.shine');
  // shineLayer.style.opacity = '0'; // Hide the shine effect when the mouse leaves
  socialsDiv.value.style.display = 'none';
};


onMounted(() => {
  const card = memberCard.value;
  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);


  if (props.socials != "") {
    var socialsObj = JSON.parse(props.socials);

    for (const [key, val] of Object.entries(socialsObj)) {
      const a = document.createElement('a');
      a.href = val;
      a.target = ".";
      const icon = document.createElement('i');
      icon.classList.add('bi', `bi-${key}`);
      a.appendChild(icon);
      socialsDiv.value.appendChild(a);
    }
  }
})
</script>