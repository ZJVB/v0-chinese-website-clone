<template>
  <main>
    <PageBanner
      tag="增值服务"
      title="个性化增值处理"
      description="贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理。"
      image="/images/banner-value-added.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/service-value-added.jpg" alt="增值服务" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              灵活的增值服务
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              根据您的业务需求提供各类个性化增值服务，从简单的贴标换标到复杂的组合装和促销包装，满足不同场景需求。
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
        <UIcon name="i-lucide-wrench" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">定制您的增值服务</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          告诉我们您的需求，我们为您提供个性化的增值服务方案。
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
useSeoMeta({ title: '增值服务 - Cube海外仓', description: '贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理。' })

const features = [
  { text: '贴标与换标服务', icon: 'i-lucide-tag' },
  { text: '重新包装', icon: 'i-lucide-package' },
  { text: '组合装与套装组装', icon: 'i-lucide-boxes' },
  { text: '促销包装定制', icon: 'i-lucide-gift' },
  { text: '质量抽检', icon: 'i-lucide-clipboard-check' },
  { text: '产品拍照服务', icon: 'i-lucide-camera' },
]
</script>
