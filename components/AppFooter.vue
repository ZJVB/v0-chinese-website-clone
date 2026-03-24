<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#051851] text-white">
    <!-- Main Footer Content -->
    <div class="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Company Info -->
        <div>
          <div class="mb-4 flex items-center gap-2">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
              <span class="text-xs font-black text-white">CUBE</span>
            </div>
            <div>
              <div class="text-lg font-bold text-white">Cube海外仓</div>
              <div class="text-[10px] font-medium uppercase tracking-wide text-blue-400">
                Cube Distribution Service Ltd
              </div>
            </div>
          </div>
          <p class="mb-4 text-sm leading-relaxed text-white/60">
            英国本地仓储与履约解决方案，助力品牌高效进入英国市场。
          </p>
          
          <!-- UK Office -->
          <div class="mb-4">
            <h5 class="text-xs font-semibold text-blue-400 mb-2">英国总部</h5>
            <div class="space-y-1.5 text-sm text-white/60">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-map-pin" class="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span class="text-xs">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
              </div>
              <a href="tel:+441615662392" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <UIcon name="i-lucide-phone" class="h-3.5 w-3.5" />
                <span class="text-xs">+44 161 566 2392 / 7599588577</span>
              </a>
              <a href="mailto:contact@thecubedistribution.com" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <UIcon name="i-lucide-mail" class="h-3.5 w-3.5" />
                <span class="text-xs">contact@thecubedistribution.com</span>
              </a>
            </div>
          </div>

          <!-- China Office -->
          <div>
            <h5 class="text-xs font-semibold text-blue-400 mb-2">中国办事处</h5>
            <div class="space-y-1.5 text-sm text-white/60">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-map-pin" class="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span class="text-xs">广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-user" class="h-3.5 w-3.5" />
                <span class="text-xs">联系人：张小姐</span>
              </div>
              <a href="tel:18033414492" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <UIcon name="i-lucide-phone" class="h-3.5 w-3.5" />
                <span class="text-xs">18033414492（微信同号）</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Solutions Links -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-blue-400">解决方案</h4>
          <ul class="space-y-2.5 text-sm text-white/60">
            <li><NuxtLink to="/solutions/temu" class="hover:text-blue-400 transition-colors">TEMU 官方认证仓</NuxtLink></li>
            <li><NuxtLink to="/solutions/fba" class="hover:text-blue-400 transition-colors">FBA 备货与转运</NuxtLink></li>
            <li><NuxtLink to="/solutions/d2c" class="hover:text-blue-400 transition-colors">D2C 一件代发</NuxtLink></li>
            <li><NuxtLink to="/solutions/b2b" class="hover:text-blue-400 transition-colors">B2B 零售分销</NuxtLink></li>
            <li><NuxtLink to="/solutions/returns" class="hover:text-blue-400 transition-colors">售后退货</NuxtLink></li>
            <li><NuxtLink to="/solutions/value-added" class="hover:text-blue-400 transition-colors">增值服务</NuxtLink></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-blue-400">快速导航</h4>
          <ul class="space-y-2.5 text-sm text-white/60">
            <li><NuxtLink to="/" class="hover:text-blue-400 transition-colors">首页</NuxtLink></li>
            <li><NuxtLink to="/warehousing" class="hover:text-blue-400 transition-colors">仓储与派送</NuxtLink></li>
            <li><NuxtLink to="/industries" class="hover:text-blue-400 transition-colors">行业解决方案</NuxtLink></li>
            <li><NuxtLink to="/technology" class="hover:text-blue-400 transition-colors">技术支持</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-400 transition-colors">关于我们</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-400 transition-colors">联系我们</NuxtLink></li>
          </ul>
        </div>

        <!-- WeChat QR Codes -->
        <div>
          <h4 class="mb-4 text-sm font-semibold text-blue-400 flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
              <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
              <circle cx="14.392" cy="14.551" r="1" fill="white"/>
              <circle cx="19.608" cy="14.551" r="1" fill="white"/>
              <circle cx="5.565" cy="8.5" r="1" fill="white"/>
              <circle cx="10.782" cy="8.5" r="1" fill="white"/>
            </svg>
            微信联系
          </h4>
          
          <!-- Sales Department -->
          <p class="text-xs text-white/40 mb-2">销售部</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <div class="group relative text-center z-20 hover:z-[100]">
              <div class="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-blue-400">
                <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
              </div>
              <span class="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">销售咨询</span>
            </div>
            <div class="group relative text-center z-10 hover:z-[100]">
              <div class="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-blue-400">
                <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
              </div>
              <span class="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">中国办</span>
            </div>
          </div>
          
          <!-- Technical Support -->
          <p class="text-xs text-white/40 mb-2">技术支持部</p>
          <div class="flex flex-wrap gap-3">
            <div class="group relative text-center z-0 hover:z-[100]">
              <div class="mb-1 h-14 w-14 rounded-lg overflow-hidden border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-[2] group-hover:shadow-xl group-hover:border-blue-400">
                <img src="/images/qr-1.png" alt="技术支持" class="w-full h-full object-cover" />
              </div>
              <span class="text-[10px] text-white/60 group-hover:opacity-0 transition-opacity">技术支持</span>
            </div>
          </div>
          <p class="mt-3 text-xs text-white/60">鼠标悬停放大二维码</p>
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
            <NuxtLink to="/privacy" class="hover:text-blue-400 transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-blue-400 transition-colors">Terms</NuxtLink>
            <NuxtLink to="/cookies" class="hover:text-blue-400 transition-colors">Cookies</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
