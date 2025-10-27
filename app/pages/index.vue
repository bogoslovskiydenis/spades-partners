<template>
  <div class="landing">
    <Header />

    <main>
      <Header />
      <Hero />
      <Company />
      <WhyUs />
      <Comissions />
      <About />
      <Testimonials />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue';
import Header from '../components/sections/Header.vue';
import Company from '../components/sections/Company.vue';
import About from '../components/sections/About.vue';
import WhyUs from '../components/sections/WhyUs.vue';
import Comissions from '../components/sections/Comissions.vue';
import OurBrands from '../components/sections/OurBrands.vue';
import Testimonials from '../components/sections/Testimonials.vue';
import Contact from '../components/sections/Contact.vue';
</script>

<style scoped>
.landing {
  min-height: 100vh;
}

main {
  overflow-x: hidden;
}
</style>
