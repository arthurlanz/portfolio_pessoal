<script setup>
import { computed } from 'vue'
import { formatNumber } from '../utils/format'

const props = defineProps({
  project: { type: Object, required: true },
  // Resposta de /github/projects/, para mostrar quantos commits são meus.
  stats: { type: Array, default: () => [] },
})

const repoUrl = (name) => `https://github.com/${name}`

const myCommits = computed(() => {
  const repos = props.project.repos ?? []
  if (!repos.length) return null
  const counts = repos.map(({ name }) => props.stats.find((item) => item.repo.toLowerCase() === name.toLowerCase())?.my_commits)
  return counts.every((count) => typeof count === 'number') ? counts.reduce((sum, count) => sum + count, 0) : null
})
</script>

<template>
  <article class="row" :class="{ 'row--image': project.image }">
    <div class="row__meta">
      <p class="row__year">{{ project.year }}</p>
      <p class="row__kind">{{ project.kind }}</p>
      <p v-if="myCommits !== null" class="row__commits">{{ formatNumber(myCommits) }} commits meus</p>
    </div>

    <div class="row__main">
      <h3 class="row__name">{{ project.name }}</h3>
      <p class="row__summary">{{ project.summary }}</p>
      <p class="row__role"><strong>O que eu fiz:</strong> {{ project.role }}</p>
      <ul v-if="project.highlights?.length" class="row__list">
        <li v-for="item in project.highlights" :key="item">{{ item }}</li>
      </ul>
      <p class="row__stack">{{ project.stack.join(', ') }}</p>
      <p class="row__links">
        <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer">
          Ver online<span class="visually-hidden"> {{ project.name }} (abre em nova aba)</span>
        </a>
        <a v-for="repo in project.repos ?? []" :key="repo.name" :href="repoUrl(repo.name)" target="_blank" rel="noopener noreferrer">
          {{ repo.label }}<span class="visually-hidden"> de {{ project.name }} no GitHub (abre em nova aba)</span>
        </a>
        <a v-if="project.docs" :href="project.docs" target="_blank" rel="noopener noreferrer">
          Documentação<span class="visually-hidden"> de {{ project.name }} (abre em nova aba)</span>
        </a>
      </p>
    </div>

    <a v-if="project.image && project.live" class="row__shot" :href="project.live" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
      <img :src="project.image.src" alt="" width="960" loading="lazy" />
    </a>
    <img v-else-if="project.image" class="row__shot" :src="project.image.src" :alt="project.image.alt" width="960" loading="lazy" />
  </article>
</template>

<style scoped>
.row {
  display: grid;
  gap: var(--space-2) var(--space-3);
  padding-block: var(--space-3);
  border-top: 1px solid var(--line);
}

.row:first-child {
  padding-top: 0;
  border-top: 0;
}

.row__year {
  font-size: var(--step-1);
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
}

.row__kind,
.row__commits {
  color: var(--ink-soft);
  font-size: var(--step--1);
  line-height: 1.4;
}

.row__commits {
  margin-top: 0.5rem;
  color: var(--accent);
  font-weight: 600;
}

.row__name {
  font-size: var(--step-2);
  font-weight: 650;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-variation-settings: 'wdth' 92;
}

.row__summary {
  margin-top: 0.6rem;
  max-width: 62ch;
}

.row__role {
  margin-top: 0.75rem;
  max-width: 62ch;
  color: var(--ink-soft);
}

.row__role strong {
  color: var(--ink);
  font-weight: 600;
}

.row__list {
  margin-top: 0.6rem;
  max-width: 62ch;
  padding-left: 1.1rem;
  list-style: disc;
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.row__list li + li {
  margin-top: 0.2rem;
}

.row__list li::marker {
  color: var(--accent);
}

.row__stack {
  margin-top: 0.9rem;
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.row__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  margin-top: 0.9rem;
  font-weight: 600;
}

.row__shot {
  display: block;
  width: 100%;
  align-self: start;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

.row__shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

@media (min-width: 48rem) {
  .row {
    grid-template-columns: 8.5rem minmax(0, 1fr);
  }

  .row--image {
    grid-template-columns: 8.5rem minmax(0, 1fr) 14rem;
  }

  .row__meta {
    padding-top: 0.35rem;
  }
}
</style>
