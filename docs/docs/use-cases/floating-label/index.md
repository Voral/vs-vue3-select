---
title: Floating Label
head:
  - [ meta, { name: title , content: Vs Vue3 Select Floating Label} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Floating Label} ]
  - [ meta, { name: description , content: How to create floating label for Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: How to create floating label for Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/floating-label/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/floating-label/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling,floating label"} ]
sidebarDepth: 0
prev:
  text: Using in Loops
  link: /use-cases/loops
next:
  text: Tag Input Field
  link: /use-cases/tag-input
---

# Floating Label  

<Badge type="tip" text="v1.2.0+" vertical="top" />

A popular solution is to position the field label above the field itself when it is empty and inactive. When the field gains focus or is filled with a value, the label moves upward. This mechanism can be implemented using the `header` slot and CSS styles.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../../.vuepress/components/FlyLabel.vue)