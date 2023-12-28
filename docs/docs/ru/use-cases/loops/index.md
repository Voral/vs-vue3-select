---
title: Применение в циклах
head:
  - [ meta, { name: title , content: Vs Vue3 Select Применение в циклах} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Применение в циклах} ]
  - [ meta, { name: description , content: Как применять компонент Vs Vue3 Select в циклах} ]
  - [ meta, { name: og:description , content: Как применять компонент Vs Vue3 Select в циклах} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/loops/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/loops/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
  text: AJAX
  link: /ru/use-cases/ajax
next:
  text: Плавающая метка
  link: /ru/use-cases/floating-label
---

# Применение в циклах

Могут быть случаи, когда вы включаете Vs Vue3 Select в циклы данных, такие как таблица. Это может создать некоторые 
проблемы при отправке событий из компонента, поскольку вы не будете знать, какой экземпляр Vs Vue3 Select его отправил.

Вы можете решить эту проблему с помощью анонимной функции. `@input` обрабатывается встроенной анонимной функцией, 
позволяющей передавать выбранную страну методу `updateCountry` вместе со `country` и объектом `person`.

<LoopedSelect />

@[code](../../../.vuepress/components/LoopedSelect.vue)
