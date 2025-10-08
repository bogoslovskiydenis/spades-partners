<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup>
// Здесь можно добавить глобальную логику, если нужно
// Например, метрики, аналитику и т.д.

// SEO мета-теги (можно переопределить на страницах)
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Spades Partners - Quality is our specialty',
  meta: [
    { name: 'description', content: 'Join Spades Partners program today and work with one of the best affiliates in the online casino market.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Spades Partners' },
    { property: 'og:description', content: 'Join Spades Partners program today' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // Если используете Google Fonts
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
  ]
})
</script>

<style>
body {
  background-color: #010101;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #010101;
}
</style>