<script setup>
import { computed } from 'vue'
import ContributionHeatmap from './ContributionHeatmap.vue'
import { useGithub } from '../composables/useGithub'
import { profile } from '../data/portfolio'
import { formatDay, formatNumber, timeAgo } from '../utils/format'

const { summary, contributions, activity, retry } = useGithub()

const failed = computed(() => contributions.status === 'error' && summary.status === 'error')
const waiting = computed(() => !contributions.data && !failed.value)
const slow = computed(() => contributions.slow || summary.slow)
const stale = computed(() => contributions.stale || summary.stale || activity.stale)

const periodText = computed(() => {
  const data = contributions.data
  if (!data) return ''
  if (data.source === 'graphql') return `${formatNumber(data.total)} contribuições nos últimos 12 meses`
  if (data.truncated) return `${formatNumber(data.total)} commits desde ${formatDay(data.start)}`
  return `${formatNumber(data.total)} commits nos últimos 12 meses`
})

const totalText = computed(() => {
  const data = summary.data
  if (!data || data.commits_total == null) return ''
  const orgs = data.organizations.length
  const where = orgs ? ` em repositórios públicos e em ${orgs} ${orgs === 1 ? 'organização' : 'organizações'}` : ' em repositórios públicos'
  return `${formatNumber(data.commits_total)} commits no total${where}.`
})

const ariaSummary = computed(() => `Calendário de contribuições no GitHub: ${periodText.value}.`)
const commits = computed(() => (activity.data?.commits ?? []).slice(0, 4))
</script>

<template>
  <aside class="ledger" aria-labelledby="ledger-titulo">
    <div class="ledger__head">
      <h2 id="ledger-titulo" class="ledger__title">Atividade no GitHub</h2>
      <a class="ledger__user" :href="profile.github" target="_blank" rel="noopener noreferrer">
        @{{ profile.githubUser }}<span class="visually-hidden"> (abre em nova aba)</span>
      </a>
    </div>

    <template v-if="contributions.data">
      <ContributionHeatmap :weeks="contributions.data.weeks" :summary="ariaSummary" />
      <p class="ledger__summary">
        <strong>{{ periodText }}.</strong>
        {{ totalText }}
      </p>
    </template>

    <div v-else-if="waiting" class="ledger__wait" aria-live="polite">
      <div class="ledger__ghost" aria-hidden="true">
        <span v-for="n in 7 * 22" :key="n" />
      </div>
      <p>
        Carregando os dados do GitHub.
        <span v-if="slow">O servidor gratuito está acordando e pode levar até um minuto.</span>
      </p>
    </div>

    <div v-else class="ledger__fail" role="status">
      <p>Não consegui carregar os dados do GitHub agora.</p>
      <p>
        <button type="button" class="ledger__retry" @click="retry">Tentar de novo</button>
        ou veja direto no
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">perfil<span class="visually-hidden"> (abre em nova aba)</span></a>.
      </p>
    </div>

    <p v-if="stale" class="ledger__note">Mostrando a última cópia salva, o GitHub não respondeu agora.</p>

    <section v-if="commits.length" class="ledger__recent" aria-labelledby="recentes-titulo">
      <h3 id="recentes-titulo" class="ledger__sub">Últimos commits</h3>
      <ul>
        <li v-for="commit in commits" :key="commit.sha + commit.repo">
          <a :href="commit.url" target="_blank" rel="noopener noreferrer">
            <span class="ledger__message">{{ commit.message }}</span>
            <span class="ledger__meta">{{ commit.repo }}, {{ timeAgo(commit.date) }}</span>
            <span class="visually-hidden"> (abre em nova aba)</span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<style scoped>
.ledger {
  padding: clamp(1rem, 0.6rem + 1.6vw, 1.75rem);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.ledger__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1rem;
  margin-bottom: var(--space-2);
}

.ledger__title {
  font-size: var(--step-1);
  font-weight: 650;
  letter-spacing: -0.015em;
}

.ledger__user {
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.ledger__summary {
  margin-top: var(--space-2);
  max-width: 60ch;
  color: var(--ink-soft);
  font-size: var(--step--1);
  line-height: 1.55;
}

.ledger__summary strong {
  color: var(--ink);
  font-weight: 650;
}

.ledger__wait {
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.ledger__ghost {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  gap: 3px;
  margin-bottom: var(--space-2);
}

.ledger__ghost span {
  aspect-ratio: 1;
  border-radius: 2px;
  background: var(--heat-0);
}

.ledger__fail {
  display: grid;
  gap: 0.5rem;
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.ledger__retry {
  padding: 0.3rem 0.8rem;
  background: none;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--accent);
  cursor: pointer;
}

.ledger__retry:hover {
  background: var(--accent-wash);
}

.ledger__note {
  margin-top: 0.75rem;
  color: var(--ink-soft);
  font-size: 0.8rem;
}

.ledger__recent {
  margin-top: var(--space-3);
  padding-top: var(--space-2);
  border-top: 1px solid var(--line);
}

.ledger__sub {
  margin-bottom: 0.5rem;
  font-size: var(--step-0);
  font-weight: 650;
}

.ledger__recent li + li {
  border-top: 1px solid var(--line);
}

.ledger__recent a {
  display: grid;
  gap: 0.1rem;
  padding-block: 0.55rem;
  color: var(--ink);
  text-decoration: none;
}

.ledger__recent a:hover .ledger__message {
  text-decoration: underline;
}

.ledger__message {
  font-size: var(--step--1);
  font-weight: 500;
  overflow-wrap: anywhere;
}

.ledger__meta {
  color: var(--ink-soft);
  font-size: 0.8rem;
}
</style>
