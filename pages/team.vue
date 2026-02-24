<template>
  <div>
    <Hero title="The Team" :imgSrc="HeroImg"/>
    
    <Section theme="dark">
       <p class="text-center lead mx-auto" style="max-width: 800px;">
        The University of Manitoba Robotics Team (UMRT), established in 2023, is a dynamic group of students united by a shared passion for robotics and innovation. 
        Drawing talent from a diverse range of academic disciplines, the team primarily consists of members from the Engineering and Science faculties. 
        Together, they leverage their unique skills and expertise to build effective robotics solutions for competitive challenges.
      </p>
    </Section>

    <Section theme="primary">
      <Carousel />
    </Section>

    <Section theme="light" id="team">
      <div class="container">
        <h2 class="text-center section-title">Executive Team</h2>
        <div class="title-underline"></div>
        
        <div class="exec-flex">
          <TeamMember
            v-for="exec in teamList['exec_team']" 
            :key="exec.name"
            :img="teamImages[exec['image']]" 
            :name="exec['name']" 
            :role="exec['role']" 
            :desc="exec['description']" 
            :socials="JSON.stringify(exec['socials'])"
            :typeIcon="exec['typeIcon']"
          />
        </div>
      </div>
    </Section>

    <Section theme="light">
      <div class="container">
        <h2 class="text-center section-title">Section Leads</h2>
        <div class="title-underline"></div>

        <div class="subsystem-responsive-grid">
          
          <TeamSystem 
            v-for="system in [...teamList['leads'], ...teamList['subsystems']]" 
            :key="system.name"
            :img="teamImages[system['image']]" 
            :name="system['name']" 
            :desc="system['description']"
          >
            <TeamMember 
              v-for="member in system['leads']" 
              :key="member.name"
              :img="teamImages[member['image']]" 
              :name="member['name']" 
              :role="member['role']" 
              :desc="member['description']" 
              :socials="JSON.stringify(member['socials'])"
              :typeIcon="member['typeIcon']"
            />
          </TeamSystem>

        </div>
      </div>
    </Section>

    <Section theme="primary" title="Past Teams">
      <p class="text-center">The success of the team wouldn't be possible without the dedication and groundwork laid by past teams who built the foundation we continue to grow upon.</p>
      <br>
      <p class="text-center">View our past teams here!</p>
      <div class="text-center mt-4">
        <a class="btn btn-light btn-xl" href="/archive">Archive</a>
      </div>
    </Section>
  </div>
</template>

<style scoped>
/* Ensure the container allows cards to go nearly to the edge on mobile */
@media (max-width: 576px) {
  .container {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}

/* The Subsystem grid handles how the "Systems" sit next to each other */
.subsystem-responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
  gap: 0rem 2rem;
  align-items: start;
}

/* Execs use flex to wrap naturally */
.exec-flex {
  display: flex;
  /* flex-wrap: wrap-reverse; */
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: row-reverse; */
  /* Same 2-column force as the subsystems */
}

@media (max-width: 576px) {
  .exec-flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
}
</style>

<script setup>
  // import { filename } from 'pathe/utils'

  // import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
  import HeroImg from "@/assets/images/teamphoto-2425-1.jpg"
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