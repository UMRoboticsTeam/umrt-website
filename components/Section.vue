<template>
  <!-- <div ref="template"> -->
  <!-- <section v-if="!img" class="page-section" :style="sectionStyle"> -->
  <section class="page-section" :style="sectionStyle">
    <div class="container px-0">
    <!-- <div class="px-0"> -->
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-20 text-center">
          <h2 v-if="title" class="mt-0">{{ title }}</h2>
          <hr v-if="title" class="divider divider-light" />
          
          <slot class=""></slot>
          
        </div>
      </div>
    </div>
  </section>

  <!-- <section v-if="img" class="page-section page-section-img" :style="sectionImg" ref="sectionImgRef">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        
      </div>
    </div>
  </section>
  <section v-if="img" class="page-section" :style="sectionStyle" ref="sectionContentRef">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-20 text-center">
          <h2 class="mt-0">{{ title }}</h2>
          <hr v-if="title" class="divider divider-light" />
          
          <slot class=""></slot>
          
        </div>
      </div>
    </div>
  </section> -->
<!-- </div> -->
</template>
  
  
  
  <script setup>
  const props = defineProps({
    theme: { type: String, required: false },
    title: { type: String, required: false },
    img: { type: String, required: false },
  })
  
  var bgColour;
  var txtColour;

  switch (props.theme) {
    case "light":
      bgColour = "#f8f9fa"
      txtColour = "#212529"
      break;
    case "dark":
      bgColour = "#212529"
      txtColour = "#ffffff"
      break;
    case "primary":
      bgColour = "#05225b"
      txtColour = "#ffffff"
      break;
  }
  // if (props.img) {
    // bgColour = "#00000000"
    // txtColour = "#00000000"
  // }
  // if (props.img !== "undefined") {
    // const sectionStyle = computed(() => ({
      // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
      // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,

      // background: bgColour,
      // color: txtColour,
    // }))
  // }
  // else {
    // const sectionStyle = computed(() => ({
      // 
    // }))
  // }
  const computed1 = computed(() => ({
    background: bgColour,
    color: txtColour,
  }));
  const computed2 = computed(() => ({

  }))

  // const sectionStyle = computed(() => ({
    // background: (props.img ? bgColor : '#FF0000'),
    // color: (props.img ? txtColour : '#0000FF'),
  // }))

  const sectionStyle = (props.img == "" ? computed2 : computed1);




  // const sectionImgRef = ref(null);
  // const template = ref(null);
  const sectionImgRef = ref(null);
  const sectionContentRef = ref(null);
  // const sectionImgRef = this.$refs.sectionImgRef.$el;
  // const sectionContentRef = this.$refs.sectionContentRef.$el;

  import tempImg from "@/assets/images/TeamPhoto-1.jpg"

  const sectionImg = computed(() => ({
    background: `url(${tempImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll',
    
    position: 'fixed',
    width: '100%',

  }))
  


  onMounted(() => {


  function parallax() {
    // var s = document.getElementsByClassName("page-section-img")[0];
    // var yPos = 0 - window.pageYOffset/3;
    // s.style.top = 50 - 50 + yPos + "px";

    // var s = template.value
    // console.log(s)
    // console.log(s.getElementById('sectionImg'))

    // var sImg = template.value.getElementById('sectionImg');
    // var sCont = template.value.getElementById('sectionContent')

    // var yPos = scont.style.top - window.pageYOffset/3;
    // sImg.style.top = yPos + "px";

    // if (sectionImgRef.value) {
      // console.log("HUH")
      // console.log(sectionImgRef.value)
    // }
    // if (sectionContentRef.value) {
      // console.log(sectionContentRef.value)
    // }

    // const sectionImgRef = ref(null);
    // const sectionContentRef = ref(null);
    // var yPos = sectionContentRef.style.top;
    // sectionImgRef.style.top = yPos;

    
    // console.log(">" + props.img + "<")
    if (sectionContentRef.value != null) {
    // console.log(typeof(sectionImgRef))
      // console.log(sectionContentRef.value)
      
      // sectionImgRef.value.style.top = sectionContentRef.value.style.top;
      // sectionImgRef.value.style.top = "500px";

      // console.log(">" + sectionContentRef.value.style.offset)
      // console.log(sectionContentRef.value.style.offset)

      const rect = sectionContentRef.value.getBoundingClientRect();
      // sectionImgRef.value.style.top = rect.top + "px"// + window.scrollY
      // sectionImgRef.value.style.top = "500px"
      // console.log("top: " + rect.top);// + window.scrollY);
      sectionImgRef.value.style.top = (rect.top + rect.height*2 - window.pageYOffset/8) + "px"
    }
  }


  

    if (props.img !== "undefined") {
      parallax();
      window.addEventListener("scroll", function(){parallax();});
    }

    // console.log("YOOO")
    // console.log(this.$refs.sectionImgRef.$el)
    // console.log(this.$refs['sectionImgRef'])

    
    // console.log(sectionImgRef.value);
    
    // console.log(template.value)
  })


  


  </script>
  
  <style scoped>
  .page-section {
    padding: 4rem 0;
    min-height: 100px;
    /* position: relative; */
  }
  .page-section-img {
    z-index: 1;
    min-height: 100px;
  }
  </style>