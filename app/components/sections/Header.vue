<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo" @click="goToHome">
        <img src="../../assets/SpadesPartnersLogo.svg" alt="Spades Partners" class="logo-image" />
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

        <!-- Contact us link in navigation -->
        <a
          v-if="data.text_button_contacts && data.link_button_contacts"
          :href="data.link_button_contacts"
          class="nav-link"
          @click="scrollToSection(data.link_button_contacts)"
        >
          {{ data.text_button_contacts }}
        </a>
      </nav>

      <div class="header-actions">
        <!-- Login and Sign up buttons -->
        <div class="auth-buttons" v-if="data && data.ref_1 && data.ref_2">
          <a :href="getFullUrl(data.ref_1)" class="auth-button login-button">Log in</a>
          <a :href="getFullUrl(data.ref_2)" class="auth-button signup-button">Sign up</a>
        </div>

       

        <button
          v-if="data && data.menu"
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
const data = computed(() => {
  try {
    return pageData.value;
  } catch (error) {
    console.warn('Header: Error getting page data:', error);
    return null;
  }
});

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

const goToHome = () => {
  closeMenu();

  // Check if we're on the home page
  if (window.location.pathname === '/' || window.location.pathname === '') {
    // Already on home page, scroll to hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  } else {
    // Navigate to home page
    window.location.href = '/';
  }
};

const getFullUrl = (url) => {
  if (!url) return '#';
  
  // If URL already has protocol, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Add https:// protocol if missing
  return `https://${url}`;
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
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.header-logo:hover {
  opacity: 0.8;
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

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.auth-button {
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #B7C8FF14;
  backdrop-filter: blur(44px);
}

.auth-button:hover {
  background: rgba(183, 200, 255, 0.25);
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

  /* Keep auth buttons visible on mobile */
  .auth-buttons {
    display: flex;
    gap: 8px;
  }

  .auth-button {
    padding: 8px 16px;
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

  .header-nav {
    width: 100%;
  }
}
</style>
