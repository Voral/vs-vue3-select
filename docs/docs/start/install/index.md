---
title: Installation
head:
  - [ meta, { name: title , content: Vs Vue3 Select Installation} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Installation} ]
  - [ meta, { name: description , content: Installation instructions for the Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: Installation instructions for the Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/start/install/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/start/install/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,installation"} ]
sidebarDepth: 0
prev:
 text: Vs Vue3 Select Component
 link: /
next:
 text: Dropdown Options
 link: /start/options

---

# Installation

## Package manager

Install with package manager:

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

Then, import and register the component:

```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

Vue.component('v-select', vSelect)
```

The component itself does not include any CSS. You'll need to include it
separately:

```js
import 'vs-vue3-select/dist/vs-vue3-select.css'
```

## In the Browser

vs-vue3-select ships as an UMD module that is accessible in the browser. When loaded
in the browser, you can access the component through the `VueSelect.VueSelect`
global variable. You'll need to load Vue.js, `vs-vue3-select` JS & `vs-vue3-select` CSS.

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest release -->
<script src="https://unpkg.com/vs-vue3-select@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@latest/dist/vs-vue3-select.css"/>

<!-- or point to a specific release -->
<script src="https://unpkg.com/vs-vue3-select@1.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@1.0.0/dist/vs-vue3-select.css"/>
```

And we use the component:

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
