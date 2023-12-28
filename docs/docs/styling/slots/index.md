---
title: Slots styling
head:
  - [ meta, { name: title , content: Vs Vue3 Select slots } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select slots } ]
  - [ meta, { name: description , content: How to style a Vs Vue3 Select component slots } ]
  - [ meta, { name: og:description , content: How to style a Vs Vue3 Select component slots } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/styling/slots/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/styling/slots/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling,slots" } ]
prev:
  text: CSS Styling
  link: /styling/css
next:
  text: WAI-ARIA Spec
  link: /accessibility/wai-aria
---

# Slots styling

Vs Vue3 Select currently offers several slots. Slots are described in the documentation
[API Docs for Slots](../../api/slots/).

As an example, we will give an improved stylization of the message about the lack of options suitable for the search
bar. By default, _Sorry, no matching options_ is displayed. You can add additional contextual information
using the field in your own applications.

<BetterNoOptions />

@[code](../../.vuepress/components/BetterNoOptions.vue)
