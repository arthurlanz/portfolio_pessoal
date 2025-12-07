<template>
  <section id="educacao" class="education">
    <div class="container">
      <div class="education-header animate-on-scroll">
        <span class="section-label">Formação</span>
        <h2 class="section-title">Educação & Qualificações</h2>
      </div>

      <div class="education-content">
        <div class="education-card animate-on-scroll">
          <div class="card-decoration">
            <div class="decoration-line"></div>
            <div class="decoration-dot"></div>
          </div>

          <div class="card-header">
            <div class="institution-badge">
              <div class="badge-icon">
                <GraduationCap :size="32" />
              </div>
              <div class="badge-text">
                <span class="institution-acronym">IFC</span>
                <span class="institution-full">Instituto Federal Catarinense</span>
              </div>
            </div>
            <div class="status-badge">
              <div class="status-indicator"></div>
              <span>{{ education.status }}</span>
            </div>
          </div>

          <div class="card-body">
            <div class="course-info">
              <h3 class="course-title">
                <BookOpen :size="24" class="course-icon" />
                {{ education.course }}
              </h3>
              <div class="course-details">
                <div class="detail-item">
                  <MapPin :size="16" />
                  <span>{{ education.campus }}</span>
                </div>
                <div class="detail-item" v-if="education.period">
                  <Calendar :size="16" />
                  <span>{{ education.period }}</span>
                </div>
              </div>
            </div>

            <p class="course-description">{{ education.description }}</p>

            <div class="highlights">
              <h4 class="highlights-title">Principais Áreas de Estudo</h4>
              <div class="highlights-grid">
                <div class="highlight-item" v-for="(highlight, index) in highlights" :key="index">
                  <Code2 :size="16" class="highlight-icon" />
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="achievement-stats">
              <div class="stat-item">
                <div class="stat-value">{{ projects.length }}</div>
                <div class="stat-label">Projetos</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value">3</div>
                <div class="stat-label">Anos</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value">+15</div>
                <div class="stat-label">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>
        <div class="certifications animate-on-scroll">
          <h3 class="certifications-title">
            <Award :size="20" />
            Certificações & Conquistas
          </h3>
          <div class="certifications-list">
            <div class="certification-item">
              <div class="cert-icon">
                <Trophy :size="18" />
              </div>
              <div class="cert-info">
                <p class="cert-name">Quarto Lugar Hackaton IFC 2024</p>
                <p class="cert-org">Instituto Federal Catarinense</p>
              </div>
            </div>
            <div class="certification-item">
              <div class="cert-icon">
                <CheckCircle :size="18" />
              </div>
              <div class="cert-info">
                <p class="cert-name">Desenvolvimento Web Fullstack</p>
                <p class="cert-org">Projetos Práticos & Comerciais</p>
              </div>
            </div>
            <div class="certification-item">
              <div class="cert-icon">
                <Code2 :size="18" />
              </div>
              <div class="cert-info">
                <p class="cert-name">Especialização Vue.js & Python</p>
                <p class="cert-org">IFC Araquari - Ensino Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap, BookOpen, MapPin, Calendar, Code2, Award, Trophy, CheckCircle } from 'lucide-vue-next'
import { education, projects } from '../data/portfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

const highlights = [
  'Desenvolvimento Web',
  'Programação Frontend',
  'Backend & APIs',
  'Banco de Dados',
  'Design de Interfaces',
  'Metodologias Ágeis',
  'Infraestrutura de Redes',
  'Versionamento Git'
]
</script>

<style scoped>
.education {
  padding: 8rem 0;
  position: relative;
}

/* Header */
.education-header {
  text-align: center;
  margin-bottom: 4rem;
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
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Education Content */
.education-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Education Card */
.education-card {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.education-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Card Decoration */
.card-decoration {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--text-primary), var(--text-secondary));
}

.decoration-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--text-primary), transparent);
}

.decoration-dot {
  position: absolute;
  left: 50%;
  top: 3rem;
  width: 12px;
  height: 12px;
  background: var(--text-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 20px var(--text-primary);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 2rem 1.5rem 2.5rem;
  border-bottom: 1px solid var(--border-color);
}

.institution-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.badge-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-primary);
  flex-shrink: 0;
}

.badge-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.institution-acronym {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.institution-full {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
}

/* Card Body */
.card-body {
  padding: 2rem 2rem 2rem 2.5rem;
}

.course-info {
  margin-bottom: 1.5rem;
}

.course-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.course-icon {
  color: var(--text-secondary);
}

.course-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.detail-item svg {
  color: var(--text-primary);
}

.course-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* Highlights */
.highlights {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.highlights-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateX(4px);
}

.highlight-icon {
  color: var(--text-primary);
  flex-shrink: 0;
}

/* Card Footer */
.card-footer {
  padding: 1.5rem 2rem 1.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--border-color);
}

.achievement-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

/* Certifications */
.certifications {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.certifications:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.certifications-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.certifications-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.certification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.certification-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.cert-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  flex-shrink: 0;
}

.cert-info {
  flex: 1;
}

.cert-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.cert-org {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .education {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .card-header {
    flex-direction: column;
    padding: 1.5rem 1.5rem 1rem 2rem;
  }

  .card-body {
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }

  .card-footer {
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }

  .institution-badge {
    width: 100%;
  }

  .badge-icon {
    width: 56px;
    height: 56px;
  }

  .course-title {
    font-size: 1.5rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .achievement-stats {
    gap: 1rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .certifications {
    padding: 1.5rem;
  }
}
</style>
