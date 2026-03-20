<script setup lang="ts">
const platforms = [
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'TikTok Shop', logo: 'https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg' },
  { name: 'Amazon', logo: '/images/logos/amazon.png' },
  { name: 'eBay', logo: '/images/logos/ebay.png' },
  { name: 'TEMU', logo: 'https://cdn.worldvectorlogo.com/logos/temu-logo.svg' },
  { name: 'WooCommerce', logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg' },
  { name: 'Magento', logo: 'https://cdn.worldvectorlogo.com/logos/magento.svg' },
  { name: 'PrestaShop', logo: 'https://cdn.worldvectorlogo.com/logos/prestashop.svg' },
]

const logistics = [
  { name: 'Royal Mail', logo: '/images/logos/royal-mail.png' },
  { name: 'DPD', logo: '/images/logos/dpd.png' },
  { name: 'Evri', logo: '/images/logos/evri.png' },
  { name: 'FedEx', logo: 'https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg' },
  { name: 'UPS', logo: 'https://cdn.worldvectorlogo.com/logos/ups-united-parcel-service.svg' },
  { name: 'DHL', logo: 'https://cdn.worldvectorlogo.com/logos/dhl-1.svg' },
]
</script>

<template>
  <section class="py-16 lg:py-20 bg-[#f5f7fa]">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
          合作生态
        </span>
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          为什么选择<span class="text-orange-500">Cube海外仓</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          依托本地仓储资源、成熟履约体系及灵活物流配置，为客户提供稳定高效的英国本地供应链支持
        </p>
      </div>

      <!-- Partners Section -->
      <div class="space-y-10">
        <!-- Platforms - scrolling left -->
        <div class="p-6 lg:p-8">
          <h3 class="mb-2 text-base font-bold text-gray-900 text-center">
            系统对接平台
          </h3>
          <p class="mb-6 text-sm text-gray-500 text-center">
            支持主流电商平台及 ERP/OMS 系统 API 对接
          </p>
          <div class="relative overflow-hidden">
            <div class="flex animate-scroll-left">
              <div
                v-for="(platform, index) in [...platforms, ...platforms]"
                :key="`${platform.name}-${index}`"
                class="flex-shrink-0 mx-8 flex items-center justify-center h-14 w-32 rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <img
                  :src="platform.logo"
                  :alt="platform.name"
                  class="h-10 w-auto max-w-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Logistics - scrolling right -->
        <div class="p-6 lg:p-8">
          <h3 class="mb-2 text-base font-bold text-gray-900 text-center">
            合作物流渠道
          </h3>
          <p class="mb-6 text-sm text-gray-500 text-center">
            覆盖英国全境及欧洲主要目的地的多元化配送网络
          </p>
          <div class="relative overflow-hidden">
            <div class="flex animate-scroll-right">
              <div
                v-for="(partner, index) in [...logistics, ...logistics]"
                :key="`${partner.name}-${index}`"
                class="flex-shrink-0 mx-8 flex items-center justify-center h-14 w-32 rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="h-10 w-auto max-w-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}
</style>
