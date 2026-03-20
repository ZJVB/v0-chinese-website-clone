<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '技术支持 - Cube海外仓',
  description: '先进的WMS仓储管理系统与自动化技术，实现库存、订单与物流可视化管理',
})

const features = [
  {
    icon: 'i-lucide-database',
    title: '库存管理',
    description: '实时库存监控、多仓库协同、库存预警与自动补货建议',
  },
  {
    icon: 'i-lucide-shopping-cart',
    title: '订单处理',
    description: '多平台订单同步、智能分拣调度、批量处理与优先级管理',
  },
  {
    icon: 'i-lucide-truck',
    title: '物流追踪',
    description: '全程物流可视化、多渠道配送管理、签收与异常处理',
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: '数据分析',
    description: '运营数据报表、库存周转分析、配送时效统计',
  },
  {
    icon: 'i-lucide-plug',
    title: 'API 对接',
    description: '支持主流电商平台、ERP/OMS 系统 API 标准对接',
  },
  {
    icon: 'i-lucide-shield-check',
    title: '安全保障',
    description: '数据加密存储、权限分级管理、操作日志审计',
  },
]
</script>

<template>
  <div class="pt-20">
    <PageBanner
      tag="TECHNOLOGY"
      title="技术支持"
      description="先进的WMS仓储管理系统与自动化技术，实现库存、订单与物流可视化管理"
      image="/images/banner-technology.jpg"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            WMS 系统
          </span>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            仓储管理系统功能
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            自主研发的仓储管理系统，实现从入库、存储、分拣、出库到配送的全流程数字化管理
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="feature in features"
            :key="feature.title"
            class="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110">
              <UIcon :name="feature.icon" class="size-7 text-orange-500 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-[#f8fafc]">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 class="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
          想了解更多技术细节？
        </h2>
        <p class="mb-8 text-gray-500">
          我们的技术团队可以为您详细介绍系统功能与对接方案
        </p>
        <UButton to="/contact" size="lg" color="primary">
          联系技术支持
          <UIcon name="i-lucide-arrow-right" class="size-4 ml-2" />
        </UButton>
      </div>
    </section>
  </div>
</template>
