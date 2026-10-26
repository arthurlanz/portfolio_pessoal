<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { formatDay } from '../utils/format'

const props = defineProps({
  weeks: { type: Array, required: true },
  summary: { type: String, required: true },
})

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

// No celular as células ficariam pequenas demais: mostra só as últimas 26 semanas.
const compact = ref(false)
let media
const sync = () => (compact.value = media.matches)
onMounted(() => {
  media = window.matchMedia('(max-width: 40rem)')
  sync()
  media.addEventListener('change', sync)
})
onBeforeUnmount(() => media?.removeEventListener('change', sync))

const visible = computed(() => (compact.value ? props.weeks.slice(-26) : props.weeks))

const months = computed(() => {
  const labels = []
  let lastMonth = -1
  let lastColumn = -10
  visible.value.forEach((week, index) => {
    const month = Number(week[0].date.slice(5, 7)) - 1
    if (month !== lastMonth && index - lastColumn >= 3) {
      labels.push({ column: index + 1, text: MONTHS[month] })
      lastColumn = index
    }
    lastMonth = month
  })
  return labels
})

const cells = computed(() =>
  visible.value.flatMap((week, column) =>
    week.map((day) => ({
      ...day,
      column: column + 1,
      title: `${day.count} ${day.count === 1 ? 'contribuição' : 'contribuições'} em ${formatDay(day.date)}`,
    })),
  ),
)
</script>

<template>
  <div class="heat" role="img" :aria-label="summary">
    <div class="heat__scroll" aria-hidden="true">
      <div class="heat__months" :style="{ '--cols': visible.length }">
        <span v-for="month in months" :key="month.column" :style="{ gridColumn: month.column }">{{ month.text }}</span>
      </div>
      <div class="heat__grid" :style="{ '--cols': visible.length }">
        <span
          v-for="cell in cells"
          :key="cell.date"
          class="heat__cell"
          :class="`heat__cell--${cell.level}`"
          :style="{ gridColumn: cell.column, gridRow: cell.weekday + 1, '--i': cell.column }"
          :title="cell.title"
        />
      </div>
    </div>
    <div class="heat__legend" aria-hidden="true">
      <span>Menos</span>
      <span v-for="level in 5" :key="level" class="heat__cell" :class="`heat__cell--${level - 1}`" />
      <span>Mais</span>
    </div>
  </div>
</template>

<style scoped>
.heat__months,
.heat__grid {
  display: grid;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  gap: 3px;
}

.heat__months {
  margin-bottom: 0.35rem;
  color: var(--ink-soft);
  font-size: 0.75rem;
  line-height: 1;
}

.heat__months span {
  white-space: nowrap;
}

.heat__grid {
  grid-template-rows: repeat(7, auto);
}

.heat__cell {
  display: block;
  aspect-ratio: 1;
  min-width: 0;
  border-radius: 2px;
  background: var(--heat-0);
}

.heat__cell--1 { background: var(--heat-1); }
.heat__cell--2 { background: var(--heat-2); }
.heat__cell--3 { background: var(--heat-3); }
.heat__cell--4 { background: var(--heat-4); }

/* O único movimento da página: o calendário se preenche da esquerda para a direita. */
.heat__grid .heat__cell {
  animation: fill 420ms ease-out both;
  animation-delay: calc(var(--i) * 14ms);
}

@keyframes fill {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
}

.heat__legend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  margin-top: 0.6rem;
  color: var(--ink-soft);
  font-size: 0.75rem;
}

.heat__legend .heat__cell {
  width: 0.75rem;
}

.heat__legend span:first-child {
  margin-right: 0.35rem;
}

.heat__legend span:last-child {
  margin-left: 0.35rem;
}
</style>
