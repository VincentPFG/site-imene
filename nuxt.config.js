export default {
  mode: 'universal',

  target: 'static',

  head: {
    titleTemplate: '%s - ' + 'Imane Boumekouez',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    htmlAttrs: { lang: 'fr' },
  },

  css: [],

  plugins: ['identity.client'].map((plugin) => '@/plugins/' + plugin),

  components: [
    '~/components/',
    { path: '~/components/snipcart/', prefix: 'sc' },
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],

  axios: {},

  content: {},

  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: require('./vuetify.theme'),
  },

  build: {},
}
