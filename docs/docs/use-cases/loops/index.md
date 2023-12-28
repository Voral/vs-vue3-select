---
title: Using in Loops
head:
  - [ meta, { name: title , content: Vs Vue3 Select Using in Loops} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Using in Loops} ]
  - [ meta, { name: description , content: How to use Vs Vue3 Select component in loops} ]
  - [ meta, { name: og:description , content: How to use Vs Vue3 Select component in loops} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/loops/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/loops/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
  text: AJAX
  link: /use-cases/ajax
next:
  text: Floating Label
  link: /use-cases/floating-label
---

# Using in Loops

There may be times that you are including Vs Vue3 Select within loops of data, such
as a table. This can pose some challenges when emitting events from the
component, as you won't know which Vs Vue3 Select instance emitted it. 

Fortunately, you can solve this problem with an anonymous function. The `@input` is handled with an inline anonymous
function, allowing the selected country to be passed to the `updateCountry` method with the `country` and the `person`
object.

<LoopedSelect />

@[code](../../.vuepress/components/LoopedSelect.vue)
