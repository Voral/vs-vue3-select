---
title: Спецификация WAI-ARIA
head:
   - [ meta, { name: title , content: Vs Vue3 Select поддержка спецификации WAI-ARIA} ]
   - [ meta, { name: og:title , content: Vs Vue3 Select поддержка спецификации WAI-ARIA } ]
   - [ meta, { name: description , content: За счет чего компонент Vs Vue3 Select поддерживает спецификацию WAI-ARIA } ]
   - [ meta, { name: og:description , content: За счет чего компонент Vs Vue3 Select поддерживает спецификацию WAI-ARIA } ]
   - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/accessibility/wai-aria/ } ]
   - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/accessibility/wai-aria/ } ]
   - [ meta, { name: keywords , content: "select, select input,multiselect,wai-aria,accessibility" } ]
sidebarDepth: 0
prev:
 text: Стилизация слотами
 link: /ru/styling/slots
next:
 text: Локализация
 link: /ru/accessibility/localization
---

# Спецификация WAI-ARIA

Vs Vue3 Select стремиться следовать спецификации WAI-ARIA best в хороших практиках для 
[combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) и
[listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).

Пользовательский интерфейс компонента разработан вокруг элемента HTML `<select>`, в соответствии со спецификациями
WAI-ARIA и рекомендациями по созданию доступных компонентов.

## Autocomplete

WAI-ARIA предлагает четыре формы автозаполнения для выпадающих списков. Vs Vue3 Select можно настроить для 
предоставления этих вариантов использования.

### 1. No autocomplete

> Поле со списком доступно для редактирования, и при запуске выпадающего списка опции, которые оно 
> содержит, одинаковы независимо от текста, введенного в поле поиска. Например, всплывающее окно предлагает набор 
> недавно введенных значений, и предложения не меняются при вводе пользователем

   ```html
   <v-select
     :filterable="false"
     :options="['No Autocomplete', 'List Autocomplete']"
   />
   ```

   <v-select :filterable="false" :options="['No Autocomplete', 'List Autocomplete']" />

### 2. Поле с ручным выбором опций

   > При запуске выпадающего списка отображаются предлагаемые опции. Если строка поиска доступна для
   > редактирования, предлагаемые значения полностью или логически соответствуют строке поиска. Текст, введенный
   > пользователем, станет значением выпадающего списка, если пользователь не выберет вручную значение во всплывающем 
   > окне.

   ```html
   <v-select taggable :options="['No Autocomplete', 'List Autocomplete']" />
   ```

   <v-select taggable :options="['No Autocomplete', 'List Autocomplete']" />

### 3. Поле с автоматическим выбором опций

   > Строка поиска доступна для редактирования, и когда открывается выпадающий список, в нем отображаются предлагаемые
   > значения, которые полностью или логически соответствуют строк поиска, и первое предложение автоматически выделяется
   > как выбранное. Автоматически выбранное предложение становится значением выпадающего списка, когда выпадающий список
   > теряет фокус, если только пользователь не выберет другое предложение или не изменит строку символов в выпадающем
   > списке

   ```html
   <v-select 
        :options="['Other case','No Autocomplete', 'List Autocomplete']" 
        :auto-select="true" />
   ```

   <v-select :options="['Other Case','No Autocomplete', 'List Autocomplete']" :auto-select="true" />

### 4. Список со встроенным автозаполнением <Badge type="tip" text="v1.2.0+" vertical="top" />

   > Это то же самое, что список с автоматическим выбором с одной дополнительной функцией. Часть выбранного предложения,
   > которая не была введена пользователем, строка завершения, отображается добавленной после курсора ввода в строки 
   > поиска. Добавленная строка дополнения визуально выделена и опция имеет выбранное состояние.

Автодополнение производится в том случае, если опция начинается со строки поиска.

   ```html
   <v-select :options="['Other case','No Autocomplete', 'List Autocomplete']" 
             :auto-select="true"  
             :complete-search="true" />
   ```

   <v-select :options="['Other Case','No Autocomplete', 'List Autocomplete', 'No cases']" :auto-select="true"  :complete-search="true" />
