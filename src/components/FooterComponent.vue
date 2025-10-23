<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          © {{ currentYear }} Arthur Lanznaster. Desenvolvido com Vue.js
        </div>
        <div class="footer-social">
          <a
            :href="social.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github :size="18" />
          </a>
          <a
            :href="social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin :size="18" />
          </a>
          <a
            :href="social.instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram :size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Instagram } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'

const social = personalInfo.social
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 10;
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  background-color: var(--bg-primary);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-text {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social a {
  color: var(--text-tertiary);
  transition: var(--transition);
}

.footer-social a:hover {
  color: var(--accent-primary);
}

/* Tablet e Desktop */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }
}
</style>
