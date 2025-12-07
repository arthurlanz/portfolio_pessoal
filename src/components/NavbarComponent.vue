<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="navbar-wrapper">
      <div class="container">
        <div class="navbar-content">
          <a href="#inicio" class="logo">
            <span class="bracket">&lt;</span>
            AL
            <span class="bracket">/&gt;</span>
          </a>

          <div class="nav-links" :class="{ 'active': isMenuOpen }">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click="closeMenu"
              :class="['nav-link', { 'active': activeSection === item.id }]"
            >
              {{ item.label }}
            </a>
          </div>

          <div class="nav-social">
            <a
              :href="social.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="social-link magnetic-effect"
            >
              <Github :size="20" />
            </a>
            <a
              :href="social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="social-link magnetic-effect"
            >
              <Linkedin :size="20" />
            </a>
          </div>

          <button
            class="menu-toggle"
            @click="toggleMenu"
            aria-label="Menu"
          >
            <Menu v-if="!isMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
      <div class="nav-progress" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, Linkedin, Menu, X } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'
import { useMagneticEffect } from '../composables/useMagneticEffect'

useMagneticEffect(0.2)

const social = personalInfo.social
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('inicio')
const scrollProgress = ref(0)

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'educacao', label: 'Educação' },
  { id: 'contato', label: 'Contato' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / windowHeight) * 100

  const sections = navItems.map(item => item.id)
  const current = sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    }
    return false
  })
  if (current) activeSection.value = current
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75rem 1rem;
  transition: padding 0.3s ease;
}

.navbar.scrolled {
  padding: 0.5rem 1rem;
}

.navbar-wrapper {
  background-color: transparent;
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.navbar.scrolled .navbar-wrapper {
  background-color: rgba(0, 0, 0, 0.342);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  transition: padding 0.3s ease;
}

.navbar.scrolled .navbar-content {
  padding: 0.4rem 1.5rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
}

.logo:hover {
  color: var(--text-secondary);
  transform: translateY(-2px);
}

.bracket {
  color: var(--text-primary);
  transition: transform 0.3s ease;
  display: inline-block;
}

.logo:hover .bracket:first-child {
  transform: translateX(-3px);
}

.logo:hover .bracket:last-child {
  transform: translateX(3px);
}

.nav-links {
  display: none;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transition);
  padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--text-primary);
  transition: width 0.3s ease;
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-social {
  display: none;
  gap: 1rem;
}

.social-link {
  color: var(--text-secondary);
  transition: var(--transition);
  padding: 0.5rem;
  border-radius: 4px;
}

.social-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  transition: var(--transition);
}

.menu-toggle:hover {
  color: var(--text-secondary);
}

.nav-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1));
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  border-radius: 0 0 12px 12px;
}

@media (min-width: 768px) {
  .navbar {
    padding: 0.75rem 2rem;
  }

  .navbar.scrolled {
    padding: 0.5rem 2rem;
  }

  .nav-links {
    display: flex;
  }

  .nav-social {
    display: flex;
  }

  .menu-toggle {
    display: none;
  }
}

@media (min-width: 1024px) {
  .navbar {
    padding: 0.75rem 3rem;
  }

  .navbar.scrolled {
    padding: 0.5rem 3rem;
  }

  .navbar-content {
    padding: 0.6rem 2rem;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}

@media (min-width: 1440px) {
  .navbar {
    padding: 0.75rem 4rem;
  }

  .navbar.scrolled {
    padding: 0.5rem 4rem;
  }
}

@media (max-width: 767px) {
  .navbar {
    padding: 0.75rem 0.75rem;
  }

  .navbar.scrolled {
    padding: 0.5rem 0.75rem;
  }

  .navbar-content {
    padding: 0.4rem 1rem;
  }

  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    gap: 1rem;
    animation: slideDown 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  }

  .nav-link {
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 8px;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
