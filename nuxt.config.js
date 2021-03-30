
/*!

 =========================================================
 * Nuxt Black Dashboard - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 env:{
   razorPayKey : process.env.RAZORPAY_KEY
 },
  head: {
    title: 'Nuxt Black Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
    ],
    bodyAttrs: {
      class: 'white-content' // Add `white-content` class here to enable "white" mode.
    }
    // --------------------
  //   title: pkg.name,
  // meta: [
  //   { charset: 'utf-8' '},
  //   { name: 'viewport', content: '...',
  //   { hid: 'description', name: 'description', content: '...' }
  // ],
  // link: [
  //   { rel: 'icon', type: 'image/x-con', href: 'favicon.ico' },
  // ]
  ,
  script: [
    {
      hid: "rzpay",
      src:
        "https://checkout.razorpay.com/v1/checkout.js",
      defer: true
    }
  ]
    
  },
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/apollo',
    '@nuxtjs/axios'
  ],
  
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-client.js'
      //{
        //httpEndpoint: 'http://localhost:5000/graphql',
        //'https://nodejs-express-server-dev-q2jjx.ondigitalocean.app/graphql'
        //'https://nodejs-express-server-dev-q2jjx.ondigitalocean.app/graphql',
        //http://localhost:5000/graphql
        //https://nodejs-express-server-dev-q2jjx.ondigitalocean.app/graphql/
      //},
      
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }

  },
   server:{
    port:8080,
    host: '0.0.0.0'
  },
    babel: {
      compact: true,
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  }


