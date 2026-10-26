import { reactive } from 'vue'

const API = (import.meta.env.VITE_API_URL || 'https://portfolio-backend-7w30.onrender.com/api').replace(/\/$/, '')
const TIMEOUT_MS = 60000 // o backend gratuito pode levar até um minuto para acordar
const SLOW_AFTER_MS = 6000

function resource(path) {
  const state = reactive({ data: null, status: 'idle', slow: false, stale: false })
  let inflight = null

  async function load() {
    if (inflight) return inflight
    state.status = 'loading'
    state.slow = false
    const slowTimer = setTimeout(() => (state.slow = true), SLOW_AFTER_MS)
    const controller = new AbortController()
    const abortTimer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    inflight = fetch(`${API}/github/${path}/`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const { stale, ...data } = await response.json()
        state.data = data
        state.stale = Boolean(stale)
        state.status = 'ready'
      })
      .catch(() => {
        state.status = 'error'
      })
      .finally(() => {
        clearTimeout(slowTimer)
        clearTimeout(abortTimer)
        state.slow = false
        inflight = null
      })
    return inflight
  }

  return { state, load }
}

const resources = {
  summary: resource('summary'),
  contributions: resource('contributions'),
  activity: resource('activity'),
  projects: resource('projects'),
}

/** Dados do GitHub, compartilhados entre as seções. Cada chamada só vai à rede uma vez. */
export function useGithub() {
  for (const { state, load } of Object.values(resources)) {
    if (state.status === 'idle') load()
  }
  return {
    summary: resources.summary.state,
    contributions: resources.contributions.state,
    activity: resources.activity.state,
    projects: resources.projects.state,
    retry: () => Object.values(resources).forEach(({ state, load }) => state.status === 'error' && load()),
  }
}
