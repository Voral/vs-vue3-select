---
title: Бесконечная прокрутка
head:
  - [ meta, { name: title , content: Vs Vue3 Select Бесконечная прокрутка } ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Бесконечная прокрутка } ]
  - [ meta, { name: description , content: Как реализовать бесконечную прокрутку выпадающего списка компонента Vs Vue3 Select } ]
  - [ meta, { name: og:description , content: Как реализовать бесконечную прокрутку выпадающего списка компонента Vs Vue3 Select } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/infinite-scroll/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/infinite-scroll/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,infinite scroll,бесконечная прокрутка" } ]
sidebarDepth: 0
prev:
  text: Разбивка на страницы
  link: /ru/use-cases/pagination
next:
  text: Менеджер состояний
  link: /ru/use-cases/state-manager
---

# Бесконечная прокрутка

Vs Vue3 Select не имеет функционала бесконечной прокрутки списка, но ее можно реализовать, при помощи событий `open`,
`close` и `search`, параметра `filterable` и слота `list-footer`.

Разберем пример приведенный ниже. Начнем с `data`:

- `observer` - новый объект `IntersectionObserver` с `infiniteScroll` установленной в качестве функции обратного вызова
- `limit` - количество отображаемых опций
- `search` - встроенную фильтрацию компонента отключили через параметр, поэтому необходимо хранить строку поиска

Когда откроется выпадающий список, будет выдано событие `open` и будет вызван `onOpen`. Мы ждем `$nextTick()`, чтобы 
нужный нам `$ref` существовал, затем начинаем наблюдать за ним на предмет пересечения.

Наблюдатель настроен на вызов `InfiniteScroll`, когда `<li>` полностью виден в списке. Здесь выполняется некоторая 
деструктуризация, чтобы получить первый наблюдаемый элемент и, в частности, свойства isIntersecting и target. Если 
`<li>` пересекается, мы увеличиваем ограничение и обеспечиваем, чтобы положение прокрутки оставалось там, где оно было 
до изменения размера списка. Опять же, здесь важно дождаться $nextTick, чтобы элементы DOM были вставлены перед
установкой положения прокрутки.

Вы могли бы создать observer непосредственно в data(), но поскольку рендер страницы может на стороне сервера,
IntersectionObserver не существует в этой среде, поэтому нам нужно сделать это в `mounted()`.

<InfiniteScroll />

@[code](../../../.vuepress/components/InfiniteScroll.vue)