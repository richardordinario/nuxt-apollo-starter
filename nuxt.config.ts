// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/css/app.css'
  ],
  devtools: { enabled: false },
  build: {
    transpile: [
      'vuetify',
      'fsevents'
    ],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/apollo',
    '@sidebase/nuxt-auth',
    'nuxt-graphql-client'
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  'graphql-client': {
    clients: {
      default: {
        host: process.env.APP_API_URL || 'http://127.0.0.1/graphql',
        token: {
          type: 'Bearer',
          name: 'Authorization',
          // value: 'session-token',
        },
        retainToken: true,
      },
    },
    tokenStorage: {
      name: '__session',
      mode: 'cookie', // default
      cookieOptions: {
        path: '/',
        secure: false, // defaults to `process.env.NODE_ENV === 'production'`
        httpOnly: false, // Only accessible via HTTP(S)
        maxAge: 60 * 60 * 24 * 5 // 5 days
      },
      
    },
   
  },

  // apollo: {
  //   autoImports: true,
  //   authType: 'Bearer',
  //   authHeader: 'Authorization',
  //   tokenStorage: 'cookie',
  //   // proxyCookies: true,
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://127.0.0.1/graphql'
  //     }
  //   },
  // },

  auth: {
    // isEnabled: true,
    globalAppMiddleware: true,
    baseURL: process.env.APP_API_URL,
    origin: process.env.APP_ORIGIN,
    basePath: '/api/auth',
    provider: {
      type: 'authjs'
    }
  },

  runtimeConfig: {
    APP_SECRET: process.env.APP_SECRET,
    public: {
      GQL_HOST: process.env.GQL_HOST // overwritten by process.env.GQL_HOST
    }
  }

})
