<template>
  <section id="sobre" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title">
            <span class="section-number">01.</span> Sobre mim
          </h2>
          <div class="about-text">
            <p>
              Sou desenvolvedor full-stack com foco em criar soluções web completas e escaláveis.
              Atualmente cursando <span class="highlight">Informática para Internet</span> no
              Instituto Federal Catarinense, Campus Araquari.
            </p>
            <p>
              Minha jornada começou com a curiosidade de entender como as coisas funcionam na web.
              Hoje, transformo ideias em código, sempre buscando escrever soluções limpas, eficientes
              e com atenção aos detalhes.
            </p>
            <p>
              Quando não estou programando, gosto de explorar novas tecnologias, contribuir com projetos
              open source e me manter atualizado com as últimas tendências do desenvolvimento web.
            </p>
          </div>
        </div>

        <div class="about-image">
          <div class="image-wrapper">
            <div class="avatar">
              <img src="/src/assets/images/IMG_6846.jpg" alt="">
            </div>
            <div class="image-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Não precisa de lógica adicional
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-number {
  color: var(--accent-primary);
  font-family: 'Courier New', monospace;
  font-size: 1.125rem;
  font-weight: 400;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.8;
}

.highlight {
  color: var(--accent-primary);
  font-weight: 500;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
}

.avatar {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 700;
  color: rgba(168, 85, 247, 0.2);
  z-index: 1;
}

.image-border {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(168, 85, 247, 0.5);
  border-radius: 2px;
  z-index: 0;
  transition: var(--transition);
}

.image-wrapper:hover .image-border {
  bottom: -0.5rem;
  right: -0.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .about-text p {
    font-size: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .section-title {
    font-size: 3.5rem;
  }

  .about-text p {
    font-size: 1.125rem;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .about {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .avatar {
    font-size: 4rem;
  }
}
</style>
