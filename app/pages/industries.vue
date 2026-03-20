<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '行业解决方案 - Cube海外仓',
  description: '针对不同行业品类特性提供定制化仓储与履约方案',
})

const industries = [
  {
    id: 'fashion',
    title: '时尚服饰',
    description: '为时尚服饰品牌提供专业的仓储、分拣、包装和配送服务，支持季节性库存管理和快速补货。',
    image: '/images/industry-fashion.jpg',
  },
  {
    id: 'energy',
    title: '新能源电池',
    description: '符合危险品存储规范的专业仓储设施，为新能源电池产品提供安全可靠的物流解决方案。',
    image: '/images/industry-energy.jpg',
  },
  {
    id: 'electronics',
    title: '消费电子',
    description: '针对消费电子产品的防静电存储、精细分拣和专业包装服务，确保产品安全送达。',
    image: '/images/industry-electronics.jpg',
  },
  {
    id: 'home',
    title: '家居用品',
    description: '支持大件家居产品的存储、组装和白手套配送服务，提升消费者购物体验。',
    image: '/images/industry-furniture.jpg',
  },
  {
    id: 'health',
    title: '美妆健康',
    description: '温控存储环境和精细化分拣服务，确保美妆健康产品的品质和安全。',
    image: '/images/industry-beauty.jpg',
  },
]
</script>

<template>
  <div class="pt-20">
    <PageBanner
      tag="INDUSTRIES"
      title="行业解决方案"
      description="针对不同品类特性提供定制化仓储与履约方案"
      image="/images/banner-industries.jpg"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="space-y-16">
          <div 
            v-for="(industry, index) in industries" 
            :key="industry.id"
            :id="industry.id"
            class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
          >
            <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
              <div class="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <NuxtImg
                  :src="industry.image"
                  :alt="industry.title"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
              <span class="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
                行业方案
              </span>
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {{ industry.title }}
              </h2>
              <p class="text-gray-500 leading-relaxed mb-6">
                {{ industry.description }}
              </p>
              <UButton to="/contact" color="primary" class="group">
                咨询方案
                <UIcon name="i-lucide-arrow-right" class="size-4 ml-2 transition-transform group-hover:translate-x-1" />
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
