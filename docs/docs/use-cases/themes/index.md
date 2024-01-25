---
title: Theme Switcher
head:
  - [ meta, { name: title , content: Vs Vue3 Select Theme Switcher} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Theme Switcher} ]
  - [ meta, { name: description , content: Using Vs Vue3 Select Component to Toggle Themes in Your Application} ]
  - [ meta, { name: og:description , content: Using Vs Vue3 Select Component to Toggle Themes in Your Application} ]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/themes/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/themes/ }]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,themes"} ]
description: Using Vs Vue3 Select Component to Toggle Themes in Your Application
keyword: select,routing,themes
sidebarDepth: 0
prev:
  text: Routing
  link: /use-cases/routing/
next:
  text: Keydown Events
  link: /customizing/keydown/
---
# Theme Switcher

You can use the Vs Vue3 Select component to switch themes in your application. Let's go through an example of creating such a theme switcher.

The main idea is to add specified CSS classes to the `body` tag of the page.

Let's define a list of available themes and create separate constants to store the default light and dark themes. An object describing a specific theme will include the theme identifier, the theme label, and an array of CSS classes.

```js
const defaultLight = {
  label: 'Light default',
  id: 'light-default',
  classes: [],
}
const defaultDark = {
  label: 'Dark default',
  id: 'dark-default',
  classes: ['dark'],
}

const themes = [
  defaultLight,
  defaultDark,
  {
    label: 'Light rounded',
    id: 'light-rounded',
    classes: ['rounded'],
  },
  {
    label: 'Dark rounded',
    id: 'dark-rounded',
    classes: ['dark', 'rounded'],
  },
  {
    label: 'Light line',
    id: 'light-line',
    classes: ['lined'],
  },
  {
    label: 'Dark line',
    id: 'dark-line',
    classes: ['dark', 'lined'],
  },
]
```

We will store the current theme in the `current` constant. Additionally, we'll have a watcher that will respond to changes in the current theme, remove obsolete CSS classes from other themes, add new ones, and save the theme identifier to localStorage.

For simplicity, all CSS classes used in themes are also collected in a common array called `availableClasses`.

```js
const body = document.body
const availableClasses = ['dark', 'light', 'lined', 'rounded']
const STORAGE_CODE = 'DEMO_THEME'
const current = ref(defaultLight)
watch(current, (newValue) => {
    let i = 0
    for (; i < availableClasses.length; ++i) {
        body.classList.remove(availableClasses[i])
    }
    for (i = 0; i < newValue.classes.length; ++i) {
        body.classList.add(newValue.classes[i])
    }
    localStorage.setItem(STORAGE_CODE, newValue.id)
})
```
Now, let's add logic to restore the theme when the page is opened. If the theme identifier is not found in localStorage, we check the system theme, and if it is dark, we set the default dark theme.

```js
const load = () => {
    const stored = localStorage.getItem(STORAGE_CODE)
    const exists = themes.find((item) => item.id === stored)
    if (typeof exists !== 'undefined') {
        current.value = exists
    } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        current.value = defaultDark
    }
}
onMounted(load)
```
Now, pass all the necessary parameters to the component and perform the settings.

```vue
<template>
    <v-select
    :searchable="false"
    :clearable="false"
    :options="themes"
    v-model="current"
    class="themes"
    />
</template>
```
Finally, configure the corresponding CSS rules.

<CodePen url="dyrVrxL" height="350"/>