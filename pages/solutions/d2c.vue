<template>
  <main>
    <PageBanner
      tag="D2C 一件代发"
      title="英国本地快速履约"
      description="支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。"
      image="/images/banner-d2c.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/service-d2c.jpg" alt="D2C 一件代发服务" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              一站式 D2C 履约服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              为独立站卖家和多平台商家提供英国本地一件代发服务。从订单接收、拣货打包到本地配送，全流程高效处理，帮助品牌提升英国市场的消费者体验。
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
        <UIcon name="i-lucide-shopping-bag" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">开启英国本地快速履约</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          让您的英国消费者享受更快的配送体验，提升品牌满意度和复购率。
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2">立即咨询 <UIcon name="i-lucide-arrow-right" class="h-4 w-4" /></UButton>
          <UButton to="/solutions" variant="outline" size="lg">查看全部方案</UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'D2C 一件代发 - Cube海外仓', description: '支持独立站和多平台订单履约，实现英国本地快速发货。' })

const features = [
  { text: '独立站订单对接', icon: 'i-lucide-globe' },
  { text: '多平台订单履约', icon: 'i-lucide-layers' },
  { text: '本地快速发货', icon: 'i-lucide-zap' },
  { text: '标准化包装服务', icon: 'i-lucide-package' },
  { text: '实时物流追踪', icon: 'i-lucide-map-pin' },
  { text: '售后退换支持', icon: 'i-lucide-refresh-cw' },
]
</script>
