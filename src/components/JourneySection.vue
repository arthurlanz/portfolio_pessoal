<script setup>
import SectionShell from './SectionShell.vue'
import { journey } from '../data/portfolio'
import { useGithub } from '../composables/useGithub'
import { formatDay } from '../utils/format'

const { summary } = useGithub()
</script>

<template>
  <SectionShell id="trajetoria" title="Trajetória">
    <ol class="journey">
      <li v-for="step in journey" :key="step.year">
        <p class="journey__year">{{ step.year }}</p>
        <p class="journey__text">{{ step.text }}</p>
      </li>
    </ol>
    <p v-if="summary.data?.member_since" class="journey__since">
      Minha conta no GitHub foi criada em {{ formatDay(summary.data.member_since.slice(0, 10)) }}.
    </p>
  </SectionShell>
</template>

<style scoped>
.journey li {
  display: grid;
  gap: 0.25rem var(--space-3);
  padding-block: 1rem;
  border-top: 1px solid var(--line);
}

.journey li:first-child {
  padding-top: 0;
  border-top: 0;
}

.journey__year {
  font-size: var(--step-2);
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
  color: var(--accent);
}

.journey__text {
  max-width: 56ch;
}

.journey__since {
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--line);
  color: var(--ink-soft);
  font-size: var(--step--1);
}

@media (min-width: 48rem) {
  .journey li {
    grid-template-columns: 8.5rem minmax(0, 1fr);
  }
}
</style>
