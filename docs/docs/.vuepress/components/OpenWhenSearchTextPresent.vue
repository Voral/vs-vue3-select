<template>
  <v-select
    :options="countries"
    v-model="country"
    :dropdown-should-open="dropdownShouldOpen"
  />
</template>

<script setup>
import countries from '../data/countries.js'
import { ref } from 'vue'

const country = ref(null)
const dropdownShouldOpen = (vm) => {
  if (country.value !== null) {
    return vm.open
  }
  return vm.search.length !== 0 && vm.open
}
</script>
