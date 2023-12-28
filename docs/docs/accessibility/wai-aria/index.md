---
title: WAI-ARIA Spec
head:
  - [ meta, { name: title , content: Vs Vue3 Select component and WAI-ARIA Spec } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select component and WAI-ARIA Spec } ]
  - [ meta, { name: description , content: Component following the WAI-ARIA specifications and best practices for creating accessible
    components } ]
  - [ meta, { name: og:description , content: Component following the WAI-ARIA specifications and best practices for creating accessible
    components } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/accessibility/wai-aria/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/accessibility/wai-aria/ } ]
  - [ meta, { name: keywords , content: "select, select input,multiselect,wai-aria,accessibility" } ]

sidebarDepth: 0
prev:
  text: Slots Styling
  link: /styling/slots
next:
  text: Localization
  link: /accessibility/localization
---

# WAI-ARIA Spec

Vs Vue3 Select aims to follow the WAI-ARIA best practices for the
[combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) and
[listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) widgets.

The UX of the component is designed around the HTML `<select>` element, while
following the WAI-ARIA specifications and best practices for creating accessible
components.

## Autocomplete

WAI-ARIA suggests four forms of autocomplete for Comboboxes. Vs Vue3 Select can be
configured to provide these use cases.

### 1. No autocomplete

   > The combobox is editable, and when the popup is triggered, the suggested values it contains are the same regardless
   > of the characters typed in the combobox. For example, the popup suggests a set of recently entered values, and the
   > suggestions do not change as the user types

   ```html
   <v-select
     :filterable="false"
     :options="['No Autocomplete', 'List Autocomplete']"
   />
   ```

   <v-select :filterable="false" :options="['No Autocomplete', 'List Autocomplete']" />

### 2. List autocomplete with manual selection

   > When the popup is triggered, it presents suggested values. If the combobox is editable, the suggested values 
   > complete or logically correspond to the characters typed in the combobox. The character string the user has typed 
   > will become the value of the combobox unless the user selects a value in the popup.

   ```html
   <v-select taggable :options="['No Autocomplete', 'List Autocomplete']" />
   ```

   <v-select taggable :options="['No Autocomplete', 'List Autocomplete']" :auto-select="true" />

### 3. List autocomplete with automatic selection

   > The combobox is editable, and when the popup is triggered, it presents suggested values that complete or logically
   > correspond to the characters typed in the combobox, and the first suggestion is automatically highlighted as 
   > selected. The automatically selected suggestion becomes the value of the combobox when the combobox loses focus 
   > unless the user chooses a different suggestion or changes the character string in the combobox.

   ```html
   <v-select 
        :options="['Other case','No Autocomplete', 'List Autocomplete']" 
        :auto-select="true" />
   ```

   <v-select :options="['Other Case','No Autocomplete', 'List Autocomplete']" :auto-select="true" />

### 4. List with inline autocomplete <Badge type="tip" text="v1.2.0+" vertical="top" />

   > This is the same as list with automatic selection with one additional feature. The portion of the selected
   > suggestion that has not been typed by the user, a completion string, appears inline after the input cursor in the
   > combobox. The inline completion string is visually highlighted and has a selected state.

Autocompleted option is shown if it starts with the characters typed by the user.

   ```html
   <v-select :options="['Other case','No Autocomplete', 'List Autocomplete']" 
             :auto-select="true"  
             :complete-search="true" />
   ```

   <v-select :options="['Other Case','No Autocomplete', 'List Autocomplete', 'No cases']" :auto-select="true"  :complete-search="true" />
