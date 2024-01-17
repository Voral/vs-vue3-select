<template>
  <app-header />
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import AppHeader from './views/AppHeader.vue'
</script>
<style>
header {
  border-bottom: 1px solid var(--vs-border-color);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
}

section {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

ul {
  color: var(--demo-props-color);
  font-size: 0.9rem;
  margin: 8px 0;
}

h2 {
  font-size: 1.2rem;
}

.note {
  margin: 16px 0;
  font-size: 0.9rem;
  color: var(--demo-note-color);
  border-left: 3px solid var(--demo-note-color);
  padding: 8px;
  max-width: 400px;
}
</style>
