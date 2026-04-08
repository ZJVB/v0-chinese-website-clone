<template>
  <section class="bg-[#f5f7fa]">
    <!-- Section Header -->
    <div class="py-12 lg:py-16 text-center">
      <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
        核心服务
      </span>
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        我们的<span class="text-primary-500">服务</span>
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto px-4">
        专注于英国本地仓储与履约，为不同平台和业务模式提供稳定高效的物流解决方案
      </p>
    </div>

    <!-- Service Cards -->
    <div class="group/container relative w-full h-[400px] lg:h-[500px] overflow-hidden">
      <div class="absolute inset-0 flex">
        <NuxtLink
          v-for="(service, index) in services"
          :key="service.title"
          :to="service.href"
          class="group/card relative flex-1 h-full overflow-hidden transition-all duration-500 ease-out hover:flex-[2.5] hover:z-50 group-hover/container:[&:not(:hover)]:flex-[0.7]"
          :style="{
            zIndex: services.length - index,
            marginLeft: index > 0 ? '-30px' : '0',
          }"
        >
          <!-- Card Shadow -->
          <div class="absolute inset-0 shadow-[-16px_0_40px_rgba(0,0,0,0.6)] z-0" />

          <img
            :src="service.image"
            :alt="service.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />

          <!-- Shadows -->
          <div v-if="index > 0" class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
          <div v-if="index > 0" class="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-black/60 to-transparent z-10 pointer-events-none" />
          <div v-if="index > 0" class="absolute left-0 bottom-0 w-40 h-40 bg-gradient-to-tr from-black/60 to-transparent z-10 pointer-events-none" />
          <div class="absolute right-0 top-0 bottom-0 w-[2px] bg-white/40 z-10 pointer-events-none" />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover/card:opacity-70" />

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-10">
            <div class="flex items-center justify-end gap-3">
              <div class="text-right">
                <h3 class="text-white font-bold text-sm lg:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap">
                  {{ service.title }}
                </h3>
                <p class="text-xs lg:text-sm text-white/70 line-clamp-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  {{ service.description }}
                </p>
              </div>
              <div class="w-7 h-7 lg:w-8 lg:h-8 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/card:bg-primary-500 group-hover/card:scale-110 shadow-lg">
                <UIcon name="i-lucide-arrow-right" class="h-3 w-3 lg:h-4 lg:w-4 text-white" />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="py-12 text-center">
      <UButton
        to="/solutions"
        variant="outline"
        size="lg"
        class="gap-2 rounded-full px-8 border-2 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
      >
        查看全部方案
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'FBA 备货与转运',
    description: '英国本地前置仓备货、中转分拨、分批补货',
    image: '/images/service-fba.jpg',
    href: '/solutions/fba',
  },
  {
    title: 'D2C 一件代发',
    description: '独立站及多平台订单履约，本地快速发货',
    image: '/images/service-d2c.jpg',
    href: '/solutions/d2c',
  },
  {
    title: 'B2B 零售分销',
    description: '整箱整托、门店补货、批量订单配送',
    image: '/images/service-b2b.jpg',
    href: '/solutions/b2b',
  },
  {
    title: '退货与售后',
    description: '退件接收、检查分类、后续履约处理',
    image: '/images/service-returns.jpg',
    href: '/solutions/returns',
  },
  {
    title: 'WMS 与系统对接',
    description: '库存、订单与物流可视化管理',
    image: '/images/service-wms.jpg',
    href: '/technology',
  },
]
</script>
