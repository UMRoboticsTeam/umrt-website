<template>
  <Section theme="light">
    <h2 class="mt-0">Our Sponsors</h2>
    <hr class="divider divider-light" />

    <div class="row row-cols-1 row-cols-lg-2 d-flex justify-content-center">
      <!-- =================================== -->
      <!-- ====== High Tier Sponsors ========= -->
      <!-- =================================== -->

      <!-- Engineering Endowment Fund -->
      <Sponsor :imgSrc="LOGO_EEF" />
      <!-- Friends of Engineering -->
      <Sponsor :imgSrc="LOGO_FOE" />
      <!-- PTX Trimble -->
      <Sponsor :imgSrc="LOGO_PTX" href="https://www.ptxtrimble.com/" tooltip="PTX Trimble Website" />
      <!-- G3 -->
      <Sponsor :imgSrc="LOGO_G3" href="https://www.g3.ca/" tooltip="G3 Website" />
      <!-- MacDon -->
      <Sponsor :imgSrc="LOGO_MD" href="https://www.macdon.com/" tooltip="MacDon Website" />
      <!-- Big Deal Custom Cases -->
      <Sponsor :imgSrc="LOGO_BDCC" href="https://bigdealcases.com/" tooltip="Big Deal Custom Cases Website"/>


    </div>
    <hr class="divider divider-light" />
    <div class="row row-cols-2 row-cols-lg-4 d-flex justify-content-center">
      <!-- =================================== -->
      <!-- ======== Medium Tier Sponsors ===== -->
      <!-- =================================== -->

      <!-- ProtoCase -->
      <Sponsor :imgSrc="LOGO_PC" />
      <!-- Seven Oaks School Division -->
      <Sponsor :imgSrc="LOGO_7O" />
      <!-- New Flyer Industries -->
      <Sponsor :imgSrc="LOGO_NFI" />
      <!-- Outstanding Branding -->
      <Sponsor :imgSrc="LOGO_OB" />
      <!-- Radio Amateurs Manitoba -->
      <Sponsor :imgSrc="LOGO_RAM" href="https://ramb.ca/" tooltip="Radio Amateurs of Manitoba Website" />
      
    </div>
    <hr class="divider divider-light" />
    <div class="row row-cols-3 row-cols-lg-6 d-flex justify-content-center">
      <!-- =================================== -->
      <!-- ======= Low Tier Sponsors ========= -->
      <!-- =================================== -->

      <!-- RapidHarness -->
      <Sponsor :imgSrc="LOGO_RH" />
      <!-- OnShape -->
      <Sponsor :imgSrc="LOGO_OS" />
      <!-- Solidworks -->
      <Sponsor :imgSrc="LOGO_SW" />
      <!-- Altium -->
      <Sponsor :imgSrc="LOGO_AL" />
      
    </div>

  </Section>
</template>


<script setup>
  import Section from "~/components/Section.vue"
  import Sponsor from "~/components/Sponsor.vue"
  
  

  import LOGO_EEF from "@/assets/images/sponsors/EngineeringEndowmentFundColour.png"
  import LOGO_FOE from "@/assets/images/sponsors/FOE_logo_cropped.png"
  import LOGO_PTX from "@/assets/images/sponsors/PTx_Trim_RGB.svg"
  import LOGO_G3 from "@/assets/images/sponsors/G3_Symbol_Colour.svg"
  import LOGO_MD from "@/assets/images/sponsors/MacDon_RGB.svg"
  import LOGO_BDCC from "@/assets/images/sponsors/BigDealCustomCases.png"

  import LOGO_PC from "@/assets/images/sponsors/protocase.webp"
  import LOGO_7O from "@/assets/images/sponsors/SevenOaksColour.svg"
  import LOGO_NFI from "@/assets/images/sponsors/NFI_Group_logo_2019.svg"
  import LOGO_OB from "@/assets/images/sponsors/Outstanding+Branding+Primary+Horizontal.png"
  import LOGO_RAM from "@/assets/images/sponsors/RAM_LOGO_v3_Transparent.png"
  
  import LOGO_RH from "@/assets/images/sponsors/RapidHarnessLogoLarge.png"
  import LOGO_OS from "@/assets/images/sponsors/onshape-logo-RGB_color_cropped.png"
  import LOGO_SW from "@/assets/images/sponsors/SolidWorks_RedOnTransparent.png"
  import LOGO_AL from "@/assets/images/sponsors/Altium_Logo_BLK.svg"


</script>

<style scoped>

</style>