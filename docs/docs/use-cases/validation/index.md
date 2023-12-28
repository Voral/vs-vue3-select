---
title: Validation
head:
  - [meta, { name: title , content: Vs Vue3 Select Validation }]
  - [meta, { name: og:title , content: Vs Vue3 Select Validation }]
  - [meta, { name: description , content: Validate Vs Vue3 Select component value }]
  - [meta, { name: og:description , content: Validate Vs Vue3 Select component value }]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/validation/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/validation/ }]
  - [meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,validation"} ]
  
sidebarDepth: 0
prev:
 text: Localization
 link: /accessibility/localization
next:
 text: Limiting Selections
 link: /use-cases/selectable
---

# Validation

## Required

If you need to ensure that a selection is made before a form is submitted, you
can use the `required` attribute in combination with the `search` scoped slot in
order to do so.

However, the `search` input within the component does not actually store a
value, so simply adding the `required` attribute won't work. Instead, we'll bind
the attribute dynamically, so that it's only present if we don't have a
selection.

<ValidationRequired />

```html
<v-select :options="books" label="title" v-model="selected">
  <template #search="{attributes, events}">
    <input
      class="vs__search"
      :required="!selected"
      v-bind="attributes"
      v-on="events"
    />
  </template>
</v-select>
```
