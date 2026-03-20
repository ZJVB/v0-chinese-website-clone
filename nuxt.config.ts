export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxt/ui', '@nuxt/image'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'AZ World Trading - 英国海外仓储与物流服务',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AZ World Trading 提供专业的英国海外仓储、物流配送、电商代发货等一站式服务。HMRC认证，专业团队，高效运营。' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  
  compatibilityDate: '2024-11-01',
})
