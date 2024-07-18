// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  routeRules: {
    '/api-products/**': {
      proxy: { to: "https://frontapi.praguebest.cz/api-products/**", },
    }
  },

  modules: ["@nuxtjs/tailwindcss"]
})