// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/global.css'],
  modules: ['@nuxtjs/tailwindcss','@hypernym/nuxt-gsap', '@vueuse/nuxt', 'nuxt-icon'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  vite: {
    plugins: [
      svgLoader({})
    ]
  }
})
