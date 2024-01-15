---
title: Установка
head:
  - [ meta, { name: title , content: Vs Vue3 Select Установка} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Установка} ]
  - [ meta, { name: description , content: Инструкция по установке компонента Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Инструкция по установке компонента Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/start/install/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/start/install/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,installation,установка компонента"} ]
sidebarDepth: 0
prev:
 text: Компонент Vs Vue3 Select 
 link: /ru/
next:
 text: Выпадающий список
 link: /ru/start/options
---

# Установка

## Менеджер пакетов

Установка компонента:

:::: code-group
::: code-group-item PNPM
```bash
pnpm add vs-vue3-select
```
:::
::: code-group-item YARN
```bash
yarn add vs-vue3-select
```
:::
::: code-group-item NPM
```bash
npm install vs-vue3-select
```
:::
::::

После установки импортируем и регистрируем:

:::: code-group
::: code-group-item JS
```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

Vue.component('v-select', vSelect)
```
:::
::: code-group-item TS
```ts
import {Component, createApp} from 'vue'
import App from './App.vue'
import 'vs-vue3-select/dist/vs-vue3-select.css'
import vSelect, { 
    VSelectProps,
    VSelectEvents,
    VSelectSlots } from 'vs-vue3-select';

const app =  createApp(App)
app.component(
    'v-select', 
    vSelect as Component<VSelectProps, VSelectEvents, VSelectSlots>
);
app.mount('#app')
```
:::
::::
Сам компонент не включает CSS стилей. Их необходимо подключать отдельно:

```js
import 'vs-vue3-select/dist/vs-vue3-select.css'
```

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

## В браузере

vs-vue3-select поставляется в качестве модуля UMD, доступного в браузере. При загрузке в браузере вы можете получить 
доступ к компоненту через глобальную переменную VueSelect.VueSelect. Вам необходимо будет загрузить Vue.js,
vs-vue3-select JS и vs-vue3-select CSS.

:::: code-group
::: code-group-item Latest release
```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<script src="https://unpkg.com/vs-vue3-select@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@latest/dist/vs-vue3-select.css"/>
```
:::
::: code-group-item Specific release
```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<script src="https://unpkg.com/vs-vue3-select@1.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@1.0.0/dist/vs-vue3-select.css"/>
```
:::
::::

И используем компонент:

```html
<body>
<div id="app">
    <v-select :options="options"></v-select>
</div>
<script>
    Vue.createApp({
        components: {
            vSelect: window["vs-vue3-select"]
        },
        data() {
            return {
                options: ["JavaScript", "PHP", "C++", "Java", "Assembler"]
            };
        }
    }).mount("#app");
</script>
</body>
```

<CodePen url="zYeXjZX" />
