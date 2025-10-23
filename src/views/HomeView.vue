<template>
  <div class="home">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Hero from '../components/HeroComponent.vue'
import About from '../components/AboutComponent.vue'
import Projects from '../components/ProjectsComponent.vue'
import Skills from '../components/SkillsComponent.vue'
import Education from '../components/EducationComponent.vue'
import Contact from '../components/ContactComponent.vue'
import Footer from '../components/FooterComponent.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: var(--bg-primary);
}
</style>
