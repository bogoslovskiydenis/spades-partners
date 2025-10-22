<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section" v-if="data">
        <div class="logo">
          <img :src="data.logo" alt="Spades Partners" />
        </div>
        <p class="description">{{ data.footer_text }}</p>
        <p class="copyright">{{ data.footer_sub_text }}</p>
      </div>

      <div class="footer-section contact-section" v-if="data">
        <a :href="`mailto:${data.email}`" class="email">{{ data.email }}</a>

        <div class="social-links" v-if="data.social">
          <a
            v-for="(item, index) in data.social"
            :key="index"
            :href="item.link"
            class="social-link"
            :aria-label="item.link"
          >
            <img :src="item.icon" :alt="item.link" class="social-icon" />
          </a>
        </div>

        <div class="footer-links" v-if="data.footer_menu">
          <div class="footer-links">
            <NuxtLink to="/policy">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms">Terms and conditions</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 60px 20px 40px;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 280px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.logo img {
  height: 32px;
  width: auto;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #999;
  margin-bottom: 40px;
  max-width: 450px;
}

.copyright {
  font-size: 13px;
  color: #666;
}

.contact-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.email {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 30px;
  transition: color 0.3s ease;
}

.email:hover {
  color: #c9a05f;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #c9a05f;
  transform: translateY(-3px);
}

.social-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.footer-links {
  display: flex;
  gap: 24px;
  font-size: 14px;
}

.footer-links a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #c9a05f;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }

  .contact-section {
    align-items: flex-start;
    text-align: left;
  }

  .footer-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
