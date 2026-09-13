<template>
  <div>
    <Hero title="Sponsorships" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        We're currently seeking sponsors to support our venture with CIRC. 
        Your sponsorship will help fuel our project's success. Additionally, we graciously 
        accept software sponsorships and monetary contributions. Connect with us through our 
        email to discuss how you can be a part of our journey!
        <br><br>
        Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries.
        
      </p>
    </Section>
    <Sponsors />
  </div>
</template>


<script setup>
  import HeroImg from "@/assets/images/JCA_ROS_Event.jpg"
  import Section from "~/components/Section.vue"

useHead({
  title: "Sponsorships",
  meta: [
    { name: 'description', content: 'Sponsorships information of UMRT' },
    { property: 'og:title', content: 'UMRT - Sponsorships' },
    { property: 'og:description', content: 'Sponsorships information of UMRT' },
    // { property: 'og:image', content: '' },
    // { property: 'og:url', content: '' },
  ]
})
</script>