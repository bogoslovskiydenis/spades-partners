<template>
  <section id="company" class="company">
    <div class="company-container">
      <div class="company-header" v-if="data">
        <h2 class="company-title">{{ data.partners_title || 'About Company' }}</h2>
        <p class="company-subtitle" v-if="data.partners_sub_title">
          {{ data.partners_sub_title }}
        </p>
      </div>

      <div class="benefits-wrapper">
        <div class="benefits-image" v-if="data">
          <img :src="data.benefit_img" alt="Spades 3D" class="spade-image" />
        </div>

        <div class="benefits-list" v-if="data && data.benefit_list">
          <div class="benefit-item" v-for="(item, index) in data.benefit_list" :key="index">
            <div class="benefit-header">
              <div class="benefit-icon">
                <img :src="item.icon" :alt="item.title" />
              </div>
              <h3 class="benefit-title">{{ item.title }}</h3>
            </div>
            <p class="benefit-description">{{ item.text }}</p>
          </div>
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
.company {
  width: 100%;
  background: #010101;
}

.company-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px;
}

.company-header {
  text-align: center;
  margin-bottom: 60px;
}

.company-title {
  color: #ffffff;
  margin-bottom: 16px;
}

.company-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.benefits-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spade-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.benefits-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}

.benefit-item {
  max-width: 413px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.benefit-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.benefit-title {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.4;
}

.benefit-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

@media (max-width: 1024px) {

  .benefits-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .benefits-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .company-container {
    padding: 80px 16px;
  }


  .benefits-wrapper {
    gap: 40px;
  }

  .benefits-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 56px 48px;
  }

  .benefits-image {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .company-title {
    font-size: 28px;
  }

  .company-subtitle {
    font-size: 14px;
  }

  .benefits-list {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .benefit-title {
    font-size: 16px;
  }

  .benefit-description {
    font-size: 13px;
  }

  .benefits-image {
    max-width: 100%;
  }

  .benefit-item {
    max-width: 100%;
  }
}
</style>
