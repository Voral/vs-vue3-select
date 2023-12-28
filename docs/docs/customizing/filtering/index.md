---
title: Option Filtering
head:
  - [ meta, { name: title , content: Vs Vue3 Select Option Filtering } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Option Filtering } ]
  - [ meta, { name: description , content: About option filtering in Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: About option filtering in Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/customizing/filtering/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/customizing/filtering/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,option filter,select option filtering"} ]
sidebarDepth: 0
prev:
  text: Dropdown Opening
  link: /customizing/opening
next:
  text: Props
  link: /api/props
---

# Option Filtering

Vs Vue3 Select provides two props accepting `functions` that can be used to
implement custom filtering algorithms.

- `filter`
- `filterBy`

By default, the component will perform a very basic check to see if an options
label includes the current search text. If you're using scoped slots, you might
have information within the option templates that should be searchable. Or maybe
you just want a better search algorithm that can do fuzzy search matching.

## Filtering with Fuse.js

You can use the `filter` and `filterBy` props to hook right into something like
[Fuse.js](https://fusejs.io/) that can handle searching multiple object keys
with fuzzy matchings.

<FuseFilter />

@[code](../../.vuepress/components/FuseFilter.vue)
