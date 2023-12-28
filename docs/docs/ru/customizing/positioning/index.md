---
title: Позиционирование списка
head:
  - [ meta, { name: title , content: Vs Vue3 Select Позиционирование списка} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Позиционирование списка} ]
  - [ meta, { name: description , content: Управление позицией выпадающего списка в компоненте Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Управление позицией выпадающего списка в компоненте Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/customizing/positioning/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/customizing/positioning/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,dropdown position"} ]
sidebarDepth: 0
prev:
  text: События клавиатуры
  link: /ru/customizing/keydown
next:
  text: Открытие списка
  link: /ru/customizing/opening
---

# Позиционирование списка

## Поведение по умолчанию

При использовании CSS по умолчанию Vs Vue3 Select использует абсолютное позиционирование для отображения выпадающего 
меню. Корневой контейнер `.v-select` (компонент `$el`) используется в качестве относительного родительского элемента 
для выпадающего списка. Выпадающий список будет отображаться под `$el` независимо от доступного пространства.

Это работает в большинстве случаев, но вы можете столкнуться с проблемами при размещении в модальном режиме или в нижней
части окна просмотра. Если вам нужен более точный контроль, вы можете использовать вычисляемое позиционирование.

## Вычисляемое позиционирование

Если вы хотите получить больше контроля над отображением выпадающего списка или если у вас возникли проблемы с z-индексом, вы можете использовать логическую опцию `appendToBody`. Если включено, Vs Vue3 Select добавит выпадающий список к документу за пределами контейнера `.v-select` и позиционирует его с помощью Javascript.

Когда `appendToBody` имеет значение true, позиционирование будет обрабатываться функцией переданной через параметр 
`calculatePosition`. Эта функция отвечает за установку значений абсолютного позиционирования выпадающего списка 
top/left. Реализация по умолчанию размещает выпадающий список в том же положении, в котором он обычно отображается.

## Интеграция Popper.js Integration

[Popper.js](https://popper.js.org/) это утилита объемом 3 кбайт для вычисления положения практически любого элемента DOM относительно другого.

Используя `appendToBody` и `calculatePosition` props, мы можем напрямую интегрироваться с popper для расчета 
позиционирования.

<PositionedWithPopper />

Смотрите [Документацию Popper](https://popper.js.org/docs/v2/modifiers/) где показан полный список модификаторов.

@[code{22-78}](../../../.vuepress/components/PositionedWithPopper.vue) 