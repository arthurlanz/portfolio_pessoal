<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style>
@import '/src/assets/styles/global.css';
</style>
