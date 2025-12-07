import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const scrollY = ref(0)

  const handleScroll = () => {
    scrollY.value = window.scrollY

    const parallaxElements = document.querySelectorAll('.parallax-element')
    parallaxElements.forEach((el) => {
      const speed = el.dataset.speed || 0.5
      const yPos = -(scrollY.value * speed)
      el.style.transform = `translateY(${yPos}px)`
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrollY }
}
