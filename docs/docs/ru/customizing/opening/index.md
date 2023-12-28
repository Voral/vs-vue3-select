---
title: Открытие списка
head:
  - [ meta, { name: title , content: Открытие списка в Vs Vue3 Select} ]
  - [ meta, { name: og:title , content: Открытие списка в Vs Vue3 Select} ]
  - [ meta, { name: description , content: Управление поведением раскрытия выпадающего списка компонента Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Управление поведением раскрытия выпадающего списка компонента Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/customizing/opening/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/customizing/opening/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown"} ]
sidebarDepth: 0
prev:
  text: Позиционирование списка 
  link: /ru/customizing/positioning
next:
  text: Фильтрация опций
  link: /ru/customizing/filtering
---

# Открытие списка

## Поведение по умолчанию

По умолчанию выпадающий список открывается, когда строка поиска получает фокус. Так же список открывается при нажатии 
или когда получает фокус при переходе табуляцией.

## Кастомизация поведения

Параметр `dropdownShouldOpen` позволяет полностью настроить алгоритм открытия/закрытия. Опция принимает функцию, которая
должна возвращать логическое значение. Возвращаемое логическое значение будет использоваться для определения того, 
должен ли выпадающий список быть открытым (true) или закрытым (false). Функция получает экземпляр компонента в качестве
единственного аргумента.

#### Пример: Открывать выпадающий список, когда строка поиска не пустая

---

В этом примере список не отображается до тех пор, пока пользователь не начнет вводить текст. Однако, если элемент уже
выбран, выпадающий список отображается сразу.

<OpenWhenSearchTextPresent />

@[code](../../../.vuepress/components/OpenWhenSearchTextPresent.vue)
