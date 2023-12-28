---
title: Выпадающий список
head:
  - [ meta, { name: title , content: Vs Vue3 Select Выпадающий список} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Выпадающий список} ]
  - [ meta, { name: description , content: "Описание вариантов опций, которые может принимать компонент Vs Vue3 Select"} ]
  - [ meta, { name: og:description , content: "Описание вариантов опций, которые может принимать компонент Vs Vue3 Select"} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/start/options/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/start/options/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,installation"} ]
sidebarDepth: 0
prev:
 text: Установка
 link: /ru/start/install
next:
 text: Работа со значением
 link: /ru/start/values
---

# Выпадающий список

## Свойство `options`

`vs-vue3-select` принимает массив примитивных типов или объектов для использования в качестве опций при помощи свойства `options`:

```html
<v-select :options="['Canada', 'United States']"></v-select>
```

<v-select :options="['Canada', 'United States']"></v-select>

```html
<v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>
```

<v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>

## Метки опций

#### Опции примитивных типов (strings, numbers, boolean)

Если элемент списка содержит строку или число, то она будет использована в качестве метки для соответствующей опции.
Дополнительных настроек при этом не требуется.

#### Опции объектного типа

Если `options` это массив объектов, компонент должен генерировать текст для отображения в качестве метки. По умолчанию, `vs-vue3-select` попробует найти свойство label у объекта `option.label`. Если в ваших объектах нет такого свойства, то
вы можете указать имя необходимого свойства в параметре `label {String}`.

Для примера, рассмотрим объект со свойствами `countryCode` и `countryName`:

```json
{
  "countryCode": "CA",
  "countryName": "Canada"
}
```

Если вы хотите видеть `Canada` в выпадающем списке, используйте ключ `countryName`:

```html
<v-select label="countryName" :options="countries"></v-select>
```

<country-select />

## Пустой список

`vs-vue3-select` требует, чтобы параметр `options` был массивом. Если вы используете Vue
в режиме разработки, вы увидите предупреждение если попытаетесь передать переменную любого другого типа. Если вам 
необходимо `null` или `empty` используйте пустой массив `[]`.
