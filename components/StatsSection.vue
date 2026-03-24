<script setup lang="ts">
const stats = [
  { value: '50,000+', label: '平方英尺仓储面积', suffix: '' },
  { value: '99.8', label: '订单处理准确率', suffix: '%' },
  { value: '24', label: '小时订单发出', suffix: 'h' },
  { value: '7', label: '天配送覆盖全英', suffix: '天' },
]
</script>

<template>
  <section class="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center"
        >
          <div class="mb-2 text-3xl font-bold text-blue-700 lg:text-4xl">
            {{ stat.value }}<span class="text-2xl">{{ stat.suffix }}</span>
          </div>
          <div class="text-sm text-gray-600 lg:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
