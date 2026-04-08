<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <!-- Header -->
      <section class="bg-gradient-to-b from-[#1a1f2e] to-[#2d3a4f] py-16 lg:py-20">
        <div class="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p class="text-white/70">Last Updated: 1 January 2024</p>
        </div>
      </section>

      <!-- Content -->
      <section class="py-12 lg:py-16 bg-white">
        <div class="mx-auto max-w-4xl px-4 lg:px-8">
          <div class="space-y-8">
            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
              <p class="text-muted-foreground">
                Cookies are small text files stored on your device by a website server when you visit. Cookies help websites remember your preferences, login status, and other information to make your browsing experience more convenient.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-foreground mb-2">2.1 Essential Cookies</h3>
                <p class="text-muted-foreground">
                  These cookies are essential for basic website functionality and cannot be disabled.
                </p>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-foreground mb-2">2.2 Functional Cookies</h3>
                <p class="text-muted-foreground">
                  These cookies enable enhanced functionality and personalized services.
                </p>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-foreground mb-2">2.3 Analytics Cookies</h3>
                <p class="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-foreground mb-2">2.4 Marketing Cookies</h3>
                <p class="text-muted-foreground">
                  These cookies are used to track visitor browsing behavior to display relevant advertisements.
                </p>
              </div>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">3. How to Manage Cookies</h2>
              <p class="text-muted-foreground">
                You can manage your cookie preferences through browser settings or our cookie consent banner.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-bold text-foreground mb-4">4. Contact Us</h2>
              <p class="text-muted-foreground mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div class="bg-muted/30 rounded-lg p-6">
                <p class="text-muted-foreground mb-2"><strong>Cube Distribution Service Ltd</strong></p>
                <p class="text-muted-foreground mb-2">Address: Zainhub Gate2, Lord North Street, Manchester, M40 8HT, United Kingdom</p>
                <p class="text-muted-foreground mb-2">Email: contact@thecubedistribution.com</p>
                <p class="text-muted-foreground">Phone: +44 161 566 2392 / 7599588577</p>
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
  title: 'Cookie Policy | Cube Distribution',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn how Cube Distribution website uses cookies and similar technologies.',
    },
  ],
})
</script>
