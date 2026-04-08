<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
    :class="{ 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]': scrolled }"
  >
    <div class="mx-auto flex max-w-7xl items-center h-20 px-4 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="mr-2.5 flex shrink-0 items-center gap-2">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500">
          <span class="text-[10px] font-black tracking-tight text-white">CUBE</span>
        </div>
        <span class="text-base font-bold text-gray-900">Cube海外仓</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden flex-1 items-center justify-center lg:flex">
        <template v-for="link in navLinks" :key="link.href">
          <!-- Dropdown links -->
          <div
            v-if="link.dropdown"
            class="relative"
            @mouseenter="activeDropdown = link.dropdown"
            @mouseleave="handleMouseLeave"
          >
            <NuxtLink
              :to="link.href"
              class="flex items-center gap-1 px-3 h-20 text-[15px] font-normal transition-colors border-y-[4px] border-transparent"
              :class="isActive(link.href) ? 'text-primary-500 font-semibold border-b-primary-500' : 'text-gray-700 hover:text-primary-500'"
            >
              {{ link.label }}
              <UIcon name="i-lucide-chevron-down" class="h-3.5 w-3.5" />
            </NuxtLink>

            <div
              v-if="activeDropdown === link.dropdown"
              class="absolute left-1/2 top-20 min-w-[220px] -translate-x-1/2 animate-fade-in"
              @mouseenter="activeDropdown = link.dropdown"
              @mouseleave="handleMouseLeave"
            >
              <div class="mt-1 rounded-lg bg-white py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100">
                <NuxtLink
                  v-for="item in getDropdownItems(link.dropdown)"
                  :key="item.href"
                  :to="item.href"
                  class="block px-5 py-2.5 text-sm text-gray-700 transition-all duration-200 hover:bg-primary-50 hover:text-primary-500 hover:pl-6"
                >
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Regular links -->
          <NuxtLink
            v-else
            :to="link.href"
            class="px-3 h-20 flex items-center text-[15px] font-normal transition-colors border-y-[4px] border-transparent"
            :class="isActive(link.href) ? 'text-primary-500 font-semibold border-b-primary-500' : 'text-gray-700 hover:text-primary-500'"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </nav>

      <!-- WeChat Contact -->
      <div
        class="relative hidden lg:block"
        @mouseenter="wechatOpen = true"
        @mouseleave="wechatOpen = false"
      >
        <div class="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <WechatIcon class="h-6 w-6" />
          <span class="text-xs text-gray-500">联系我们</span>
        </div>

        <div
          v-if="wechatOpen"
          class="absolute left-1/2 top-full pt-2 z-[100] -translate-x-1/2 animate-scale-in"
        >
          <div class="bg-white rounded-xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-gray-100 min-w-[300px]">
            <p class="text-sm font-medium text-gray-900 mb-4 text-center">扫码添加微信咨询</p>
            <div class="flex justify-center gap-5">
              <div class="text-center">
                <div class="w-28 h-28 rounded-lg overflow-hidden border-2 border-primary-100 shadow-md">
                  <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
                </div>
                <p class="text-xs font-medium text-gray-900 mt-2">销售咨询</p>
                <p class="text-[10px] text-gray-500">英国总部</p>
              </div>
              <div class="text-center">
                <div class="w-28 h-28 rounded-lg overflow-hidden border-2 border-primary-100 shadow-md">
                  <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
                </div>
                <p class="text-xs font-medium text-gray-900 mt-2">销售专员</p>
                <p class="text-[10px] text-gray-500">中国办事处</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="ml-auto rounded-md p-2 transition-colors lg:hidden text-gray-900 hover:bg-gray-100"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="animate-fade-in border-t border-gray-200 bg-white lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
      <nav class="mx-auto flex max-w-7xl flex-col px-4 py-3">
        <template v-for="link in navLinks" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="block rounded-md px-3 py-3 text-sm font-medium transition-colors"
            :class="isActive(link.href) ? 'text-primary-500 font-semibold' : 'text-gray-900 hover:text-primary-500'"
          >
            {{ link.label }}
          </NuxtLink>
          <div v-if="link.dropdown" class="ml-3 mb-2 flex flex-col gap-0.5 border-l-2 border-gray-200 pl-3">
            <NuxtLink
              v-for="item in getDropdownItems(link.dropdown)"
              :key="item.href"
              :to="item.href"
              class="py-1.5 text-sm text-gray-500 hover:text-primary-500 transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </template>

        <div class="mt-3 border-t border-gray-200 pt-3 px-3">
          <p class="text-sm text-gray-500 mb-3 flex items-center gap-2">
            <WechatIcon class="h-5 w-5" />
            扫码添加销售微信
          </p>
          <div class="flex gap-4">
            <div class="text-center">
              <div class="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
              </div>
              <p class="text-xs text-gray-500 mt-1">销售咨询</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
              </div>
              <p class="text-xs text-gray-500 mt-1">销售专员（中国办）</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const mobileOpen = ref(false)
const scrolled = ref(false)
const activeDropdown = ref<string | null>(null)
const wechatOpen = ref(false)
let dropdownTimer: ReturnType<typeof setTimeout> | null = null

const solutionItems = [
  { label: 'FBA 备货与转运服务', href: '/solutions/fba' },
  { label: 'D2C 一件代发', href: '/solutions/d2c' },
  { label: 'B2B 零售分销', href: '/solutions/b2b' },
  { label: '售后退货与履约保障', href: '/solutions/returns' },
  { label: '检测、翻新与二次销售', href: '/solutions/refurbishment' },
  { label: '增值服务', href: '/solutions/value-added' },
]

const warehouseItems = [
  { label: '仓储网络', href: '/warehousing/network' },
  { label: '全英配送时效', href: '/warehousing/delivery' },
  { label: '物流渠道', href: '/warehousing/logistics' },
  { label: '货运与特种物流', href: '/warehousing/freight' },
]

const navLinks = [
  { href: '/', label: '首页', dropdown: null },
  { href: '/solutions', label: '解决方案', dropdown: 'solutions' },
  { href: '/warehousing', label: '仓储与派送', dropdown: 'warehousing' },
  { href: '/industries', label: '行业', dropdown: null },
  { href: '/technology', label: '技术支持', dropdown: null },
  { href: '/about', label: '关于我们', dropdown: null },
  { href: '/contact', label: '联系我们', dropdown: null },
]

function isActive(href: string) {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}

function getDropdownItems(key: string) {
  switch (key) {
    case 'solutions': return solutionItems
    case 'warehousing': return warehouseItems
    default: return []
  }
}

function handleMouseLeave() {
  dropdownTimer = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

onMounted(() => {
  function handleScroll() {
    scrolled.value = window.scrollY > 60
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

watch(() => route.path, () => {
  mobileOpen.value = false
  activeDropdown.value = null
})
</script>
