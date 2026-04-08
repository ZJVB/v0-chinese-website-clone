<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <!-- Header -->
      <section class="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
        <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">服务条款</h1>
          <p class="text-white/70">Last Updated: 2024-01-01</p>
        </div>
      </section>

      <!-- Content -->
      <section class="py-12 lg:py-16 bg-white">
        <div class="mx-auto max-w-4xl px-4 lg:px-8">
          <div class="space-y-8">
            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">1. 服务概述</h2>
              <p class="text-muted-foreground">
                Cube Distribution Service Ltd（公司注册号：12909860）提供跨境电商仓储、物流配送和相关增值服务。使用我们的服务即表示您同意遵守本服务条款。
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">2. 服务范围</h2>
              <p class="text-muted-foreground mb-3">我们提供的服务包括但不限于：</p>
              <ul class="list-disc pl-6 text-muted-foreground space-y-2">
                <li>FBA备货与转运服务</li>
                <li>D2C一件代发服务</li>
                <li>B2B批量分销配送</li>
                <li>退货处理与翻新服务</li>
                <li>增值服务（贴标、质检、换标等）</li>
                <li>WMS系统对接</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">3. 客户责任</h2>
              <p class="text-muted-foreground mb-3">作为我们的客户，您同意：</p>
              <ul class="list-disc pl-6 text-muted-foreground space-y-2">
                <li>提供准确、完整的货物信息和收发货地址</li>
                <li>确保货物符合英国进口法规和海关要求</li>
                <li>及时支付服务费用</li>
                <li>配合海关查验和相关检查</li>
                <li>为货物投保适当的保险</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">4. 费用与付款</h2>
              <p class="text-muted-foreground">
                服务费用根据我们的报价单或合同约定执行，除非另有约定。
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">5. 争议解决</h2>
              <p class="text-muted-foreground">
                本条款受英格兰和威尔士法律管辖。任何争议应首先通过友好协商解决。协商不成的，提交英国法院管辖。
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">6. 联系方式</h2>
              <p class="text-muted-foreground mb-4">如有任何疑问，请联系我们：</p>
              <div class="bg-muted/30 rounded-lg p-6">
                <p class="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
                <p class="text-muted-foreground mb-2">公司注册号：12909860</p>
                <p class="text-muted-foreground mb-2">地址：Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
                <p class="text-muted-foreground mb-2">邮箱：contact@thecubedistribution.com</p>
                <p class="text-muted-foreground">电话：+44 161 566 2392 / 7599588577</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '服务条款 | Cube海外仓',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Cube海外仓服务条款，使用我们的仓储物流服务前请仔细阅读。',
    },
  ],
})
</script>
