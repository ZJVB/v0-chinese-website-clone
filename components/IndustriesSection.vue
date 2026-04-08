<template>
  <section class="bg-white">
    <!-- Header -->
    <div class="py-12 lg:py-16 text-center">
      <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
        行业覆盖
      </span>
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        覆盖多个<span class="text-primary-500">重点行业</span>
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto px-4">
        针对不同品类特性提供定制化仓储与履约方案
      </p>
    </div>

    <!-- Industry Cards -->
    <div class="group/container relative w-full h-[400px] lg:h-[500px] overflow-hidden">
      <div class="absolute inset-0 flex">
        <NuxtLink
          v-for="(industry, index) in industries"
          :key="industry.title"
          :to="industry.href"
          class="group/card relative flex-1 h-full overflow-hidden transition-all duration-500 ease-out hover:flex-[2.5] hover:z-50 group-hover/container:[&:not(:hover)]:flex-[0.7]"
          :style="{
            zIndex: industries.length - index,
            marginLeft: index > 0 ? '-30px' : '0',
          }"
        >
          <!-- Card Shadow -->
          <div class="absolute inset-0 shadow-[-16px_0_40px_rgba(0,0,0,0.6)] z-0" />

          <img
            :src="industry.image"
            :alt="industry.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />

          <!-- Shadows -->
          <div v-if="index > 0" class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
          <div v-if="index > 0" class="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-black/60 to-transparent z-10 pointer-events-none" />
          <div v-if="index > 0" class="absolute left-0 bottom-0 w-40 h-40 bg-gradient-to-tr from-black/60 to-transparent z-10 pointer-events-none" />
          <div class="absolute right-0 top-0 bottom-0 w-[2px] bg-white/40 z-10 pointer-events-none" />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover/card:opacity-70" />

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-center justify-end gap-3 z-10">
            <span class="text-white font-bold text-sm lg:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap">
              {{ industry.title }}
            </span>
            <div class="w-7 h-7 lg:w-8 lg:h-8 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/card:bg-primary-500 group-hover/card:scale-110 shadow-lg">
              <UIcon name="i-lucide-arrow-right" class="h-3 w-3 lg:h-4 lg:w-4 text-white" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const industries = [
  {
    title: '时尚服饰',
    href: '/industries#fashion',
    image: '/images/industry-fashion.jpg',
  },
  {
    title: '新能源电池',
    href: '/industries#energy',
    image: '/images/industry-energy.jpg',
  },
  {
    title: '消费电子',
    href: '/industries#electronics',
    image: '/images/industry-electronics.jpg',
  },
  {
    title: '家居用品',
    href: '/industries#home',
    image: '/images/industry-furniture.jpg',
  },
  {
    title: '美妆健康',
    href: '/industries#health',
    image: '/images/industry-beauty.jpg',
  },
]
</script>
