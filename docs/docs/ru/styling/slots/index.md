---
title: Стилизация слотами
head:
  - [ meta, { name: title , content: Vs Vue3 Select слоты} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select слоты} ]
  - [ meta, { name: description , content: Как стилизовать компонент Vs Vue3 Select при помощи слотов} ]
  - [ meta, { name: og:description , content: Как стилизовать компонент Vs Vue3 Select при помощи слотов} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/styling/slots/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/styling/slots/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling,slots"} ]
sidebarDepth: 0
prev:
 text: CSS стилизация
 link: /ru/styling/css
next:
 text: Спецификация WAI-ARIA
 link: /ru/accessibility/wai-aria
---

# Стилизация слотами

Vs Vue3 Select в настоящее время предлагает несколько слотов. Слоты описаны в документации [API для слотов](../../../ru/api/slots/). 

В качестве примера приведем улучшенную стилизацию сообщение об отсутствии опций подходящих поисковой строке. По 
умолчанию отображается _Sorry, no matching options_. Вы можете добавить дополнительную контекстную информацию, 
используя поле в своих собственных приложениях.

<BetterNoOptions />

@[code](../../../.vuepress/components/BetterNoOptions.vue)
