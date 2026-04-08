<template>
  <main>
    <PageBanner
      tag="NEWS"
      title="新闻动态"
      description="了解 Cube 海外仓的最新动态、行业资讯和跨境电商物流趋势"
      image="/images/banner-news.jpg"
    />

    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="news in newsList" :key="news.title" class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="relative h-48 overflow-hidden">
              <img :src="news.image" :alt="news.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-medium">
                {{ news.category }}
              </div>
            </div>
            <div class="p-6">
              <p class="text-xs text-gray-400 mb-2">{{ news.date }}</p>
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">{{ news.title }}</h3>
              <p class="text-gray-500 text-sm line-clamp-2">{{ news.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '新闻动态 - Cube海外仓',
  description: '了解 Cube 海外仓的最新动态、行业资讯和跨境电商物流趋势。',
})

const newsList = [
  {
    title: 'Cube海外仓仓储面积扩展至20,000平方米',
    excerpt: '为满足日益增长的客户需求，Cube海外仓在曼彻斯特的仓储设施已扩展至20,000平方米...',
    date: '2026-03-15',
    category: '公司动态',
    image: '/images/timeline-2026.jpg',
  },
  {
    title: '跨境电商物流趋势：本地化履约成为关键',
    excerpt: '随着消费者对配送速度要求的提高，本地化仓储和履约正在成为跨境电商的核心竞争力...',
    date: '2026-02-28',
    category: '行业资讯',
    image: '/images/hero-warehouse.jpg',
  },
  {
    title: 'Cube WMS 系统升级，支持更多平台对接',
    excerpt: '最新版本的 Cube WMS 系统现已支持 TikTok Shop、Shopify 等更多电商平台的自动订单同步...',
    date: '2026-02-10',
    category: '产品更新',
    image: '/images/service-wms.jpg',
  },
]
</script>
