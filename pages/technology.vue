<template>
  <main>
    <PageBanner
      tag="TECHNOLOGY"
      title="技术支持"
      description="先进的仓储管理系统（WMS）与自动化技术，为您提供高效、透明的仓储物流体验"
      image="/images/banner-technology.jpg"
    />

    <!-- WMS Features -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
            仓储管理系统
          </span>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Cube <span class="text-primary-500">WMS</span> 系统
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            自主研发的仓储管理系统，实现订单、库存、物流的全流程数字化管理
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in wmsFeatures" :key="feature.title" class="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 transition-all duration-300 group-hover:bg-primary-500 group-hover:scale-110">
              <UIcon :name="feature.icon" class="h-6 w-6 text-primary-500 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-500 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- API Integration -->
    <section class="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">开放集成</span>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">全平台 API 无缝对接</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            提供标准化 RESTful API 接口，支持主流电商平台、快递服务商和 ERP 系统对接，实现订单自动同步、物流信息实时更新、库存数据多端一致。
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <UIcon name="i-lucide-monitor" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">体验 Cube WMS 系统</h2>
        <p class="text-gray-500 mb-8">
          预约系统演示，了解 Cube WMS 如何帮助您提升仓储运营效率、降低运营成本、优化库存管理。
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2">
            预约演示
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </UButton>
          <UButton to="/solutions" variant="outline" size="lg">
            查看解决方案
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '技术支持 - Cube海外仓',
  description: '先进的仓储管理系统（WMS）与自动化技术，为您提供高效、透明的仓储物流体验。',
})

const wmsFeatures = [
  { icon: 'i-lucide-layers', title: '多渠道订单整合', description: '支持 Shopify、Amazon、eBay、TikTok Shop 等多平台订单自动同步' },
  { icon: 'i-lucide-package', title: '智能库存管理', description: '实时库存监控、自动补货提醒、批次效期管理' },
  { icon: 'i-lucide-scan', title: '条码扫描作业', description: '入库、拣货、打包全流程条码扫描，确保准确率' },
  { icon: 'i-lucide-truck', title: '物流渠道对接', description: '对接 Royal Mail、DPD、Evri 等多家物流商，智能推荐最优渠道' },
  { icon: 'i-lucide-bar-chart-2', title: '数据报表分析', description: '订单趋势、库存周转、物流时效等多维度数据分析' },
  { icon: 'i-lucide-shield', title: '安全与权限', description: '多角色权限管理、操作日志追踪、数据安全保障' },
]
</script>
