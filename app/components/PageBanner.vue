<script setup lang="ts">
defineProps<{
  tag: string
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <section class="relative pt-[72px]">
    <div class="relative h-[280px] lg:h-[360px]">
      <NuxtImg
        :src="image"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#041653]/85 via-[#041653]/60 to-transparent" />
      <div class="absolute inset-0 flex items-center">
        <div class="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div class="max-w-2xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {{ tag }}
            </p>
            <h1 class="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
              {{ title }}
            </h1>
            <p class="text-base leading-relaxed text-white/80 text-pretty max-w-xl">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
