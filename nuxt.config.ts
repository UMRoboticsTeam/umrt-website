// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@nuxt/image'],


  nitro: {
    prerender: {
      routes: [
        '/about/',
        '/archive/',
        '/competitions/', 
        // '/outreach/',
        '/sponsorships/', 
        '/team/', 
      ],
      crawlLinks: true
    }
  },

  css: [
    './assets/styles.css'
  ],  // imports in here so that it doesnt blink when refreshing
  // script: [
  //   { hid: "Bootstrap", src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', defer=true},
  //   { hid: "SimpleLightbox", src: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js', defer=true},
  // ]

  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      // link: [
      //   { rel: 'stylesheet', href: './assets/styles.css' }
      // ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'description', content: 'The University of Manitoba Robotics Team (UMRT) Official Website' },
        { name: 'keywords', content: 'University, Manitoba, Robotics, Team' },
        { property: 'og:title', content: 'UMRT - University of Manitoba Robotics Team' },
        { property: 'og:description', content: 'The University of Manitoba Robotics Team (UMRT) Official Website' },
        // { property: 'og:image', content: '/default-image.jpg' },
        { property: 'og:url', content: 'https://umrt.ca' },
        // { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'University of Manitoba Robotics Team' },
        { name: 'twitter:description', content: 'The University of Manitoba Robotics Team (UMRT) Official Website' },
        // { name: 'twitter:image', content: '/default-twitter-image.jpg' }
      ],
      script: [
        // Bootstrap
        { 
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' 
        },
        
        // Google tag:
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-8G9J1TNZXN",
          async: "true"
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-8G9J1TNZXN');`
        }
      ],
    },
  },


})



// to build static:
//    npm run generate