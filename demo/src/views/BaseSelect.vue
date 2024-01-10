<template>
  <div>
    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <BaseSelect v-model="selectedOption" :options="baseSelectOptions" />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>no-drop: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        no-drop
      />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>disabled: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        disabled
      />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>no-drop: true</li>
        <li>disabled: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        no-drop
        disabled
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import countries from '../mocks/countryCodes.js'
import BaseSelect from '../components/BaseSelect.vue'

const baseSelectOptions = ref(
  countries.map((country) => ({
    name: country.label,
    value: country.value,
  }))
)
const selectedOption = ref()

setTimeout(() => {
  selectedOption.value = baseSelectOptions.value[0]
}, 500)
</script>
