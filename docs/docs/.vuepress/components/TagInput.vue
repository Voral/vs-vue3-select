<script setup>
import {computed, ref} from "vue";
import tags from '../data/tags';

const getTags = async function (search) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(tags.filter(tag => ~tag.label.indexOf(search))), 100)
  });
  options.value = await promise;
}

const onSearch = search => {
  if (search.length) {
    getTags(search);
  }
}

const displayUses = value => value < 1000 ? value : (Math.ceil(value / 100) / 10) + 'K';
const options = ref([]);
const value = ref([]);

const demoTags = computed(() => {
  return value.value.join(', ')
})

const createTag = value => {
  return {label: value, uses: 0}
}
</script>

<template>
  <div class="custom-result">Assigned Tags: {{ demoTags }}</div>
  <v-select
      v-model="value"
      :options="tags"

      taggable
      multiple
      :filtrable="false"
      :select-on-key-codes="[188, 13]"
      paste-separator=","

      :create-option="createTag"
      @search="onSearch"
      :reduce="option => option.label"

      class="stretch"
  >
    <template #option="{label, uses}">
      <span class="custom-option__label">{{ label }}</span>
      <span class="custom-option__uses">{{ displayUses(uses) }} video</span>
    </template>
  </v-select>
</template>
<style>
.stretch .vs__selected-options {
  flex-wrap: wrap;
}

.custom-result {
  margin-bottom: 24px;
  opacity: 0.5;
}

.custom-option__label {
  display: block;
}

.custom-option__uses {
  display: block;
  opacity: 0.6;
  font-size: 0.8em;
}
</style>