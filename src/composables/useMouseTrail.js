import { onMounted, onUnmounted } from 'vue'

export function useMouseTrail() {
  let trail = []
  const trailLength = 20

  const createTrail = () => {
    const container = document.createElement('div')
    container.className = 'mouse-trail-container'
    document.body.appendChild(container)

    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div')
      dot.className = 'trail-dot'
      dot.style.cssText = `
        position: fixed;
        width: ${8 - i * 0.3}px;
        height: ${8 - i * 0.3}px;
        background: rgba(255, 255, 255, ${1 - i / trailLength});
        border-radius: 50%;
        pointer-events: none;
        z-index: 200;
        transition: transform 0.1s ease;
        box-shadow: 0 0 ${10 - i * 0.4}px rgba(255, 255, 255, ${0.8 - i / trailLength});
      `
      container.appendChild(dot)
      trail.push({ element: dot, x: 0, y: 0 })
    }
  }

  let mouseX = 0
  let mouseY = 0

  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  const animateTrail = () => {
    let x = mouseX
    let y = mouseY

    trail.forEach((dot, index) => {
      dot.element.style.left = x - 4 + 'px'
      dot.element.style.top = y - 4 + 'px'

      const nextDot = trail[index + 1] || trail[0]

      x += (nextDot.x - x) * 0.35
      y += (nextDot.y - y) * 0.35

      dot.x = parseFloat(dot.element.style.left) || 0
      dot.y = parseFloat(dot.element.style.top) || 0
    })

    requestAnimationFrame(animateTrail)
  }

  onMounted(() => {
    createTrail()
    window.addEventListener('mousemove', handleMouseMove)
    animateTrail()
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    const container = document.querySelector('.mouse-trail-container')
    if (container) {
      container.remove()
    }
  })

  return { trail }
}
