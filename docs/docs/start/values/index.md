---
title: Selecting Values
head:
  - [ meta, { name: title , content: Vs Vue3 Select Selecting Values} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Selecting Values} ]
  - [ meta, { name: description , content: Interaction with the value Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: Interaction with the value Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/start/values/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/start/values/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
 text: Dropdown Options
 link: /start/options/
next:
 text: TypeScript and Types
 link: /start/ts/
---

# Selecting Values

## Getting and Setting

### `v-model`

The most common use case for `vs-vue3-select` is to have the chosen value synced with
a parent component. `vs-vue3-select` takes advantage of the `v-model` syntax to sync
values with a parent. The `v-model` syntax works with primitives and objects.

```html
<v-select v-model="selected" />
```

Note that when using the `multiple` prop, the `v-model` value will always be an
array.

## Props and Events

Sometimes `v-model` might not fit your use case. For example, when working with
[Vuex](https://vuex.vuejs.org), you'll need to trigger a mutation rather than
mutating a value directly. In that case, maybe you need to bind a pre-selected
value, and trigger a mutation when it changes.

`vs-vue3-select` exposes the `value` prop and an `update:model-value` event to enable this. This
combo of props and events is also how Vue wires up the `v-model` syntax
internally.

### Prop: `value`

The `value` prop lets `vs-vue3-select` know what value is currently selected. It will
accept strings, numbers or objects. If you're using a `multiple` v-select,
you'll want to pass an array.

```html
<v-select :value="selected" />
```

::: tip 🤓 
Anytime you bind the `value` prop directly, you're responsible for
updating the bound variable in your code using the `update:model-value` event. 
:::

### Event: `update:model-value`

The `update:model-value` event is triggered anytime the value state changes, and is emitted
with the `value` state as it's only parameter.

## Single/Multiple

By default, `vs-vue3-select` supports choosing a single value. If you need multiple
values, use the `multiple` boolean prop, much the same way you would on an HTML
`<select>` element. When `multiple` is true, `v-model` and `value` must be an
array.

```html
<v-select multiple v-model="selected" :options="['Canada','United States']" />
```

<v-select multiple :options="['Canada','United States']" />

## Transforming Selections

When the `options` array contains objects, `vs-vue3-select` returns the whole object
as dropdown value upon selection. This approach makes no assumptions about the
data you need, and provides a lot of flexibility. However, there will be
situations where you just need to return a single key from an object.

### Returning a single key with `reduce`

If you need to return a single key, or transform the selection before it is
synced, `vs-vue3-select` provides a `reduce` callback that allows you to transform a
selected option before it is passed to the `update:model-value` event. Consider this data
structure:

```js
let options = [{ code: 'CA', country: 'Canada' }]
```

If we want to display the `country`, but return the `code` to `v-model`, we can
use the `reduce` prop to receive only the data that's required.

```html
<v-select
  :options="options"
  :reduce="country => country.code"
  label="country"
/>
```

### Deep Nested Values

The `reduce` property also works well when you have a deeply nested value:

```
{
  country: 'canada',
  meta: {
    code: 'ca'
    provinces: [...],
  }
}
```

```html
<v-select
  :options="options"
  :reduce="country => country.meta.code"
  label="country"
/>
```

 <reducer-nested-value />

## Caveats with `reduce`

The most common issue with `reduce` is when the component displays your
_reduced_ _value_ instead of it's _label_. This happens when you supply Vs Vue3
Select a `value` or `v-model` binding with a reduced\_ value, but the complete
option object is not present in the `options` array.

<ReducedWithNoMatchingOption />

@[code](../../.vuepress/components/ReducedWithNoMatchingOption.vue)

In the example above, the component was supplied with an ID that doesn't exist
in the `options` array. When `value` changes, Vs Vue3 Select searches the supplied
options, running each one through `reduce` until the corresponding option is
found. When that option doesn't exist, Vs Vue3 Select will end up displaying the
`value` supplied.

::: warning

When providing Vs Vue3 Select with a _reduced_ `value` - the object that the value
was reduced from must exist in the `options` array.

:::

## Tagging

To allow input that's not present within the options, set the `taggable` prop to
true.

```html
<v-select taggable multiple />
```

<v-select taggable multiple />

If you want added tags to be pushed to the options array, set `push-tags` to
true.

```html
<v-select taggable multiple push-tags />
```

<v-select taggable multiple push-tags />

### Using `taggable` & `reduce` together

When combining `taggable` with `reduce`, you must define the `createOption`
prop. The `createOption` function is responsible for defining the structure of
the objects that Vs Vue3 Select will create for you when adding a tag. It should
return a value that has the same properties as the rest of your `options`.

If you don't define `createOption`, Vs Vue3 Select will construct a simple object
following this structure: `{[this.label]: searchText}`. If you're using
`reduce`, this is probably not what your options look like, which is why you'll
need to set the function yourself.

**Example**

We have a taggable select for adding books to a collection. We're just concerned
about getting the book title added, and our server side code will add the author
details in a background process. The user has already selected a book.

```js
const options = [
  {
    title: 'HTML5',
    author: {
      firstName: 'Remy',
      lastName: 'Sharp',
    },
  },
]
```

```html
<v-select
  taggable
  multiple
  label="title"
  :options="options"
  :create-option="book => ({ title: book, author: { firstName: '', lastName: '' } })"
  :reduce="book => `${book.author.firstName} ${book.author.lastName}`"
/>
```
