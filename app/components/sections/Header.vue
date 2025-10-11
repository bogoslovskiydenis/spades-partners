<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo" v-if="data">
        <img :src="data.logo" alt="Spades Partners" class="logo-image" />
      </div>

      <nav class="header-nav" :class="{ 'nav-open': isMobileMenuOpen }" v-if="data && data.menu">
        <a
          v-for="(item, index) in data.menu"
          :key="index"
          :href="item.permalink"
          class="nav-link"
          @click="scrollToSection(item.permalink)"
        >
          {{ item.title }}
        </a>
      </nav>

      <div class="header-actions">
        <button class="btn-login">Log in</button>

        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'is-open': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const scrollToSection = permalink => {
  event.preventDefault();
  closeMenu();

  const sectionId = permalink.replace('/#', '');
  const section = document.getElementById(sectionId);

  if (section) {
    const headerHeight = 80;
    const sectionTop = section.offsetTop - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #010101;
  backdrop-filter: blur(44px);
  height: 80px;
}

.header-container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  flex-shrink: 0;
}

.logo-image {
  height: 32px;
  width: auto;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 40px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #d4a574;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-login {
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-toggle.is-open span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.is-open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 1024px) {
  .header-nav {
    gap: 30px;
  }

  .nav-link {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 16px 16px;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .header-nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: rgba(1, 1, 1, 0.98);
    backdrop-filter: blur(44px);
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 40px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
  }

  .header-nav.nav-open {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 18px;
    width: 100%;
    text-align: left;
  }

  .btn-login {
    padding: 8px 20px;
    font-size: 14px;
  }

  .logo-image {
    height: 28px;
  }
}

@media (max-width: 480px) {
  .header {
    height: 70px;
  }

  .header-container {
    padding: 16px 16px;
  }

  .logo-image {
    height: 24px;
  }

  .btn-login {
    display: none;
  }

  .header-nav {
    width: 100%;
  }
}
</style>
