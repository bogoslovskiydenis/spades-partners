<template>
  <div class="landing">
    <Header />

    <main>
      <Header/>
      <Hero />
      <About/>

    </main>

    <Footer />
  </div>
</template>

<script setup>
import Hero from "../components/sections/Hero.vue";
import Header from "../components/sections/Header.vue";
import About from "../components/sections/About.vue";
</script>

<style scoped>
.landing {
  min-height: 100vh;
}

main {
  overflow-x: hidden;
}
</style>