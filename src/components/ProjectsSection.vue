<script setup>
import { computed } from 'vue'
import ProjectRow from './ProjectRow.vue'
import SectionShell from './SectionShell.vue'
import { useGithub } from '../composables/useGithub'
import { projects } from '../data/portfolio'

const { projects: live } = useGithub()
const stats = computed(() => live.data?.projects ?? [])
</script>

<template>
  <SectionShell
    id="projetos"
    title="Projetos"
    intro="Sistemas que ajudei a construir, a maioria em equipe. Os commits vêm do GitHub."
  >
    <ProjectRow v-for="project in projects" :key="project.id" :project="project" :stats="stats" />
  </SectionShell>
</template>
