---
title: Dropdown Position
head:
  - [ meta, { name: title , content: Vs Vue3 Select dropdown position} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select dropdown position} ]
  - [ meta, { name: description , content: Configure dropdown position in the Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: Configure dropdown position in the Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/customizing/positioning/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/customizing/positioning/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,dropdown position"} ]
sidebarDepth: 0
prev:
  text: Keydown Events
  link: /customizing/keydown
next:
  text: Dropdown Opening
  link: /customizing/opening
---

# Dropdown Position

## Default

With the default CSS, Vs Vue3 Select uses absolute positioning to render the
dropdown menu. The root `.v-select` container (the components `$el`) is used as
the `relative` parent for the dropdown. The dropdown will be displayed below the
`$el` regardless of the available space.

This works for most cases, but you might run into issues placing into a modal or
near the bottom of the viewport. If you need more fine grain control, you can
use calculated positioning.

## Calculated

If you want more control over how the dropdown is rendered, or if you're running
into z-index issues, you may use the `appendToBody` boolean prop. When enabled,
Vs Vue3 Select will append the dropdown to the document, outside of the `.v-select`
container, and position it with Javascript.

When `appendToBody` is true, the positioning will be handled by the
`calculatePosition` prop. This function is responsible for setting top/left
absolute positioning values for the dropdown. The default implementation places
the dropdown in the same position that it would normally appear.

## Popper.js Integration

[Popper.js](https://popper.js.org/) is an awesome, 3kb utility for calculating
positions of just about any DOM element relative to another.

By using the `appendToBody` and `calculatePosition` props, we're able to
integrate directly with popper to calculate positioning for us.

<PositionedWithPopper />

Check out the [Popper Docs](https://popper.js.org/docs/v2/modifiers/) to see the
full `modifiers` API being used below.

@[code{22-78}](../../.vuepress/components/PositionedWithPopper.vue) 
