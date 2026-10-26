<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  intro: { type: String, default: '' },
})
</script>

<template>
  <section :id="id" class="shell" :aria-labelledby="`${id}-titulo`">
    <div class="container shell__grid">
      <header class="shell__head">
        <h2 :id="`${id}-titulo`" class="shell__title">{{ title }}</h2>
        <p v-if="intro" class="shell__intro">{{ intro }}</p>
      </header>
      <div class="shell__body">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.shell {
  padding-block: var(--space-5);
  border-top: 1px solid var(--line);
}

.shell__grid {
  display: grid;
  gap: var(--space-3) var(--space-4);
}

.shell__title {
  font-size: var(--step-3);
  font-weight: 650;
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-variation-settings: 'wdth' 90;
}

.shell__intro {
  margin-top: var(--space-2);
  max-width: 30ch;
  color: var(--ink-soft);
  font-size: var(--step--1);
  line-height: 1.55;
}

@media (min-width: 60rem) {
  .shell__grid {
    grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
    align-items: start;
  }

  .shell__head {
    position: sticky;
    top: 5.5rem;
  }
}
</style>
