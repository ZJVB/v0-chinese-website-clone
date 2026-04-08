<template>
  <section class="bg-white">
    <!-- Stats Banner -->
    <div class="flex flex-wrap lg:flex-nowrap">
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="flex w-1/2 lg:w-auto lg:flex-1"
      >
        <!-- Content area -->
        <div
          class="group flex-1 flex flex-col items-center justify-center py-6 lg:py-8 px-4 lg:px-8"
          :style="{ backgroundColor: index % 2 === 0 ? orangeColor : blueColor }"
        >
          <UIcon :name="stat.icon" class="h-6 w-6 lg:h-8 lg:w-8 text-white/90 mb-2 transition-transform duration-300 group-hover:scale-110" />
          <div class="text-2xl lg:text-3xl font-bold text-white mb-1 text-center transition-transform duration-300 group-hover:scale-105">
            {{ stat.value }}
          </div>
          <div class="text-xs lg:text-sm text-white/80 text-center">{{ stat.label }}</div>
        </div>

        <!-- Diagonal divider (desktop only) -->
        <div v-if="index < stats.length - 1" class="hidden lg:flex w-0 relative">
          <svg
            class="absolute left-0 top-0 h-full w-6"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 24,0 0,100"
              :fill="index % 2 === 0 ? orangeColor : blueColor"
            />
            <polygon
              points="24,0 24,100 0,100"
              :fill="(index + 1) % 2 === 0 ? orangeColor : blueColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const orangeColor = '#ff5500'
const blueColor = '#2d3a4f'

const stats = [
  { value: '20,000+', label: '日订单处理量', icon: 'i-lucide-package' },
  { value: '20,000㎡+', label: '仓储面积', icon: 'i-lucide-warehouse' },
  { value: '24/7', label: '安保监控系统', icon: 'i-lucide-cctv' },
  { value: '15年+', label: '团队经验', icon: 'i-lucide-users' },
]
</script>
