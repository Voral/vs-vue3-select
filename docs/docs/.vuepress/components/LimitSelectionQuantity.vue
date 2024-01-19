<template>
  <v-select
    v-model="selected"
    multiple
    placeholder="Choose up to 3 books!"
    label="title"
    :options="books"
    :selectable="() => selected.length < 3"
  />
</template>
<script setup>
import books from '../data/books'
import { ref } from 'vue'
const selected = ref([])
</script>
