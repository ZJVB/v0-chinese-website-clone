<template>
  <section class="relative py-12 lg:py-16 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-500/90 to-primary-500/80" />

    <!-- Decorative shapes -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
    <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
      <div class="text-center">
        <span class="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
          开启合作
        </span>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          正在寻找可靠的英国本地物流伙伴？
        </h2>
        <p class="mx-auto mb-6 max-w-2xl text-base text-white/80 leading-relaxed">
          欢迎联系我们，获取适合您业务模式、订单结构和产品类型的英国仓储与履约方案
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <UButton
            to="/contact"
            size="lg"
            class="gap-2 rounded-full px-8 bg-white text-primary-500 hover:bg-white/90 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
          >
            联系我们
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </UButton>
          <UButton
            to="/contact"
            size="lg"
            class="rounded-full px-8 bg-white/20 backdrop-blur-sm text-white font-medium border border-white/40 hover:bg-white hover:text-primary-500 transition-all duration-300"
          >
            获取报价
          </UButton>
        </div>

        <!-- Quick contact info -->
        <div class="flex flex-wrap justify-center gap-6 text-white/80">
          <a href="tel:+441615662392" class="flex items-center gap-2 hover:text-white transition-colors">
            <UIcon name="i-lucide-phone" class="h-4 w-4" />
            <span>英国: +44 161 566 2392</span>
          </a>
          <a href="tel:18033414492" class="flex items-center gap-2 hover:text-white transition-colors">
            <UIcon name="i-lucide-phone" class="h-4 w-4" />
            <span>中国: 18033414492</span>
          </a>
          <a href="mailto:contact@thecubedistribution.com" class="flex items-center gap-2 hover:text-white transition-colors">
            <UIcon name="i-lucide-mail" class="h-4 w-4" />
            <span>contact@thecubedistribution.com</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
