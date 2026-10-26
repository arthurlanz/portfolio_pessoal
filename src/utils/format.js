const relative = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })
const number = new Intl.NumberFormat('pt-BR')

export function formatNumber(value) {
  return number.format(value)
}

/** "há 2 dias", "ontem", "há 3 horas". */
export function timeAgo(iso, now = Date.now()) {
  const seconds = Math.round((new Date(iso).getTime() - now) / 1000)
  const steps = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ]
  for (const [unit, size] of steps) {
    if (Math.abs(seconds) >= size) return relative.format(Math.round(seconds / size), unit)
  }
  return 'agora há pouco'
}

export function formatDay(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}
