<script setup lang="ts">
import { ref } from 'vue'
import { GetOptionLabelFunction } from '../../../index'

const defaultOption = {
  name: 'Bar',
  id: 1,
}
const selected = ref(defaultOption)

const options = ref([
  {
    name: 'Foo',
    id: 0,
  },
  defaultOption,
])

interface Option {
  name: string
  id: number
}

const getLabel: GetOptionLabelFunction = (option: object | string): string =>
  typeof option === 'object' ? (option as Option).name : option
</script>

<template>
  <section>
    <h2>Slot option</h2>
    <div class="note">Custom option label and custom option slot</div>
    <v-select
      v-model="selected"
      :options="options"
      :get-option-label="getLabel"
    >
      <template #option="{ code, name }">
        {{ name }} with code: {{ code }}
      </template>
    </v-select>
  </section>
</template>
