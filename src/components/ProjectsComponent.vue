<template>
  <section id="projetos" class="projects">
    <div class="container">
      <div class="projects-header animate-on-scroll">
        <div class="header-content">
          <span class="section-label">Portfólio</span>
          <h2 class="section-title">Projetos Selecionados</h2>
          <p class="section-description">
            Uma coleção dos meus trabalhos mais recentes e significativos
          </p>
        </div>
        <div class="filter-tags">
          <button
            v-for="tag in filterTags"
            :key="tag"
            :class="['filter-tag', { active: activeFilter === tag }]"
            @click="activeFilter = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="project-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>

          <div class="project-image-wrapper">
            <div class="project-image">
              <img
                v-if="project.img"
                :src="project.img"
                :alt="`Projeto ${project.title}`"
                class="project-img"
              />
              <div v-else class="project-placeholder">
                <Code2 :size="48" />
              </div>
              <div class="image-overlay"></div>
            </div>
          </div>

          <div class="project-info">
            <div class="project-meta">
              <span class="project-category">{{ project.category || 'Web Development' }}</span>
              <span class="project-year">{{ project.year || '2024' }}</span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech-stack">
              <span
                v-for="tech in project.tech.slice(0, 4)"
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
              <span v-if="project.tech.length > 4" class="tech-more">
                +{{ project.tech.length - 4 }}
              </span>
            </div>

            <div class="project-actions">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-btn project-btn-primary"
              >
                <span>Ver Projeto</span>
                <ArrowUpRight :size="16" />
              </a>
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-btn project-btn-secondary"
              >
                <Github :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="no-projects">
        <div class="no-projects-icon">
          <Search :size="48" />
        </div>
        <p>Nenhum projeto encontrado para este filtro</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Github, ArrowUpRight, Code2, Search } from 'lucide-vue-next'
import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

const activeFilter = ref('Todos')
const filterTags = ref(['Todos', 'Frontend', 'Backend', 'Fullstack'])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projects
  }
  return projects.filter(project =>
    project.category === activeFilter.value
  )
})
</script>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 8rem 0;
  position: relative;
}

/* Header */
.projects-header {
  margin-bottom: 4rem;
  text-align: center;
}

.header-content {
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Filter Tags */
.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.filter-tag {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 25px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.filter-tag::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-tag:hover::before {
  opacity: 1;
}

.filter-tag:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.filter-tag.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.project-card {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.project-number {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  z-index: 10;
  transition: all 0.3s ease;
}

.project-card:hover .project-number {
  background: var(--text-primary);
  color: var(--bg-primary);
  transform: scale(1.1) rotate(360deg);
}

/* Project Image */
.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.project-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--bg-tertiary);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-img {
  transform: scale(1.08);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 0.9;
}

/* Project Info */
.project-info {
  padding: 2rem;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-category {
  color: var(--text-primary);
}

.project-year {
  color: var(--text-tertiary);
  padding-left: 1rem;
  border-left: 1px solid var(--border-color);
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Tech Stack */
.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.project-card:hover .tech-badge {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
}

.tech-more {
  padding: 0.5rem 1rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 1rem;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-btn-primary {
  flex: 1;
  justify-content: center;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
}

.project-btn-primary:hover {
  background: transparent;
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
}

.project-btn-secondary {
  padding: 0.875rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.project-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-primary);
  transform: translateY(-2px);
}

/* No Projects */
.no-projects {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-tertiary);
}

.no-projects-icon {
  margin-bottom: 1rem;
  opacity: 0.5;
}

/* Responsive */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .project-image-wrapper {
    height: 350px;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 4rem;
  }

  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .project-card:nth-child(even) .project-image-wrapper {
    order: 2;
  }

  .project-card:nth-child(even) .project-info {
    order: 1;
  }

  .project-image-wrapper {
    height: 100%;
    min-height: 500px;
  }

  .project-info {
    padding: 3rem;
  }

  .project-title {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  .projects {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .project-image-wrapper {
    height: 250px;
  }

  .project-info {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .project-btn-secondary {
    display: none;
  }
}
</style>
