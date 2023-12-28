---
title: Фильтрация опций
head:
  - [ meta, { name: title , content: Фильтрация опций компонента Vs Vue3 Select} ]
  - [ meta, { name: og:title , content: Фильтрация опций компонента Vs Vue3 Select} ]
  - [ meta, { name: description , content: Примеры фильтрации опций в выпадающем списке компонента Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Примеры фильтрации опций в выпадающем списке компонента Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/customizing/filtering/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/customizing/filtering/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,option filter,select option filtering,фильтрация в выпадающем списке"}]
sidebarDepth: 0
prev:
  text: Открытие списка
  link: /ru/customizing/opening
next:
  text: Параметры
  link: /ru/api/props
---
# Фильтрация опций

Vs Vue3 Select предлагает два параметра принимающих функции, которые можно использовать для реализации пользовательских алгоритмов фильтрации.

- `filter`
- `filterBy`

По умолчанию компонент выполняет очень простую проверку, чтобы увидеть, содержит ли текст опции текущий текст поиска. 
Используйте эти параметры для более подходящего вам алгоритма фильтрации опций.

## Фильтрация с помощью Fuse.js

Вы можете использовать параметры filter и filterBy, чтобы подключить сторонние инструменты. Например: [Fuse.js](https://fusejs.io/). Которое может производить поиск по нескольким объектным ключам с нечеткими соответствиями.

<FuseFilter />

@[code](../../../.vuepress/components/FuseFilter.vue)
