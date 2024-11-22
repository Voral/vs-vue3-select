<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    searchable?: boolean
    square?: boolean
  }>(),
  {
    searchable: false,
    square: false,
  },
)

const borderRadius = computed(() => {
  return props.square ? '0' : '30px'
})

const attrs = useAttrs()
type optionType = {
  name: string
}

/**
 * @feat Bold the name of the selected option
 */
function selectedOptionNameClass(name: string) {
  if (name === (attrs.modelValue as optionType)?.name) {
    return 'font-bold'
  }
  return ''
}
</script>

<template>
  <div>
    <v-select
      v-bind="$attrs"
      :clearable="false"
      :searchable="searchable"
      label="name"
      append-to-body
      transition="fade"
    >
      <template #option="{ name }">
        <div class="option--scroll">
          <p :class="selectedOptionNameClass(name)">{{ name }}</p>
        </div>
      </template>

      <template #no-options="">No options yet ...</template>
    </v-select>
  </div>
</template>

<style scoped>
:deep(.vs__dropdown-toggle) {
  border-radius: v-bind(borderRadius);
}

:deep(.vs__dropdown-toggle .vs__selected-options) {
  padding-left: 15px;
}

:deep(.vs__dropdown-toggle .vs__selected-options .vs__selected) {
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

:deep(
    .vs__dropdown-toggle .vs__selected-options .vs__selected::-webkit-scrollbar
  ) {
  display: none;
}

.option--scroll {
  white-space: nowrap;
  overflow-x: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.option--scroll::-webkit-scrollbar {
  display: none;
}
</style>
