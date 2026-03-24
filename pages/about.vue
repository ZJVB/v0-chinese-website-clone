<script setup lang="ts">
useHead({
  title: '关于我们 - Cube海外仓',
  meta: [
    { name: 'description', content: '了解 Cube海外仓的企业背景、核心优势与服务理念' }
  ]
})

const features = [
  {
    icon: 'i-lucide-shield-check',
    title: 'HMRC 认证合规',
    description: '作为英国税务及海关总署（HMRC）认可的海外仓服务商，确保您的货物合规入境与存储。',
  },
  {
    icon: 'i-lucide-warehouse',
    title: '专业仓储设施',
    description: '曼彻斯特 50,000+ 平方英尺现代化仓库，配备先进的仓储管理系统和安全监控。',
  },
  {
    icon: 'i-lucide-users',
    title: '双语专业团队',
    description: '中英双语客服团队，深度理解跨境电商需求，提供本地化专业支持。',
  },
  {
    icon: 'i-lucide-truck',
    title: '高效配送网络',
    description: '与英国主流物流渠道深度合作，实现全英次日达、偏远地区 2-3 日达的高效履约。',
  },
]
</script>

<template>
  <div>
    <PageBanner 
      title="关于 Cube海外仓" 
      subtitle="英国本地仓储与履约解决方案专家" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">我们的使命</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Cube海外仓致力于为跨境电商卖家、品牌商及分销企业提供专业、高效、合规的英国本地仓储与履约服务。
            </p>
            <p class="text-gray-600 mb-4 leading-relaxed">
              我们深知跨境物流的复杂性，因此专注于打造一站式解决方案，帮助客户简化供应链管理，提升运营效率，实现业务增长。
            </p>
            <p class="text-gray-600 leading-relaxed">
              无论您是 TEMU、亚马逊平台卖家，还是独立站品牌商，Cube海外仓都能为您提供量身定制的仓配服务。
            </p>
          </div>
          <div class="relative h-80 lg:h-96 rounded-xl overflow-hidden">
            <img 
              src="/images/hero-warehouse.jpg" 
              alt="Cube海外仓仓库" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">我们的优势</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">专业可靠，值得信赖</p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white p-6 rounded-xl shadow-sm"
          >
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <UIcon :name="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <ContactCtaSection />
  </div>
</template>
