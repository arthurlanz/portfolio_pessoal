<template>
  <div class="interactive-background">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        class="wave wave-1"
        fill="rgba(255, 255, 255, 0.03)"
        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        class="wave wave-2"
        fill="rgba(255, 255, 255, 0.02)"
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        class="wave wave-3"
        fill="rgba(255, 255, 255, 0.01)"
        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    <div class="floating-shapes">
      <div v-for="n in 15" :key="n" :class="`shape shape-${n}`"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const shapes = document.querySelectorAll('.shape')

  shapes.forEach((shape) => {
    const size = Math.random() * 100 + 50
    const duration = Math.random() * 20 + 15
    const delay = Math.random() * 5
    const xStart = Math.random() * 100
    const yStart = Math.random() * 100

    shape.style.width = `${size}px`
    shape.style.height = `${size}px`
    shape.style.left = `${xStart}%`
    shape.style.top = `${yStart}%`
    shape.style.animationDuration = `${duration}s`
    shape.style.animationDelay = `${delay}s`
    shape.style.opacity = Math.random() * 0.3 + 0.1
  })
})
</script>

<style scoped>
.interactive-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  opacity: 0.6;
}

.wave {
  animation: wave-animation 15s ease-in-out infinite;
}

.wave-1 {
  animation-duration: 20s;
}

.wave-2 {
  animation-duration: 25s;
  animation-delay: 2s;
}

.wave-3 {
  animation-duration: 30s;
  animation-delay: 4s;
}

@keyframes wave-animation {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-5%) translateY(-10px);
  }
  50% {
    transform: translateX(-10%) translateY(0);
  }
  75% {
    transform: translateX(-5%) translateY(10px);
  }
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
  filter: blur(40px);
  animation: float-shape 20s ease-in-out infinite;
}

@keyframes float-shape {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, -50px) rotate(90deg);
  }
  50% {
    transform: translate(0, -100px) rotate(180deg);
  }
  75% {
    transform: translate(-50px, -50px) rotate(270deg);
  }
}

.shape:nth-child(2n) {
  background: radial-gradient(circle, rgba(200, 200, 200, 0.1), transparent);
  animation-direction: reverse;
}

.shape:nth-child(3n) {
  background: radial-gradient(circle, rgba(150, 150, 150, 0.08), transparent);
  animation-duration: 25s;
}
</style>
