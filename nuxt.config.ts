export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Spade Partners',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Описание вашего продукта' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: []
})