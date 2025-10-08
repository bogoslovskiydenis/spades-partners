<template>
  <section id="about" class="about">
    <div class="about-container">
      <div class="about-header">
        <h2 class="about-title">About Spades Partners</h2>
        <p class="about-subtitle">
          Join our affiliate program and enjoy the benefits of working with real professionals.
        </p>
      </div>

      <div class="about-image">
        <img src="../../assets/images/about-laptop.png" alt="Casino laptop" class="laptop-image" />
      </div>

      <div class="about-features">
        <div class="feature-card">
          <h3 class="feature-title">Technologies</h3>
          <p class="feature-description">
            We offer outstanding gambling experience and turn it into the best deal for every
            player, full of winning opportunities and fair outcomes. It will help you achieve the
            desired results in a short time.
          </p>
        </div>

        <div class="feature-card">
          <h3 class="feature-title">Professional team</h3>
          <p class="feature-description">
            Our experienced account managers are always ready to help you generate a substantial
            income. They can serve our clients in various languages and help increase their profits.
          </p>
        </div>

        <div class="feature-card">
          <h3 class="feature-title">Newest games</h3>
          <p class="feature-description">
            We work with the most popular suppliers within the gaming industry to bring the latest
            online casino games, which make our gambling affiliate program stand out. Don't waste
            another minute, come and join us!
          </p>
        </div>
      </div>

      <!-- Новая секция: картинка слева, текст справа -->
      <div class="benefits-wrapper">
        <div class="benefits-image">
          <img src="../../assets/images/imgSPServer.png" alt="Spades 3D" class="spade-image" />
        </div>

        <div class="benefits-list">
          <div class="benefit-item">
            <div class="benefit-header">
              <div class="benefit-icon">
                <img src="../../assets/images/Globe.png" alt="Globe icon" />
              </div>
              <h3 class="benefit-title">International brand</h3>
            </div>
            <p class="benefit-description">
              Spades Partners is a stable and quickly growing company. We are officially licenced
              and a reliable partner.
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-header">
              <div class="benefit-icon">
                <img src="../../assets/images/Vector.png" alt="Vector icon" />
              </div>
              <h3 class="benefit-title">Super Smart Search</h3>
            </div>
            <p class="benefit-description">
              Revenue share, Hybrid and CPA deals. Personally tailored proposals to meet your needs.
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-header">
              <div class="benefit-icon">
                <img src="../../assets/images/Gear.png" alt="Gear icon" />
              </div>
              <h3 class="benefit-title">Control everything in one place</h3>
            </div>
            <p class="benefit-description">
              Our retention team makes sure you get the most of your traffic!
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-header">
              <div class="benefit-icon">
                <img src="../../assets/images/Chart.png" alt="Chart icon" />
              </div>
              <h3 class="benefit-title">Work better together</h3>
            </div>
            <p class="benefit-description">
              Fast and respectful. Always ready to provide you with top-notch assets and marketing
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент About секции
</script>

<style scoped>
.about {
  width: 100%;
  background: #010101;
}

.about-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px 80px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.about-title {
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.about-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.about-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-image {
  width: 100%;
  height: auto;
}

.about-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  max-width: 368px;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Новая секция с картинкой слева и текстом справа */
.benefits-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spade-image {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.benefits-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.benefit-item {
  max-width: 413px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.benefit-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.benefit-title {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.4;
}

.benefit-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Медиа-запросы для about-features и benefits-list */
@media (max-width: 900px) {
  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-items: center;
  }

  .feature-card:last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }

  /* benefits-list теперь в 2 колонки */
  .benefits-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 40px;
  }
}

@media (max-width: 1024px) {
  .benefits-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about-title {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 80px 16px;
  }

  .about-title {
    font-size: 36px;
  }

  .about-features {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }

  .feature-card:last-child {
    grid-column: auto;
  }

  .benefits-wrapper {
    gap: 40px;
  }

  /* benefits-list снова в 1 столбец */
  .benefits-list {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .feature-card {
    padding: 30px 24px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 28px;
  }

  .about-subtitle {
    font-size: 14px;
  }

  .benefit-title {
    font-size: 16px;
  }

  .benefit-description {
    font-size: 13px;
  }

  .feature-title {
    font-size: 20px;
  }

  .feature-description {
    font-size: 14px;
  }
}
</style>
