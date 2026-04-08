<template>
  <main>
    <PageBanner
      tag="物流渠道"
      title="多物流渠道对接"
      description="多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。"
      image="/images/banner-logistics.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/warehousing-logistics.jpg" alt="物流渠道" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              多元化物流网络
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              与 Royal Mail、DPD、Evri、FedEx、UPS、DHL 等主流物流渠道建立合作，根据您的需求配置最优物流方案。
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
        <UIcon name="i-lucide-truck" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">选择最优物流方案</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          我们帮助您根据时效、成本和服务需求选择最合适的物流渠道。
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
useSeoMeta({ title: '物流渠道 - Cube海外仓', description: '多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。' })

const features = [
  { text: 'Royal Mail 合作', icon: 'i-lucide-mail' },
  { text: 'DPD / Evri 对接', icon: 'i-lucide-package' },
  { text: 'FedEx / UPS / DHL', icon: 'i-lucide-globe' },
  { text: '智能渠道推荐', icon: 'i-lucide-sparkles' },
  { text: '成本优化方案', icon: 'i-lucide-calculator' },
  { text: '统一物流追踪', icon: 'i-lucide-search' },
]
</script>
