<template>
  <section id="comissions" class="commissions">
    <div class="commissions-container">
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
// Компонент Commissions секции
</script>

<style scoped>
.commissions {
  width: 100%;
  background: #010101;
}

.commissions-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px;
}

/* Секция с картинкой слева и текстом справа */
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

/* Добавляем адаптивность для главной картинки */
.spade-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.benefits-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
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

/* Respons для 1024px */
@media (max-width: 1024px) {
  .benefits-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .benefits-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .commissions-container {
    padding: 80px 16px;
  }

  .benefits-wrapper {
    gap: 40px;
  }

  /* benefits-list снова в 1 столбец */
  .benefits-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 56px 48px;
  }

  /* Дополнительно ограничиваем картинку на планшетах */
  .benefits-image {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .benefits-list {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .benefit-title {
    font-size: 16px;
  }

  .benefit-description {
    font-size: 13px;
  }

  /* На мобильных делаем картинку еще меньше */
  .benefits-image {
    max-width: 100%;
  }

  .benefit-item {
    max-width: 100%;
  }
}
</style>
