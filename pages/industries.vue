<template>
  <main>
    <PageBanner
      tag="INDUSTRIES"
      title="行业解决方案"
      description="针对不同品类特性提供定制化仓储与履约方案，助力各行业品牌成功出海"
      image="/images/banner-industries.jpg"
    />

    <!-- Industries Grid -->
    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="industry in industries"
            :key="industry.title"
            :id="industry.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="relative h-48 overflow-hidden">
              <img :src="industry.image" :alt="industry.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">{{ industry.title }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-500 text-sm mb-4">{{ industry.description }}</p>
              <ul class="space-y-2">
                <li v-for="feature in industry.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-700">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-primary-500 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-[#f8fafc]">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">寻找适合您行业的解决方案？</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">联系我们，获取针对您品类的定制化仓储与履约方案</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2">立即咨询 <UIcon name="i-lucide-arrow-right" class="h-4 w-4" /></UButton>
          <UButton to="/solutions" variant="outline" size="lg">查看解决方案</UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '行业解决方案 - Cube海外仓',
  description: '针对不同品类特性提供定制化仓储与履约方案，助力各行业品牌成功出海。',
})

const industries = [
  {
    id: 'fashion',
    title: '时尚服饰',
    image: '/images/industry-fashion.jpg',
    description: '为服装、鞋帽、配饰品牌提供专业的仓储履约服务',
    features: ['SKU 精细化管理', '尺码颜色分拣', '退换货快速处理', '季节性库存管理'],
  },
  {
    id: 'energy',
    title: '新能源电池',
    image: '/images/industry-energy.jpg',
    description: '专业的电池类产品存储与运输解决方案',
    features: ['危险品合规存储', '温控环境管理', '专业包装处理', '合规运输渠道'],
  },
  {
    id: 'electronics',
    title: '消费电子',
    image: '/images/industry-electronics.jpg',
    description: '为电子产品提供安全高效的仓储履约服务',
    features: ['防静电存储环境', '序列号追踪', '功能检测服务', '安全包装方案'],
  },
  {
    id: 'home',
    title: '家居用品',
    image: '/images/industry-furniture.jpg',
    description: '大件家居产品的专业仓储与配送服务',
    features: ['大件产品存储', '组装服务', '预约送货', '入户安装对接'],
  },
  {
    id: 'health',
    title: '美妆健康',
    image: '/images/industry-beauty.jpg',
    description: '美妆、护肤、健康产品的专业仓储服务',
    features: ['效期管理', '批次追溯', '温控存储', '礼品包装'],
  },
  {
    id: 'sports',
    title: '运动户外',
    image: '/images/industry-electronics.jpg',
    description: '运动装备与户外用品的仓储履约方案',
    features: ['大型设备存储', '季节性管理', '配件组合', '专业包装'],
  },
]
</script>
