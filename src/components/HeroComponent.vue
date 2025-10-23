<template>
  <section id="inicio" class="hero">
    <div class="cursor-glow" :style="cursorGlowStyle"></div>

    <div class="container">
      <div class="hero-content">
        <p class="intro-text fade-in-up">Olá, meu nome é</p>
        <h1 class="hero-title fade-in-up" style="animation-delay: 0.1s">
          {{ personalInfo.name }}
        </h1>
        <h2 class="hero-subtitle fade-in-up" style="animation-delay: 0.2s">
          {{ personalInfo.role }}
        </h2>
        <p class="hero-description fade-in-up" style="animation-delay: 0.3s">
          {{ personalInfo.description }}
        </p>
        <div class="hero-actions fade-in-up" style="animation-delay: 0.4s">
          <a href="#projetos" class="btn btn-primary">
            Ver Projetos
            <ArrowRight :size="20" class="arrow-icon" />
          </a>
          <a href="#contato" class="btn btn-secondary">
            Contato
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'

const mousePosition = ref({ x: 0, y: 0 })

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

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
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
  overflow: hidden;
}

.cursor-glow {
  position: fixed;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 64rem;
}

.intro-text {
  color: var(--accent-primary);
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

.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  line-height: 1.2;
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
}

.btn-primary {
  background-color: var(--accent-primary);
  color: var(--text-primary);
}

.btn-primary:hover {
  background-color: var(--accent-secondary);
  transform: translateY(-2px);
}

.btn-primary .arrow-icon {
  transition: var(--transition);
}

.btn-primary:hover .arrow-icon {
  transform: translateX(4px);
}

.btn-secondary {
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: rgba(168, 85, 247, 0.1);
}

/* Tablet */
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

/* Desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 5rem;
  }

  .hero-subtitle {
    font-size: 4rem;
  }
}

/* Mobile pequeno */
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
