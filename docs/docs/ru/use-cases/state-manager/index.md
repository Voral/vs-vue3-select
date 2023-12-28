---
title: Менеджер состояний
head:
  - [ meta, { name: title , content: Vs Vue3 Select и менеджер состояния} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select и менеджер состояния} ]
  - [ meta, { name: description , content: Взаимодействие компонента Vs Vue3 Select с менеджерами состояний} ]
  - [ meta, { name: og:description , content: Взаимодействие компонента Vs Vue3 Select с менеджерами состояний} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/state-manager/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/state-manager/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,state manager,pinia,vuex"} ]

sidebarDepth: 0
prev:
  text: Бесконечная прокрутка
  link: /ru/use-cases/infinite-scroll
next:
  text: AJAX
  link: /ru/use-cases/ajax
---

# Менеджер состояний

## Стандартная обработка событий

В обычной ситуации для интеграции достаточно передать переменную в `v-model`
```html
<v-select
        :options="$store.state.options"
        v-model="$store.state.selected"
></v-select>
```

<CodePen url="rNPbvQE" height="350"/>

## Дополнительная обработка событий

Если вам необходимы дополнительные действия при изменении переменной вы можете воспользоваться сочетанием свойства
`value` и событием `update:model-value`.

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

