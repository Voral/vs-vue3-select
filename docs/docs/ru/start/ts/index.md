---
title: TypeScript и типы
head:
  - [ meta, { name: title , content: Vs Vue3 Select TypeScript использование типов} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select TypeScript использование типов} ]
  - [ meta, { name: description , content: Работа с типами в TypeScript Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Работа с типами в TypeScript Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/start/ts/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/start/ts/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,TypeScript"} ]
sidebarDepth: 0
prev:
  text: Работа со значением
  link: /ru/start/values/
next:
  text: Дочерние компоненты
  link: /ru/styling/components/
---

# TypeScript и типы

Для использования типов в TypeScript проекте, добавьте "vs-vue3-select" в раздел "types" в файле tsconfig.json:

```json
{
  "compilerOptions": {
    "types": [
      "vs-vue3-select"
    ]
  }
}
```

Далее можете импортировать их при необходимости.  Например:

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