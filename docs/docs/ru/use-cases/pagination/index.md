---
title: Разбивка на страницы
head:
  - [ meta, { name: title , content: Vs Vue3 Select Разбивка на страницы} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Разбивка на страницы} ]
  - [ meta, { name: description , content: Как добавить в выпадающий список компонента Vs Vue3 Select постраничную навигацию } ]
  - [ meta, { name: og:description , content: Как добавить в выпадающий список компонента Vs Vue3 Select постраничную навигацию } ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/pagination/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/pagination/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
 text: Ограничение выбора
 link: /ru/use-cases/selectable
next:
 text: Бесконечная прокрутка
 link: /ru/use-cases/infinite-scroll
---

# Разбивка на страницы

Разбивка на страницы может быть очень полезным инструментом при работе с большими наборами данных. Если у вас есть 1000 
опций, компонент будет отображать 1000 узлов DOM. Это очень много узлов для вставки/удаления, и, скорее всего, вашего
пользователя в любом случае интересуют только некоторые из них.

Чтобы реализовать разбиение на страницы с помощью Vs Vue3 Select, вы можете воспользоваться слотом `list-footer`. Он
отображается под всеми другими параметрами в выпадающем списке.

Чтобы разбиение на страницы корректно работало с фильтрацией, вам придется самостоятельно обработать ee в родительском 
компоненте. Вы можете использовать логическое значение `filterable`, чтобы отключить фильтрацию Vs Vue3 Select, а затем 
подключиться к событию `search`, чтобы использовать текущий поисковый запрос в родительском компоненте.

<Paginated />

@[code](../../../.vuepress/components/Paginated.vue)
