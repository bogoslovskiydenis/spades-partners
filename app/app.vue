<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup>
// Подключаем твой комбозибл
const { pageData, fetchPageData } = usePageData();

// SSR-загрузка данных
await useAsyncData('pageData', async () => {
  try {
    if (!pageData.value) {
      await fetchPageData();
    }
    return pageData.value;
  } catch (error) {
    console.warn('App: Error loading page data:', error);
    return null;
  }
});

// Устанавливаем SEO-мета-теги из данных
useHead(() => ({
  htmlAttrs: {
    lang: 'en',
  },
  title: pageData.value?.meta_title || 'Spades Partners',
  meta: [
    {
      name: 'description',
      content: pageData.value?.meta_description,
    },
    {
      name: 'keywords',
      content: pageData.value?.meta_keywords,
    },
    {
      property: 'og:title',
      content: pageData.value?.meta_title,
    },
    {
      property: 'og:description',
      content: pageData.value?.meta_description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: pageData.value?.logo || '',
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: pageData.value?.meta_title,
    },
    {
      name: 'twitter:description',
      content: pageData.value?.meta_description,
    },
  ],
}));
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #010101;
  font-family:
    'Wix Madefor Text',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #010101;
}

/* Убираем стили для ссылок */
a {
  color: inherit;
  text-decoration: none;
}

/* Базовые стили для изображений */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Убираем стили кнопок */
button {
  font-family: inherit;
  cursor: pointer;
}
</style>
