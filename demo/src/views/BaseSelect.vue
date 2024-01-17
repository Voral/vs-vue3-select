<template>
  <section>
    <div class="note">
      A component is used that overrides the styling of the Vs Vue3 Select
      component. Including slots option and no-option. Also adds new properties
      square.
    </div>
  </section>
  <section>
    <h2>BaseSelect</h2>
    <BaseSelect v-model="selectedOption" :options="baseSelectOptions" />
  </section>
  <section>
    <h2>BaseSelect</h2>
    <div class="note">Use additional property square.</div>
    <ul>
      <li>square: true</li>
    </ul>
    <BaseSelect
      v-model="selectedOption"
      :options="baseSelectOptions"
      :square="true"
    />
  </section>

  <section>
    <h2>BaseSelect</h2>
    <div class="note">Does not display a dropdown list</div>
    <ul>
      <li>no-drop: true</li>
    </ul>
    <BaseSelect v-model="selectedOption" :options="baseSelectOptions" no-drop />
  </section>

  <section>
    <h2>BaseSelect</h2>
    <div class="note">Disabled. It has a drop-down list</div>
    <ul>
      <li>disabled: true</li>
    </ul>
    <BaseSelect
      v-model="selectedOption"
      :options="baseSelectOptions"
      disabled
    />
  </section>

  <section>
    <h2>BaseSelect</h2>
    <div class="note">Does not display a dropdown list, and disabled</div>
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
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import countries from '../mocks/countryCodes.js'
import BaseSelect from '../components/BaseSelect.vue'

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
