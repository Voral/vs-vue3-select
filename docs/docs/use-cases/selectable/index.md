---
title: Limiting Selections
head:
  - [ meta, { name: title , content: Vs Vue3 Select Limiting Selections} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Limiting Selections} ]
  - [ meta, { name: description , content: How to limit the choice of options of Vs Vue3 Select component } ]
  - [ meta, { name: og:description , content: How to limit the choice of options of Vs Vue3 Select component } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/selectable/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/selectable/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
 text: Validation
 link: /use-cases/validation
next:
 text: Pagination
 link: /use-cases/pagination
---

# Limiting Selections

## Selectable Prop

The `selectable` prop determines if an option is selectable or not. If
`selectable` returns false for a given option, it will be displayed with a
`vs__dropdown-option--disabled` class. The option will be disabled and unable to
be selected.

```js
selectable: {
  type: Function,
  /**
   * @param {Object|String} option
   * @return {boolean}
   */
  default: option => true,
},
```

### Example

Here `selectable` is used to prevent books by a certain author from being
chosen. In this case, the options passed to the component are objects:

```json
{
  "title": "Right Ho Jeeves",
  "author": { "firstName": "P.D", "lastName": "Woodhouse" }
}
```

This object will be passed to `selectable`, so we can check if the author should
be selectable or not.

<UnselectableExample />

@[code{1-8} vue{6}](../../.vuepress/components/UnselectableExample.vue)

## Limiting the Number of Selections

`selectable` can also be used a bit more creatively to limit the number
selections that can be made within the component. In this case, the user can
select any author, but may only select a maximum of three books.

<LimitSelectionQuantity />

@[code{1-10} vue{8}](../../.vuepress/components/LimitSelectionQuantity.vue)
