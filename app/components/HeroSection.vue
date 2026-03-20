<script setup lang="ts">
const banners = [
  {
    id: 3,
    title: 'TEMU 官方认证仓，履约表现持续位居前列',
    subtitle: '依托标准化作业流程、稳定的订单处理能力和英国本地履约资源，Cube海外仓为 TEMU 卖家提供更高效、更可靠的本地仓配支持。',
    image: '/images/hero-temu.jpg',
    link: '/solutions/temu',
    linkText: '了解 TEMU 服务',
  },
  {
    id: 4,
    title: 'HMRC 认可的合规海外仓服务商',
    subtitle: 'Cube海外仓作为英国税务及海关总署（HMRC）认可的海外仓服务商。依托规范的运营体系与成熟的本地履约能力，我们为跨境卖家提供安全、透明、可靠的英国仓储及订单履约服务。',
    image: '/images/hero-hmrc-new.jpg',
    link: '/about',
    linkText: '了解更多',
  },
  {
    id: 1,
    title: '英国本地仓储与履约解决方案',
    subtitle: '为跨境品牌、平台卖家及分销客户提供一站式英国本地仓储、履约与配送支持。',
    image: '/images/hero-warehouse.jpg',
    link: '/solutions',
    linkText: '查看解决方案',
  },
  {
    id: 2,
    title: '构建更高效的英国本地供应链',
    subtitle: '从 FBA 备货、中转分拨到零售配送，帮助客户提升库存灵活性、发货效率和本地交付能力。',
    image: '/images/service-fba.jpg',
    link: '/warehousing',
    linkText: '了解仓储服务',
  },
]

const currentSlide = ref(0)
const isAutoPlaying = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

const currentBanner = computed(() => banners[currentSlide.value])

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % banners.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + banners.length) % banners.length
}

function startAutoPlay() {
  if (timer) clearInterval(timer)
  timer = setInterval(nextSlide, 5000)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (isAutoPlaying.value) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})

function handleMouseEnter() {
  isAutoPlaying.value = false
  stopAutoPlay()
}

function handleMouseLeave() {
  isAutoPlaying.value = true
  startAutoPlay()
}
</script>

<template>
  <section 
    class="relative h-[600px] w-full overflow-hidden sm:h-[650px] lg:h-[700px]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Slides -->
    <div
      v-for="(banner, index) in banners"
      :key="banner.id"
      class="absolute inset-0 transition-opacity duration-700"
      :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg
          :src="banner.image"
          :alt="banner.title"
          class="object-cover w-full h-full"
        />
      </div>
      <div 
        class="absolute inset-0 bg-gradient-to-r"
        :class="banner.id === 4 ? 'from-[#041653]/70 via-[#041653]/40 to-transparent' : 'from-[#041653]/90 via-[#041653]/70 to-[#041653]/30'"
      />
    </div>

    <!-- Content -->
    <div class="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
      <!-- Left side - Text content -->
      <div class="pt-16 max-w-2xl">
        <div
          v-for="(banner, index) in banners"
          :key="banner.id"
          class="transition-all duration-500"
          :class="index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute pointer-events-none'"
        >
          <h1 class="mb-5 text-[26px] font-bold leading-[1.25] text-white sm:text-[32px] lg:text-[42px] text-balance">
            {{ banner.title }}
          </h1>
          <p class="mb-8 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg text-pretty">
            {{ banner.subtitle }}
          </p>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton
            :to="currentBanner.link"
            size="lg"
            color="primary"
            class="gap-2 rounded-md px-7 py-5 text-base font-semibold"
          >
            {{ currentBanner.linkText }}
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </UButton>
          <UButton
            to="/contact"
            size="lg"
            variant="outline"
            class="border-white/40 text-white hover:bg-white/10 bg-transparent rounded-md px-7 py-5 text-base"
          >
            联系我们
          </UButton>
        </div>

        <!-- Slide indicators -->
        <div class="mt-10 flex items-center gap-3">
          <button
            v-for="(_, index) in banners"
            :key="index"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'w-8 bg-orange-500' : 'w-3 bg-white/40 hover:bg-white/60'"
            :aria-label="`Go to slide ${index + 1}`"
            @click="currentSlide = index"
          />
        </div>
      </div>
    </div>

    <!-- Navigation arrows -->
    <button
      class="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:left-8"
      aria-label="Previous slide"
      @click="prevSlide"
    >
      <UIcon name="i-lucide-chevron-left" class="size-5" />
    </button>
    <button
      class="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:right-8"
      aria-label="Next slide"
      @click="nextSlide"
    >
      <UIcon name="i-lucide-chevron-right" class="size-5" />
    </button>
  </section>
</template>
