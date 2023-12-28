---
title: Dropdown Opening
head:
  - [ meta, { name: title , content: Vs Vue3 Select dropdown opening configure} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select dropdown opening configure} ]
  - [ meta, { name: description , content: Configure opening dropdown list in the Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: Configure opening dropdown list in the Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/customizing/opening/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/customizing/opening/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
  text: Dropdown Position
  link: /customizing/positioning
next:
  text: Option Filtering
  link: /customizing/filtering
---

# Dropdown Opening

## Default Dropdown Behaviour

By default, the dropdown will open anytime the underlying search input has
focus. The dropdown will open when clicked, or when it has received focus when
tabbing through inputs.

## Customizing Dropdown Behaviour

The `dropdownShouldOpen` prop allows for full customization of the open/close
behaviour. The prop accepts a `function` that should return a `boolean` value.
The returned boolean value will be used to determine if the dropdown should be
`open`/`true` or `false`/`closed`. The function receives the instance of the
component as the only argument.

#### Example: Open the dropdown when search text is present

---

In this example, we will wait to show the dropdown until the user has started
typing. However, if a country has already been selected, we will display the
dropdown right away.

<OpenWhenSearchTextPresent />

@[code](../../.vuepress/components/OpenWhenSearchTextPresent.vue)
