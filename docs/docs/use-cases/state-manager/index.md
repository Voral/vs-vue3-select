---
title: State manager
head:
  - [ meta, { name: title , content: Vs Vue3 Select State manager} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select State manager} ]
  - [ meta, { name: description , content: Interaction of the Vs Vue3 Select component with the state manager} ]
  - [ meta, { name: og:description , content: Interaction of the Vs Vue3 Select component with the state manager} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/state-manager/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/state-manager/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,state manager,pinia,vuex"} ]
sidebarDepth: 0
prev:
 text: Infinite Scroll
 link: /use-cases/infinite-scroll
next:
 text: AJAX
 link: /use-cases/ajax
---
# State manager

## Standard event handling

In a normal situation, for integration, it is enough to pass a variable to `v-model`

```html
<v-select
        :options="$store.state.options"
        v-model="$store.state.selected"
></v-select>
```

<CodePen url="rNPbvQE" height="350"/>

## Additional event handling

If you need additional actions when changing a variable, you can use the combination
`value` prop and `update:model-value` event.

```html
<v-select
        @update:model-value="customHandler"
        :options="$store.state.options"
        :value="$store.state.selected"
></v-select>
```
```js
customHandler(val) {
    // Некоторые действия и вызов мутации
    this.$store.commit("setActiveBook", val);
}
```
<CodePen url="QWYPVMm" height="350"/>
