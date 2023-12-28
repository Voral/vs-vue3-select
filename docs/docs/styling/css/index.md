---
title: CSS Styling
head:
 - [ meta, { name: title , content: Vs Vue3 Select CSS Styling} ]
 - [ meta, { name: og:title , content: Vs Vue3 Select CSS Styling} ]
 - [ meta, { name: description , content: How to style a Vs Vue3 Select component using CSS} ]
 - [ meta, { name: og:description , content: How to style a Vs Vue3 Select component using CSS} ]
 - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/styling/css/ } ]
 - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/styling/css/ } ]
 - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling"} ]
sidebarDepth: 0
prev:
 text: Child Components
 link: /styling/components
next:
 text: Slots Styling
 link: /styling/slots
---

# CSS Styling

Vs Vue3 Select offers many APIs for customizing the look and feel from the
component. You can use [scoped slots](../../api/slots/),
[custom child components](../../styling/components/), or modify the built-in CSS properties.

## CSS Variables

Vs Vue3 Select uses custom CSS properties throughout the component to handle visual
opinions. This allows for quite a bit of flexibility in styling, without having
to hook into a build system for generating your own styles with something like
SASS. If there is a value that you think should use a CSS property instead of a
hardcoded CSS value, please submit a PR.

## Dark Mode Example

Without writing any CSS yourself, you can completely customize the look and feel
of Vs Vue3 Select through the use of CSS variables. In this example, we customize the colors of the component in a 
different style from the rest of the examples

In this case, the variables are scoped to only this implementation of the
component, but you could place these variables anywhere in your applications CSS
file to implement at a global level for your app.

Check the MDN docs for more info about
[CSS Custom Properties.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

<CssVariables style="margin-top: 1rem;" />

@[code](../../.vuepress/components/CssVariables.vue)

In this documentation, the following styles have been added to implement the dark theme

```css
html.dark{
  --vs-controls-color: #664cc3;

  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;

  --vs-open-indicator-color: #664cc3;

  --vs-state-disabled-bg: trasparent;
  --vs-state-disabled-color: #555;
}
```

### Available CSS Variables

@[code](../../../../src/css/global/variables.css)

## Overriding Default Styles

Vs Vue3 Select takes the approach of using selectors with a single level of
specificity, while using classes that are very specific to Vs Vue3 Select to avoid
collisions with your app.

Most classes within Vs Vue3 Select use the `vs__` prefix, and selectors are
generally a single classname – unless there is a state being applied to the
component.

In order to override a default property in your app, you should add one level of
specificity. The easiest way to do this, is to add `.v-select` before the
`vs__*` selector if you want to adjust all instances of Vs Vue3 Select, or add your
own classname if you just want to affect one.

<CssSpecificity />

@[code](../../.vuepress/components/CssSpecificity.vue)

## Dropdown Transition

By default, the dropdown transitions with a `.15s` cubic-bezier opacity fade
in/out. The component uses the
[VueJS transition system](https://vuejs.org/v2/guide/transitions.html). By
default, the transition name is `vs__fade`. There's a couple ways to override or
change this transition.

### Transition
Use the `transition` prop. Applying this prop will change the name of the
 animation classes and negate the default CSS. If you want to remove it
 entirely, you can set it to an empty string.

```html
<v-select transition="" />
```

### Override

You can also override the default CSS for the `vs__fade` transition. Again,
if you wanted to eliminate the transition entirely:

```css
.vs__fade-enter-active,
.vs__fade-leave-active {
  transition: none;
}
```

### CSS Variable

There are also two variables to control the animation