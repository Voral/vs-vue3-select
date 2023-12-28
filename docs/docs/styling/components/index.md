---
title: Child Components
head:
  - [ meta, { name: title , content: Vs Vue3 Select Child Components} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Child Components} ]
  - [ meta, { name: description , content: How to style a Vs Vue3 Select component using child components} ]
  - [ meta, { name: og:description , content: How to style a Vs Vue3 Select component using child components} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/styling/components/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/styling/components/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling"} ]
  
sidebarDepth: 0
prev:
 text: Selecting Values
 link: /start/values
next:
 text: CSS Styling
 link: /styling/css
---

# Child Components

## Prop: `components` `{Object}`

Vs Vue3 Select utilizes child components throughout, and exposes an API to overwrite
these components with your own, using the `components` `{Object}` prop. The
object provided to the `components` prop will be merged with Vs Vue3 Select's
default components.

<CustomComponentRegistration/>

@[code](../../.vuepress/components/CustomComponentRegistration.vue)

CustomDeselect.vue

@[code](../../.vuepress/components/CustomDeselect.vue)

CustomOpenIndicator.vue

@[code](../../.vuepress/components/CustomOpenIndicator.vue)


You can override the value of any of these keys with your own components.

## Deselect

You may wish to roll your own deselect button. `Deselect` is used within tags on
`multiple` selects, and serves as the clear button for single selects. Maybe you
just want to use a simple `<button>Clear</button>` instead.

```html
<v-select :components="{Deselect}" />
```
CustomDeselect.vue

@[code](../../.vuepress/components/CustomDeselect.vue)

<ClearButtonOverride />

The same approach applies for `multiple` selects:

<MultipleClearButtonOverride />

## OpenIndicator

The `OpenIndicator` component is the 'caret' used within the component that
adjusts orientation based on whether the dropdown is open or closed.

```html
<v-select :components="{OpenIndicator}" />
```

CustomOpenIndicator.vue

@[code](../../.vuepress/components/CustomOpenIndicator.vue)

<OpenIndicatorOverride />

## Setting Globally at Registration

If you want all instances of Vs Vue3 Select to use your custom components throughout
your app, while only having to set the implementation once, you can do so when
registering Vs Vue3 Select as a component.

```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

vSelect.props.components.default = () => ({
  Deselect: {
    template: '❌',
  },
  OpenIndicator: {
    template: '<span>🔽</span>',
  },
})

Vue.component(vSelect)
```

<CodePen url="KKJLMvg" height="350"/>
