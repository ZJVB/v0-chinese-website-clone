<template>
  <main>
    <PageBanner
      tag="关于 CUBE 海外仓"
      title="您的英国仓储物流专家"
      description="专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴"
      image="/images/warehouse-operations.jpg"
    />

    <!-- Company Introduction -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/about-warehouse.jpg" alt="Cube海外仓仓储中心" class="w-full h-auto object-cover" />
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">公司简介</span>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Cube 海外仓</h2>
            <div class="space-y-4 text-gray-500 leading-relaxed">
              <p>Cube 海外仓是专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴。总部位于英国曼彻斯特，我们拥有超过 30,000 平方米的仓储设施，覆盖曼彻斯特、伯明翰等关键物流枢纽。</p>
              <p>我们提供全面整合的物流解决方案，包括海外仓一件代发、亚马逊 FBA 中转、B2B 配送、高效退货处理以及专业的商品翻新服务。凭借先进的仓储管理系统（WMS）和自动化技术，Cube 海外仓能够实现日均处理超过 2 万件订单的高效运营。</p>
              <p>我们始终坚持以客户需求为核心，致力于提供专业、高效、可靠的物流服务，赋能中国品牌成功出海。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] overflow-hidden">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-500 text-sm font-medium mb-4 border border-primary-500/30">发展历程</span>
          <h2 class="text-2xl lg:text-4xl font-bold text-white">稳步前行，持续成长</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in timeline" :key="item.year" class="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-primary-500/50">
            <div class="relative h-48 overflow-hidden">
              <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
              <div class="absolute top-4 right-4 px-4 py-2 rounded-full bg-primary-500/90 backdrop-blur-sm shadow-lg">
                <span class="text-sm font-bold text-white">{{ item.year }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary-500">{{ item.title }}</h3>
              <p class="text-white/70 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">核心价值</span>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">赋能中国品牌成功出海</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">我们始终坚持以客户需求为核心，致力于提供专业、高效、可靠的物流服务</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="item in values" :key="item.title" class="group bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500/10 transition-all duration-300 group-hover:bg-primary-500 group-hover:scale-110">
              <UIcon :name="item.icon" class="h-8 w-8 text-primary-500 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ item.title }}</h3>
            <p class="text-gray-500">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-[#f8fafc]">
      <div class="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">准备好开始合作了吗？</h2>
        <p class="text-gray-500 mb-8 max-w-2xl mx-auto">联系我们，了解 Cube 海外仓如何助力您的跨境电商业务</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="/contact" size="lg" class="gap-2">立即咨询 <UIcon name="i-lucide-arrow-right" class="h-4 w-4" /></UButton>
          <UButton to="/solutions" variant="outline" size="lg">查看解决方案</UButton>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于我们 - Cube海外仓',
  description: 'Cube海外仓是专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴。',
})

const timeline = [
  { year: '2020', title: '公司成立', desc: '公司正式成立，开启专注于跨境电商仓储物流的业务。', image: '/images/timeline-2020.png' },
  { year: '2021', title: '初步扩展', desc: '仓储面积扩增至 5,000 平方米，提升仓储能力与服务水平。', image: '/images/timeline-2021.jpg' },
  { year: '2023', title: '效率提升', desc: '日处理订单量突破 3,000 单，运营效率显著提升。', image: '/images/timeline-2023.jpg' },
  { year: '2024', title: '业务多元化', desc: '仓库扩展至 10,000 平方米；成功开通 TikTok 对接及代发项目。', image: '/images/timeline-2024.jpg' },
  { year: '2026', title: '持续壮大', desc: '仓库规模进一步扩大至 20,000 平方米，持续强化仓储与物流服务能力。', image: '/images/timeline-2026.jpg' },
]

const values = [
  { icon: 'i-lucide-target', title: '专业', desc: '深耕英国仓储物流，提供专业解决方案' },
  { icon: 'i-lucide-zap', title: '高效', desc: '先进WMS系统与自动化技术保障效率' },
  { icon: 'i-lucide-heart', title: '可靠', desc: '以客户需求为核心，值得信赖的合作伙伴' },
]
</script>
