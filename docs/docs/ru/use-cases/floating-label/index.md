---
sidebarDepth: 0
prev:
  text: Применение в циклах
  link: /ru/use-cases/loops
next:
  text: События клавиатуры
  link: /ru/customizing/keydown
---
# Плавающая метка

<Badge type="tip" text="v1.2.0+" vertical="top" />

Популярным решением является размещение метки поля поверх самого поля, когда оно пустое и неактивно. Когда поле получает
фокус или заполнено значением - метка перемещается вверх. Такой механизм можно реализовать используя слот `header` и
стилей CSS.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../../../.vuepress/components/FlyLabel.vue)