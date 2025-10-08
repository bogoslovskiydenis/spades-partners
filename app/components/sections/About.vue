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

          <h3 class="feature-title">Technologies</h3>
          <p class="feature-description">We offer outstanding gambling experience and turn it into the best deal for every player, full of winning opportunities and fair outcomes. It will help you achieve the desired results in a short time.</p>
        </div>

        <div class="feature-card">

          <h3 class="feature-title">Professional team</h3>
          <p class="feature-description">Our experienced account managers are always ready to help you generate a substantial income. They can serve our clients in various languages and help increase their profits.</p>
        </div>

        <div class="feature-card">

          <h3 class="feature-title">Newest games</h3>
          <p class="feature-description">We work with the most popular suppliers within the gaming industry to bring the latest online casino games, which make our gambling affiliate program stand out. Don't waste another minute, come and join us!</p>
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
  padding: 142px 0;
}

.about-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
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
  height: auto;
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
    padding: 64px 0;
  }
  .about-container {
    padding: 0 16px;
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