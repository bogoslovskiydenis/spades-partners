<template>
  <section class="hero">
    <div class="hero-background">
      <img src="../../assets/images/SP_HeroBG.png" alt="" />
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <!-- Верхняя часть с текстом -->
        <div class="hero-top" v-if="data">
          <h1 class="hero-title">
            <span v-for="(part, index) in parsedTitle" :key="index" :class="part.class">
              {{ part.text }}
            </span>
          </h1>

          <p class="hero-description">
            {{ data.hero_sub_title }}
          </p>
        </div>

        <!-- Анимированная картинка пик -->
        <div class="hero-spades">
          <img src="../../assets/images/SP_HeroSpades.png" alt="Spades" class="spades-image" />
        </div>

        <!-- Нижняя часть с кнопкой и шагами -->
        <div class="hero-bottom">
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

          <div class="hero-steps" v-if="data && data.hero_box">
            <div class="step" v-for="(step, index) in data.hero_box" :key="index">
              <div class="step-icon">
                <img :src="step.icon" :alt="step.text" />
              </div>
              <p class="step-text">{{ step.text }}</p>
            </div>
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

const parsedTitle = computed(() => {
  if (!data.value || !data.value.hero_title) return [];

  const htmlString = data.value.hero_title;
  const result = [];

  // Ищем содержимое внутри <span>...</span>
  const spanMatch = htmlString.match(/<span[^>]*>(.*?)<\/span>/);

  if (spanMatch) {
    // Текст внутри <span> - это "Quality"
    result.push({
      text: spanMatch[1],
      class: 'title-quality',
    });

    // Текст после </span> - это "is our specialty"
    const afterSpan = htmlString.split('</span>')[1];
    if (afterSpan && afterSpan.trim()) {
      result.push({
        text: afterSpan.trim(),
        class: 'title-specialty',
      });
    }
  } else {
    // Если нет <span>, весь текст будет specialty
    result.push({
      text: htmlString,
      class: 'title-specialty',
    });
  }

  return result;
});

const handleBecomePartner = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #010101;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.hero-background::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(
    to top,
    rgba(1, 1, 1, 0.9) 0%,
    rgba(1, 1, 1, 0.6) 50%,
    transparent 100%
  );
  z-index: 2;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px;
  box-sizing: border-box;
}

.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 16px;
}

.hero-title {
  font-size: 64px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
}

.title-quality {
  color: #cd9f55;
}

.title-specialty {
  color: #f2f2ff;
}

.hero-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  text-align: center;
  color: rgba(230, 229, 255, 0.64);
  margin: 0;
  max-width: 600px;
}

.hero-spades {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.spades-image {
  max-width: 50%;
  height: auto;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.hero-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  width: 100%;
  padding-bottom: 40px;
}

.hero-button {
  position: relative;
  background: #cd9f55;
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

.hero-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-height: 144px;
  padding: 32px 16px;
  background: rgba(183, 200, 255, 0.04);
  backdrop-filter: blur(44px);
  border-radius: 24px;
  transition: all 0.3s ease;
}

.step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-icon img {
  max-width: 100%;
  height: auto;
}

.step-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  text-align: center;
  color: #e6e5ffa3;
  margin: 0;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 52px;
  }

  .hero-bottom {
    gap: 50px;
  }

  .hero-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .spades-image {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 80px 24px;
  }

  .hero-title {
    font-size: 38px;
    white-space: normal;
  }

  .hero-description {
    font-size: 14px;
    max-width: 90%;
  }

  .spades-image {
    max-width: 70%;
  }

  .hero-button {
    padding: 15px 34px;
    font-size: 14px;
  }

  .hero-bottom {
    gap: 35px;
    padding-bottom: 20px;
  }

  .hero-steps {
    gap: 14px;
  }

  .step {
    min-height: 110px;
    padding: 20px 12px;
  }

  .step-text {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 80px 16px;
  }

  .hero-title {
    font-size: 26px;
    line-height: 1.25;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.45;
    max-width: 100%;
    padding: 0 5px;
  }

  .spades-image {
    max-width: 60%;
  }

  .hero-button {
    padding: 13px 30px;
    font-size: 13px;
    white-space: nowrap;
  }

  .hero-bottom {
    gap: 24px;
    padding-bottom: 16px;
  }

  .hero-steps {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .step {
    width: 100%;
    min-height: 56px;
    height: 56px;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 14px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .step-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  .step-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .step-text {
    text-align: left;
    font-size: 12px;
    line-height: 1.35;
    flex: 1;
  }
}
</style>
