export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 333 // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Authentication Front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: '/js/core/popper.min.js',type: "text/javascript" },
      { src: '/js/core/bootstrap.min.js',type: "text/javascript" },
      { src: '/js/material-kit.min.js',type: "text/javascript" },
      { src: '/js/material-kit.js.map',type: "application/json" },
      { src: '/js/plugins/perfect-scrollbar.min.js',type: "text/javascript" },
      { src: '/js/plugins/countup.min.js',type: "text/javascript" },
      { src: '/js/plugins/choices.min.js',type: "text/javascript" },
      { src: '/js/plugins/prism.min.js',type: "text/javascript" },
      { src: '/js/plugins/highlight.min.js',type: "text/javascript" },
      { src: '/js/plugins/rellax.min.js',type: "text/javascript" },
      { src: '/js/plugins/tilt.min.js',type: "text/javascript" },
      { src: 'js/plugins/parallax.min.js',type: "text/javascript" },
      { src: 'js/plugins/flatpickr.min.js',type: "text/javascript" },
      { src: 'js/plugins/moment.min.js',type: "text/javascript" },
      { src: 'js/plugins/typedjs.js',type: "text/javascript" },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: '/css/nucleo-icons.css' },
      { rel: 'stylesheet', href: '/css/nucleo-svg.css' },
      { rel: 'stylesheet', href: '/css/material-kit.min.css' },
      { rel: 'application/json', href: '/css/material-kit.css.map' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.min.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-kinesis.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
