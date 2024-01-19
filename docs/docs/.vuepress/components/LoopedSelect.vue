<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Country</th>
    </tr>
    <tr v-for="person in people" :key="person.name">
      <td>{{ person.name }}</td>
      <td>
        <v-select
          :options="countries"
          :value="person.country"
          @input="(country) => updateCountry(person, country)"
        />
      </td>
    </tr>
  </table>
</template>

<script setup>
import countries from '../data/countries'
const people = [
  { name: 'John', country: '' },
  { name: 'Jane', country: '' },
]
const updateCountry = (person, country) => {
  person.country = country
}
</script>

<style scoped>
table {
  display: table;
  width: 100%;
}
</style>
