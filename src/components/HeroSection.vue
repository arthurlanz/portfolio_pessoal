<script setup>
import GithubPanel from './GithubPanel.vue'
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="topo" class="hero" aria-labelledby="hero-titulo">
    <div class="container">
      <h1 id="hero-titulo" class="hero__title">{{ profile.headline }}</h1>
      <div class="hero__row">
        <div class="hero__text">
          <p class="hero__lead">{{ profile.lead }}</p>
          <div class="hero__actions">
            <a class="button button--solid" href="#projetos">Ver projetos</a>
            <a class="button button--line" href="#contato">Falar comigo</a>
          </div>
        </div>
        <GithubPanel />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(2.5rem, 1.5rem + 5vw, 5.5rem) var(--space-5);
}

.hero__title {
  max-width: 17ch;
  font-size: var(--step-4);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-variation-settings: 'wdth' 84;
  text-wrap: balance;
}

.hero__row {
  display: grid;
  gap: var(--space-4);
  margin-top: clamp(2rem, 1rem + 4vw, 4rem);
}

.hero__lead {
  max-width: 34ch;
  font-size: var(--step-1);
  line-height: 1.45;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: var(--space-3);
}

@media (min-width: 60rem) {
  .hero__row {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    align-items: start;
  }
}
</style>
