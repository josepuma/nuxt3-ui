// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@hypernym/nuxt-gsap', '@vueuse/nuxt'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
})