<template>
  <section class="why-us-section">
    <div class="container">
      <h2 class="section-title">Why us</h2>

      <div class="content-wrapper">
        <!-- Декоративные элементы - 3 сердца -->
        <div class="hearts-container">
          image 4.png
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Payment methods</h3>
            <p>
              Choose from multiple payment options for a comfortable and safe deposit and withdrawal
              of your funds.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Personal manager</h3>
            <p>
              Every player is assigned a personal manager who will answer all your questions and
              offer the best bonuses.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Player retention</h3>
            <p>
              High conversion rates, low churn. Work with us - together we will succeed and achieve
              the best results.
            </p>
          </div>

          <div class="advantage-card">
            <div class="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
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
          <button class="btn-secondary">
            <span>Terms and conditions</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUsSection',
  mounted() {
    // Здесь можно добавить анимации для сердец
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
  background: linear-gradient(180deg, #000000 0%, #1a1a1a 100%);
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
  text-transform: none;
}

.content-wrapper {
  position: relative;
}

/* Сердца - декоративные элементы */
.hearts-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.heart {
  position: absolute;
  opacity: 0.6;
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
  opacity: 1;
}

.heart-2 {
  top: -400px;
  left: -250px;
  transform: rotate(6deg);
  width: 771px;
  height: 771px;
  opacity: 1;
}

.heart-3 {
  width: 394px;
  height: 379.77px;
  bottom: -160px;
  right: -4%;
  transform: rotate(351deg);
  opacity: 1;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotate, 0deg));
  }
  50% {
    transform: translateY(-20px) rotate(var(--rotate, 0deg));
  }
}

/* Сетка преимуществ */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.advantage-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px 30px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.advantage-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(218, 165, 32, 0.5);
  transform: translateY(-5px);
}

.card-icon {
  width: 60px;
  height: 60px;
  background: rgba(218, 165, 32, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #daa520;
}

.advantage-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
}

.advantage-card p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

/* Кнопки действий */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #daa520 0%, #ffd700 100%);
  color: #000000;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(218, 165, 32, 0.4);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.btn-secondary:hover {
  border-color: rgba(218, 165, 32, 0.5);
  background: rgba(218, 165, 32, 0.1);
}

/* Адаптивность */
@media (max-width: 768px) {
  .why-us-section {
    padding: 60px 15px;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 50px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .heart-1 {
    width: 200px !important;
    height: 200px !important;
  }

  .heart-2 {
    width: 400px !important;
    height: 400px !important;
  }

  .heart-3 {
    width: 180px !important;
    height: 180px !important;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
