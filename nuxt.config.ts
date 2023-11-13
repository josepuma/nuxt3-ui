// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'
import { $fetch } from 'ofetch'
import { version } from './package.json'
const { resolve } = createResolver(import.meta.url)
import svgLoader from 'vite-svg-loader'

const updateModule = defineNuxtModule({
  meta: {
    name: '@josepuma/ui-kit'
  },
  setup (_, nuxt) {
    if (nuxt.options.dev) {
      $fetch('https://registry.npmjs.org/@josepuma/ui-kit/latest').then((release) => {
        if (release.version > version) {
          logger.info(`A new version of Jose's Kit (v${release.version}) is available: https://github.com/josepuma/nuxt3-ui`)
        }
      }).catch(() => {})
    }
  }
})

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    resolve('./assets/css/main.css')
  ],
  modules: ['@nuxtjs/tailwindcss','@hypernym/nuxt-gsap', '@vueuse/nuxt', 'nuxt-icon', updateModule as any],
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
