<template>
  <div>
    <Hero title="The Team" :imgSrc="HeroImg"/>
    <Section theme="dark">
      <p>
        <!-- The University of Manitoba Robotics Team currently competes in the Canadian International Rover Competition
        held in Drumheller, AB. -->
        <!-- The University of Manitoba Robotics Team, formed in 2023, is composed of robotics passionate students from the University of Manitoba.
        The team members come from a variety of acadmeic faculties, primarily the Engineering and Science faculties. -->
        The University of Manitoba Robotics Team (UMRT), established in 2023, is a dynamic group of students 
        united by a shared passion for robotics and innovation. Drawing talent from a diverse range of academic 
        disciplines, the team primarily consists of members from the Engineering and Science faculties. Together, 
        they leverage their unique skills and expertise to build effective robotics solutions for competitive challenges.

      </p>
      
      
      
    </Section>

  <Section theme="primary">
    <Carousel />
  </Section>


    <Section theme="light" class="page-section team" id="team">
      <!-- <div class="container px-4 px-lg-5"> -->
      <div class="container px-1 px-lg-2">
        <h2 class="text-center mt-0">Executive Team</h2>
        <hr class="divider" />
        <!-- <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember :img='members["A.Ahmed"]' name="Syed Abraham Ahmed" role="Co-President" desc="4th Year Computer Engineering Undergraduate Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["A.Ahmed"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["C.Pagtakhan"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials='{"instagram": "https://www.instagram.com/cpagtakhan/", "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"}'/>
        </div> -->

        <div id="exec-team-div" style="flex-wrap: wrap;" class="d-flex justify-content-center">
          <div class="" v-for="exec in teamList['exec_team']" >
          <!-- <div class="" v-for="exec in teamList['exec_team']" > -->
            <TeamMember
              :img="teamImages[exec['image']]" 
              :name="exec['name']" 
              :role="exec['role']" 
              :desc="exec['description']" 
              :socials="JSON.stringify(exec['socials'])"
              />
          </div>
        </div>
      </div>
    </Section>

    <!-- <Section theme="dark" title="About Subsystems">
      <p>The University of Manitoba Robotics Team's Subsystems section functions as the diverse nerve center 
        of our robotic initiatives. It's a collection of specialized units, each with its own unique role, 
        working together to support our robot's functionality. Their collective efforts form the foundation 
        upon which our team builds innovative robots, driving our endeavors in robotics competitions and beyond.
      </p>
    </Section> -->

    <Section theme="dark" title="About the Subsystems">
      <p>The University of Manitoba Robotics Team's Subsystems section functions as the diverse nerve center 
        of our robotic initiatives. It's a collection of specialized units, each with its own unique role, 
        working together to support our robot's functionality. Their collective efforts form the foundation 
        upon which our team builds innovative robots, driving our endeavors in robotics competitions and beyond.
      </p>

      <div class="row d-flex justify-content-center">

        <div v-for="system in teamList['leads']" class="system-info col-xl-4 col-md-6">
          <i :class="`bi bi-${ system['icon'] }`"></i>
          <!-- <div> -->
            <h4>{{ system['name'] }}</h4>
            <p>{{ system['description'] }}</p>
          <!-- </div> -->
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="system in teamList['subsystems']" class="system-info col-xl-4 col-md-6">
          <i :class="`bi bi-${ system['icon'] }`"></i>
          <!-- <div> -->
            <h4>{{ system['name'] }}</h4>
            <p>{{ system['description'] }}</p>
          <!-- </div> -->
        </div>
      </div>
    </Section>

    <Section theme="light" class="page-section team">
      <!-- <div class="container px-4 px-lg-5"> -->
      <div class="container px-1 px-lg-2">
        <h2 class="text-center mt-0">Subsystem Leads</h2>
        <hr class="divider" />
        <!-- <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember :img='members["A.Ahmed"]' name="Syed Abraham Ahmed" role="Co-President" desc="4th Year Computer Engineering Undergraduate Student" socials=""/>
          <TeamMember img="" name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["A.Ahmed"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials=""/>
          <TeamMember :img='members["C.Pagtakhan"]' name="Connor Pagtakhan" role="Treasurer & Webmaster" desc="4th Year Computer Engineering Student" socials='{"instagram": "https://www.instagram.com/cpagtakhan/", "linkedin": "https://www.linkedin.com/in/connor-pagtakhan-5a617b206/"}'/>
        </div> -->

        <!-- <div id="exec-team-div" class="row d-flex justify-content-center">
          <TeamMember v-for="exec in teamList['exec_team']" 
            :img="members[exec['image']]" 
            :name="exec['name']" 
            :role="exec['role']" 
            :desc="exec['description']" 
            :socials="JSON.stringify(exec['socials'])"
            />
        </div> -->

        <!-- <div class="container px-4 px-lg-5">       -->
        <div class="d-flex justify-content-center" id="leads-div">
          <!-- Insert subsystems leads -->
          <TeamSystem v-for="system in teamList['leads']" :img="teamImages[system['image']]" :name="system['name']" :desc="system['description']">
            <!-- <div class="col-xl-4 col-md-6 "> -->
              <TeamMember v-for="exec in system['leads']" 
                :img="teamImages[exec['image']]" 
                :name="exec['name']" 
                :role="exec['role']" 
                :desc="exec['description']" 
                :socials="JSON.stringify(exec['socials'])"
                />
            <!-- </div> -->
          </TeamSystem>
        </div>
        <!-- </div> -->
        <!-- <div class="container px-4 px-lg-5"> -->
          <!-- style="flex-wrap: wrap;" class="d-flex justify-content-center" -->
        <div style="flex-wrap: wrap;" class="d-flex justify-content-center" id="subsystems-div">
          <!-- Insert subsystems -->
          <TeamSystem v-for="system in teamList['subsystems']" :img="teamImages[system['image']]" :name="system['name']" :desc="system['description']">
            <!-- <div class="col-xl-4 col-md-6 "> -->
              <TeamMember v-for="exec in system['leads']" 
                :img="teamImages[exec['image']]" 
                :name="exec['name']" 
                :role="exec['role']" 
                :desc="exec['description']" 
                :socials="JSON.stringify(exec['socials'])"
                />
            <!-- </div> -->
          </TeamSystem>
        </div>
        <!-- </div> -->

      </div>
    </Section>
    <Section theme="primary" title="Past Teams">
      <p>
        The success of the team wouldn't be possible without the 
        dedication and groundwork laid by past teams who built 
        the foundation we continue to grow upon.
        <br><br>
       View our past teams here! 
      </p>
      <a class="btn btn-light btn-xl" href="/archive">Archive</a>
    </Section>
    
  </div>
</template>

<style scoped>
.system-info {
  /* display: flex; */
  margin: 10px;
  /* background-color: rebeccapurple; */
  /* border: 1px dashed; */
  height: 250px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);

  transition: all 0.3s ease;
}
.system-info:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}
.system-info h4 {
  /* border: 1px dashed; */
}
.system-info i {
  font-size: 40px;
  /* border: 1px dashed; */
}
.system-info p {
  padding: 10px 10px;
  /* border: 1px dashed; */
}
</style>

