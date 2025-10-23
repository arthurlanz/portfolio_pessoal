<template>
  <section id="habilidades" class="skills">
    <div class="container">
      <h2 class="section-title">
        <span class="section-number">03.</span> Habilidades Técnicas
      </h2>

      <div class="skills-grid">
        <div class="skill-category">
          <div class="category-header">
            <Code2 :size="24" class="category-icon" />
            <h3 class="category-title">Front-end</h3>
          </div>
          <div class="skill-list">
            <div
              v-for="skill in skills.frontend"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <div class="category-header">
            <Database :size="24" class="category-icon" />
            <h3 class="category-title">Back-end</h3>
          </div>
          <div class="skill-list">
            <div
              v-for="skill in skills.backend"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <div class="category-header">
            <Terminal :size="24" class="category-icon" />
            <h3 class="category-title">Ferramentas</h3>
          </div>
          <div class="skill-list">
            <div
              v-for="skill in skills.tools"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code2, Database, Terminal } from 'lucide-vue-next'
import { skills } from '../data/portfolio'
</script>

<style scoped>
.skills {
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

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.skill-category {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  padding: 2rem;
  transition: var(--transition);
}

.skill-category:hover {
  border-color: rgba(168, 85, 247, 0.5);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  color: var(--accent-primary);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  color: var(--text-secondary);
  font-size: 1rem;
}

.skill-level {
  color: var(--accent-primary);
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
}

.skill-bar {
  height: 4px;
  background-color: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background-color: var(--accent-primary);
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

/* Tablet */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-category:last-child {
    grid-column: 1 / -1;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .section-title {
    font-size: 3.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .skill-category:last-child {
    grid-column: auto;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .skills {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .category-title {
    font-size: 1.25rem;
  }
}
</style>
