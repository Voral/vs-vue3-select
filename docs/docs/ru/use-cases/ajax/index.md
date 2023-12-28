---
title: Загрузка опций при помощи AJAX
head:
  - [ meta, { name: title , content: Vs Vue3 Select Загрузка опций при помощи AJAX} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Загрузка опций при помощи AJAX} ]
  - [ meta, { name: description , content: Как загружать опции в выпадающий список компонента Vs Vue3 Select при помощи AJAX} ]
  - [ meta, { name: og:description , content: Как загружать опции в выпадающий список компонента Vs Vue3 Select при помощи AJAX} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/ajax/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/ajax/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling,ajax"} ]
sidebarDepth: 0
prev:
  text: Менеджер состояний
  link: /ru/use-cases/state-manager
next:
  text: Применение в циклах
  link: /ru/use-cases/loops
---

# Загрузка опций при помощи AJAX

Событие `search` вызывает обработчик из родительского компонента для загрузки опций при обновлении текста поиска. 
Обработчик может иметь два параметра:

- `search {String}` Текущая строка поиска
- `loading {Function}` Функция для переключения состояния загрузки с одним параметром типа boolean

```html
<v-select @search="fetchOptions" />
```

```js
/**
 * Вызывается когда изменен текст поиска
 *
 * @param search  {String}    Текущий текст поиска
 * @param loading {Function}	Переключает состояние загрузки
 */
fetchOptions (search, loading) {
    //  ... выполняется асинхронный запрос
},
```
Функция `loading` принимает логический параметр, который будет присвоен внутреннему свойству состояния загрузки 
компонента. Вызовите loading(true), чтобы установить свойству загрузки значение true - переключая индикатор загрузки. 
После завершения вашей асинхронной операции вызовите loading(false), чтобы отключить ее.

## Запрет фильтрации

При загрузке свойств с сервера может оказаться полезным отключить фильтрацию на стороне клиента. Используйте параметр 
`filterable` для отключения.

## Индикатор загрузки 

Vs Vue3 Select содержит индикатор загрузки по умолчанию, но вы можете его переопределить при помощи слота `spinner`.

## Рекомендации

Поскольку Vue.js не поставляется с функциональностью ajax как часть базовой библиотеки, вам решать как обрабатывать ajax
запросы в вашем родительском компоненте.

Я рекомендую использовать для запросов к серверу [axios](https://github.com/axios/axios) или
[`fetch()`](https://github.com/github/fetch).

## Пример

Пример [codepen example](https://codepen.io/vasoft/pen/LYqvOOM), объединяет все вышеперечисленные концепции и выполняет
поиск в репозиториях GitHub. Он также использует слоты для некоторых переопределений

<CodePen url="LYqvOOM" height="400"/>
