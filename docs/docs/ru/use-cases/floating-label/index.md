---
title: Плавающая метка
head:
  - [ meta, { name: title , content: Vs Vue3 Select Плавающая метка} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Плавающая метка} ]
  - [ meta, { name: description , content: Как сделать плавающую метку для поля Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Как сделать плавающую метку для поля Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/floating-label/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/floating-label/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling,floating label"} ]
sidebarDepth: 0
prev:
  text: Применение в циклах
  link: /ru/use-cases/loops
next:
  text: Ввод тегов
  link: /ru/use-cases/tag-input
---
# Плавающая метка

<Badge type="tip" text="v1.2.0+" vertical="top" />

Популярным решением является размещение метки поля поверх самого поля, когда оно пустое и неактивно. Когда поле получает
фокус или заполнено значением - метка перемещается вверх. Такой механизм можно реализовать используя слот `header` и
стилей CSS.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../../../.vuepress/components/FlyLabel.vue)