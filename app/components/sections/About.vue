<template>
  <section id="about" class="about">
    <div class="about-container">
      <div class="about-header" v-if="data">
        <h2 class="about-title">{{ data.about_title }}</h2>
        <p class="about-subtitle">{{ data.about_sub_title }}</p>
      </div>

      <div class="about-image">
        <img src="../../assets/images/about-laptop.png" alt="Casino laptop" class="laptop-image" />
      </div>

      <div class="about-features" v-if="data && data.about_list">
        <div class="feature-card" v-for="(item, index) in data.about_list" :key="index">
          <h3 class="feature-title">{{ item.title }}</h3>
          <p class="feature-description">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);
</script>

<style scoped>
.about {
  width: 100%;
  background: #010101;
}

.about-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px 80px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.about-title {
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.about-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.about-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-image {
  width: 100%;
  height: auto;
}

.about-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
  max-width: 368px;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

@media (max-width: 1024px) {
  .about-title {
    font-size: 42px;
  }
}

@media (max-width: 900px) {
  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-items: center;
  }

  .feature-card:last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 0 16px;
  }

  .about-title {
    font-size: 36px;
  }

  .about-features {
    grid-template-columns: 1fr;
  }

  .feature-card:last-child {
    grid-column: auto;
  }

  .feature-card {
    padding: 30px 24px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 28px;
  }

  .about-subtitle {
    font-size: 14px;
  }

  .feature-title {
    font-size: 20px;
  }

  .feature-description {
    font-size: 14px;
  }
}
</style>
