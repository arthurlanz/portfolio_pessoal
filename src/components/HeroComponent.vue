<template>
  <section id="inicio" class="hero">
    <div class="cursor-glow" :style="cursorGlowStyle"></div>

    <div class="container">
      <div class="hero-content">
        <p class="intro-text fade-in-up">Olá, meu nome é</p>
        <h1 class="hero-title fade-in-up" style="animation-delay: 0.1s">
          <span class="glitch-text" data-text="Arthur Lanznaster">
            {{ personalInfo.name }}
          </span>
        </h1>
        <h2 class="hero-subtitle fade-in-up typing-effect" style="animation-delay: 0.2s">
          {{ displayedRole }}
          <span class="cursor-blink">|</span>
        </h2>
        <p class="hero-description fade-in-up" style="animation-delay: 0.3s">
          {{ personalInfo.description }}
        </p>
        <div class="hero-actions fade-in-up" style="animation-delay: 0.4s">
          <a href="#projetos" class="btn btn-primary magnetic-effect glow-effect">
            Ver Projetos
            <ArrowRight :size="20" class="arrow-icon" />
          </a>
          <a href="#contato" class="btn btn-secondary magnetic-effect">
            Contato
          </a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'
import { useMagneticEffect } from '../composables/useMagneticEffect'

useMagneticEffect(0.3)

const mousePosition = ref({ x: 0, y: 0 })
const displayedRole = ref('')
const roles = ['Desenvolvedor em Formação', 'Frontend Developer', 'Vue.js Enthusiast']
let roleIndex = 0
let charIndex = 0
let isDeleting = false

const cursorGlowStyle = ref({
  left: '-192px',
  top: '-192px'
})

const handleMouseMove = (e) => {
  mousePosition.value = { x: e.clientX, y: e.clientY }
  cursorGlowStyle.value = {
    left: `${e.clientX - 192}px`,
    top: `${e.clientY - 192}px`
  }
}

const typeEffect = () => {
  const currentRole = roles[roleIndex]

  if (isDeleting) {
    displayedRole.value = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayedRole.value = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = 100

  if (isDeleting) {
    typeSpeed /= 2
  }

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  setTimeout(typeEffect, 1000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
}

.cursor-glow {
  position: fixed;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 64rem;
}

.intro-text {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.1;
}

.glitch-text {
  position: relative;
  display: inline-block;
}


.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  line-height: 1.2;
  min-height: 2.5rem;
}

.cursor-blink {
  animation: pulse 1s infinite;
  color: var(--text-primary);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 42rem;
  margin-bottom: 3rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 2px;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background-color: var(--text-primary);
  color: var(--bg-primary);
}

.btn-primary:hover {
  background-color: var(--text-secondary);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.btn-primary .arrow-icon {
  transition: var(--transition);
}

.btn-primary:hover .arrow-icon {
  transform: translateX(4px);
}

.btn-secondary {
  border: 1px solid var(--text-primary);
  color: var(--text-primary);
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-tertiary);
  font-size: 0.75rem;
  animation: float 3s ease-in-out infinite;
}

.mouse {
  width: 24px;
  height: 36px;
  border: 2px solid var(--text-primary);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 3px;
  height: 8px;
  background: var(--text-primary);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-down 1.5s infinite;
}

@keyframes scroll-down {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(12px);
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .intro-text {
    font-size: 1rem;
  }

  .hero-title {
    font-size: 4rem;
  }

  .hero-subtitle {
    font-size: 3rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 5rem;
  }

  .hero-subtitle {
    font-size: 4rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
