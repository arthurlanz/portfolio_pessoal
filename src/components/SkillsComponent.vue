<template>
  <section id="habilidades" class="skills">
    <div class="container">
      <div class="skills-header animate-on-scroll">
        <span class="section-label">Competências Técnicas</span>
        <h2 class="section-title">Habilidades & Tecnologias</h2>
        <p class="section-description">
          Experiência prática adquirida através de
          {{ githubStats.totalStats.totalProjects }} projetos reais,
          {{ githubStats.totalStats.allCommits }} commits e
          {{ githubStats.codeMetrics.totalLinesWritten.toLocaleString('pt-BR') }} linhas de código
          escritas
        </p>
      </div>

      <!-- Estatísticas Rápidas -->
      <div class="quick-stats animate-on-scroll">
        <div class="stat-card">
          <div class="stat-icon">
            <Code2 :size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">
              {{ githubStats.codeMetrics.totalLinesWritten.toLocaleString('pt-BR') }}
            </div>
            <div class="stat-label">Linhas de Código</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <GitCommit :size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ githubStats.totalStats.allCommits }}</div>
            <div class="stat-label">Total de Commits</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <FolderGit2 :size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ githubStats.totalStats.totalProjects }}</div>
            <div class="stat-label">Projetos Completos</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <Zap :size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ githubStats.totalStats.yearsActive }}</div>
            <div class="stat-label">Ano de Experiência</div>
          </div>
        </div>
      </div>

      <!-- Skills por Categoria -->
      <div class="skills-grid">
        <!-- Frontend Skills -->
        <div class="skills-category animate-on-scroll">
          <div class="category-header">
            <div class="category-icon">
              <Palette :size="28" />
            </div>
            <div class="category-info">
              <h3 class="category-title">Frontend Development</h3>
              <p class="category-subtitle">Interface & Experiência do Usuário</p>
            </div>
          </div>

          <div class="skills-list">
            <div v-for="skill in skills.frontend" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <div class="skill-name">
                  <component :is="getSkillIcon(skill.name)" :size="20" />
                  <span>{{ skill.name }}</span>
                </div>
                <div class="skill-level-badge" :class="getLevelClass(skill.level)">
                  {{ getLevelText(skill.level) }}
                </div>
              </div>

              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                  :class="getProgressClass(skill.level)"
                >
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </div>

              <div class="skill-experience">
                {{ getExperienceText('frontend', skill.name) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="skills-category animate-on-scroll">
          <div class="category-header">
            <div class="category-icon">
              <Database :size="28" />
            </div>
            <div class="category-info">
              <h3 class="category-title">Backend Development</h3>
              <p class="category-subtitle">Lógica & Banco de Dados</p>
            </div>
          </div>

          <div class="skills-list">
            <div v-for="skill in skills.backend" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <div class="skill-name">
                  <component :is="getSkillIcon(skill.name)" :size="20" />
                  <span>{{ skill.name }}</span>
                </div>
                <div class="skill-level-badge" :class="getLevelClass(skill.level)">
                  {{ getLevelText(skill.level) }}
                </div>
              </div>

              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                  :class="getProgressClass(skill.level)"
                >
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </div>

              <div class="skill-experience">
                {{ getExperienceText('backend', skill.name) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Workflow -->
        <div class="skills-category animate-on-scroll">
          <div class="category-header">
            <div class="category-icon">
              <Wrench :size="28" />
            </div>
            <div class="category-info">
              <h3 class="category-title">Tools & Workflow</h3>
              <p class="category-subtitle">Ferramentas de Desenvolvimento</p>
            </div>
          </div>

          <div class="skills-list">
            <div v-for="skill in skills.tools" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <div class="skill-name">
                  <component :is="getSkillIcon(skill.name)" :size="20" />
                  <span>{{ skill.name }}</span>
                </div>
                <div class="skill-level-badge" :class="getLevelClass(skill.level)">
                  {{ getLevelText(skill.level) }}
                </div>
              </div>

              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                  :class="getProgressClass(skill.level)"
                >
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </div>

              <div class="skill-experience">
                {{ getExperienceText('tools', skill.name) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiência em Projetos -->
      <div class="project-experience animate-on-scroll">
        <h3 class="experience-title">
          <Briefcase :size="24" />
          Experiência em Projetos Reais
        </h3>

        <div class="experience-grid">
          <div class="experience-card">
            <div class="experience-header">
              <Rocket :size="24" class="experience-icon" />
              <h4>Projetos Fullstack</h4>
            </div>
            <p class="experience-description">
              Desenvolvimento completo de aplicações web, incluindo MetFlix e Join-Ville
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Django</span>
              <span class="tech-tag">MySQL</span>
            </div>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <Users :size="24" class="experience-icon" />
              <h4>Trabalho Freelance</h4>
            </div>
            <p class="experience-description">
              Desenvolvimento e refatoração de projetos comerciais para clientes reais
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">API REST</span>
              <span class="tech-tag">UX/UI</span>
            </div>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <Trophy :size="24" class="experience-icon" />
              <h4>Hackathons</h4>
            </div>
            <p class="experience-description">
              Participação em competições de programação e desenvolvimento rápido
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Trabalho em Equipe</span>
              <span class="tech-tag">Metodologias Ágeis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Code2,
  GitCommit,
  FolderGit2,
  Zap,
  Palette,
  Database,
  Wrench,
  Briefcase,
  Rocket,
  Users,
  Trophy,
  FileCode,
  Braces,
  Server,
  GitBranch,
  Figma as FigmaIcon,
  Terminal,
} from 'lucide-vue-next'
import { skills, githubStats } from '../data/portfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

// Ícones para cada tecnologia
const getSkillIcon = (skillName) => {
  const icons = {
    HTML5: FileCode,
    CSS3: Palette,
    JavaScript: Braces,
    'Vue.js': Code2,
    Python: Terminal,
    Django: Server,
    'Node.js': Server,
    MySQL: Database,
    'Git & GitHub': GitBranch,
    Figma: FigmaIcon,
    VSCode: Terminal,
    Vite: Zap,
  }
  return icons[skillName] || Code2
}

// Classe de nível
const getLevelClass = (level) => {
  if (level >= 85) return 'level-expert'
  if (level >= 70) return 'level-advanced'
  if (level >= 60) return 'level-intermediate'
  return 'level-beginner'
}

// Texto do nível
const getLevelText = (level) => {
  if (level >= 85) return 'Avançado'
  if (level >= 70) return 'Intermediário+'
  if (level >= 60) return 'Intermediário'
  return 'Básico'
}

// Classe da barra de progresso
const getProgressClass = (level) => {
  if (level >= 85) return 'progress-expert'
  if (level >= 70) return 'progress-advanced'
  if (level >= 60) return 'progress-intermediate'
  return 'progress-beginner'
}

// Texto de experiência
const getExperienceText = (category, skillName) => {
  const experiences = {
    frontend: {
      HTML5: 'Usado em todos os 5 projetos',
      CSS3: 'Estilização moderna e responsiva',
      JavaScript: 'Lógica e interatividade',
      'Vue.js': 'Framework principal em 5 projetos',
    },
    backend: {
      Python: 'Usado no Join-Ville',
      Django: 'Backend do Join-Ville e MetFlix',
      MySQL: 'Banco de dados relacional',
    },
    tools: {
      'Git & GitHub': '271 commits em 11 repositórios',
      Figma: 'Design de interfaces',
      VSCode: 'Editor principal de código',
      Vite: 'Build tool para Vue.js',
    },
  }
  return experiences[category]?.[skillName] || 'Experiência prática'
}
</script>

<style scoped>
.skills {
  padding: 8rem 0;
}

/* Header */
.skills-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
  line-height: 1.8;
}

/* Quick Stats */
.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
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

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.skills-category {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.skills-category:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.category-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-primary);
  flex-shrink: 0;
}

.category-info {
  flex: 1;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.category-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Skills List */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-level-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.level-expert {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.level-advanced {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.level-intermediate {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.level-beginner {
  background: rgba(156, 163, 175, 0.2);
  color: #9ca3af;
  border: 1px solid rgba(156, 163, 175, 0.3);
}

/* Skill Bar */
.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
}

.progress-expert {
  background: linear-gradient(90deg, #22c55e, #16a34a);
}

.progress-advanced {
  background: linear-gradient(90deg, #3b82f6, #2563eb);
}

.progress-intermediate {
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
}

.progress-beginner {
  background: linear-gradient(90deg, #9ca3af, #6b7280);
}

.skill-percentage {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-primary);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.skill-experience {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Project Experience */
.project-experience {
  margin-top: 4rem;
}

.experience-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.experience-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.experience-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.experience-icon {
  color: var(--text-primary);
}

.experience-header h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.experience-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--text-primary);
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .quick-stats {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .skills-grid {
    gap: 1.5rem;
  }

  .skills-category {
    padding: 1.5rem;
  }

  .experience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
