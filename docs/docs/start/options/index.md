---
title: Dropdown Options
head:
  - [ meta, { name: title , content: Vs Vue3 Select Dropdown Options} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Dropdown Options} ]
  - [ meta, { name: description , content: Description of the variation of options that the Vs Vue3 Select component can accept} ]
  - [ meta, { name: og:description , content: Description of the variation of options that the Vs Vue3 Select component can accept} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/start/options/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/start/options/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,installation"} ]
sidebarDepth: 0
prev:
 text: Installation
 link: /start/install
next:
 text: Selecting Values
 link: /start/values
---

# Dropdown Options

## Options Prop

`vs-vue3-select` accepts arrays of primitive values or objects to use as options
through the `options` prop:

```html
<v-select :options="['Canada', 'United States']"></v-select>
```

<v-select :options="['Canada', 'United States']"></v-select>

```html
<v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>
```

<v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>

## Option Labels

#### Options as Primitives (strings, numbers, boolean)

When `options` contains strings or numbers, they'll be used as the label for the
option within the component. No further configuration is necessary.

#### Options as Objects

When `options` is an array of objects, the component must generate a label to be
shown as the options text. By default, `vs-vue3-select` will attempt to render
`option.label` as the option label. You might not have a `label` key in your
objects, so you can set your own label to match your source data using the
`label {String}` prop.

For example, consider an object with `countryCode` and `countryName` properties:

```json
{
  "countryCode": "CA",
  "countryName": "Canada"
}
```

If you wanted to display `Canada` in the dropdown, you'd use the `countryName`
key:

```html
<v-select label="countryName" :options="countries"></v-select>
```

<country-select />

## Null / Empty Options

`vs-vue3-select` requires the `options` prop to be an `array`. If you are using Vue
in development mode, you will get warnings attempting to pass anything other
than an `array` to the `options` prop. If you need a `null`/`empty` value, use
an empty array `[]`.
