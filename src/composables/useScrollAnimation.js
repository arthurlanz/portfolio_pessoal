import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    setTimeout(initScrollAnimations, 100)
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { initScrollAnimations }
}
