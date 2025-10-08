<template>
  <section class="hero">
    <div class="hero-background">
      <video autoplay loop muted playsinline>
        <source src="../../assets/videos/SP_HeroAnim.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="hero-content">
      <!-- Верхняя часть с текстом -->
      <div class="hero-top">
        <h1 class="hero-title">
          <span class="title-quality">Quality</span>
          <span class="title-specialty">is our specialty</span>
        </h1>

        <p class="hero-description">
          Join Spades Partners program today and work with one of the best affiliates in the online
          casino market.
        </p>
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

        <div class="hero-steps">
          <div class="step">
            <div class="step-icon">
              <img src="./../../assets/images/Icon1.png" />
              <p class="step-text">1. Register on a website</p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img src="./../../assets/images/Icon2.png" />
              <p class="step-text">2. Create a partner account</p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img src="./../../assets/images/Icon3.png" />
              <p class="step-text">3. Start to promote</p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img src="./../../assets/images/Icon4.png" />
              <p class="step-text">4. Earn lifetime revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  width: 100vw;
  height: 100vh;
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

.hero-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 80px 0;
  max-width: 1440px;
  margin: 0 auto;
}

/* Верхняя часть с текстом */
.hero-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.hero-title {
  font-size: 64px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 24px;
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

/* Нижняя часть с кнопкой и шагами */
.hero-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  width: 100%;
}

.hero-button {
  background: linear-gradient(135deg, #d4a574 0%, #b8935f 100%);
  color: #1a1a1a;
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

.hero-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1280px;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 144px;
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
}

.step-text {
  font-family: Font/Text, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  text-align: center;
  color: #e6e5ffa3;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 52px;
  }

  .hero-bottom {
    gap: 35px;
  }

  .hero-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-top {
    flex: 0;
  }

  .hero-title {
    font-size: 42px;
    margin-bottom: 20px;
    white-space: normal;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-button {
    padding: 16px 36px;
    font-size: 15px;
  }

  .hero-bottom {
    gap: 30px;
  }

  .hero-steps {
    gap: 16px;
  }

  .step {
    height: 120px;
    padding: 24px 12px;
  }

  .hero-content {
    padding: 80px 16px 0;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 80px 16px 0;
  }

  .hero-top {
    flex: 1;
  }

  .hero-title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-button {
    padding: 14px 30px;
    font-size: 14px;
  }

  .hero-bottom {
    gap: 24px;
    flex: 0;
  }

  .hero-steps {
    grid-template-columns: 1fr;
    gap: 8px;
    max-width: 343px;
  }

  .step {
    width: 100%;
    height: 64px;
    min-width: 244px;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .step-text {
    text-align: left;
  }
}
</style>
