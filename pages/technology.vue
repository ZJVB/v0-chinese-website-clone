<script setup lang="ts">
useHead({
  title: '技术支持 - Cube海外仓',
  meta: [
    { name: 'description', content: 'Cube海外仓的技术能力与系统集成支持' }
  ]
})

const features = [
  {
    icon: 'i-lucide-layout-dashboard',
    title: 'WMS 仓储管理系统',
    description: '自研仓储管理系统，支持实时库存查询、订单追踪、报表分析等功能。',
  },
  {
    icon: 'i-lucide-plug',
    title: 'API 对接',
    description: '开放 API 接口，支持与主流电商平台、ERP 系统无缝对接。',
  },
  {
    icon: 'i-lucide-scan',
    title: '条码管理',
    description: '全流程条码扫描，确保入库、出库、盘点等环节准确无误。',
  },
  {
    icon: 'i-lucide-bar-chart',
    title: '数据报表',
    description: '多维度数据分析报表，助力业务决策与库存优化。',
  },
]

const integrations = [
  'Shopify',
  'WooCommerce',
  'Amazon',
  'eBay',
  'TEMU',
  '速卖通',
  '独立站',
  'ERP 系统',
]
</script>

<template>
  <div>
    <PageBanner 
      title="技术支持" 
      subtitle="强大的系统能力，为您的业务保驾护航" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-xl border border-gray-100 bg-white shadow-sm"
          >
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <UIcon :name="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">支持对接平台</h2>
          <p class="text-gray-600">与主流电商平台和系统无缝集成</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="platform in integrations"
            :key="platform"
            class="px-6 py-3 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700"
          >
            {{ platform }}
          </div>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
