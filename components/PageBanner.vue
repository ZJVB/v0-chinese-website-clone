<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="relative bg-[#041653] py-20 lg:py-28">
    <div class="absolute inset-0 bg-gradient-to-r from-[#041653] to-blue-900 opacity-90" />
    <div class="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
      <h1 class="text-3xl font-bold text-white lg:text-4xl mb-4">{{ title }}</h1>
      <p v-if="subtitle" class="text-white/70 max-w-2xl mx-auto text-lg">{{ subtitle }}</p>
    </div>
  </section>
</template>
