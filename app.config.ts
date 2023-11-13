export default defineAppConfig({
    myLayer: {
      name: 'jpumkit'
    }
  })
  
  declare module '@nuxt/schema' {
    interface AppConfigInput {
      myLayer?: {
        /** Project name */
        name?: string
      }
    }
  }