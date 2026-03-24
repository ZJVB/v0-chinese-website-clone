<script setup lang="ts">
useHead({
  title: 'TEMU 官方认证仓 - Cube海外仓',
  meta: [
    { name: 'description', content: 'TEMU 官方认证的英国本地仓，为平台卖家提供高效合规的一件代发服务' }
  ]
})

const features = [
  { icon: 'i-lucide-badge-check', title: '官方认证', description: 'TEMU 官方认证的英国本地仓服务商' },
  { icon: 'i-lucide-zap', title: '快速履约', description: '订单当日处理，履约表现持续领先' },
  { icon: 'i-lucide-shield-check', title: '合规运营', description: 'HMRC 认可，确保合规入境与存储' },
  { icon: 'i-lucide-headphones', title: '专业支持', description: '中英双语团队，快速响应处理' },
]
</script>

<template>
  <div>
    <PageBanner 
      title="TEMU 官方认证仓" 
      subtitle="履约表现持续位居前列，为 TEMU 卖家提供更高效、更可靠的本地仓配支持" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">TEMU 卖家的首选仓储方案</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              作为 TEMU 官方认证的英国本地仓，Cube海外仓依托标准化作业流程、稳定的订单处理能力和英国本地履约资源，为 TEMU 卖家提供高效、合规的一件代发服务。
            </p>
            <p class="text-gray-600 leading-relaxed">
              我们的履约表现持续位居前列，帮助卖家提升店铺评分，获得更多平台流量支持。
            </p>
          </div>
          <div class="relative h-80 rounded-xl overflow-hidden">
            <img src="/images/hero-temu.jpg" alt="TEMU 官方认证仓" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="feature in features" :key="feature.title" class="p-6 bg-gray-50 rounded-xl text-center">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <UIcon :name="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
