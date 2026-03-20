<script setup lang="ts">
const stats = [
  { value: '20,000+', label: '日订单处理量', icon: 'i-lucide-package' },
  { value: '20,000㎡+', label: '仓储面积', icon: 'i-lucide-warehouse' },
  { value: '24/7', label: '安保监控系统', icon: 'i-lucide-cctv' },
  { value: '15年+', label: '团队经验', icon: 'i-lucide-users' },
]

const orangeColor = '#ff5500'
const blueColor = '#2d3a4f'
</script>

<template>
  <section class="bg-white">
    <!-- Stats Banner - Full Width with Alternating Colors -->
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
          <UIcon 
            :name="stat.icon" 
            class="size-6 lg:size-8 text-white/90 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" 
          />
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

    <!-- TEMU Feature Section - Full background image -->
    <div class="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
      <div class="relative overflow-hidden rounded-2xl">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <NuxtImg
            src="/images/temu-ranking.jpg"
            alt="TEMU 官方认证仓 - 履约排名前列"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <!-- Content -->
        <div class="relative z-10 p-8 lg:p-12 lg:max-w-xl">
          <div class="mb-3 inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
            TEMU 官方认证仓
          </div>
          <h2 class="mb-4 text-2xl font-bold text-white lg:text-3xl">
            履约表现持续位居<span class="text-orange-500">前列</span>
          </h2>
          <p class="mb-6 text-white/80 leading-relaxed">
            作为 TEMU 官方认证仓，Cube海外仓依托标准化作业流程和稳定的订单处理能力，为平台卖家提供更高效、更可靠的英国本地仓配支持。
          </p>
          <UButton to="/solutions/temu" color="primary" class="gap-2 rounded-md">
            了解 TEMU 方案
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
