<template>
  <footer class="bg-[#051851] text-white">
    <!-- Main Footer Content -->
    <div class="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <!-- Company Info with WeChat -->
        <div>
          <div class="mb-4 flex items-center gap-2">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
              <span class="text-xs font-black text-white">CUBE</span>
            </div>
            <div>
              <div class="text-lg font-bold text-white">Cube海外仓</div>
              <div class="text-[10px] font-medium uppercase tracking-wide text-primary-500">
                Cube Distribution Service Ltd
              </div>
            </div>
          </div>
          <p class="mb-5 text-sm leading-relaxed text-white/60">
            英国本地仓储与履约解决方案，助力品牌高效进入英国市场。
          </p>

          <!-- WeChat Icon with Popup -->
          <div
            class="relative inline-block"
            @mouseenter="wechatOpen = true"
            @mouseleave="wechatOpen = false"
          >
            <div class="flex flex-col items-center gap-0.5 cursor-pointer">
              <WechatIcon class="h-6 w-6" />
              <span class="text-xs text-white/60">联系我们</span>
            </div>

            <!-- WeChat QR Code Popup -->
            <div
              v-if="wechatOpen"
              class="absolute left-1/2 bottom-full pb-2 z-[100] -translate-x-1/2 animate-scale-in"
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
        </div>

        <!-- Address -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-primary-500">联系地址</h4>

          <!-- UK Office -->
          <div class="mb-4">
            <h5 class="text-xs font-semibold text-white/80 mb-2">英国总部</h5>
            <div class="space-y-1.5 text-sm text-white/60">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-map-pin" class="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span class="text-xs">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
              </div>
              <a href="tel:+441615662392" class="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <UIcon name="i-lucide-phone" class="h-3.5 w-3.5" />
                <span class="text-xs">+44 161 566 2392 / 7599588577</span>
              </a>
              <a href="mailto:contact@thecubedistribution.com" class="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <UIcon name="i-lucide-mail" class="h-3.5 w-3.5" />
                <span class="text-xs">contact@thecubedistribution.com</span>
              </a>
            </div>
          </div>

          <!-- China Office -->
          <div>
            <h5 class="text-xs font-semibold text-white/80 mb-2">中国办事处</h5>
            <div class="space-y-1.5 text-sm text-white/60">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-map-pin" class="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span class="text-xs">广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-user" class="h-3.5 w-3.5" />
                <span class="text-xs">联系人：张小姐</span>
              </div>
              <a href="tel:18033414492" class="flex items-center gap-2 hover:text-primary-500 transition-colors">
                <UIcon name="i-lucide-phone" class="h-3.5 w-3.5" />
                <span class="text-xs">18033414492（微信同号）</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Solutions Links -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-primary-500">解决方案</h4>
          <ul class="space-y-2.5 text-sm text-white/60">
            <li><NuxtLink to="/solutions/fba" class="hover:text-primary-500 transition-colors">FBA 备货与转运</NuxtLink></li>
            <li><NuxtLink to="/solutions/d2c" class="hover:text-primary-500 transition-colors">D2C 一件代发</NuxtLink></li>
            <li><NuxtLink to="/solutions/b2b" class="hover:text-primary-500 transition-colors">B2B 零售分销</NuxtLink></li>
            <li><NuxtLink to="/solutions/returns" class="hover:text-primary-500 transition-colors">售后退货</NuxtLink></li>
            <li><NuxtLink to="/solutions/value-added" class="hover:text-primary-500 transition-colors">增值服务</NuxtLink></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-primary-500">快速导航</h4>
          <ul class="space-y-2.5 text-sm text-white/60">
            <li><NuxtLink to="/" class="hover:text-primary-500 transition-colors">首页</NuxtLink></li>
            <li><NuxtLink to="/warehousing" class="hover:text-primary-500 transition-colors">仓储与派送</NuxtLink></li>
            <li><NuxtLink to="/industries" class="hover:text-primary-500 transition-colors">行业解决方案</NuxtLink></li>
            <li><NuxtLink to="/technology" class="hover:text-primary-500 transition-colors">技术支持</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-primary-500 transition-colors">关于我们</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary-500 transition-colors">联系我们</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p class="text-xs text-white/40">
            &copy; {{ currentYear }} Cube Distribution Service Ltd. All rights reserved.
          </p>
          <div class="flex gap-6 text-xs text-white/40">
            <NuxtLink to="/privacy" class="hover:text-primary-500 transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-primary-500 transition-colors">Terms</NuxtLink>
            <NuxtLink to="/cookies" class="hover:text-primary-500 transition-colors">Cookies</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const wechatOpen = ref(false)
const currentYear = new Date().getFullYear()
</script>
