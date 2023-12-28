---
title: Локализация
head:
  - [ meta, { name: title , content: Локализация компонента Vs Vue3 Select} ]
  - [ meta, { name: og:title , content: Локализация компонента Vs Vue3 Select} ]
  - [ meta, { name: description , content: Варианты локализации компонента Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Варианты локализации компонента Vs Vue3 Select } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/accessibility/localization/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/accessibility/localization/ } ]
  - [ meta, { name: keywords , content: "select localize,localize select input,localize multiselect,локализация,select на русском" } ]
sidebarDepth: 0
prev:
 text: Спецификация WAI-ARIA
 link: /ru/accessibility/wai-aria
next:
 text: Проверки
 link: /ru/use-cases/validation
---

# Локализация

## Направление текста

Vs Vue3 Select поддерживает RTL используя атрибут `dir` стандартное HTML API.

```html
<v-select dir="rtl"></v-select>
```

`dir` может принимать одно из значений описанных в 
[спецификации HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir):

- `rtl`
- `ltr`
- `auto`

## Тексты компонента

Все тексты компонента могут быть переопределены при помощи
[слотов](https://vuejs.org/guide/essentials/component-basics.html#Content-Distribution-with-Slots).

### Индикатор загрузки

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

### Сообщение о пустом списке

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

Полный список слотов можно посмотреть на странице [API - Слоты](../../../ru/api/slots/).
