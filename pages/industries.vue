<script setup lang="ts">
useHead({
  title: '行业解决方案 - Cube海外仓',
  meta: [
    { name: 'description', content: '针对不同行业的英国本地仓储与履约解决方案' }
  ]
})

const industries = [
  {
    icon: 'i-lucide-shirt',
    title: '服装鞋帽',
    description: '支持多 SKU 管理、季节性备货与退换货处理，满足时尚行业快速周转需求。',
  },
  {
    icon: 'i-lucide-smartphone',
    title: '消费电子',
    description: '专业的电子产品存储环境与包装要求，确保产品安全交付。',
  },
  {
    icon: 'i-lucide-home',
    title: '家居用品',
    description: '大件物品的专业仓储与配送方案，支持白手套送装服务。',
  },
  {
    icon: 'i-lucide-sparkles',
    title: '美妆个护',
    description: '温控存储、批次管理与效期追踪，保障美妆产品品质。',
  },
  {
    icon: 'i-lucide-dumbbell',
    title: '运动户外',
    description: '灵活的库存管理与快速补货，支持运动品牌的季节性需求。',
  },
  {
    icon: 'i-lucide-car',
    title: '汽车配件',
    description: '专业的配件存储与分拣，支持 B2B 与 B2C 双渠道配送。',
  },
]
</script>

<template>
  <div>
    <PageBanner 
      title="行业解决方案" 
      subtitle="针对不同行业特点的定制化仓储与履约服务" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="industry in industries"
            :key="industry.title"
            class="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
          >
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <UIcon :name="industry.icon" class="h-6 w-6" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ industry.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
