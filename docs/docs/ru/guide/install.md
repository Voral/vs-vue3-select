---
prev:
 text: Vs Vue3 Select
 link: /ru/
next:
 text: Выпадающий список
 link: /ru/guide/options
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

```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

Vue.component('v-select', vSelect)
```

Сам компонент не включает CSS стилей. Их необходимо подключать отдельно:

```js
import 'vs-vue3-select/dist/vs-vue3-select.css'
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
