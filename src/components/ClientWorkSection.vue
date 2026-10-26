<script setup>
import ProjectRow from './ProjectRow.vue'
import SectionShell from './SectionShell.vue'
import { clientWork, studyProjects } from '../data/portfolio'
</script>

<template>
  <SectionShell
    id="clientes"
    title="Trabalhos para clientes"
    intro="Projetos em que fui contratado ou ajudei amigos a terminar o que tinham começado."
  >
    <ProjectRow v-for="project in clientWork" :key="project.id" :project="project" />

    <section class="study" aria-labelledby="estudo-titulo">
      <h3 id="estudo-titulo" class="study__title">Projetos de estudo</h3>
      <ul>
        <li v-for="item in studyProjects" :key="item.name">
          <strong>{{ item.name }}</strong>, {{ item.text }}.
          <a v-if="item.live" :href="item.live" target="_blank" rel="noopener noreferrer">Ver online<span class="visually-hidden"> {{ item.name }} (abre em nova aba)</span></a>
          <a :href="item.repo" target="_blank" rel="noopener noreferrer">Código<span class="visually-hidden"> de {{ item.name }} (abre em nova aba)</span></a>
        </li>
      </ul>
    </section>
  </SectionShell>
</template>

<style scoped>
.study {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
}

.study__title {
  margin-bottom: 0.75rem;
  font-size: var(--step-1);
  font-weight: 650;
}

.study li {
  max-width: 62ch;
  color: var(--ink-soft);
}

.study li + li {
  margin-top: 0.5rem;
}

.study strong {
  color: var(--ink);
  font-weight: 600;
}

.study a {
  margin-left: 0.75rem;
  font-weight: 600;
}
</style>
