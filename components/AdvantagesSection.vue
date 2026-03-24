<script setup lang="ts">
const advantages = [
  {
    icon: 'i-lucide-map-pin',
    title: '英国本地仓储',
    description: '曼彻斯特核心位置，覆盖全英高效配送',
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'HMRC 认证合规',
    description: '英国税务海关总署认可的合规服务商',
  },
  {
    icon: 'i-lucide-zap',
    title: '快速履约',
    description: '订单当日处理，次日达覆盖主要城市',
  },
  {
    icon: 'i-lucide-headphones',
    title: '专业支持',
    description: '中英双语客服团队，响应快速专业',
  },
]
</script>

<template>
  <section class="py-20 bg-[#041653]">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">为什么选择 Cube海外仓</h2>
        <p class="text-white/60 max-w-2xl mx-auto">专业可靠的英国本地仓储与履约服务合作伙伴</p>
      </div>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="advantage in advantages"
          :key="advantage.title"
          class="text-center"
        >
          <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-700/20 text-blue-400">
            <UIcon :name="advantage.icon" class="h-8 w-8" />
          </div>
          <h3 class="mb-2 text-lg font-semibold text-white">
            {{ advantage.title }}
          </h3>
          <p class="text-sm text-white/60 leading-relaxed">
            {{ advantage.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
