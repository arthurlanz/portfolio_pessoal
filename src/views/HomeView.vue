<template>
  <div class="home">
    <InteractiveBackground />
    <ParticlesBackground />
    <NavbarComponent />
    <HeroComponent />
    <AboutComponent />
    <ProjectsComponent />
    <SkillsComponent />
    <EducationComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import InteractiveBackground from '../components/InteractiveBackgroundComponent.vue'
import ParticlesBackground from '../components/ParticlesBackgroundComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import HeroComponent from '../components/HeroComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'
import SkillsComponent from '../components/SkillsComponent.vue'
import EducationComponent from '../components/EducationComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { useParallax } from '../composables/useParallax'
import { useMouseTrail } from '../composables/useMouseTrail'

useParallax()
useMouseTrail()

onMounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
}
</style>
