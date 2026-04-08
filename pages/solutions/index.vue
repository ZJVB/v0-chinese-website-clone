<template>
  <main>
    <PageBanner
      tag="SOLUTIONS"
      title="解决方案"
      description="根据您的业务模式、订单结构和产品类型，选择更适合的英国本地物流方案"
      image="/images/banner-solutions.jpg"
    />

    <!-- Featured Solution -->
    <section class="py-16 lg:py-24 bg-[#f8fafc]">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left - Image -->
          <div class="relative h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <img
              :src="featuredSolution.image"
              :alt="featuredSolution.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <!-- Right - Content -->
          <div>
            <p class="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
              重点推荐
            </p>
            <h2 class="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
              {{ featuredSolution.title }}
            </h2>
            <p class="mb-4 text-lg text-primary-500 font-medium">
              {{ featuredSolution.subtitle }}
            </p>
            <p class="mb-6 text-gray-500 leading-relaxed">
              {{ featuredSolution.description }}
            </p>

            <!-- Features -->
            <div class="mb-8 grid grid-cols-2 gap-3">
              <div v-for="feature in featuredSolution.features" :key="feature" class="flex items-center gap-2">
                <UIcon name="i-lucide-check-circle-2" class="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span class="text-sm text-gray-900">{{ feature }}</span>
              </div>
            </div>

            <UButton to="/solutions/fba" size="lg" class="group">
              了解 FBA 服务
              <UIcon name="i-lucide-arrow-right" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Solutions -->
    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="mb-12 text-center">
          <p class="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
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
              <img
                :src="item.image"
                :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <!-- Content Below -->
            <div class="p-6 flex-1 flex flex-col">
              <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10">
                <UIcon :name="item.icon" class="h-5 w-5 text-primary-500" />
              </div>
              <h3 class="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500 line-clamp-2 flex-1">
                {{ item.description }}
              </p>
              <div class="mt-4 flex items-center gap-1 text-sm font-medium text-primary-500">
                了解详情
                <UIcon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <UButton to="/contact" size="lg">
            联系我们咨询
            <UIcon name="i-lucide-arrow-right" class="ml-2 h-4 w-4" />
          </UButton>
          <UButton to="/about" variant="outline" size="lg">
            了解我们
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '解决方案 - Cube海外仓',
  description: 'Cube海外仓 提供 FBA 备货与转运、D2C 一件代发、B2B 零售分销、退货处理等英国本地物流解决方案。',
})

const featuredSolution = {
  title: 'FBA 备货与转运',
  subtitle: '灵活高效的库存管理',
  description: '支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存，提升发货效率和库存流转速度。',
  href: '/solutions/fba',
  image: '/images/service-fba.jpg',
  features: [
    '英国本地前置仓备货',
    '灵活的中转分拨',
    '分批补货与退件处理',
    '智能库存管理',
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
