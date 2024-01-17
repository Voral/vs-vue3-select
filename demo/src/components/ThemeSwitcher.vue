<script setup>
import VSelect from '@/components/Select.vue'
import { onMounted, ref, watch } from 'vue'

const defaultLight = {
  label: 'Light default',
  id: 'light-default',
  classes: [],
}
const defaultDark = {
  label: 'Dark default',
  id: 'dark-default',
  classes: ['dark'],
}

const themes = [
  defaultLight,
  defaultDark,
  {
    label: 'Light rounded',
    id: 'light-rounded',
    classes: ['rounded'],
  },
  {
    label: 'Dark rounded',
    id: 'dark-rounded',
    classes: ['dark', 'rounded'],
  },
  {
    label: 'Light line',
    id: 'light-line',
    classes: ['lined'],
  },
  {
    label: 'Dark line',
    id: 'dark-line',
    classes: ['dark', 'lined'],
  },
]

const body = document.body
const availableClasses = ['dark', 'light', 'lined', 'rounded']
const STORAGE_CODE = 'DEMO_THEME'
const current = ref(defaultLight)
const load = () => {
  const stored = localStorage.getItem(STORAGE_CODE)
  const exists = themes.find((item) => item.id === stored)
  if (typeof exists !== 'undefined') {
    current.value = exists
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    current.value = defaultDark
  }
}
onMounted(load)
watch(current, (newValue) => {
  let i = 0
  for (; i < availableClasses.length; ++i) {
    body.classList.remove(availableClasses[i])
  }
  for (i = 0; i < newValue.classes.length; ++i) {
    body.classList.add(newValue.classes[i])
  }
  localStorage.setItem(STORAGE_CODE, newValue.id)
})
</script>

<template>
  <v-select
    :searchable="false"
    :clearable="false"
    :options="themes"
    v-model="current"
    class="themes"
  />
</template>

<style scoped>
.themes {
  max-width: 150px;
}
</style>
