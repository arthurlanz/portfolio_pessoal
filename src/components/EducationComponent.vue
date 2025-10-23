<template>
  <section id="educacao" class="education">
    <div class="container">
      <div class="education-card">
        <div class="institution-logo">
          IFC
        </div>
        <div class="education-content">
          <h3 class="course-title">{{ education.course }}</h3>
          <p class="institution-name">
            {{ education.institution }} - {{ education.campus }}
          </p>
          <p class="status">{{ education.status }}</p>
          <p class="description">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/portfolio'
</script>

<style scoped>
.education {
  padding: 6rem 0;
}

.education-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  padding: 2rem;
  transition: var(--transition);
}

.education-card:hover {
  border-color: rgba(168, 85, 247, 0.5);
}

.institution-logo {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  flex-shrink: 0;
}

.course-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.institution-name {
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.status {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Tablet e Desktop */
@media (min-width: 768px) {
  .education-card {
    flex-direction: row;
    padding: 3rem;
  }

  .course-title {
    font-size: 1.75rem;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .education {
    padding: 4rem 0;
  }

  .education-card {
    padding: 1.5rem;
  }

  .course-title {
    font-size: 1.25rem;
  }
}
</style>
