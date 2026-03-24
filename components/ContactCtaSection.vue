<template>
  <section class="py-20 bg-gradient-to-r from-blue-700 to-blue-800">
    <div class="mx-auto max-w-7xl px-4 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">准备好开启英国市场了吗？</h2>
      <p class="text-white/80 max-w-2xl mx-auto mb-8">
        联系我们的专业团队，获取定制化的仓储与履约解决方案
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton
          to="/contact"
          size="lg"
          class="bg-white text-blue-700 hover:bg-gray-100 rounded-md px-8 py-5 text-base font-semibold"
        >
          立即咨询
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4 ml-2" />
        </UButton>
        <UButton
          to="/solutions"
          size="lg"
          variant="outline"
          class="border-white/40 text-white hover:bg-white/10 bg-transparent rounded-md px-8 py-5 text-base"
        >
          了解更多服务
        </UButton>
      </div>
    </div>
  </section>
</template>
