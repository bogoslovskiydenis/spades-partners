<template>
  <section id="testimonials" class="testimonials-wrapper">
    <!-- Секция отзывов -->
    <div class="testimonials-section">
      <div class="container">
        <div class="section-header" v-if="data">
          <div class="header-content">
            <h2 class="section-title">{{ data.review_title }}</h2>
            <p class="section-subtitle" v-if="data.review_subtitle">
              {{ data.review_subtitle }}
            </p>
          </div>

          <div class="carousel-controls">
            <button
              class="carousel-arrow carousel-arrow-left"
              @click="prevSlide"
              :disabled="currentSlide === 0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              class="carousel-arrow carousel-arrow-right"
              @click="nextSlide"
              :disabled="currentSlide >= maxSlide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="carousel-container">
          <div class="testimonials-track" ref="track">
            <div
              class="testimonials-container"
              :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
              v-if="data && data.reviews"
            >
              <div
                v-for="(testimonial, index) in data.reviews"
                :key="index"
                class="testimonial-card"
              >
                <div class="brand-logo">
                  <img :src="testimonial.icon" alt="Brand logo" />
                </div>

                <div class="cards">
                  <div class="quote-icon">
                    <img src="../../assets/images/brekets.png" alt="brekets" />
                  </div>

                  <p class="testimonial-text">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Секция FAQ -->
    <div class="faq-section">
      <div class="container">
        <div class="faq-header">
          <h2 class="section-title">FAQ</h2>
          <p class="section-subtitle" v-if="data && data.faq_subtitle">
            {{ data.faq_subtitle }}
          </p>
        </div>

        <div class="faq-list" v-if="data && data.faq">
          <div
            v-for="(item, index) in data.faq"
            :key="index"
            class="faq-item"
            :class="{ active: activeIndex === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.value_1 }}</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div class="faq-answer" v-show="activeIndex === index">
              <p>{{ item.value_2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);

const currentSlide = ref(0);
const activeIndex = ref(0);
const slideWidth = ref(0);
const containerWidth = ref(0);
const track = ref(null);

const cardsPerView = computed(() => {
  if (containerWidth.value >= 1200) return 3;
  if (containerWidth.value >= 768) return 2;
  return 1;
});

const maxSlide = computed(() => {
  if (!data.value || !data.value.reviews) return 0;
  return Math.max(0, data.value.reviews.length - cardsPerView.value);
});

const updateDimensions = () => {
  if (track.value) {
    containerWidth.value = track.value.offsetWidth;
    const gap = 24;
    slideWidth.value = containerWidth.value / cardsPerView.value + gap;
  }
};

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const toggleFaq = index => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener('resize', updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions);
});
</script>

<style scoped>
.container {
  max-width: 1440px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 80px;
  margin: 0 auto;
  z-index: 2;
}

.testimonials-wrapper {
  position: relative;
  overflow: hidden;
}

.testimonials-section {
  padding: 80px 80px 180px;
  position: relative;
  z-index: 1;
  background: url('../../assets/images/bg.png') no-repeat center top;
  background-size: cover;
}

.faq-section {
  position: relative;
  z-index: 1;
  margin-top: -100px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.header-content {
  flex: 1;
}

.carousel-controls {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
}

.section-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0;
}

.faq-header {
  text-align: center;
  margin-bottom: 60px;
}

.faq-header .section-title {
  margin-bottom: 16px;
}

.faq-header .section-subtitle {
  margin: 0 auto;
}

.carousel-container {
  position: relative;
}

.carousel-arrow {
  width: 48px;
  height: 48px;
  border-radius: 20px;
  border: 1px solid #b7c8ff29;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(44px);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.carousel-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.testimonials-track {
  overflow: hidden;
}

.testimonials-container {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease;
}

.testimonial-card {
  min-width: calc(33.333% - 16px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.quote-icon {
  color: #e6e5ffa3;
}

.brand-logo {
  margin-bottom: 24px;
  width: 329px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.brand-logo img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.testimonial-text {
  font-family: Font, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  color: #e6e5ffa3;
}

.cards {
  display: flex;
  gap: 24px;
}

.quote-icon img {
  max-width: 32.33px;
  max-height: 24.42px;
  opacity: 1;
}

.faq-list {
  max-width: 846px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.faq-item {
  width: 100%;
  min-height: 92px;
  background: rgba(183, 200, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(44px);
}

.faq-item:hover {
  background: rgba(183, 200, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
}

.faq-item.active {
  background: rgba(183, 200, 255, 0.06);
  border-color: #cd9f55;
}

.faq-question {
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: #cd9f55;
}

.faq-question span:first-child {
  flex: 1;
}

.faq-icon {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: #cd9f55;
}

.faq-answer {
  padding-top: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 1200px) {
  .testimonial-card {
    min-width: calc(50% - 12px);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 80px 16px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .carousel-controls {
    align-self: flex-end;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
  }

  .testimonial-card {
    min-width: 100%;
    padding: 24px;
  }

  .brand-logo {
    width: 100%;
    max-width: 280px;
    height: 78px;
    margin-bottom: 20px;
  }

  .quote-icon img {
    max-width: 24px;
    max-height: 18px;
  }

  .testimonial-text {
    font-size: 14px;
  }

  .cards {
    gap: 16px;
  }

  .testimonials-section {
    padding: 60px 20px 40px;
  }

  .faq-header {
    margin-bottom: 40px;
  }

  .faq-list {
    max-width: 100%;
  }

  .faq-item {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 13px;
  }

  .section-header {
    gap: 20px;
  }

  .carousel-arrow {
    width: 36px;
    height: 36px;
  }

  .testimonial-card {
    padding: 20px;
  }

  .brand-logo {
    width: 100%;
    max-width: 240px;
    height: 65px;
    margin-bottom: 16px;
  }

  .quote-icon img {
    max-width: 20px;
    max-height: 15px;
  }

  .testimonial-text {
    font-size: 13px;
    line-height: 1.5;
  }

  .cards {
    gap: 12px;
  }

  .faq-item {
    padding: 20px;
    min-height: auto;
  }

  .faq-question {
    font-size: 15px;
  }

  .faq-answer {
    font-size: 14px;
    padding-top: 16px;
  }
}
</style>
