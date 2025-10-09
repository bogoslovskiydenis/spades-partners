<template>
  <section id="testimonials" class="testimonials-wrapper">
    <!-- Секция отзывов -->
    <div class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What people are saying</h2>

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
            >
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="testimonial-card"
              >
                <div class="brand-logo">
                  <img :src="testimonial.logo" :alt="testimonial.brand" />
                </div>

                <div class="cards">
                  <div class="quote-icon">
                    <img src="../../assets/images/brekets.png" alt="brekets" />
                  </div>

                  <p class="testimonial-text">{{ testimonial.text }}</p>
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
        <h2 class="section-title">FAQ</h2>

        <div class="faq-list">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="faq-item"
            :class="{ active: activeIndex === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
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
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';

const testimonials = ref([
  {
    id: 1,
    brand: 'iGamingHub',
    logo: card1,
    text: 'iGamingHub and Spades Partners is a one of a kind team in both the iGaming and cryptocurrency space. We are honored to have our brand affiliated with one of the highest performing affiliate programs in the space. Looking forward to our continued partnership with the team!',
  },
  {
    id: 2,
    brand: 'Casino Maestro',
    logo: card2,
    text: "Spades Partners is one of the best affiliate programs we've worked with. Their team is professional, responsive, and always looking for ways to help us succeed. The commission structure is fair and payments are always on time.",
  },
  {
    id: 3,
    brand: 'Voutilainet',
    logo: card3,
    text: 'Spades Partners has been an incredible experience for us. We have grown our business significantly with their help. Their honest partnership and willingness to work with us to optimize our strategy has been invaluable.',
  },
  {
    id: 4,
    brand: 'BetHub Pro',
    logo: card3,
    text: 'Working with Spades Partners has transformed our affiliate business. The support team is always available, and they provide excellent marketing materials and insights that help us convert more traffic.',
  },
  {
    id: 5,
    brand: 'BetHub Pro',
    logo: card3,
    text: 'Working with Spades Partners has transformed our affiliate business. The support team is always available, and they provide excellent marketing materials and insights that help us convert more traffic.',
  },
  {
    id: 6,
    brand: 'BetHub Pro',
    logo: card3,
    text: 'Working with Spades Partners has transformed our affiliate business. The support team is always available, and they provide excellent marketing materials and insights that help us convert more traffic.',
  },
]);

const faqItems = ref([
  {
    question: 'How it works',
    answer:
      'Our affiliate program is simple: you promote our casino brands, drive traffic, and earn commissions on player activity. We provide you with tracking links, marketing materials, and dedicated support to help you succeed.',
  },
  {
    question: 'What is a sub-affiliate program?',
    answer:
      "A sub-affiliate program allows you to refer other affiliates to our program and earn a percentage of their commissions. It's a great way to scale your earnings by building a network of affiliates under you.",
  },
  {
    question: 'What is an affiliate program?',
    answer:
      'An affiliate program is a partnership where you promote our casino brands and earn commissions based on the players you refer. You get paid for driving quality traffic that converts into real money players.',
  },
  {
    question: 'Do I need to have a website to join?',
    answer:
      "While having a website helps, it's not mandatory. You can promote our brands through social media, YouTube, email marketing, or other traffic sources. We welcome affiliates from various backgrounds and marketing channels.",
  },
  {
    question: 'How and when will I get paid?',
    answer:
      "Payments are processed monthly, typically by the 15th of each month for the previous month's earnings. We offer multiple payment methods including bank transfer, cryptocurrency, and e-wallets. Minimum payout threshold is $100.",
  },
  {
    question: 'Can I get an exclusive offer or promotion to use on my website?',
    answer:
      'Yes! We work closely with our top-performing affiliates to create exclusive offers and promotions tailored to your audience. Contact your affiliate manager to discuss custom deals that can help boost your conversions.',
  },
  {
    question: 'How do I get my tracking referral link and banners?',
    answer:
      "Once you're approved and logged into your affiliate dashboard, you can generate tracking links and access our marketing materials library. We provide banners, landing pages, and promotional content in various sizes and languages.",
  },
]);

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
  return Math.max(0, testimonials.value.length - cardsPerView.value);
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

.carousel-controls {
  display: flex;
  gap: 12px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin: 0;
}

.faq-section .section-title {
  text-align: center;
  margin-bottom: 60px;
}

.faq-left .section-title {
  text-align: left;
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
  height: 40px;
  display: flex;
  align-items: center;
}

.brand-logo img {
  object-fit: contain;
}

.testimonial-text {
  font-family: Font, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  color: #e6e5ffa3;
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
.cards {
  display: flex;
  gap: 24px;
}

.quote-icon img {
  max-width: 32.3271484375px;
  max-height: 24.41628074645996px;
  opacity: 1;
}
@media (max-width: 1200px) {
  .testimonial-card {
    min-width: calc(50% - 12px);
  }

  .faq-right {
    flex: 0 0 300px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 80px 16px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .section-title {
    font-size: 36px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
  }

  .testimonial-card {
    min-width: 100%;
  }

  .testimonials-section {
    padding: 60px 20px 40px;
  }

  .faq-section .section-title {
    margin-bottom: 40px;
  }

  .faq-content {
    flex-direction: column;
    gap: 40px;
  }

  .faq-right {
    flex: 1;
    width: 100%;
  }

  .faq-left .section-title {
    text-align: center;
  }

  .faq-image {
    position: relative;
    top: 0;
    max-width: 400px;
    margin: 0 auto;
  }

  .faq-list {
    max-width: 100%;
  }

  .faq-item {
    padding: 24px;
  }
}
</style>
