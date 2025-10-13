<template>
  <section id="commissions" class="commissions">
    <div class="commissions-container">
      <div class="commissions-header" v-if="data">
        <h2 class="commissions-title">{{ data.commissions_title || 'Commissions' }}</h2>
      </div>

      <div class="commissions-grid" v-if="data && data.commissions">
        <div class="commission-item" v-for="(item, index) in data.commissions" :key="index">
          <div class="commission-image">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <h3 class="commission-title">{{ item.title }}</h3>
          <p class="commission-subtitle">{{ item.sub_title }}</p>
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
.commissions {
  width: 100%;
  background: #010101;
  padding: 80px 0;
}

.commissions-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

.commissions-header {
  text-align: center;
  margin-bottom: 80px;
}

.commissions-title {
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.commissions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  align-items: start;
}

.commission-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.commission-image {
  width: 100%;
  max-width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.commission-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.commission-title {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.commission-subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Tablet */
@media (max-width: 1024px) {
  .commissions-title {
    font-size: 42px;
  }

  .commissions-grid {
    gap: 50px;
  }

  .commission-image {
    max-width: 240px;
    height: 240px;
  }

  .commission-title {
    font-size: 28px;
  }
}

/* Mobile Large */
@media (max-width: 768px) {
  .commissions-container {
    padding: 0 16px;
  }

  .commissions-header {
    margin-bottom: 60px;
  }

  .commissions-title {
    font-size: 36px;
  }

  .commissions-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .commission-image {
    max-width: 200px;
    height: 200px;
  }

  .commission-title {
    font-size: 24px;
  }

  .commission-subtitle {
    font-size: 15px;
  }
}

/* Mobile Small */
@media (max-width: 480px) {
  .commissions {
    padding: 60px 0;
  }

  .commissions-title {
    font-size: 28px;
  }

  .commissions-grid {
    gap: 48px;
  }

  .commission-image {
    max-width: 180px;
    height: 180px;
  }

  .commission-title {
    font-size: 20px;
  }

  .commission-subtitle {
    font-size: 14px;
  }
}
</style>
