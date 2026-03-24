<script setup lang="ts">
useHead({
  title: '联系我们 - Cube海外仓',
  meta: [
    { name: 'description', content: '联系 Cube海外仓，获取专业的英国仓储与履约解决方案' }
  ]
})

const formState = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const services = [
  { label: 'TEMU 官方认证仓', value: 'temu' },
  { label: 'FBA 备货与转运', value: 'fba' },
  { label: 'D2C 一件代发', value: 'd2c' },
  { label: 'B2B 零售分销', value: 'b2b' },
  { label: '售后退货处理', value: 'returns' },
  { label: '增值服务', value: 'value-added' },
  { label: '其他咨询', value: 'other' },
]

async function onSubmit() {
  // Form submission logic
  console.log('Form submitted:', formState)
}
</script>

<template>
  <div>
    <PageBanner 
      title="联系我们" 
      subtitle="我们期待与您的合作" 
    />
    
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
            
            <!-- UK Office -->
            <div class="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-building" class="h-5 w-5 text-blue-700" />
                英国总部
              </h3>
              <div class="space-y-3 text-sm text-gray-600">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="h-4 w-4 mt-0.5 text-gray-400" />
                  <span>Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</span>
                </div>
                <a href="tel:+441615662392" class="flex items-center gap-3 hover:text-blue-700 transition-colors">
                  <UIcon name="i-lucide-phone" class="h-4 w-4 text-gray-400" />
                  <span>+44 161 566 2392 / 7599588577</span>
                </a>
                <a href="mailto:contact@thecubedistribution.com" class="flex items-center gap-3 hover:text-blue-700 transition-colors">
                  <UIcon name="i-lucide-mail" class="h-4 w-4 text-gray-400" />
                  <span>contact@thecubedistribution.com</span>
                </a>
              </div>
            </div>

            <!-- China Office -->
            <div class="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-building" class="h-5 w-5 text-blue-700" />
                中国办事处
              </h3>
              <div class="space-y-3 text-sm text-gray-600">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="h-4 w-4 mt-0.5 text-gray-400" />
                  <span>广东省深圳市宝安区政丰南路怀德翠岗工业园4区28栋</span>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon name="i-lucide-user" class="h-4 w-4 text-gray-400" />
                  <span>联系人：张小姐</span>
                </div>
                <a href="tel:18033414492" class="flex items-center gap-3 hover:text-blue-700 transition-colors">
                  <UIcon name="i-lucide-phone" class="h-4 w-4 text-gray-400" />
                  <span>18033414492（微信同号）</span>
                </a>
              </div>
            </div>

            <!-- WeChat QR Codes -->
            <div class="p-6 bg-blue-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.294.295a.328.328 0 0 0 .186-.059l1.918-1.125a.795.795 0 0 1 .71-.078c.864.277 1.79.424 2.806.424.22 0 .436-.009.652-.021-.128-.425-.197-.867-.197-1.323 0-3.494 3.372-6.331 7.527-6.331.184 0 .366.006.546.019-.498-3.6-4.28-6.351-8.528-6.351" fill="#00C800"/>
                  <path d="M24 14.551c0-3.283-3.108-5.944-6.938-5.944-3.831 0-6.938 2.661-6.938 5.944 0 3.284 3.107 5.945 6.938 5.945.757 0 1.485-.098 2.173-.28a.608.608 0 0 1 .546.06l1.476.867a.252.252 0 0 0 .143.045.226.226 0 0 0 .226-.226c0-.055-.022-.109-.037-.163l-.3-1.137a.45.45 0 0 1 .164-.51C23.008 18.103 24 16.433 24 14.55" fill="#00C800"/>
                  <circle cx="14.392" cy="14.551" r="1" fill="white"/>
                  <circle cx="19.608" cy="14.551" r="1" fill="white"/>
                  <circle cx="5.565" cy="8.5" r="1" fill="white"/>
                  <circle cx="10.782" cy="8.5" r="1" fill="white"/>
                </svg>
                微信扫码联系
              </h3>
              <div class="flex gap-6">
                <div class="text-center">
                  <div class="w-24 h-24 rounded-lg overflow-hidden border border-gray-200 bg-white">
                    <img src="/images/qr-2.png" alt="销售咨询" class="w-full h-full object-cover" />
                  </div>
                  <p class="text-xs text-gray-600 mt-2">销售咨询</p>
                </div>
                <div class="text-center">
                  <div class="w-24 h-24 rounded-lg overflow-hidden border border-gray-200 bg-white">
                    <img src="/images/qr-china.png" alt="销售专员（中国办）" class="w-full h-full object-cover" />
                  </div>
                  <p class="text-xs text-gray-600 mt-2">销售专员（中国办）</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">在线咨询</h2>
            <form @submit.prevent="onSubmit" class="space-y-5">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">姓名 *</label>
                  <UInput v-model="formState.name" placeholder="请输入姓名" required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">公司名称</label>
                  <UInput v-model="formState.company" placeholder="请输入公司名称" />
                </div>
              </div>
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">邮箱 *</label>
                  <UInput v-model="formState.email" type="email" placeholder="请输入邮箱" required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">电话</label>
                  <UInput v-model="formState.phone" placeholder="请输入电话" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">咨询服务</label>
                <USelect v-model="formState.service" :options="services" placeholder="请选择咨询服务" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">留言内容 *</label>
                <UTextarea v-model="formState.message" placeholder="请描述您的需求" :rows="5" required />
              </div>
              <UButton type="submit" size="lg" class="w-full bg-blue-700 hover:bg-blue-800">
                提交咨询
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
