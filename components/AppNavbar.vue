<script setup lang="ts">
const route = useRoute()

const mobileOpen = ref(false)
const scrolled = ref(false)
const activeDropdown = ref<string | null>(null)
let dropdownTimer: ReturnType<typeof setTimeout> | null = null

const solutionItems = [
  { label: 'TEMU 官方认证仓', href: '/solutions/temu' },
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  mobileOpen.value = false
  activeDropdown.value = null
})

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

function handleMouseEnter(key: string) {
  if (dropdownTimer) clearTimeout(dropdownTimer)
  activeDropdown.value = key
}

function handleMouseLeave() {
  dropdownTimer = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

function getDropdownItems(key: string) {
  switch (key) {
    case 'solutions': return solutionItems
    case 'warehousing': return warehouseItems
    default: return []
  }
}

function isActive(href: string): boolean {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
    :class="{ 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]': scrolled }"
  >
    <div class="mx-auto flex max-w-7xl items-center h-20 px-4 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="mr-2.5 flex shrink-0 items-center gap-2">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700">
          <span class="text-[10px] font-black tracking-tight text-white">CUBE</span>
        </div>
        <span class="text-base font-bold text-gray-900">Cube海外仓</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden flex-1 items-center justify-center lg:flex">
        <template v-for="link in navLinks" :key="link.href">
          <div
            v-if="link.dropdown"
            class="relative"
            @mouseenter="handleMouseEnter(link.dropdown)"
            @mouseleave="handleMouseLeave"
          >
            <NuxtLink
              :to="link.href"
              class="flex items-center gap-1 px-3 h-20 text-[15px] font-normal transition-colors border-y-[4px] border-transparent"
              :class="isActive(link.href)
                ? '!text-blue-700 !font-semibold border-b-blue-700'
                : 'text-gray-700 hover:text-blue-700'"
            >
              {{ link.label }}
              <UIcon name="i-lucide-chevron-down" class="h-3.5 w-3.5" />
            </NuxtLink>

            <div
              v-if="activeDropdown === link.dropdown"
              class="absolute left-1/2 top-20 min-w-[220px] animate-dropdown-in -translate-x-1/2"
              @mouseenter="handleMouseEnter(link.dropdown)"
              @mouseleave="handleMouseLeave"
            >
              <div class="mt-1 rounded-lg bg-white py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100">
                <NuxtLink
                  v-for="item in getDropdownItems(link.dropdown)"
                  :key="item.href"
                  :to="item.href"
                  class="block px-5 py-2.5 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:pl-6"
                >
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            v-else
            :to="link.href"
            class="px-3 h-20 flex items-center text-[15px] font-normal transition-colors border-y-[4px] border-transparent"
            :class="isActive(link.href)
              ? '!text-blue-700 !font-semibold border-b-blue-700'
              : 'text-gray-700 hover:text-blue-700'"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </nav>

      <!-- WeChat QR codes -->
      <div class="hidden shrink-0 items-center gap-3 lg:flex">
        <div class="flex items-center gap-1.5 mr-1">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
            <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
            <circle cx="14.392" cy="14.551" r="1" fill="white"/>
            <circle cx="19.608" cy="14.551" r="1" fill="white"/>
            <circle cx="5.565" cy="8.5" r="1" fill="white"/>
            <circle cx="10.782" cy="8.5" r="1" fill="white"/>
          </svg>
          <div class="text-right">
            <p class="text-xs font-medium text-gray-900">销售咨询</p>
            <p class="text-[10px] text-gray-500">悬停放大扫码</p>
          </div>
        </div>
        <div class="group/qr text-center z-20 hover:z-[100]">
          <div class="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 origin-top group-hover/qr:scale-[2.8] group-hover/qr:translate-y-[40px] group-hover/qr:shadow-xl group-hover/qr:border-blue-700">
            <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="group/qr text-center z-10 hover:z-[100]">
          <div class="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 origin-top group-hover/qr:scale-[2.8] group-hover/qr:translate-y-[40px] group-hover/qr:shadow-xl group-hover/qr:border-blue-700">
            <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
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
        <UIcon v-if="mobileOpen" name="i-lucide-x" class="h-6 w-6" />
        <UIcon v-else name="i-lucide-menu" class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="animate-fade-in border-t border-gray-200 bg-white lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
    >
      <nav class="mx-auto flex max-w-7xl flex-col px-4 py-3">
        <template v-for="link in navLinks" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="block rounded-md px-3 py-3 text-sm font-medium transition-colors"
            :class="isActive(link.href)
              ? 'text-blue-700 font-semibold'
              : 'text-gray-900 hover:text-blue-700'"
          >
            {{ link.label }}
          </NuxtLink>
          <div v-if="link.dropdown" class="ml-3 mb-2 flex flex-col gap-0.5 border-l-2 border-gray-200 pl-3">
            <NuxtLink
              v-for="item in getDropdownItems(link.dropdown)"
              :key="item.href"
              :to="item.href"
              class="py-1.5 text-sm text-gray-500 hover:text-blue-700 transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </template>

        <div class="mt-3 border-t border-gray-200 pt-3 px-3">
          <p class="text-sm text-gray-500 mb-3 flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
              <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
              <circle cx="14.392" cy="14.551" r="1" fill="white"/>
              <circle cx="19.608" cy="14.551" r="1" fill="white"/>
              <circle cx="5.565" cy="8.5" r="1" fill="white"/>
              <circle cx="10.782" cy="8.5" r="1" fill="white"/>
            </svg>
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
              <p class="text-xs text-gray-500 mt-1">中国办</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
