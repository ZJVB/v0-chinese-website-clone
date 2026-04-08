<template>
  <main>
    <PageBanner
      tag="检测翻新"
      title="产品检测与二次销售"
      description="外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。"
      image="/images/banner-refurbishment.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/service-refurbishment.jpg" alt="检测翻新服务" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              专业检测翻新服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              为退货产品和瑕疵品提供专业的检测、清洁、翻新和重新包装服务，最大化产品价值回收，支持二次销售。
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
        <UIcon name="i-lucide-refresh-cw" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">最大化产品价值回收</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          将退货和瑕疵品转化为可销售库存，降低损失，提升利润。
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
useSeoMeta({ title: '检测翻新与二次销售 - Cube海外仓', description: '外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。' })

const features = [
  { text: '外观与功能检测', icon: 'i-lucide-search-check' },
  { text: '清洁整理服务', icon: 'i-lucide-sparkles' },
  { text: '重新包装', icon: 'i-lucide-package' },
  { text: '配件补齐', icon: 'i-lucide-puzzle' },
  { text: '分类分级', icon: 'i-lucide-list-ordered' },
  { text: '二次销售渠道对接', icon: 'i-lucide-shopping-bag' },
]
</script>
