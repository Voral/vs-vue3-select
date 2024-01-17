<script setup lang="ts">
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import AppNavigation from './AppNavigation.vue'
</script>

<template>
  <header>
    <section class="header">
      <AppNavigation />
      Demo
      <ThemeSwitcher />
    </section>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 13px;
  gap: 8px;
}

:deep(.header) {
  --vs-height: 26px;
  --vs-font-size: 10px;
}
@media (max-width: 340px) {
  .header {
    flex-direction: column;
    height: auto;
    padding: 8px 16px;
  }
}
</style>
