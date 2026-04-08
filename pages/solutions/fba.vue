<template>
  <main>
    <!-- Hero Banner -->
    <PageBanner
      tag="FBA 备货与转运"
      title="灵活管理您的 FBA 库存"
      description="支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存，降低仓储成本，提高补货效率。"
      image="/images/banner-fba.jpg"
    />

    <!-- Main Content Section -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <!-- Left - Image -->
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/images/fba-warehouse.jpg"
                alt="Amazon FBA 备货转运 - FNSKU 贴标作业"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>
          <!-- Right - Text content -->
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              一站式 FBA 前置仓服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              Cube海外仓为亚马逊卖家提供英国本地 FBA 前置仓服务。通过本地备货、分批补货和灵活转运，帮助卖家优化库存周转，降低长期仓储费用，提高 FBA 补货效率。
            </p>
            <ul class="space-y-3">
              <li
                v-for="item in features"
                :key="item.text"
                class="group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary-500/5 hover:shadow-md hover:translate-x-2"
              >
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

    <!-- CTA Section -->
    <section class="bg-white py-16 lg:py-20 border-t border-gray-100">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <UIcon name="i-lucide-package" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          优化您的 FBA 库存管理
        </h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          无论是新品备货、分批补货还是退件处理，我们都能为您提供专业的 FBA 前置仓服务支持。
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
            立即咨询
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </UButton>
          <UButton to="/solutions" variant="outline" size="lg" class="transition-all duration-300 hover:scale-105 hover:shadow-md">
            查看全部方案
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'FBA 备货与转运服务 - Cube海外仓',
  description: '支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存。',
})

const features = [
  { text: '英国本地 FBA 备货仓支持', icon: 'i-lucide-warehouse' },
  { text: '临时仓储与库存缓冲', icon: 'i-lucide-clock' },
  { text: 'FNSKU 贴标与换标服务', icon: 'i-lucide-tag' },
  { text: '分批补货与转运安排', icon: 'i-lucide-truck' },
  { text: '退件回收与后续处理', icon: 'i-lucide-rotate-ccw' },
  { text: '库存管理与数据同步', icon: 'i-lucide-bar-chart-3' },
]
</script>
