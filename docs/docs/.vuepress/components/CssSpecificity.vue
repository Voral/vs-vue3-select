<template>
  <v-select
    class="style-chooser"
    placeholder="Choose a Styling Option"
    :options="['Components', 'CSS / Variables', 'Slots']"
  />
</template>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser svg.vs__open-indicator > path,
.style-chooser .vs__clear svg > path {
  fill: #394066;
}

.dark .style-chooser .vs__search::placeholder,
.dark .style-chooser .vs__dropdown-toggle,
.dark .style-chooser .vs__dropdown-menu {
  background: #323232;
  color: #ffc66d;
}

.dark .style-chooser svg.vs__open-indicator > path,
.dark .style-chooser .vs__clear svg > path {
  fill: #629755;
}
</style>
