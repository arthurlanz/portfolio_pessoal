<template>
  <section id="contato" class="contact">
    <div class="container">
      <div class="contact-content">
        <h2 class="section-title">
          <span class="section-number">04.</span> Vamos Trabalhar Juntos?
        </h2>
        <p class="contact-description">
          Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto em mente
          ou apenas quer trocar uma ideia, ficarei feliz em conversar!
        </p>
        <div class="contact-actions">
          <a
            :href="`mailto:${personalInfo.email}`"
            class="btn btn-primary"
          >
            <Mail :size="20" />
            Enviar E-mail
          </a>
          <a
            :href="personalInfo.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            <Linkedin :size="20" />
            LinkedIn
          </a>
        </div>
        <div class="contact-location">
          📍 {{ personalInfo.location }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, Linkedin } from 'lucide-vue-next'
import { personalInfo } from '../data/portfolio'
</script>

<style scoped>
.contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
}

.contact-content {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-number {
  color: var(--accent-primary);
  font-family: 'Courier New', monospace;
  font-size: 1.125rem;
  font-weight: 400;
}

.contact-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 3rem;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
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
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  background-color: transparent;
}

.btn-primary:hover {
  background-color: rgba(168, 85, 247, 0.1);
}

.btn-secondary {
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: rgba(168, 85, 247, 0.1);
}

.contact-location {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

/* Tablet e Desktop */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .contact-description {
    font-size: 1.25rem;
  }
}

/* Desktop grande */
@media (min-width: 1024px) {
  .section-title {
    font-size: 3.5rem;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .contact {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-description {
    font-size: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
