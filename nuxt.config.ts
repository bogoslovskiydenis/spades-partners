export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['@/assets/css/main.css'],

  app: {
    baseURL: '/',
    buildAssetsDir: '/assets/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'google-site-verification',
          content: 'Q_bW5MRBF2v5HmiouKd8hB6bbritLqD7KWw9SNsoIp4',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  ssr: true,

  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/policy', '/terms'],
    },
  },

  routeRules: {
    '/policy': { prerender: true },
    '/terms': { prerender: true },
    '/': { prerender: true },
    '/**': { ssr: false },
  },

  experimental: {
    payloadExtraction: false,
  },

  modules: [],
});
