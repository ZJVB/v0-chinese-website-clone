<template>
  <main>
    <PageBanner
      tag="仓储网络"
      title="英国本地仓储网络"
      description="英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。"
      image="/images/banner-network.jpg"
    />

    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/warehousing-network.jpg" alt="仓储网络" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              专业仓储设施
            </h2>
            <p class="text-gray-500 leading-relaxed mb-8">
              Cube海外仓在英国曼彻斯特等关键物流枢纽拥有超过 20,000 平方米的仓储设施，配备现代化的仓储管理系统和安全监控系统。
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
        <UIcon name="i-lucide-warehouse" class="mx-auto h-12 w-12 text-primary-500 mb-6" />
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">了解我们的仓储设施</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">
          欢迎预约参观我们的仓储设施，了解更多关于我们的服务能力。
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
useSeoMeta({ title: '仓储网络 - Cube海外仓', description: '英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。' })

const features = [
  { text: '20,000+ 平方米仓储面积', icon: 'i-lucide-maximize' },
  { text: '24/7 安保监控系统', icon: 'i-lucide-shield' },
  { text: '现代化 WMS 系统', icon: 'i-lucide-monitor' },
  { text: '灵活的库位管理', icon: 'i-lucide-grid-3x3' },
  { text: '温控存储区域', icon: 'i-lucide-thermometer' },
  { text: '高效的拣货系统', icon: 'i-lucide-scan-line' },
]
</script>
