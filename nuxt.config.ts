export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
  ],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Cube海外仓 - 英国本地仓储与履约解决方案',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '为跨境品牌、平台卖家及分销客户提供一站式英国本地仓储、履约与配送支持' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // 主题色配置
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  compatibilityDate: '2024-11-01',
})
