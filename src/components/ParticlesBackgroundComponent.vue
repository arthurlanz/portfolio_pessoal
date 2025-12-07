<template>
  <canvas ref="canvasRef" class="particles-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null
let particles = []
let mousePosition = { x: 0, y: 0 }
let mouseRadius = 150

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
    this.baseX = this.x
    this.baseY = this.y
    this.density = Math.random() * 30 + 1
    this.type = Math.floor(Math.random() * 3)
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.vx = (Math.random() - 0.5) * 0.8
    this.vy = (Math.random() - 0.5) * 0.8
    this.radius = Math.random() * 2.5 + 0.5
    this.opacity = Math.random() * 0.5 + 0.3
    this.pulseSpeed = Math.random() * 0.02 + 0.01
    this.pulsePhase = Math.random() * Math.PI * 2
  }

  update() {
    this.baseX += this.vx
    this.baseY += this.vy

    if (this.baseX < 0 || this.baseX > this.canvas.width) this.vx *= -1
    if (this.baseY < 0 || this.baseY > this.canvas.height) this.vy *= -1

    const dx = mousePosition.x - this.baseX
    const dy = mousePosition.y - this.baseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    const forceDirectionX = dx / distance
    const forceDirectionY = dy / distance
    const maxDistance = mouseRadius
    const force = (maxDistance - distance) / maxDistance

    if (distance < mouseRadius) {
      const directionX = forceDirectionX * force * this.density * 0.6
      const directionY = forceDirectionY * force * this.density * 0.6

      this.x = this.baseX - directionX
      this.y = this.baseY - directionY
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX
        this.x -= dx * 0.05
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY
        this.y -= dy * 0.05
      }
    }

    this.pulsePhase += this.pulseSpeed
    this.currentRadius = this.radius + Math.sin(this.pulsePhase) * 0.5
  }

  draw(ctx) {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.currentRadius * 2
    )

    if (this.type === 0) {
      gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    } else if (this.type === 1) {
      gradient.addColorStop(0, `rgba(200, 200, 200, ${this.opacity})`)
      gradient.addColorStop(1, 'rgba(200, 200, 200, 0)')
    } else {
      gradient.addColorStop(0, `rgba(150, 150, 150, ${this.opacity})`)
      gradient.addColorStop(1, 'rgba(150, 150, 150, 0)')
    }

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()
  }
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const area = canvas.width * canvas.height
  const particleCount = Math.min(150, Math.floor(area / 8000))

  particles = Array.from({ length: particleCount }, () => new Particle(canvas))

  const animate = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw(ctx)
    })

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.3

          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)

          const gradient = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 1.2})`)
          gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      const dx = mousePosition.x - particles[i].x
      const dy = mousePosition.y - particles[i].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < mouseRadius) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(mousePosition.x, mousePosition.y)

        const opacity = (1 - distance / mouseRadius) * 0.4
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
        ctx.fill()
      }
    }

    ctx.beginPath()
    ctx.arc(mousePosition.x, mousePosition.y, mouseRadius, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.lineWidth = 2
    ctx.stroke()

    const gradient = ctx.createRadialGradient(
      mousePosition.x, mousePosition.y, 0,
      mousePosition.x, mousePosition.y, mouseRadius
    )
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = gradient
    ctx.fill()

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

const handleMouseMove = (e) => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (rect) {
    mousePosition.x = e.clientX - rect.left
    mousePosition.y = e.clientY - rect.top
  }
}

const handleMouseLeave = () => {
  mousePosition.x = -1000
  mousePosition.y = -1000
}

const handleResize = () => {
  if (canvasRef.value) {
    const canvas = canvasRef.value
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    particles.forEach(particle => {
      particle.canvas = canvas
      if (particle.baseX > canvas.width) particle.baseX = canvas.width
      if (particle.baseY > canvas.height) particle.baseY = canvas.height
    })
  }
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
}
</style>
