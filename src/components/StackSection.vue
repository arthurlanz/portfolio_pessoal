<script setup>
import SectionShell from './SectionShell.vue'
import { useGithub } from '../composables/useGithub'
import { stack } from '../data/portfolio'

const { summary } = useGithub()
</script>

<template>
  <SectionShell id="stack" title="Stack" intro="O que uso nos projetos acima.">
    <dl class="stack">
      <div v-for="group in stack" :key="group.label" class="stack__row">
        <dt>{{ group.label }}</dt>
        <dd>{{ group.items.join(', ') }}</dd>
      </div>
    </dl>

    <section v-if="summary.data?.languages?.length" class="langs" aria-labelledby="langs-titulo">
      <h3 id="langs-titulo" class="langs__title">Linguagens nos meus repositórios</h3>
      <p class="langs__note">Dado do GitHub: quantos dos meus repositórios usam cada linguagem principal.</p>
      <ul>
        <li v-for="lang in summary.data.languages" :key="lang.name">
          <span class="langs__name">{{ lang.name }}</span>
          <span class="langs__bar" aria-hidden="true"><span :style="{ width: `${lang.percent}%` }" /></span>
          <span class="langs__value">{{ lang.percent }}%</span>
        </li>
      </ul>
    </section>
  </SectionShell>
</template>

<style scoped>
.stack__row {
  display: grid;
  gap: 0.2rem var(--space-3);
  padding-block: 1rem;
  border-top: 1px solid var(--line);
}

.stack__row:first-child {
  padding-top: 0;
  border-top: 0;
}

.stack dt {
  font-weight: 650;
}

.stack dd {
  max-width: 60ch;
  color: var(--ink-soft);
}

.langs {
  margin-top: var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
}

.langs__title {
  font-size: var(--step-1);
  font-weight: 650;
}

.langs__note {
  margin-top: 0.25rem;
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.langs ul {
  display: grid;
  gap: 0.6rem;
  margin-top: var(--space-2);
  max-width: 34rem;
}

.langs li {
  display: grid;
  grid-template-columns: 7.5rem minmax(0, 1fr) 3rem;
  align-items: center;
  gap: 0.75rem;
}

.langs__bar {
  height: 0.6rem;
  border-radius: 999px;
  background: var(--heat-0);
  overflow: hidden;
}

.langs__bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--accent);
}

.langs__value {
  color: var(--ink-soft);
  font-size: var(--step--1);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

@media (min-width: 48rem) {
  .stack__row {
    grid-template-columns: 11rem minmax(0, 1fr);
  }
}
</style>
