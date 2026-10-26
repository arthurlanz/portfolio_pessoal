<script setup>
import SectionShell from './SectionShell.vue'
import { about } from '../data/portfolio'
</script>

<template>
  <SectionShell id="sobre" title="Sobre">
    <div class="about">
      <div class="about__text">
        <p v-for="paragraph in about" :key="paragraph">{{ paragraph }}</p>
      </div>
      <img
        class="about__photo"
        src="/images/arthur.webp"
        alt="Arthur Lanznaster, de camisa azul e braços cruzados, sorrindo."
        width="560"
        height="621"
        loading="lazy"
      />
    </div>
  </SectionShell>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-3);
}

.about__text {
  display: grid;
  gap: var(--space-2);
  max-width: 60ch;
  font-size: var(--step-1);
  line-height: 1.55;
}

.about__text p:not(:first-child) {
  color: var(--ink-soft);
  font-size: var(--step-0);
}

.about__photo {
  width: min(100%, 15rem);
  height: auto;
  border-radius: var(--radius);
  border: 1px solid var(--line);
}

@media (min-width: 48rem) {
  .about {
    grid-template-columns: minmax(0, 1fr) 15rem;
    gap: var(--space-4);
    align-items: start;
  }
}
</style>
