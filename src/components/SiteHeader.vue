<script setup>
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'
import { profile } from '../data/portfolio'

const { theme, toggle } = useTheme()

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' },
]
</script>

<template>
  <header class="bar">
    <div class="container bar__inner">
      <a class="bar__name" href="#topo">{{ profile.name }}</a>
      <nav class="bar__nav" aria-label="Seções">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <button
        class="bar__theme"
        type="button"
        :aria-label="theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'"
        @click="toggle"
      >
        <Sun v-if="theme === 'dark'" :size="18" aria-hidden="true" />
        <Moon v-else :size="18" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.bar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.bar__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 1.5rem;
  min-height: 3.75rem;
  padding-block: 0.4rem;
}

.bar__name {
  margin-right: auto;
  color: var(--ink);
  font-weight: 650;
  font-variation-settings: 'wdth' 88;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.bar__nav {
  display: flex;
  gap: 1.25rem;
  order: 3;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.bar__nav a {
  color: var(--ink-soft);
  font-size: var(--step--1);
  text-decoration: none;
  white-space: nowrap;
}

.bar__nav a:hover {
  color: var(--ink);
  text-decoration: underline;
}

.bar__theme {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--ink);
  cursor: pointer;
}

.bar__theme:hover {
  border-color: var(--ink-soft);
}

@media (min-width: 48rem) {
  .bar__nav {
    order: 0;
    width: auto;
    padding-bottom: 0;
  }

  .bar__name {
    margin-right: 0;
    flex: 1;
  }
}
</style>
