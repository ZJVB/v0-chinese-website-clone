<template>
  <main>
    <PageBanner
      tag="B2B 零售分销"
      title="批量配送与门店补货"
      description="适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。"
      image="/images/banner-b2b.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/service-b2b.jpg" alt="B2B 零售分销服务" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              专业 B2B 配送服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              为零售商、分销商和品牌提供英国本地 B2B 配送服务。支持整箱整托配送、门店定时补货、预约送货等多种模式，满足不同业务场景需求。
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
        <UIcon name="i-lucide-building-2" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">优化您的 B2B 供应链</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          无论是零售补货还是批量分销，我们都能提供高效可靠的配送支持。
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
useSeoMeta({ title: 'B2B 零售分销 - Cube海外仓', description: '适用于整箱、整托、门店补货及批量订单配送场景。' })

const features = [
  { text: '整箱整托配送', icon: 'i-lucide-boxes' },
  { text: '门店定时补货', icon: 'i-lucide-store' },
  { text: '预约送货服务', icon: 'i-lucide-calendar' },
  { text: '签收回单管理', icon: 'i-lucide-file-check' },
  { text: '批量订单处理', icon: 'i-lucide-list-checks' },
  { text: '专业托盘配送', icon: 'i-lucide-truck' },
]
</script>
