---
title: TypeScript and Types
head:
  - [ meta, { name: title , content: Vs Vue3 Select TypeScript and Types} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select TypeScript and Types} ]
  - [ meta, { name: description , content: Development with types TypeScript Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Development with types TypeScript Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/start/ts/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/start/ts/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,TypeScript"} ]
sidebarDepth: 0
prev:
  text: Selecting Values
  link: /start/values/
next:
  text: Child Components
  link: /styling/components/
---

# TypeScript and Types

To use types in a TypeScript project, add "vs-vue3-select" to the "types" section in the tsconfig.json file:

```json
{
  "compilerOptions": {
    "types": [
      "vs-vue3-select"
    ]
  }
}
```

Afterwards, you can import them as needed. For example:

```vue
<template>
  <div id="app">
    <div>
      <v-select :options="['test','test1']" :createOption="foo"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {CreateOptionFunction} from "vs-vue3-select";

const foo: CreateOptionFunction = (value: string | number): object => {
  return {label: value}
};
</script>
```