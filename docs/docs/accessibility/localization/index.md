---
title: Localization
head:
  - [ meta, { name: title , content: Localization Vs Vue3 Select component} ]
  - [ meta, { name: og:title , content: Localization Vs Vue3 Select component} ]
  - [ meta, { name: description , content: How to localize vue3 select component } ]
  - [ meta, { name: og:description , content: How to localize vue3 select component } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/accessibility/localization/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/accessibility/localization/ } ]
  - [ meta, { name: keywords , content: "select localize,localize select input,localize multiselect" } ]
sidebarDepth: 0
prev:
  text: WAI-ARIA Spec
  link: /accessibility/wai-aria
next:
  text: Validation
  link: /use-cases/validation
---

# Localization

## Right to Left

Vs Vue3 Select supports RTL using the standard HTML API using the `dir` prop.

```html
<v-select dir="rtl"></v-select>
```

The `dir` prop accepts the same values as the
[HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir):

- `rtl`
- `ltr`
- `auto`

## Component Text

All of the text within the component has been wrapped within
[slots](https://vuejs.org/guide/essentials/component-basics.html#Content-Distribution-with-Slots)
and can be replaced in your app.

### Loading Spinner

:::: code-group
::: code-group-item Implementation
```html
<v-select>
    <template #spinner="{ loading }">
        <span v-if="loading">Загрузка...</span>
    </template>
</v-select>
```
:::
::: code-group-item Slot Definition
```html
<slot name="spinner">
  <div class="spinner" v-show="mutableLoading">Loading...</div>
</slot>
```
:::
::::

### No Options Text

:::: code-group
::: code-group-item Implementation
```html
<v-select>
    <template #no-options>Нет доступных опцйи</template>
</v-select>
```
:::
::: code-group-item Definition
```html
<slot name="no-options">Sorry, no matching options.</slot>
```
:::
::::

For a full list of component slots, view the [slots API docs](../../api/slots/).
