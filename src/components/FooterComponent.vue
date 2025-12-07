<template>
  <footer class="footer">
    <div class="footer-gradient"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-logo">
            <span class="bracket">&lt;</span>
            AL
            <span class="bracket">/&gt;</span>
          </div>
          <div class="footer-text">
            © {{ currentYear }} Arthur Lanznaster. Desenvolvido com Vue.js
          </div>
        </div>
        <div class="footer-social">
          <a
            :href="social.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="social-link magnetic-effect"
          >
            <Github :size="18" />
          </a>
          <a
            :href="social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="social-link magnetic-effect"
          >
            <Linkedin :size="18" />
          </a>
          <a
            :href="social.instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="social-link magnetic-effect"
          >
            <Instagram :size="18" />
          </a>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <button @click="scrollToTop" class="back-to-top magnetic-effect">
          <ArrowUp :size="20" />
          <span>Voltar ao topo</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'
import { useMagneticEffect } from '../composables/useMagneticEffect'

useMagneticEffect(0.2)

const social = personalInfo.social
const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 10;
  padding: 3rem 0 2rem;
  background-color: var(--bg-primary);
  margin-top: 8rem;
}

.footer-gradient {
  position: absolute;
  top: -8rem;
  left: 0;
  right: 0;
  height: 8rem;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.6) 60%,
    var(--bg-primary) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.bracket {
  color: var(--text-secondary);
}

.footer-text {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  text-align: center;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--text-tertiary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--text-primary);
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px) rotate(360deg);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: center;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  color: var(--text-primary);
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.back-to-top svg {
  transition: transform 0.3s ease;
}

.back-to-top:hover svg {
  transform: translateY(-3px);
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }

  .footer-left {
    align-items: flex-start;
  }

  .footer-text {
    text-align: left;
  }
}
</style>
