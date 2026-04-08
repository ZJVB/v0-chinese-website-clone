<template>
  <main>
    <PageBanner
      tag="CONTACT US"
      title="联系我们"
      description="无论您有任何关于英国海外仓、跨境物流的需求或疑问，我们的团队随时为您服务"
      image="/images/banner-contact.jpg"
    />

    <!-- Contact Info -->
    <section class="py-12 lg:py-16 bg-[#f8fafc]">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-6 md:grid-cols-2">
          <!-- UK Office -->
          <div class="rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900">英国总部</h3>
              <p class="text-sm text-gray-500">UK Headquarters</p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-map-pin" class="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                <p class="text-gray-500 text-sm">Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-phone" class="h-5 w-5 text-primary-500 shrink-0" />
                <a href="tel:+441615662392" class="text-gray-500 text-sm hover:text-primary-500 transition-colors">+44 161 566 2392</a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-mail" class="h-5 w-5 text-primary-500 shrink-0" />
                <a href="mailto:contact@thecubedistribution.com" class="text-gray-500 text-sm hover:text-primary-500 transition-colors">contact@thecubedistribution.com</a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-clock" class="h-5 w-5 text-primary-500 shrink-0" />
                <p class="text-gray-500 text-sm">周一至周六 9:00-18:00（英国时间）</p>
              </div>
            </div>
          </div>

          <!-- China Office -->
          <div class="rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900">中国办事处</h3>
              <p class="text-sm text-gray-500">China Office</p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-map-pin" class="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                <p class="text-gray-500 text-sm">广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</p>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-user" class="h-5 w-5 text-primary-500 shrink-0" />
                <p class="text-gray-500 text-sm">联系人：张小姐</p>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-phone" class="h-5 w-5 text-primary-500 shrink-0" />
                <a href="tel:18033414492" class="text-gray-500 text-sm hover:text-primary-500 transition-colors">18033414492（微信同号）</a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-clock" class="h-5 w-5 text-primary-500 shrink-0" />
                <p class="text-gray-500 text-sm">周一至周日 8:00-20:00（北京时间）</p>
              </div>
            </div>
          </div>
        </div>

        <!-- WeChat QR -->
        <div class="mt-6 rounded-2xl bg-white p-6 lg:p-8 border border-gray-100 shadow-sm">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <WechatIcon class="h-6 w-6" />
              微信联系
            </h3>
            <p class="text-sm text-gray-500">扫码添加客服微信，获取实时咨询服务</p>
          </div>
          <div class="flex justify-center gap-8">
            <div class="text-center">
              <div class="mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200">
                <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
              </div>
              <span class="text-sm text-gray-500">销售咨询</span>
            </div>
            <div class="text-center">
              <div class="mb-2 h-24 w-24 rounded-lg overflow-hidden border border-gray-200">
                <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
              </div>
              <span class="text-sm text-gray-500">中国办事处</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">发送咨询</h2>
          <p class="text-gray-500">填写以下表单，我们的团队将在24小时内与您联系</p>
        </div>

        <div class="rounded-2xl bg-[#f8fafc] p-6 lg:p-10 border border-gray-100">
          <form v-if="!submitted" class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <UFormField label="姓名 *" name="name">
                <UInput v-model="form.name" placeholder="请输入您的姓名" size="lg" />
              </UFormField>
              <UFormField label="公司/店铺名称" name="company">
                <UInput v-model="form.company" placeholder="请输入公司或店铺名称" size="lg" />
              </UFormField>
            </div>
            <div class="grid gap-5 sm:grid-cols-2">
              <UFormField label="邮箱地址 *" name="email">
                <UInput v-model="form.email" type="email" placeholder="your@email.com" size="lg" />
              </UFormField>
              <UFormField label="联系电话/微信" name="phone">
                <UInput v-model="form.phone" placeholder="手机号或微信号" size="lg" />
              </UFormField>
            </div>
            <UFormField label="感兴趣的服务" name="service">
              <USelect v-model="form.service" :items="serviceOptions" placeholder="请选择服务类型" size="lg" />
            </UFormField>
            <UFormField label="留言信息 *" name="message">
              <UTextarea v-model="form.message" placeholder="请描述您的业务需求..." :rows="5" />
            </UFormField>
            <UButton type="submit" size="lg" class="w-full gap-2" :loading="isSubmitting">
              <UIcon name="i-lucide-send" class="h-4 w-4" />
              提交咨询
            </UButton>
            <p class="text-center text-xs text-gray-500">7x24小时客服支持 | 您的信息将被严格保密</p>
          </form>

          <div v-else class="flex flex-col items-center justify-center py-16">
            <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <UIcon name="i-lucide-check-circle" class="h-8 w-8 text-green-500" />
            </div>
            <p class="text-lg font-bold text-gray-900">提交成功！</p>
            <p class="mt-2 text-sm text-gray-500 text-center">感谢您的咨询，我们的团队将在24小时内与您联系。</p>
            <UButton variant="outline" class="mt-6" @click="submitted = false">发送新消息</UButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '联系我们 - Cube海外仓',
  description: '无论您有任何关于英国海外仓、跨境物流的需求或疑问，我们的团队随时为您服务。',
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const submitted = ref(false)
const isSubmitting = ref(false)

const serviceOptions = [
  { label: '海外仓一件代发', value: '海外仓一件代发' },
  { label: 'FBA头程/中转', value: 'FBA头程/中转' },
  { label: '退货处理', value: '退货处理' },
  { label: 'B2B批发配送', value: 'B2B批发配送' },
  { label: '其他服务', value: '其他服务' },
]

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    return
  }
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  submitted.value = true
  isSubmitting.value = false
}
</script>
