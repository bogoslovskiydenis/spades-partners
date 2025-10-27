<template>
  <section id="why-us" class="why-us-section">
    <div class="container">
      <h2 class="section-title">Why us</h2>

      <div class="content-wrapper">
        <div class="hearts-container">
          <div class="heart heart-1">
            <img src="../../assets/images/Hearth.webp" alt="heart" />
          </div>
          <div class="heart heart-2">
            <img src="../../assets/images/heart2.png" alt="heart" />
          </div>
          <div class="heart heart-3">
            <img src="../../assets/images/heart3.png" alt="heart" />
          </div>
        </div>

        <div class="advantages-grid" v-if="data && data.why">
          <div class="advantage-card" v-for="(item, index) in data.why" :key="index">
            <div class="card-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.sub_title }}</p>
          </div>
        </div>

        <div class="action-buttons">
          <button class="hero-button" @click="handleBecomePartner">
            Become a partner
            <svg class="button-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);

onMounted(() => {
  // Анимации убраны
});

const handleBecomePartner = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.why-us-section {
  width: 100%;
  background: #010101;
  position: relative;
  overflow: hidden;
  padding-top: 142px;
  padding-bottom: 162px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 80px 80px;
}

.section-title {
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
}

.content-wrapper {
  position: relative;
}

.hearts-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.heart {
  position: absolute;
  opacity: 1;
}

.heart img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.heart-1 {
  width: 419px;
  height: 445px;
  top: -85%;
  right: 0%;
  transform: rotate(350deg);
}

.heart-2 {
  width: 727px;
  height: 637px;
  top: -400px;
  left: -38%;
  transform: rotate(6deg);
}

.heart-3 {
  width: 213px;
  height: 184px;
  bottom: -160px;
  right: 14%;
  transform: rotate(0deg);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
  position: relative;
  z-index: 2;
  justify-items: center;
}

.advantage-card {
  align-items: center;
  flex-direction: column;
  display: flex;
  min-height: 252px;
  max-width: 305px;
  width: 100%;
  opacity: 1;
  border-radius: 24px;
  backdrop-filter: blur(44px);
  background: #b7c8ff0a;
  padding: 32px 16px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 28.7px 0px rgba(255, 255, 255, 0.1);
}

.card-icon img {
  object-fit: contain;
}

.advantage-card h4 {
  font-weight: 600;
  text-align: center;
  color: #f2f2ff;
  margin: 24px 0 8px 0;
}

.advantage-card p {
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  text-align: center;
  color: #e6e5ffa3;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.hero-button {
  position: relative;
  background: #cd9f55;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 42px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow:
    0 0 0 1px #ffd38c,
    0 12px 35px rgba(212, 165, 116, 0.35);
  letter-spacing: 0.01em;
  backdrop-filter: blur(53.20000076293945px);
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(212, 165, 116, 0.45);
  background: linear-gradient(135deg, #e0b180 0%, #c89f6b 100%);
}

.hero-button:active {
  transform: translateY(-1px);
}

.button-arrow {
  transition: transform 0.3s ease;
}

.hero-button:hover .button-arrow {
  transform: translateX(4px);
}

/* Медиа-запрос для больших экранов (2K и выше) */
@media (min-width: 1920px) {
  .heart-1 {
    top: -90%;
    right: -5%;
  }

  .heart-2 {
    top: -450px;
    left: -45%;
  }

  .heart-3 {
    bottom: -200px;
    right: 20%;
  }
}

@media (max-width: 1200px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .heart-1 {
    top: -20%;
  }
}

@media (max-width: 768px) {
  .why-us-section {
    padding-top: 0;
    padding-bottom: 0;
  }

  .container {
    padding: 80px 16px;
  }

  .section-title {
    font-size: 36px;
  }

  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-card {
    padding: 30px 20px;
    max-width: 100%;
  }

  .action-buttons {
    flex-direction: column;
  }

  .heart-2 {
    top: -50%;
    left: -37%;
  }

  .heart-1 {
    top: 14%;
    right: -18%;
  }

  .heart-3 {
    bottom: -8%;
    right: 0%;
  }
  .hero-button {
    padding: 15px 34px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-button {
    padding: 13px 30px;
    font-size: 13px;
    white-space: nowrap;
  }
  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .heart1 {
    top: 31%;
    right: -18%;
  }

  .heart-2 {
    left: -127%;
    top: -25%;
  }

  .heart3 {
    bottom: -3%;
    right: 0%;
  }
}
</style>
