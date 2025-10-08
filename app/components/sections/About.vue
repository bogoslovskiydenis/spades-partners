<template>
  <section id="about" class="about">
    <div class="about-container">
      <div class="about-header">
        <h2 class="about-title">About Spades Partners</h2>
        <p class="about-subtitle">Join our affiliate program and enjoy the benefits of working with real professionals.</p>
      </div>

      <div class="about-image">
        <img src="../../assets/images/about-laptop.png" alt="Casino laptop" class="laptop-image">
      </div>

      <div class="about-features">
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L8 14V24C8 33.94 14.72 43.12 24 46C33.28 43.12 40 33.94 40 24V14L24 4Z" stroke="#CD9F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 24V28" stroke="#CD9F55" stroke-width="2" stroke-linecap="round"/>
              <circle cx="24" cy="32" r="1.5" fill="#CD9F55"/>
            </svg>
          </div>
          <h3 class="feature-title">Technologies</h3>
          <p class="feature-description">We offer outstanding gambling experience and turn it into the best deal for every player, full of winning opportunities and fair outcomes. It will help you achieve the desired results in a short time.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="14" r="6" stroke="#CD9F55" stroke-width="2"/>
              <path d="M8 40C8 32.268 14.268 26 22 26H26C33.732 26 40 32.268 40 40" stroke="#CD9F55" stroke-width="2" stroke-linecap="round"/>
              <circle cx="34" cy="16" r="4" stroke="#CD9F55" stroke-width="2"/>
              <circle cx="14" cy="16" r="4" stroke="#CD9F55" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="feature-title">Professional team</h3>
          <p class="feature-description">Our experienced account managers are always ready to help you generate a substantial income. They can serve our clients in various languages and help increase their profits.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="12" width="36" height="28" rx="3" stroke="#CD9F55" stroke-width="2"/>
              <path d="M14 12V8C14 6.89543 14.8954 6 16 6H32C33.1046 6 34 6.89543 34 8V12" stroke="#CD9F55" stroke-width="2"/>
              <circle cx="24" cy="26" r="4" stroke="#CD9F55" stroke-width="2"/>
              <path d="M24 30V34" stroke="#CD9F55" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="feature-title">Newest games</h3>
          <p class="feature-description">We work with the most popular suppliers within the gaming industry to bring the latest online casino games, which make our gambling affiliate program stand out. Don't waste another minute, come and join us!</p>
        </div>
      </div>

      <div class="about-brand">
        <div class="brand-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M32 8L16 20V32C16 44.15 23.51 55.42 32 58C40.49 55.42 48 44.15 48 32V20L32 8Z" fill="url(#gold-gradient)"/>
            <defs>
              <linearGradient id="gold-gradient" x1="16" y1="8" x2="48" y2="58" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E0B180"/>
                <stop offset="1" stop-color="#CD9F55"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="brand-content">
          <h3 class="brand-title">International brand</h3>
          <p class="brand-description">Spades Partners is a stable and quickly growing company. We are officially licenced and a reliable partner in the field of online gambling.</p>
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
  padding: 100px 0;
}

.about-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

.about-header {
  text-align: center;
  margin-bottom: 80px;
}

.about-title {
  font-size: 48px;
  font-weight: 600;
  color: #FFFFFF;
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
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-image {
  width: 100%;
  max-width: 900px;
  height: auto;
  filter: drop-shadow(0 20px 60px rgba(205, 159, 85, 0.3));
}

.about-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(205, 159, 85, 0.3);
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(205, 159, 85, 0.1);
  border-radius: 50%;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.about-brand {
  display: flex;
  align-items: center;
  gap: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 50px;
}

.brand-icon {
  flex-shrink: 0;
}

.brand-content {
  flex: 1;
}

.brand-title {
  font-size: 28px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
}

.brand-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

@media (max-width: 1024px) {
  .about-container {
    padding: 0 40px;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .about-title {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 80px 0;
  }

  .about-container {
    padding: 0 20px;
  }

  .about-header {
    margin-bottom: 60px;
  }

  .about-title {
    font-size: 36px;
  }

  .about-image {
    margin-bottom: 60px;
  }

  .about-features {
    margin-bottom: 60px;
  }

  .feature-card {
    padding: 30px 24px;
  }

  .about-brand {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }

  .brand-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 60px 0;
  }

  .about-title {
    font-size: 28px;
  }

  .about-subtitle {
    font-size: 14px;
  }

  .feature-title {
    font-size: 20px;
  }

  .feature-description {
    font-size: 14px;
  }

  .brand-title {
    font-size: 20px;
  }

  .brand-description {
    font-size: 14px;
  }
}
</style>