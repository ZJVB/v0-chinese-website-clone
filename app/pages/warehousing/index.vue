<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '仓储与派送 - Cube海外仓',
  description: '覆盖英国全境的仓储网络与配送服务',
})
</script>

<template>
  <div class="pt-20">
    <PageBanner
      tag="WAREHOUSING"
      title="仓储与派送"
      description="覆盖英国全境的仓储网络与高效配送服务"
      image="/images/banner-warehousing.jpg"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            仓储网络
          </span>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            英国本地仓储设施
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            总部位于曼彻斯特，拥有超过 20,000 平方米的仓储设施，覆盖英国主要物流枢纽
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl font-bold text-orange-500 mb-2">20,000㎡+</div>
            <div class="text-gray-600">仓储面积</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div class="text-gray-600">安保监控</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl font-bold text-orange-500 mb-2">20,000+</div>
            <div class="text-gray-600">日处理订单</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl font-bold text-orange-500 mb-2">99.5%+</div>
            <div class="text-gray-600">准确率</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-[#f8fafc]">
      <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 class="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
          需要了解更多仓储服务？
        </h2>
        <p class="mb-8 text-gray-500">
          联系我们获取详细的仓储与配送方案
        </p>
        <UButton to="/contact" size="lg" color="primary">
          联系我们
          <UIcon name="i-lucide-arrow-right" class="size-4 ml-2" />
        </UButton>
      </div>
    </section>
  </div>
</template>
