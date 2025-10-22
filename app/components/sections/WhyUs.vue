<template>
  <section id="why-us" class="why-us-section">
    <div class="container">
      <h2 class="section-title">Why us</h2>

      <div class="content-wrapper">
        <div class="hearts-container">
          <div class="heart heart-1">
            <img src="../../assets/images/heart1.png" alt="heart" />
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
  animateHearts();
});

const animateHearts = () => {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart, index) => {
    setTimeout(() => {
      heart.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
    }, index * 200);
  });
};

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
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 80px 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 600;
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
  z-index: 0;
}

.heart {
  position: absolute;
  opacity: 1;
  filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.5));
}

.heart img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.heart-1 {
  width: 377.25px;
  height: 377.25px;
  top: -78%;
  right: 0%;
  transform: rotate(350deg);
}

.heart-2 {
  width: 771px;
  height: 771px;
  top: -400px;
  left: -250px;
  transform: rotate(6deg);
}

.heart-3 {
  width: 394px;
  height: 379.77px;
  bottom: -160px;
  right: -4%;
  transform: rotate(351deg);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
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
  gap: 24px;
  border-radius: 24px;
  backdrop-filter: blur(44px);
  background: #b7c8ff0a;
  padding: 32px 16px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  object-fit: contain;
}

.advantage-card h4 {
  font-weight: 600;
  text-align: center;
  color: #f2f2ff;
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
  background: linear-gradient(135deg, #d4a574 0%, #b8935f 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 42px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 12px 35px rgba(212, 165, 116, 0.35);
  letter-spacing: 0.01em;
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

@media (max-width: 1200px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .heart-1 {
    top: -34%;
  }
}

@media (max-width: 768px) {
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
    top: -29%;
    left: -37%;
  }

  .heart-1 {
    top: 22%;
    right: -29%;
  }

  .heart-3 {
    bottom: 1%;
    right: -26%;
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

  .heart-2 {
    left: -58%;
  }
}
</style>
