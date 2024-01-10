<script setup lang="ts">
/* v8 ignore next 3333 */
import { ref } from 'vue'

const selected = ref({
  name: 'Bar',
  id: 1,
})

const options = ref([
  {
    name: 'Foo',
    id: 0,
  },
  {
    name: 'Bar',
    id: 1,
  },
])
</script>

<template>
  <div>
    <div class="section">
      <h2 class="title">Test</h2>
      <v-select
        v-model="selected"
        :options="options"
        :get-option-label="(option: any) => option.name"
      >
        <template #option="{ code, name }">
          {{ name }} with code: {{ code }}
        </template>
      </v-select>
    </div>
  </div>
</template>

<style scoped></style>
