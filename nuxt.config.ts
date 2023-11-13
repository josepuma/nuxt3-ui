// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    resolve('./assets/css/global.css')
  ],
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
