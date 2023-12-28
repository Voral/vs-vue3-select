---
title: CSS стилизация
head:
  - [ meta, { name: title , content: Vs Vue3 Select CSS стилизация} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select CSS стилизация} ]
  - [ meta, { name: description , content: Как стилизовать компонент Vs Vue3 Select при помощи стилей CSS} ]
  - [ meta, { name: og:description , content: Как стилизовать компонент Vs Vue3 Select при помощи стилей CSS} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/styling/css/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/styling/css/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,styling"} ]
sidebarDepth: 0
prev:
 text: Дочерние компоненты
 link: /ru/styling/components
next:
 text: Стилизация слотами
 link: /ru/styling/slots
---

# CSS стилизация

Vs Vue3 Select предлагает различные способы для настройки внешнего вида компонента. Вы можете использовать 
[слоты](../../../ru/api/slots/), пользовательские [дочерние компоненты](../components/) или изменять встроенные свойства CSS.


## Переменные CSS

Vs Vue3 Select использует пользовательские свойства CSS во всем компоненте для обработки визуальных отзывов. Это
обеспечивает довольно большую гибкость в стилизации, без необходимости подключаться к системе сборки для создания 
собственных стилей. Если есть значение, которое, по вашему мнению, должно использовать свойство CSS вместо жестко
заданного значения CSS, пожалуйста, отправьте PullRequest.

### Пример

Не создавая самостоятельно никакого CSS, вы можете полностью настроить внешний вид Vs Vue3 Select с помощью переменных
CSS. В этом примере мы настраиваем цвета компонента в отличном от остальных примеров стиле.

В этом случае область действия переменных ограничена только этой реализацией компонента, но вы могли бы разместить эти
переменные в любом месте CSS-файла вашего приложения, чтобы реализовать их на глобальном уровне для вашего приложения.

Подробнее о переменных CSS можно почитать в [документации MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

<CssVariables style="margin-top: 1rem;" />

@[code](../../../.vuepress/components/CssVariables.vue)

В этой документации, для реализации темной темы, были добавлены следующий стили
```css
html.dark{
  --vs-controls-color: #664cc3;

  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;

  --vs-open-indicator-color: #664cc3;

  --vs-state-disabled-bg: trasparent;
  --vs-state-disabled-color: #555;
}
```


### Доступные переменные CSS

@[code](../../../../../src/css/global/variables.css)

## Переопределение стилей

Vs Vue3 Select использует подход использования селекторов с одним уровнем, в то же время используя имена классов, 
которые специфичны для Vs Vue3 Select, чтобы избежать коллизий с вашим приложением.

Большинство классов в Vs Vue3 Select используют префикс `vs__`, а селекторы обычно представляют собой одно имя класса –
если только к компоненту не применяется состояние.

Чтобы переопределить свойство по умолчанию в вашем приложении, вы должны добавить один уровень специфичности. Самый
простой способ сделать это - добавить `.v-select` перед селектором `vs__*`, если вы хотите настроить все экземпляры 
Vs Vue3 Select, или добавить свое собственное имя класса, если вы хотите повлиять только на один.

<CssSpecificity />

@[code](../../../.vuepress/components/CssSpecificity.vue)

## Анимация выпадающего списка

По умолчанию анимация выпадающего списка выполняется изменением непрозрачности по функции кубического безье
(cubic-bezier) в течении 0.15 секунд исчезают. Компонент использует 
[систему переходов VueJS](https://vuejs.org/guide/built-ins/transition.html). По умолчанию имя перехода - vs__fade. Есть 
несколько способов переопределить или изменить этот переход.

### Функция перехода

Используйте опцию перехода. Применение этой опции изменит названия классов анимации и отменит CSS по умолчанию. 
Если вы хотите полностью удалить ее - передайте пустую строку

```html
<v-select transition="" />
```

### Переопределение переходов
Вы также можете переопределить CSS по умолчанию для перехода vs__fade. Опять же, если вы хотите полностью исключить 
переход:

```css
.vs__fade-enter-active,
.vs__fade-leave-active {
  transition: none;
}
```

### Переменные CSS 

Так же есть две переменные для управления анимацией
```css
  /* Transitions */
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;
```
