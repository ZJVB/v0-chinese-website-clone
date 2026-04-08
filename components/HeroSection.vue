<template>
  <section class="relative h-96 lg:h-[600px] w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
    <div class="absolute inset-0 opacity-20" style="background-image: url('/images/hero-warehouse.jpg'); background-size: cover; background-position: center;"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center">
      <div class="max-w-2xl">
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          英国本地仓储与履约解决方案
        </h1>
        <p class="text-lg text-white/90 mb-8 max-w-xl">
          为跨境品牌、平台卖家及分销客户提供一站式英国本地仓储、履约与配送支持。
        </p>
        <div class="flex gap-4">
          <NuxtLink 
            to="/solutions" 
            class="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            查看解决方案
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