<script setup>
  // import { filename } from 'pathe/utils'

  import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
  import Section from "~/components/Section.vue"
  import TeamMember from "~/components/TeamMember.vue"


  const globa = import.meta.glob('@/assets/images/members/*.jpg', { eager: true })

  
  function getFilename(path) {
    // gets filename
    // "/assets/images/members/C.Pagtakhan.jpg" -> "C.Pagtakhan.jpg"
    return path.substring(path.lastIndexOf('/') + 1)
  }


  const teamImages = Object.fromEntries(
    // Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    Object.entries(globa).map(([key, value]) => [getFilename(key), value.default])
  )

  // console.log("STARTING ONE")
  // console.log(members)
  // console.log("STARTING TWO")
  // console.log(Object(globa))


  // const glob = import.meta.glob('@/assets/images/showcase/*.jpg', { eager: true })
  // const images = Object.fromEntries(
  //   Object.entries(glob).map(([key, value]) => [key, value.default])
  // )

  useHead({
  title: "The Team",
  meta: [
    { name: 'description', content: 'Team and member information of UMRT' },
    { property: 'og:title', content: 'UMRT - The Team' },
    { property: 'og:description', content: 'Team and member information of UMRT' },
    // { property: 'og:image', content: '' },
    // { property: 'og:url', content: '' },
  ]
})

import teamList from '@/assets/images/members/TeamList.json'

</script>