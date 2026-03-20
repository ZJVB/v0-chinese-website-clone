<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '联系我们 - Cube海外仓',
  description: '联系Cube海外仓，获取英国本地仓储与物流解决方案的专业咨询。',
})
</script>

<template>
  <div class="pt-20">
    <PageBanner
      tag="CONTACT US"
      title="联系我们"
      description="欢迎联系我们，获取适合您业务模式的英国仓储与履约方案"
      image="/images/banner-contact.jpg"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              联系方式
            </h2>
            
            <!-- UK Office -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-orange-500 mb-4">英国总部</h3>
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="size-5 mt-0.5 text-orange-500" />
                  <span>Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
                </div>
                <a href="tel:+441615662392" class="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <UIcon name="i-lucide-phone" class="size-5 text-orange-500" />
                  <span>+44 161 566 2392 / 7599588577</span>
                </a>
                <a href="mailto:contact@thecubedistribution.com" class="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <UIcon name="i-lucide-mail" class="size-5 text-orange-500" />
                  <span>contact@thecubedistribution.com</span>
                </a>
              </div>
            </div>

            <!-- China Office -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-orange-500 mb-4">中国办事处</h3>
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="size-5 mt-0.5 text-orange-500" />
                  <span>广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="i-lucide-user" class="size-5 text-orange-500" />
                  <span>联系人：张小姐</span>
                </div>
                <a href="tel:18033414492" class="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <UIcon name="i-lucide-phone" class="size-5 text-orange-500" />
                  <span>18033414492（微信同号）</span>
                </a>
              </div>
            </div>

            <!-- WeChat QR Codes -->
            <div>
              <h3 class="text-lg font-semibold text-orange-500 mb-4">微信联系</h3>
              <div class="flex gap-6">
                <div class="text-center">
                  <div class="w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
                    <NuxtImg src="/images/qr-2.png" alt="销售咨询" width="96" height="96" class="w-full h-full object-cover" />
                  </div>
                  <p class="text-sm text-gray-500 mt-2">销售咨询</p>
                </div>
                <div class="text-center">
                  <div class="w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
                    <NuxtImg src="/images/qr-china.png" alt="中国办事处" width="96" height="96" class="w-full h-full object-cover" />
                  </div>
                  <p class="text-sm text-gray-500 mt-2">中国办事处</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              发送咨询
            </h2>
            <form class="space-y-6">
              <div class="grid gap-6 sm:grid-cols-2">
                <UFormField label="姓名" name="name">
                  <UInput placeholder="请输入您的姓名" size="lg" />
                </UFormField>
                <UFormField label="公司" name="company">
                  <UInput placeholder="请输入公司名称" size="lg" />
                </UFormField>
              </div>
              <div class="grid gap-6 sm:grid-cols-2">
                <UFormField label="邮箱" name="email">
                  <UInput type="email" placeholder="请输入邮箱地址" size="lg" />
                </UFormField>
                <UFormField label="电话" name="phone">
                  <UInput type="tel" placeholder="请输入联系电话" size="lg" />
                </UFormField>
              </div>
              <UFormField label="业务类型" name="business">
                <USelect 
                  placeholder="请选择业务类型" 
                  size="lg"
                  :items="[
                    { label: 'TEMU 卖家', value: 'temu' },
                    { label: 'FBA 备货与转运', value: 'fba' },
                    { label: 'D2C 一件代发', value: 'd2c' },
                    { label: 'B2B 零售分销', value: 'b2b' },
                    { label: '其他', value: 'other' },
                  ]"
                />
              </UFormField>
              <UFormField label="留言" name="message">
                <UTextarea placeholder="请描述您的需求..." rows="4" />
              </UFormField>
              <UButton type="submit" size="lg" color="primary" class="w-full">
                提交咨询
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
