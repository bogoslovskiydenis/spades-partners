export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['@/assets/css/main.css'],

  app: {
    head: {
      title: 'Spade Partners',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Описание вашего продукта' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  modules: [],
});
