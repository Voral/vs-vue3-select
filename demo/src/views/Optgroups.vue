<template>
  <section>
    <h2>optgroups</h2>
    <ul>
      <li>clearable: false</li>
    </ul>
    <v-select
      v-model="selected"
      :options="optgroups"
      :clearable="false"
      :searchable="false"
    />
  </section>

  <section>
    <h2>optgroups (searchable)</h2>
    <ul>
      <li>clearable: false</li>
    </ul>
    <v-select
      v-model="selected"
      :options="optgroups"
      :clearable="false"
      searchable
    />
  </section>

  <section>
    <h2>optgroups mix</h2>
    <ul>
      <li>clearable: false</li>
    </ul>
    <v-select
      v-model="selected"
      :options="optgroupsMix"
      :clearable="false"
      :searchable="false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(null)

const optgroups = [
  {
    groupLabel: 'Germany',
    groupOptions: [
      { label: 'Berlin', value: 'BE' },
      { label: 'Frankfurt', value: 'FFM' },
    ],
  },
  {
    groupLabel: 'USA',
    groupOptions: [
      { label: 'Chicago', value: 'CHI' },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
  {
    groupLabel: 'Taiwan',
    groupOptions: [
      { label: 'Taipei', value: 'TPE' },
      { label: 'Kaohsiung', value: 'KHH' },
      { label: 'Taichung', value: 'TXG' },
    ],
  },
]

const optgroupsMix = [
  'one',
  {
    groupLabel: 'Opt Group',
    groupOptions: [
      {
        label: 'Test',
        value: 'test',
      },
      {
        label: 'Test 2',
        value: 'test2',
      },
    ],
  },
]
</script>
