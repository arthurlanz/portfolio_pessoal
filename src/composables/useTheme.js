import { ref } from 'vue'

const KEY = 'tema'
const theme = ref(document.documentElement.dataset.theme || 'light')

function apply(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // Sem armazenamento (aba privada, por exemplo): o tema vale só nesta visita.
  }
}

export function useTheme() {
  return {
    theme,
    toggle: () => apply(theme.value === 'dark' ? 'light' : 'dark'),
  }
}
