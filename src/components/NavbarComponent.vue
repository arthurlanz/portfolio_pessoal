<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
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
            :class="{ 'active': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="nav-social">
          <a :href="social.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github :size="20" />
          </a>
          <a :href="social.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, Linkedin, Menu, X } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'

const social = personalInfo.social
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('inicio')

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Detectar seção ativa
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
  background-color: transparent;
  transition: var(--transition);
}

.navbar.scrolled {
  background-color: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(63, 63, 70, 0.5);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
}

.logo:hover {
  color: var(--accent-primary);
}

.bracket {
  color: var(--accent-primary);
}

.nav-links {
  display: none;
  gap: 2rem;
}

.nav-links a {
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-primary);
}

.nav-social {
  display: none;
  gap: 1rem;
}

.nav-social a {
  color: var(--text-secondary);
  transition: var(--transition);
}

.nav-social a:hover {
  color: var(--accent-primary);
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
}

/* Tablet */
@media (min-width: 768px) {
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

/* Mobile Menu */
@media (max-width: 767px) {
  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(9, 9, 11, 0.98);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(63, 63, 70, 0.5);
    padding: 1.5rem;
    gap: 1rem;
  }

  .nav-links a {
    font-size: 1rem;
    padding: 0.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .navbar-content {
    padding: 1.25rem 0;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .nav-links a {
    font-size: 1rem;
  }
}
</style>
