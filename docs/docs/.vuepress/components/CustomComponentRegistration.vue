<template>
  <v-select
    :options="['Vue.js', 'React', 'Angular']"
    :components="{ Deselect, OpenIndicator }"
  />
</template>

<script setup>
import Deselect from './CustomDeselect.vue'
import OpenIndicator from './CustomOpenIndicator.vue'
</script>
