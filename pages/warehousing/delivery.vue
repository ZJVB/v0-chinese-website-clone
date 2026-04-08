<template>
  <main>
    <PageBanner
      tag="配送时效"
      title="全英配送时效"
      description="英国主要区域本地配送支持，标准配送、次日达及不同服务等级安排。"
      image="/images/banner-delivery.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/warehousing-delivery.jpg" alt="配送时效" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              灵活的配送选项
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              根据您的业务需求，提供多种配送时效选择，从标准配送到次日达，满足不同场景的配送需求。
            </p>
            <ul class="space-y-3">
              <li v-for="item in features" :key="item.text" class="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-primary-500/5 hover:shadow-md hover:translate-x-2">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 shrink-0 transition-all duration-300 group-hover:bg-primary-500 group-hover:scale-110">
                  <UIcon :name="item.icon" class="h-5 w-5 text-primary-500 transition-colors duration-300 group-hover:text-white" />
                </div>
                <span class="text-gray-900 font-medium transition-colors duration-300 group-hover:text-primary-500">{{ item.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 lg:py-20 border-t border-gray-100">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <UIcon name="i-lucide-clock" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">优化您的配送体验</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          联系我们了解更多配送时效和服务等级选项。
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2">立即咨询 <UIcon name="i-lucide-arrow-right" class="h-4 w-4" /></UButton>
          <UButton to="/warehousing" variant="outline" size="lg">返回仓储服务</UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({ title: '全英配送时效 - Cube海外仓', description: '英国主要区域本地配送支持，标准配送、次日达及不同服务等级安排。' })

const features = [
  { text: '次日达服务', icon: 'i-lucide-zap' },
  { text: '标准 2-3 日配送', icon: 'i-lucide-truck' },
  { text: '经济型配送选项', icon: 'i-lucide-piggy-bank' },
  { text: '预约送货服务', icon: 'i-lucide-calendar' },
  { text: '实时物流追踪', icon: 'i-lucide-map-pin' },
  { text: '签收确认服务', icon: 'i-lucide-check-circle' },
]
</script>
