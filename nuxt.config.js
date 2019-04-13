const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '/fonts/frontmania-tape.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preload',
        href: '/fonts/GT-America-Mono-Light.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preload',
        href: '/fonts/GT-America-Mono-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/app.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/globalComponents', '~/plugins/portal'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-136311947-1',
        dev: false
      }
    ]
  ],

  purgeCSS: {
    whitelistPatterns: [/^bg-app-/, /^border-app-/]
  },

  styleResources: {
    scss: ['~/assets/scss/helpers.scss']
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
