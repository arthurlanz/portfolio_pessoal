<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ClientWorkSection from './components/ClientWorkSection.vue'
import StackSection from './components/StackSection.vue'
import JourneySection from './components/JourneySection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ClientWorkSection />
    <StackSection />
    <JourneySection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
