<script setup>
import { computed, ref } from 'vue'
import countries from '../mocks/countryCodes.js'

const selected = ref(null)
const options = ref(countries)

const computedOptions = computed(() => countries)

const baseSelectOptions = ref(
  countries.map((country) => ({
    name: country.label,
    value: country.value,
  })),
)
const selectedOption = ref()

setTimeout(() => {
  selectedOption.value = baseSelectOptions.value[0]
}, 500)
</script>
<template>
  <section>
    <h2>Autocomplete search text, custom slot</h2>
    <div class="note">
      Demonstrates auto-completion, auto-selection and transfer of parameters to
      the typeahead slot. Has an inactive option.
    </div>
    <v-select
      v-model="selected"
      :options="options"
      :auto-select="true"
      :complete-search="true"
      :selectable="(option) => option.value !== 'AF'"
    >
      <template #typeahead="{ canCompleteSearch, completedText }">
        <div
          class="vs__search_position vs__search_complete"
          v-if="canCompleteSearch && completedText !== ''"
        >
          {{ completedText }} ...
        </div>
      </template>
    </v-select>
  </section>

  <section>
    <h2>Custom</h2>
    <ul>
      <li>searchable: false</li>
      <li>clearable: false</li>
    </ul>
    <v-select
      v-model="selected"
      :options="computedOptions"
      :clearable="false"
      :searchable="false"
    />
  </section>
</template>
