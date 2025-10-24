<template>
  <section id="projetos" class="projects">
    <div class="container">
      <h2 class="section-title">
        <span class="section-number">02.</span> Projetos em Destaque
      </h2>

      <div class="projects-list">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          :class="['project-card', { 'reverse': index % 2 === 1 }]"
        >
          <div class="project-image">
            <div class="image-overlay">
              <img
                v-if="project.img"
                :src="project.img"
                :alt="`Imagem do projeto ${project.image}`"
              />
            </div>
            <div class="project-placeholder">
              {{ getInitials(project.title) }}
            </div>
          </div>

          <div class="project-content">
            <div class="project-label">Projeto em Destaque</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>
            <div class="project-tech">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a
                :href="project.github"
                class="project-link"
                aria-label="GitHub"
              >
                <Github :size="20" />
              </a>
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
                aria-label="Ver projeto"
              >
                <ExternalLink :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Github, ExternalLink } from 'lucide-vue-next'
import { projects } from '../data/portfolio'

const getInitials = (title) => {
  return title.split(' ').map(word => word[0]).join('')
}
</script>

<style scoped>
.projects {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.project-image {
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(168, 85, 247, 0.2);
  transition: var(--transition);
  z-index: 2;
}

.project-card:hover .image-overlay {
  background-color: transparent;
}

.project-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  color: var(--bg-tertiary);
  z-index: 1;
}

.project-content {
  position: relative;
}

.project-label {
  color: var(--accent-primary);
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.project-description {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.project-description p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tech-tag {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  font-family: 'Courier New', monospace;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--text-secondary);
  transition: var(--transition);
}

.project-link:hover {
  color: var(--accent-primary);
}

/* Tablet e Desktop */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .project-card {
    grid-template-columns: repeat(12, 1fr);
    gap: 0;
  }

  .project-image {
    grid-column: 1 / 8;
    grid-row: 1;
  }

  .project-content {
    grid-column: 7 / 13;
    grid-row: 1;
    text-align: right;
    z-index: 10;
  }

  .project-card.reverse .project-image {
    grid-column: 6 / 13;
  }

  .project-card.reverse .project-content {
    grid-column: 1 / 6;
    text-align: left;
  }

  .project-tech {
    justify-content: flex-end;
  }

  .project-card.reverse .project-tech {
    justify-content: flex-start;
  }

  .project-links {
    justify-content: flex-end;
  }

  .project-card.reverse .project-links {
    justify-content: flex-start;
  }

  .project-title {
    font-size: 2rem;
  }
}

/* Desktop grande */
@media (min-width: 1024px) {
  .section-title {
    font-size: 3.5rem;
  }

  .project-title {
    font-size: 2.25rem;
  }

  .project-placeholder {
    font-size: 6rem;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .projects {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  .projects-list {
    gap: 4rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-placeholder {
    font-size: 3rem;
  }
}
</style>
