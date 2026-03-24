<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide-store',
    title: 'TEMU 官方认证仓',
    description: '作为 TEMU 官方认证的英国本地仓，Cube海外仓为平台卖家提供合规、高效的一件代发服务。',
    link: '/solutions/temu',
  },
  {
    icon: 'i-lucide-package',
    title: 'FBA 备货与转运',
    description: '为亚马逊卖家提供英国本地 FBA 备货、中转与标签服务，灵活应对库存需求。',
    link: '/solutions/fba',
  },
  {
    icon: 'i-lucide-truck',
    title: 'D2C 一件代发',
    description: '独立站、电商平台订单的本地履约与配送，提升消费者购物体验。',
    link: '/solutions/d2c',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'B2B 零售分销',
    description: '面向线下零售商、批发客户提供大宗订单处理与配送服务。',
    link: '/solutions/b2b',
  },
  {
    icon: 'i-lucide-refresh-ccw',
    title: '售后退货处理',
    description: '英国本地退货收件、质检、重新入库或退运，保障售后服务质量。',
    link: '/solutions/returns',
  },
  {
    icon: 'i-lucide-settings',
    title: '增值服务',
    description: '产品组套、贴标换标、质检翻新等增值服务，满足多样化业务需求。',
    link: '/solutions/value-added',
  },
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">我们的服务</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">为跨境卖家提供全方位的英国本地仓储与履约解决方案</p>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="service.link"
          class="group p-6 rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1"
        >
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
            <UIcon :name="service.icon" class="h-6 w-6" />
          </div>
          <h3 class="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
