<script setup lang="ts">
useHead({
  title: '仓储与派送 - Cube海外仓',
  meta: [
    { name: 'description', content: 'Cube海外仓的仓储网络与配送服务' }
  ]
})

const services = [
  {
    icon: 'i-lucide-warehouse',
    title: '仓储网络',
    description: '曼彻斯特 50,000+ 平方英尺现代化仓库，地理位置优越，覆盖全英高效配送。',
    link: '/warehousing/network',
  },
  {
    icon: 'i-lucide-clock',
    title: '全英配送时效',
    description: '主要城市次日达，全英 2-3 日送达，偏远地区 3-5 日送达的高效履约网络。',
    link: '/warehousing/delivery',
  },
  {
    icon: 'i-lucide-truck',
    title: '物流渠道',
    description: '与 Royal Mail、DPD、Evri 等主流物流渠道深度合作，提供多样化配送选择。',
    link: '/warehousing/logistics',
  },
  {
    icon: 'i-lucide-container',
    title: '货运与特种物流',
    description: '大件货物、特种商品的专业仓储与配送方案，满足特殊业务需求。',
    link: '/warehousing/freight',
  },
]
</script>

<template>
  <div>
    <PageBanner 
      title="仓储与派送" 
      subtitle="专业的英国本地仓储网络与高效配送服务" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            :to="service.link"
            class="group p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
          >
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <UIcon :name="service.icon" class="h-6 w-6" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{{ service.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ service.description }}</p>
            <span class="text-blue-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              了解详情
              <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
