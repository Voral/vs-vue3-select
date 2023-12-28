---
title: Props
head:
  - [ meta, { name: title , content: Vs Vue3 Select component Props } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select component Props } ]
  - [ meta, { name: description , content: Documentation for all Vs Vue3 Select component props } ]
  - [ meta, { name: og:description , content: Documentation for all Vs Vue3 Select component props } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/api/props/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/api/props/ } ]
  - [ meta, { name: keywords , content: "select, select input,multiselect,props,properties,component props,vue,vue3,vue3 component, vue3 select" } ]
prev:
  text: Option Filtering
  link: /api/filtering
next:
  text: Slots
  link: /api/slots
---

# Props

## ariaLabel

This value will be bound to the
[aria-label HTML attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
for the search input. Defaults to `Search for option`.

```js
ariaLabel: {
    type: String,
    default: 'Search for option'
},
```

## appendToBody

Append the dropdown element to the end of the body and size/position it
dynamically. Use it if you have overflow or z-index issues.

See [Dropdown Position](../../customizing/positioning/) for more details.

```js
appendToBody: {
    type: Boolean,
    default: false
},
```

## autocomplete

The value provided here will be bound to the
[autocomplete HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
on the search input. Defaults to `off`.

```js
autocomplete: {
    type: String,
    default: 'off'
},
```

## autoscroll

When true, the dropdown will automatically scroll to ensure that the option
highlighted is fully within the dropdown viewport when navigating with keyboard
arrows.

```js
autoscroll: {
  type: Boolean,
  default: true
}
```

## autoSelect

When true, if the component loses focus, the option highlighted in the list will be automatically selected.

```js
autoSelect: {
    type: Boolean,
    default: false
}
```

## calculatePosition

When `appendToBody` is true, this function is responsible for positioning the
dropdown list.

If a function is returned from `calculatePosition`, it will be called when the
dropdown list is removed from the DOM. This allows for any garbage collection
you may need to do.

See [Dropdown Position](../../customizing/positioning/) for more details.

```js
calculatePosition: {
    type: Function,
    /**
     * @param dropdownList {HTMLUListElement}
     * @param component {Vue} current instance of component
     * @param width {string} calculated width in pixels of the dropdown menu
     * @param top {string} absolute position top value in pixels relative to the document
     * @param left {string} absolute position left value in pixels relative to the document
     * @return {function|void}
     */
    default(dropdownList, component, {width, top, left}) {
      dropdownList.style.top = top;
      dropdownList.style.left = left;
      dropdownList.style.width = width;
    }
}
```

## clearable

Can the user clear the selected property?

```js
clearable: {
	type: Boolean,
	default: true
},
```

## clearSearchOnBlur

Enables/disables clearing the search text when the search input is blurred.

```js
clearSearchOnBlur: {
    type: Function,
    default: function ({ clearSearchOnSelect, multiple }) {
      return clearSearchOnSelect;
    }
},
```

## clearSearchOnSelect

Enables/disables clearing the search text when an option is selected.

```js
clearSearchOnSelect: {
	type: Boolean,
	default: true
},
```

## closeOnSelect

Close a dropdown when an option is chosen. Set to false to keep the dropdown
open (useful when combined with multi-select, for example)

```js
closeOnSelect: {
	type: Boolean,
	default: true
},
```
## completeSearch

When true, the part of the selected suggestion that has not been typed by the user, appears in the search line after the
input cursor.

```js
completeSearch: {
    type: Boolean,
    default: false
}
```

## components

API to overwrite default `vs-vue3-select` components with your own. This can be used
to change the clear button or select chevron with your own markup.

The object provided to the components prop will be merged with Vs Vue3 Select's
default components.

See [Components guide](../../styling/components/) for more details.

```js
import Deselect from './Deselect';
import OpenIndicator from './OpenIndicator';

// ...

components: {
  type: Object,
  default: function () {
      Deselect,
      OpenIndicator
  }
},
```

## createOption

User defined function for adding Options

```js
createOption: {
  type: Function,
  default(newOption) {
    if (typeof this.optionList[0] === 'object') {
      newOption = {[this.label]: newOption}
    }

    this.$emit('option:created', newOption)
    return newOption
  }
},
```

## deselectFromDropdown

Determines whether the user can deselect an option by clicking it from within
the dropdown menu.

```js
deselectFromDropdown: {
    type: Boolean,
    default: false
},
```

## dir

Sets RTL support. Accepts `ltr`, `rtl`, `auto`.

```js
dir: {
	type: String,
	default: "auto"
},
```

## disabled

Disable the entire component.

```js
disabled: {
	type: Boolean,
	default: false
},
```

## dropdownShouldOpen

Determines whether the dropdown should open. Used for overriding the default
dropdown behaviour. Receives the `vs-vue3-select` instance as the single argument to
the function.

```js
dropdownShouldOpen: {
    type: Function,
    default({noDrop, open, mutableLoading}) {
      return noDrop ? false : open && !mutableLoading;
    }
}
```

## filter

Callback to filter results when search text is provided. Default implementation
loops each option, and returns the result of this.filterBy.

```js
filter: {
	type: Function,
	default(options, search) {
		return options.filter(option => {
			let label = this.getOptionLabel(option);
			if (typeof label === "number") {
				label = label.toString();
			}
			return this.filterBy(option, label, search);
		});
	}
},
```

## filterable

When true, existing options will be filtered by the search text. Should not be
used in conjunction with taggable.

```js
filterable: {
	type: Boolean,
	default: true
},
```

## filterBy

Callback to determine if the provided option should match the current search
text. Used to determine if the option should be displayed.

```js
filterBy: {
  type: Function,
  default(option, label, search) {
    return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
  }
},
```

## getOptionKey

Callback to get an option key. If `option` is an object and has an `id`, returns
`option.id` by default, otherwise tries to serialize `option` to JSON.

The key must be unique for an option.

```js
getOptionKey: {
  type: Function,
  default(option) {
    if (typeof option === 'object' && option.id) {
      return option.id
    } else {
      try {
        return JSON.stringify(option)
      } catch(e) {
        return console.warn(
          `[vs-vue3-select warn]: Could not stringify option ` +
          `to generate unique key. Please provide 'getOptionKey' prop ` +
          `to return a unique key for each option.\n` +
          'https://vue3-select.va-soft.ru/api/props.html#getoptionkey'
        )
        return null
      }
    }
  }
},
```

## getOptionLabel

Callback to generate the label text. If `{option}` is an object, returns
`option[this.label]` by default.

Label text is used for filtering comparison and displaying. If you only need to
adjust the display, you should use the `option` and `selected-option` slots.

```js
getOptionLabel: {
  type: Function,
  default(option) {
    if (typeof option === 'object') {
      if (!option.hasOwnProperty(this.label)) {
        return console.warn(
          `[vs-vue3-select warn]: Label key "option.${this.label}" does not` +
          ` exist in options object ${JSON.stringify(option)}.\n` +
          'https://vue3-select.va-soft.ru/api/props.html#getoptionlabel'
        )
      }
      return option[this.label]
    }
    return option;
  }
},
```

## inputId

Sets the id of the input element.

```js
inputId: {
	type: String
},
```

## label

Tells `vs-vue3-select` what key to use when generating option labels when each
`option` is an object.

```js
label: {
	type: String,
	default: "label"
},
```

## loading

Show spinner if the component is in a loading state.

```js
loading: {
	type: Boolean,
	default: false
},
```

## multiple

Equivalent to the `multiple` attribute on a `<select>` input.

```js
multiple: {
	type: Boolean,
	default: false
},
```

## noDrop

Disable the dropdown entirely.

```js
noDrop: {
	type: Boolean,
	default: false
},
```

## options

An array of strings or objects to be used as dropdown choices. If you are using
an array of objects, `vs-vue3-select` will look for a `label` key (ex.
`[{label: 'Canada', value: 'CA'}]`). A custom label key can be set with the
`label` prop.

```js
options: {
	type: Array,
	default() {
		return [];
	}
},
```

## optgroups

Options can also be grouped together. Each group is an object containing the name of the group and an array of options.

```vue
<v-select
  v-model="selected"
  :options="optgroups"
/>
```

```js
const optgroups = [
  {
    groupLabel: 'Germany',
    groupOptions: [
      { label: 'Berlin', value: 'BE' },
      { label: 'Frankfurt', value: 'FFM' },
    ],
  },
  {
    groupLabel: 'USA',
    groupOptions: [
      { label: 'Chicago', value: 'CHI'  },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
  {
    groupLabel: 'Taiwan',
    groupOptions: [
      { label: 'Taipei', value: 'TPE' },
      { label: 'Kaohsiung', value: 'KHH' },
      { label: 'Taichung', value: 'TXG' },
    ],
  },
]
```

## pasteSeparator <Badge type="tip" text="v1.3.0+" vertical="top" />

Specifies the separator string for pasting multiple values from the clipboard. When this property is set, the pasted 
string will be split into individual options using the specified separator.

This option is used when the component is in multiple selection mode.

```js
pasteSeparator: {
   type: String,
   default: ''
},
```

## pasteTrim <Badge type="tip" text="v1.3.0+" vertical="top" />

When set to true, each option obtained after splitting during paste will undergo trimming using the 
[String.prototype.trim()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/trim) 
method. This includes removing leading and trailing whitespace, line breaks, and other white spaces around the pasted 
values.

This option is used when the component is in multiple selection mode.

```js
pasteTrim: {
  type: Boolean,
  default: true
},
```

## placeholder

Equivalent to the `placeholder` attribute on an `<input>`.

```js
placeholder: {
	type: String,
	default: ""
},
```

## pushTags

When true, newly created tags will be added to the options list.

```js
pushTags: {
	type: Boolean,
	default: false
},
```

## reduce

When working with objects, the reduce prop allows you to transform a given
object to only the information you want passed to a v-model binding or @input
event.

```js
reduce: {
  type: Function,
  default: option => option,
},
```

## resetOnOptionsChange

When false, updating the options will not reset the selected value.

Since `v3.4+` the prop accepts either a `boolean` or `function` that returns a
`boolean`.

If defined as a function, it will receive the params listed below.

```js
/**
* @type {Boolean|Function}
* @param {Array} newOptions
* @param {Array} oldOptions
* @param {Array} selectedValue
*/
resetOnOptionsChange: {
    default: false,
    validator: (value) => ['function', 'boolean'].includes(typeof value)
},
```

## searchable

Enable/disable filtering the options.

```js
searchable: {
	type: Boolean,
	default: true
},
```

## selectable

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

## tabindex

Set the tabindex for the input field.

```js
tabindex: {
	type: Number,
	default: null
},
```

## taggable

Enable/disable creating options from searchInput.

```js
taggable: {
	type: Boolean,
	default: false
},
```

## transition

Sets a Vue transition property on the `.dropdown-menu`. `vs-vue3-select` does not
include CSS for transitions, you'll need to add them yourself.

```js
transition: {
	type: String,
	default: "fade"
},
```

## uid

A unique identifier used to generate IDs and DOM attributes. Must be unique for
every instance of the component.

```js
uid: {
  type: [String, Number],
  default: () => uniqueId(),
},
```

## value

Contains the currently selected value. Very similar to a `value` attribute on an
`<input>`. You can listen for changes using the 'input' event.

```js
value: {
	default: null
},
```
