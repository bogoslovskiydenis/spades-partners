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
          <button class="btn-primary">
            <span>Become a partner</span>
          </button>
          <div class="btn-secondary">
            <img src="../../assets/images/Doc.png" alt="Doc" />
            <span>Terms and conditions</span>
          </div>
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

.btn-primary {
  max-width: 215px;
  height: 56px;
  opacity: 1;
  padding: 16px 24px;
  gap: 8px;
  border-radius: 20px;
  border-width: 1px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #cd9f55;
  border: 1px solid #cd9f55;
}

.btn-primary span {
  font-family: Font, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 8px;
}

.btn-secondary span {
  font-family: Font, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #f2f2ff;
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
}

@media (max-width: 480px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .heart-2 {
    left: -58%;
  }
}
</style>
