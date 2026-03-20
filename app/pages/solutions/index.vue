<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '解决方案 - Cube海外仓',
  description: 'Cube海外仓 提供 TEMU 官方认证仓、FBA 备货与转运、D2C 一件代发、B2B 零售分销、退货处理等英国本地物流解决方案。',
})

const featuredSolution = {
  icon: 'i-lucide-badge-check',
  title: 'TEMU 官方认证仓',
  subtitle: '履约表现持续位居前列',
  description: '作为 TEMU 官方认证仓，Cube海外仓在多个周期的履约数据评估中持续保持优异表现。为 TEMU 平台卖家提供标准化仓储、订单履约与本地发货支持。',
  href: '/solutions/temu',
  image: '/images/hero-temu.jpg',
  features: [
    '标准化作业流程',
    '稳定的订单处理能力',
    '英国本地履约资源',
    '高效的仓配支持',
  ],
}

const solutions = [
  {
    icon: 'i-lucide-package',
    title: 'FBA 备货与转运',
    description: '支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存。',
    href: '/solutions/fba',
    image: '/images/service-fba.jpg',
  },
  {
    icon: 'i-lucide-shopping-bag',
    title: 'D2C 一件代发',
    description: '支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。',
    href: '/solutions/d2c',
    image: '/images/service-d2c.jpg',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'B2B 零售分销',
    description: '适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。',
    href: '/solutions/b2b',
    image: '/images/service-b2b.jpg',
  },
  {
    icon: 'i-lucide-rotate-ccw',
    title: '退货与售后支持',
    description: '提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。',
    href: '/solutions/returns',
    image: '/images/service-returns.jpg',
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: '检测翻新与二次销售',
    description: '外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。',
    href: '/solutions/refurbishment',
    image: '/images/service-refurbishment.jpg',
  },
  {
    icon: 'i-lucide-wrench',
    title: '增值服务',
    description: '贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理。',
    href: '/solutions/value-added',
    image: '/images/service-value-added.jpg',
  },
]
</script>

<template>
  <div class="pt-20">
    <PageBanner
      tag="SOLUTIONS"
      title="解决方案"
      description="根据您的业务模式、订单结构和产品类型，选择更适合的英国本地物流方案"
      image="/images/banner-solutions.jpg"
    />

    <!-- Featured Solution - TEMU -->
    <section class="py-16 lg:py-24 bg-[#f8fafc]">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left - Image -->
          <div class="relative h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <NuxtImg
              :src="featuredSolution.image"
              :alt="featuredSolution.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              <UIcon name="i-lucide-badge-check" class="size-4" />
              官方认证仓
            </div>
          </div>

          <!-- Right - Content -->
          <div>
            <p class="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
              重点推荐
            </p>
            <h2 class="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
              {{ featuredSolution.title }}
            </h2>
            <p class="mb-4 text-lg text-orange-500 font-medium">
              {{ featuredSolution.subtitle }}
            </p>
            <p class="mb-6 text-gray-500 leading-relaxed">
              {{ featuredSolution.description }}
            </p>

            <!-- Features -->
            <div class="mb-8 grid grid-cols-2 gap-3">
              <div v-for="feature in featuredSolution.features" :key="feature" class="flex items-center gap-2">
                <UIcon name="i-lucide-check-circle-2" class="size-5 text-orange-500 flex-shrink-0" />
                <span class="text-sm text-gray-900">{{ feature }}</span>
              </div>
            </div>

            <UButton :to="featuredSolution.href" size="lg" color="primary" class="group">
              了解 TEMU 服务
              <UIcon name="i-lucide-arrow-right" class="size-4 ml-2 transition-transform group-hover:translate-x-1" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Solutions -->
    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="mb-12 text-center">
          <p class="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
            MORE SOLUTIONS
          </p>
          <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl">
            更多服务方案
          </h2>
          <p class="mt-3 text-gray-500 max-w-2xl mx-auto">
            从仓储、履约、配送到售后的全链路服务支持
          </p>
        </div>

        <!-- Solutions Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in solutions"
            :key="item.title"
            :to="item.href"
            class="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_1px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
          >
            <!-- Image on Top -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <!-- Content Below -->
            <div class="p-6 flex-1 flex flex-col">
              <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <UIcon :name="item.icon" class="size-5 text-orange-500" />
              </div>
              <h3 class="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500 line-clamp-2 flex-1">
                {{ item.description }}
              </p>
              <div class="mt-4 flex items-center gap-1 text-sm font-medium text-orange-500">
                了解详情
                <UIcon name="i-lucide-arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-20 bg-[#f8fafc]">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 class="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
          不确定哪种方案适合您？
        </h2>
        <p class="mb-8 text-gray-500 max-w-2xl mx-auto">
          我们的团队可以根据您的业务模式、订单结构和产品类型，为您推荐最合适的解决方案
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="lg" color="primary">
            联系我们咨询
            <UIcon name="i-lucide-arrow-right" class="size-4 ml-2" />
          </UButton>
          <UButton to="/about" variant="outline" size="lg">
            了解我们
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
