---
title: Tag Input Field
head:
  - [meta, { name: title , content: Vs Vue3 Select Tag Input Field }]
  - [meta, { name: og:title , content: Vs Vue3 Select Tag Input Field }]
  - [meta, { name: description , content: How to Create a Tag Input Field in Vue3 app }]
  - [meta, { name: og:description , content: How to Create a Tag Input Field in Vue3 app }]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/tag-input/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/tag-input/ }]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,tagged,tag input,input for tags"} ]
sidebarDepth: 0
prev:
  text: Floating Label
  link: /use-cases/floating-label
next:
  text: Routing
  link: /use-cases/routing/
---

# Tag Input Field

On projects, there is often a need to implement a tag input field. Let's explore how to address this requirement using
the vs-vue3-select component. Consider the following task conditions:

* As the user types, the field should display popular tags starting with the entered string, along with statistics on
  their usage.
* The field should support the input of arbitrary tags.
* Users should have the ability to paste a pre-prepared list of tags from the clipboard.
* The height of the field should dynamically adjust to display all entered tags.
* The field's value should be an array of strings containing the selected tags.

First, let's configure the component. Details about the parameters are described in the [props section](/api/props/):

* `taggable` enables the option for users to create custom options.
* `multiple` enables the multiple selection mode.
* `filterable` is disabled, as we will manage the filtering manually.
* `select-on-key-codes` is set to `[188,13]` so that selection occurs when the user presses Enter or comma.
* `paste-separator` is set to `,` to split the pasted string by this symbol.

Next, we pass the following functions:

* `create-option` - a function that creates a new option from a string. Since options from the backend are objects with
  tags and usage statistics, we need to handle this conversion.
* `@search` - a function to query the API to retrieve a list of options corresponding to the user's input. In this
  example, the function simulates an asynchronous server call.
* `reduce` - based on the task conditions, the component should return an array of simple strings containing tags. We
  extract only the necessary information from the object describing the option.

We use the [slot option](/api/slots#option) to customize the display of each option to show tags and their usage
statistics.

Additionally, we add the stretch CSS class to the component to ensure automatic height adjustment when adding tags.

@[code](../../.vuepress/components/TagInput.vue)

Let's see the resulting component in action. For convenience, the formatted value is displayed below the input field.
Country names are used as examples of existing tags.

<TagInput/>

Also, try copying a string to the clipboard and pasting it into the input field.

<TagString value="vue,angular,react, react"/>