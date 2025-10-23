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
          <div class="commission-text">
            <h3 class="commission-title">{{ item.title }}</h3>
            <p class="commission-subtitle">{{ item.sub_title }}</p>
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
}

/* Mobile layout - horizontal */
@media (max-width: 768px) {
  .commission-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 20px;
  }

  .commission-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.commission-image {
  width: 100%;
  max-width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
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
  padding-bottom: 8px;
}

.commission-subtitle {
  font-size: 25px;
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
    max-width: 80px;
    height: 80px;
    padding-bottom: 0;
    flex-shrink: 0;
  }

  .commission-title {
    font-size: 24px;
    padding-bottom: 0;
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
    max-width: 60px;
    height: 60px;
    padding-bottom: 0;
    flex-shrink: 0;
  }

  .commission-title {
    font-size: 20px;
    padding-bottom: 0;
  }

  .commission-subtitle {
    font-size: 20px;
  }
}
</style>
