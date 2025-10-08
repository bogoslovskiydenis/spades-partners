<template>
  <section id="brands" class="our-brands">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our brands</h2>
      </div>

      <div class="brands-grid">
        <!-- Left Card - Spin Casino -->
        <div class="brand-card brand-card-image">
          <img src="../../assets/images/Cover.png" alt="Spin Casino" class="card-image" />
        </div>

        <!-- Right Card - Spin Empire -->
        <div class="brand-card brand-card-content">
          <div class="brand-logo">
            <img src="../../assets/images/seLogo.png" alt="Spin Empire" />
          </div>

          <p class="brand-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <button class="visit-button">
            Visit
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Здесь можно добавить логику, если понадобится
</script>

<style scoped>
.our-brands {
  background-color: #000000;
  color: #ffffff;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
  padding: 80px 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #f2f2ff;
}

.brands-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: stretch;
}

.brand-card {
  border-radius: 12px;
  overflow: hidden;
  background-color: #0a0a0a;
}

.brand-card-image {
  position: relative;
  min-height: 400px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-card-content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-logo {
  margin-bottom: 30px;
}

.brand-logo img {
  height: 50px;
  width: auto;
}

.brand-description {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 30px 0;
}

.visit-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.visit-button svg {
  transition: transform 0.3s ease;
}

.visit-button:hover svg {
  transform: translateX(4px);
}
@media (max-width: 768px) {
  .container {
    padding: 80px 16px;
  }
}
/* Responsive */
@media (max-width: 968px) {
  .brands-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 36px;
  }

  .brand-card-image {
    min-height: 300px;
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 32px;
  }

  .brand-card-content {
    padding: 30px 20px;
  }
}
</style>
