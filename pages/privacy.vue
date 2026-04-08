<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <!-- Header -->
      <section class="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
        <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">隐私政策</h1>
          <p class="text-white/70">Last Updated: 2024-01-01</p>
        </div>
      </section>

      <!-- Content -->
      <section class="py-12 lg:py-16 bg-white">
        <div class="mx-auto max-w-4xl px-4 lg:px-8">
          <div class="space-y-8">
            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">1. 引言</h2>
              <p class="text-muted-foreground">
                Cube Distribution Service Ltd（以下简称"我们"或"Cube海外仓"）非常重视您的隐私。本隐私政策说明了我们如何收集、使用、披露和保护您的个人信息。使用我们的服务即表示您同意本政策中描述的数据处理方式。
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">2. 我们收集的信息</h2>
              <p class="text-muted-foreground mb-3">我们可能收集以下类型的信息：</p>
              <ul class="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>个人身份信息：</strong>姓名、电子邮件地址、电话号码、公司名称、职位</li>
                <li><strong>业务信息：</strong>公司注册信息、VAT号码、EORI号码</li>
                <li><strong>物流信息：</strong>发货地址、收货地址、货物描述、订单详情</li>
                <li><strong>技术信息：</strong>IP地址、浏览器类型、设备信息、访问时间</li>
                <li><strong>通信记录：</strong>您与我们之间的邮件、电话和在线沟通记录</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">3. 信息使用目的</h2>
              <p class="text-muted-foreground mb-3">我们使用收集的信息用于：</p>
              <ul class="list-disc pl-6 text-muted-foreground space-y-2">
                <li>提供和改进我们的仓储、物流和配送服务</li>
                <li>处理订单、发货和退货请求</li>
                <li>与您沟通服务相关事宜</li>
                <li>发送服务更新和营销信息（经您同意）</li>
                <li>遵守法律法规要求</li>
                <li>保护我们的合法权益</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">4. 您的权利</h2>
              <p class="text-muted-foreground mb-3">根据英国GDPR，您享有以下权利：</p>
              <ul class="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>访问权：</strong>获取我们持有的您的个人信息副本</li>
                <li><strong>更正权：</strong>要求更正不准确的信息</li>
                <li><strong>删除权：</strong>在某些情况下要求删除您的信息</li>
                <li><strong>限制处理权：</strong>限制我们处理您的信息</li>
                <li><strong>数据可携权：</strong>以结构化格式获取您的数据</li>
                <li><strong>反对权：</strong>反对某些类型的数据处理</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">5. 联系我们</h2>
              <p class="text-muted-foreground mb-4">
                如果您对本隐私政策有任何疑问或希望行使您的数据保护权利，请联系我们：
              </p>
              <div class="bg-muted/30 rounded-lg p-6">
                <p class="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
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
  title: '隐私政策 | Cube海外仓',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Cube海外仓隐私政策，了解我们如何收集、使用和保护您的个人信息。',
    },
  ],
})
</script>
