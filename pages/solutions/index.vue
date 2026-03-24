<script setup lang="ts">
useHead({
  title: '解决方案 - Cube海外仓',
  meta: [
    { name: 'description', content: '面向不同业务需求的英国本地仓储与履约解决方案' }
  ]
})

const solutions = [
  {
    icon: 'i-lucide-store',
    title: 'TEMU 官方认证仓',
    description: '作为 TEMU 官方认证的英国本地仓，为平台卖家提供合规、高效的一件代发服务，履约表现持续位居前列。',
    link: '/solutions/temu',
    image: '/images/hero-temu.jpg',
  },
  {
    icon: 'i-lucide-package',
    title: 'FBA 备货与转运',
    description: '为亚马逊卖家提供英国本地 FBA 备货、中转与标签服务，灵活应对库存需求，提升补货效率。',
    link: '/solutions/fba',
    image: '/images/service-fba.jpg',
  },
  {
    icon: 'i-lucide-truck',
    title: 'D2C 一件代发',
    description: '独立站、电商平台订单的本地履约与配送，缩短配送时效，提升消费者购物体验。',
    link: '/solutions/d2c',
    image: '/images/service-d2c.jpg',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'B2B 零售分销',
    description: '面向线下零售商、批发客户提供大宗订单处理与配送服务，支持多种交付方式。',
    link: '/solutions/b2b',
    image: '/images/service-b2b.jpg',
  },
  {
    icon: 'i-lucide-refresh-ccw',
    title: '售后退货处理',
    description: '英国本地退货收件、质检、重新入库或退运，保障售后服务质量，降低逆向物流成本。',
    link: '/solutions/returns',
    image: '/images/service-returns.jpg',
  },
  {
    icon: 'i-lucide-settings',
    title: '增值服务',
    description: '产品组套、贴标换标、质检翻新等增值服务，满足多样化业务需求，提升产品竞争力。',
    link: '/solutions/value-added',
    image: '/images/service-value-added.jpg',
  },
]
</script>

<template>
  <div>
    <PageBanner 
      title="解决方案" 
      subtitle="面向不同业务需求的英国本地仓储与履约服务" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="solution in solutions"
            :key="solution.title"
            :to="solution.link"
            class="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="solution.image" 
                :alt="solution.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center gap-2 text-white">
                  <UIcon :name="solution.icon" class="h-5 w-5" />
                  <h3 class="font-semibold">{{ solution.title }}</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ solution.description }}</p>
              <span class="text-blue-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                了解详情
                <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
