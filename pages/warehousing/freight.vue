<template>
  <main>
    <PageBanner
      tag="货运物流"
      title="货运与特种物流"
      description="整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。"
      image="/images/banner-freight.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/warehousing-freight.jpg" alt="货运与特种物流" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              专业货运服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              提供整柜、拼箱、空运、铁路等多种国际运输方式，以及大件货物、电池类产品等特殊货物的专业处理服务。
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
        <UIcon name="i-lucide-ship" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">特殊货物运输咨询</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          有大件或特殊货物需要运输？联系我们获取专业方案。
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
useSeoMeta({ title: '货运与特种物流 - Cube海外仓', description: '整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。' })

const features = [
  { text: '整柜 / 拼箱运输', icon: 'i-lucide-container' },
  { text: '空运快速通道', icon: 'i-lucide-plane' },
  { text: '铁路运输方案', icon: 'i-lucide-train-front' },
  { text: '大件货物处理', icon: 'i-lucide-boxes' },
  { text: '电池类产品运输', icon: 'i-lucide-battery' },
  { text: '危险品专业处理', icon: 'i-lucide-alert-triangle' },
]
</script>
