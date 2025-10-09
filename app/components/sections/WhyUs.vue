<template>
  <section id="why-us" class="why-us-section">
    <div class="container">
      <h2 class="section-title">Why us</h2>

      <div class="content-wrapper">
        <!-- Декоративные элементы - 3 сердца -->
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

        <!-- Карточки преимуществ -->
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="card-icon">
              <img src="../../assets/images/payment.png" alt="payment" />
            </div>
            <h3>Payment methods</h3>
            <p>
              Choose from multiple payment options for a comfortable and safe deposit and withdrawal
              of your funds.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <img src="../../assets/images/Icon1.png" alt="payment" />
            </div>
            <h3>Personal manager</h3>
            <p>
              Every player is assigned a personal manager who will answer all your questions and
              offer the best bonuses.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <img src="../../assets/images/retencion.png" alt="retencion" />
            </div>
            <h3>Player retention</h3>
            <p>
              High conversion rates, low churn. Work with us - together we will succeed and achieve
              the best results.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <img src="../../assets/images/payment.png" alt="payment" />
            </div>
            <h3>TOP partnerships</h3>
            <p>
              We collaborate with top brands. Here are a few of them: Spin Casino, High Stakes,
              Royal Flush and more.
            </p>
          </div>
        </div>

        <!-- Кнопки действий -->
        <div class="action-buttons">
          <button class="btn-primary">
            <span>Become a partner</span>
          </button>
          <div class="btn-secondary">
            <span>Terms and conditions</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUsSection',
  mounted() {
    this.animateHearts();
  },
  methods: {
    animateHearts() {
      const hearts = document.querySelectorAll('.heart');
      hearts.forEach((heart, index) => {
        setTimeout(() => {
          heart.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
        }, index * 200);
      });
    },
  },
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

/* Сердца - декоративные элементы как фиксированный фон */
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

/* Desktop стили - фиксированные позиции */
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

/* Анимация плавания - только вертикальное движение */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Сетка преимуществ */
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
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.advantage-card h3 {
  font-family: Font, sans-serif;
  font-weight: 600;
  font-size: 20px;
  leading-trim: NONE;
  line-height: 138%;
  text-align: center;
}

.advantage-card p {
  font-family: Font, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 153%;
  text-align: center;
  color: #e6e5ffa3;
}

/* Кнопки действий */
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
}

.btn-primary span,
.btn-secondary span {
  font-family: Font, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
}

.btn-primary {
  background: #cd9f55;
  border: 1px solid #cd9f55;
}

.btn-secondary {
  background: transparent;
}

@media (max-width: 1440px) {
  .heart-1 {
    width: 377.25px;
    height: 377.25px;
    top: -45%;
    right: 0%;
    transform: rotate(350deg);
  }
}

/* Большие планшеты и маленькие десктопы (до 1200px) */
@media (max-width: 1200px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .heart-1 {
    width: 377.25px;
    height: 377.25px;
    top: -34%;
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
    bottom: -2%;
    right: -4%;
    transform: rotate(351deg);
  }
}

/* Планшеты (до 992px) */
@media (max-width: 992px) {
  .section-title {
    font-size: 42px;
  }

  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-card {
    padding: 35px 25px;
  }
}

/* Мобильные устройства (до 768px) */
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
    width: 771px;
    height: 771px;
    top: -29%;
    left: -37%;
    transform: rotate(6deg);
  }

  .heart-1 {
    width: 377.25px;
    height: 377.25px;
    top: 22%;
    right: -29%;
    transform: rotate(350deg);
  }

  .heart-3 {
    width: 394px;
    height: 379.77px;
    bottom: 1%;
    right: -26%;
    transform: rotate(351deg);
  }
}

/* Маленькие мобильные устройства (до 480px) */
@media (max-width: 480px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  .heart-2 {
    width: 771px;
    height: 771px;
    top: -29%;
    left: -58%;
    transform: rotate(6deg);
  }

  .advantage-card {
    padding: 30px 20px;
  }

  .card-icon {
    width: 50px;
    height: 50px;
  }
}

/* Очень маленькие экраны (до 360px) */
@media (max-width: 360px) {
  .advantage-card {
    padding: 25px 15px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 14px 30px;
    font-size: 14px;
  }
}
</style>
