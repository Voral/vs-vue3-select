---
title: Events
head:
  - [ meta, { name: title , content: Vs Vue3 Select component events } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select component events } ]
  - [ meta, { name: description , content: Documentation for all Vs Vue3 Select component events } ]
  - [ meta, { name: og:description , content: Documentation for all Vs Vue3 Select component events } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/api/events/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/api/events/ } ]
  - [ meta, { name: keywords , content: "select, select input,multiselect,events,component events,vue,vue3,vue3 component, vue3 select" } ]
prev:
  text: Slots
  link: /api/slots
next:
  text: Vs Vue3 Select Component
  link: /
---
# Events

## `update:model-value`

Triggered when the selected value changes. Passes the selected option (String
or Object type) to the handler as a parameter

## `open`

Triggered when the dropdown is open.

```js
this.$emit('open')
```

## `close`

Triggered when the dropdown is closed.

```js
this.$emit('close')
```

## `option:selecting`

Triggered after an option has been selected, <strong>before</strong> updating
internal state.

```js
this.$emit('option:selecting', selectedOption)
```
```ts
export type OptionSelectingHandler = (option: string | object) => void;
```
## `option:selected`

Triggered when an option has been selected, <strong>after</strong> updating
internal state.

```js
this.$emit('option:selected', selectedOption)
```
```ts
export type OptionSelectedHandler = (option: string | object) => void;
```
## `option:deselecting`

Triggered when an option has been deselected, <strong>before</strong> updating
internal state.

```js
this.$emit('option:deselecting', selectedOption)
```
```ts
export type OptionDeselectingHandler = (option: string | object) => void;
```
## `option:deselected`

Triggered when an option has been deselected, <strong>after</strong> updating
internal state.

```js
this.$emit('option:deselected', deselectedOption)
```
```ts
export type OptionDeselectedHandler = (option: string | object) => void;
```
## `option:created`

Triggered when `taggable` is `true` and a new option has been created.

```js
/**
 * @param {Object} newOption - created option
 */
this.$emit('option:created', newOption)
```
```ts
export type OptionCreatedHandler = (option: string | object) => void;
```
## `search`

Anytime the search string changes, emit the 'search' event. The event is passed
with two parameters: the search string, and a function that accepts a boolean
parameter to toggle the loading state.

See the [AJAX Guide](../../use-cases/ajax/) for a complete
example.

```js
/**
 * @param {String} searchString - the search string
 * @param {Function} toggleLoading - function to toggle loading state, accepts true or false boolean
 */
this.$emit('search', this.search, this.toggleLoading)
```

```vue
<!-- example usage -->
<v-select
  @search="
    (search, loading) => {
      loading(true)
      fetchOptions(search).then(() => loading(false))
    }
  "
/>
```

```ts
export type ToggleLoadingFunction = (toggle: boolean | null) => boolean;
export type SearchHandler = (search: string, toggleFunction: ToggleLoadingFunction) => void;
```
## `search:blur`

Triggered when the text input loses focus. The dropdown will close immediately
before this event is triggered.

```js
this.$emit('search:blur')
```

## `search:focus`

Triggered when the text input gains focus. The dropdown will open immediately
before this event is triggered.

```js
this.$emit('search:focus')
```
