---
title: События клавиатуры
head:
  - [ meta, { name: title , content: События клавиатуры компонента Vs Vue3 Select} ]
  - [ meta, { name: og:title , content: События клавиатуры компонента Vs Vue3 Select} ]
  - [ meta, { name: description , content: Настройка обработки событий клавиатуры в компоненте Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Настройка обработки событий клавиатуры в компоненте Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/customizing/keydown/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/customizing/keydown/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,keydown"} ]
sidebarDepth: 0
prev:
  text: Навигация
  link: /ru/use-cases/routing/
next:
  text: Позиционирование списка
  link: /ru/customizing/positioning/
---

# События клавиатуры

## selectOnKeyCodes

`selectOnKeyCodes {Array}` - это массив кодов клавиш, который запускает typeahead select. Любые коды клавиш в этом массиве предотвратят действие события по умолчанию и запустят typehead select. По умолчанию для возврата используется просто [13]. Например, возможно, вы хотите пометить нажатие клавиши с запятой:

`selectOnKeyCodes {Array}` - это массив кодов клавиш, которые инициируют выбор элемента при использовании функции 
typeAhead. Любой код клавиши из этого массива прервет стандартное действие события и вызовет выбор элемента с 
использованием функции typeAhead. По умолчанию установлен только `[13]` для клавиши Enter. Например, если вам необходимо
добавить выбор при нажатии запятой, необходимо добавить код этой клавиши:

<TagOnComma /> 

@[code](../../../.vuepress/components/TagOnComma.vue)

## mapKeyDown

Vs Vue3 Select предоставляет параметр `map-keydown`, позволяющий настраивать реакцию компонентов на события нажатия 
клавиш, в то время как строка поиска имеет фокус.

```js
/**
 * @param map {Object} Сопоставление keyCode и обработчиков { <keyCode>:<callback> }
 * @param vm {VueSelect}
 * @return {Object}
 */
(map, vm) => map,
```

По умолчанию параметр – это заглушка, возвращающий тот же объект, который он получает. Этот объект сопоставляет коды 
ключей обработчикам: `{ <keyCode>: <callback> }`. Изменение этого объекта может переопределить функциональность по 
умолчанию или добавить обработчики для разных ключей, которые компонент обычно не прослушивает.

Обратите внимание, что любые коды клавиш, которые вы добавили в `selectOnKeyCodes`, также будут переданы в `map-keydown`,
поэтому `map-keydown` всегда будет иметь приоритет


**Обработчики по умолчанию**

```js
//  delete
8: e => this.maybeDeleteValue()

//  enter
13: e => {
    e.preventDefault();
    return this.typeAheadSelect();
}

//  esc
27: e => this.onEscape()

//  up
38: e => {
    e.preventDefault();
    return this.typeAheadUp();
}

//  down
40: e => {
    e.preventDefault();
    return this.typeAheadDown();
}
```

#### Пример: Автозавершение email адреса 

---

Этот пример показывает как при нажатии клавиши `@` происходит автодополнение адреса строкой `@gmail.com`.

<CustomHandlers />

@[code](../../../.vuepress/components/CustomHandlers.vue)
