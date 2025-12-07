import { onMounted } from 'vue'

export function useMagneticEffect(strength = 0.3) {
  const initMagneticEffect = () => {
    const magneticElements = document.querySelectorAll('.magnetic-effect')

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      })

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)'
      })
    })
  }

  onMounted(() => {
    setTimeout(initMagneticEffect, 100)
  })

  return { initMagneticEffect }
}
