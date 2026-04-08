<template>
  <main>
    <PageBanner
      tag="退货与售后"
      title="高效退货处理支持"
      description="提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。"
      image="/images/banner-returns.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/service-returns.jpg" alt="退货与售后服务" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              专业退货处理服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              为跨境卖家提供英国本地退货处理服务。从退件接收、质检分类到后续处理，帮助您降低退货损失，提升客户满意度。
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
        <UIcon name="i-lucide-rotate-ccw" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">优化您的退货流程</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          让退货不再成为负担，将退件转化为可再销售的库存资源。
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
useSeoMeta({ title: '退货与售后支持 - Cube海外仓', description: '提供退件接收、检查、分类处理与后续履约支持。' })

const features = [
  { text: '退件接收与登记', icon: 'i-lucide-package-check' },
  { text: '外观与功能检测', icon: 'i-lucide-search' },
  { text: '分类分级处理', icon: 'i-lucide-layers' },
  { text: '重新包装上架', icon: 'i-lucide-package' },
  { text: '二次销售支持', icon: 'i-lucide-shopping-cart' },
  { text: '退货数据报告', icon: 'i-lucide-bar-chart-2' },
]
</script>
