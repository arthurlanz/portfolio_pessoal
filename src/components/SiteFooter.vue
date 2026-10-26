<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <footer class="foot">
    <div class="container foot__inner">
      <p>{{ profile.name }}, Joinville, SC.</p>
      <p>Feito com Vue 3. Os números do GitHub vêm da API do GitHub, pelo meu backend em Django.</p>
      <a href="#topo">Voltar ao topo</a>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding-block: var(--space-4);
  border-top: 1px solid var(--line);
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.foot__inner {
  display: grid;
  gap: 0.4rem;
}

@media (min-width: 48rem) {
  .foot__inner {
    grid-template-columns: 1fr 2fr auto;
    gap: var(--space-3);
  }
}
</style>
