// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
  
  fonts: {
    families: [
      { name: 'Noto Sans SC', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },
  
  ui: {
    colorMode: false,
  },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Cube 海外仓 - 英国本地仓储与履约解决方案',
      meta: [
        { name: 'description', content: '为跨境品牌、平台卖家及分销客户提供一站式英国本地仓储、履约与配送支持。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
