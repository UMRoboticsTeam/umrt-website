<template>
  <div>
    <Hero title="Archive" :imgSrc="HeroImg"/>
    <Section theme="light">
      <h2 class="text-center mt-0">2024-2025</h2>
      <hr class="divider" />
      <p>
        The 2024-2025 team was the first official year as a technical society of the University of Manitoba Engineering Society.
        This year continued to expand to create a strong community by participating in many outreach events, workshops, and participating in CIRC 2025.
      </p>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>President</td><td>Minjeong Kang</td></tr>
            <tr><td>Vice President</td><td>Kevin Burston</td></tr>
            <tr><td>Secretary</td><td>Mai Bui</td></tr>
            <tr><td>Treasurer/Webmaster</td><td>Connor Pagtakhan</td></tr>
            <tr><td>Events Director</td><td>Kate Lacerna</td></tr>
            <tr><td>Creatives Director</td><td>Sydney Povey</td></tr>

            <tr><td>System Lead</td><td>Edcel Abanto</td></tr>
            <tr><td>Embedded Leads</td><td>Niko Christie, Ernest Gonzales</td></tr>
            <tr><td>Communications Leads</td><td>Kevin Burston, Connor Pagtakhan</td></tr>
            <tr><td>Electrical Lead</td><td>Jonah St. Hilaire</td></tr>
            <tr><td>Chassis Lead</td><td>Matthew Nutbean</td></tr>
            <tr><td>Robotic Arm Leads</td><td>Anna Kulchycki, Noah Reeder</td></tr>
            <tr><td>Mission Control Lead</td><td>Spencer Molly</td></tr>
          </tbody>
        </table>

        
      </div>
      <div class="members-list">
        <h4>Members</h4>
        <div class="list">
          Syed Abraham Ahmed, Minjeong Kang, Connor Pagtakhan, Kevin Burston,
          Mai Bui, Sydney Povey, Niko Christie, Ernest Gonzales, Joshua Bond, Vuk Roca,
          Matthew Nutbean, Graham Nash, Noah Reeder, Edcel Abanto, Ghrum Yemessghen, Anna Kulchycki,
          Quinn Thiessen, Kate Lacerna, Spencer Molloy, Jonah St. Hilaire, Quinn Gibbons,
          Che Carby, Khan Ayaan, Adan Akmal, Yuvraj Singh
        </div>
      </div>
    </Section>
    <Section theme="dark">
      <h2 class="text-center mt-0">2023-2024</h2>
      <hr class="divider" />
      <img class="team-photo" :src="team_2023_2024"></img>
      <p>The 2023-2024 team was the first team of UMRT, founded by Syed Abraham Ahmed and Minjeong Kang. 
        In their inaugural year, the team successfully built a fully functional rover to compete in the 
        2024 Canadian International Rover Challenge (CIRC). Their journey marked a significant milestone 
        in the development of the team, setting a strong foundation for future growth.</p>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Co-Presidents</td><td>Syed Abraham Ahmed, Minjeong Kang</td></tr>
            <tr><td>Vice President</td><td>Nikolaus Reichert</td></tr>
            <tr><td>Secretary</td><td>Garizaldy Gerra</td></tr>
            <tr><td>Treasurer/Webmaster</td><td>Connor Pagtakhan</td></tr>
            <tr><td>Business Director</td><td>Erica von Stackelberg</td></tr>
            <tr><td>Promotions Director</td><td>Breanna Stratton</td></tr>

            <tr><td>System Lead</td><td>Syed Abraham Ahmed</td></tr>
            <tr><td>Embedded Lead</td><td>Nikolaus Reichert</td></tr>
            <tr><td>Communications Leads</td><td>Kevin Burston, Adam Garofalo, Minjeong Kang</td></tr>
            <tr><td>Electrical Lead</td><td>Erica von Stackelberg</td></tr>
            <tr><td>Chassis Lead</td><td>Matthew Nutbean</td></tr>
            <tr><td>Robotic Arm Leads</td><td>Graham Nash, Noah Reeder</td></tr>
            <tr><td>Payload Leads</td><td>Breanna Stratton, Skylar Trudeau</td></tr>
          </tbody>
        </table>

        
      </div>
      <div class="members-list">
        <h4>Members</h4>
        <div class="list">
          Syed Abraham Ahmed, Minjeong Kang, Connor Pagtakhan, Garizaldy Gerra, Nikolaus Reichert, 
          Erica von Stackelberg, Breanna Stratton, Skylar Trudeau, Kevin Burston, Adam Garofalo, Ali Syed Ahmed, 
          Matthew Nutbean, Graham Nash, Noah Reeder, Edcel Abanto, Ghrum Yemessghen, Anna Kulchycki,
          Kate Lacerna, Spencer Molloy, Jonah St. Hilaire, Bryce Cadieux, Alessandro Potenza, Spencer Ryznar,
          Daigh Burgess, Kyra Natividad, Ankit Kaur, Quinn Gibbons
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}
table {
  /* background-color: red; */
  border: 1px solid;
}
thead th {
  text-align: center;
}
tr {
  text-align: left;
  border: 1px solid #808080;
}
td {
  padding: 1px 10px;
}
.members-list {
  margin: 20px 5px;
  justify-content: center;
  text-align: center;
}
.members-list .list {
  width: 80%;
  margin: auto;
  /* justify-content: space-evenly; */
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  /* text-justify: newspaper; */




  text-align: justify;
  text-justify: inter-word;
  text-align-last: center;
}
.team-photo {
  width: 500px;
  min-width: 50%;
}
</style>
  
<script setup>
import HeroImg from "@/assets/images/TeamPhoto-2.jpg"
import team_2023_2024 from "@/assets/images/TeamPhoto-2.jpg"
import Section from "~/components/Section.vue"

// definePageMeta({
//   title: 'Team Archive',
//   name: 'Team Archive',
// })
useHead({
  title: "Archive",
  meta: [
    { name: 'description', content: 'Info and file archives of UMRT' },
    { property: 'og:title', content: 'UMRT - Archive' },
    { property: 'og:description', content: 'Info and file archives of UMRT' },
    // { property: 'og:image', content: '' },
    // { property: 'og:url', content: '' },
  ]
})
</script>