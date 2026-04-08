<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main class="flex-grow">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ContactCtaSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import HeroSection from '~/components/HeroSection.vue'
import StatsSection from '~/components/StatsSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactCtaSection from '~/components/ContactCtaSection.vue'

useSeoMeta({
  title: 'Cube 海外仓 - 英国本地仓储与履约解决方案',
  description: '为跨境品牌、平台卖家及分销客户提供一站式英国本地仓储、履约与配送支持。',
})
</script>
