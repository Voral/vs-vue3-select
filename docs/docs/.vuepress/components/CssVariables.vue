<template>
  <div class="demo">
    <v-select :options="countries" />
  </div>
</template>

<script setup>
import countries from '../data/countries.js'
</script>

<style scoped>
div {
  background: #282c34;
  padding: 1rem;
  border-radius: 0.3rem;
}

:deep(.demo) {
  --vs-controls-color: #664cc3;
  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;
}
</style>
