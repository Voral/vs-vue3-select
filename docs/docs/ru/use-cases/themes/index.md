---
title: Переключатель тем
head:
  - [ meta, { name: title , content: Vs Vue3 Select Переключатель тем} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Переключатель тем} ]
  - [ meta, { name: description , content: Пример использования компонента Vs Vue3 Select для переключение тем оформления приложения} ]
  - [ meta, { name: og:description , content: Пример использования компонента Vs Vue3 Select для переключение тем оформления приложения} ]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/themes/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/themes/ }]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,themes"} ]
description: Пример использования компонента Vs Vue3 Select для переключение тем оформления приложения
keyword: select,routing,themes
sidebarDepth: 0
prev:
  text: Навигация
  link: /ru/use-cases/routing/
next:
  text: События клавиатуры
  link: /ru/customizing/keydown/
---
# Переключатель тем

Вы можете использовать компонент Vs Vue3 Select для переключения тем вашего приложения. Разберем пример создания такого переключателя.

Основной смысл сводится к добавлению заданных CSS-классов к тегу `body` страницы.

Определим список доступных тем, а так же создадим отдельные константы для хранения темной и светлой тем по умолчанию. Объект, описывающий отдельную тему, будет содержать идентификатор темы, метку темы и массив CSS классов.

```js
const defaultLight = {
  label: 'Light default',
  id: 'light-default',
  classes: [],
}
const defaultDark = {
  label: 'Dark default',
  id: 'dark-default',
  classes: ['dark'],
}

const themes = [
  defaultLight,
  defaultDark,
  {
    label: 'Light rounded',
    id: 'light-rounded',
    classes: ['rounded'],
  },
  {
    label: 'Dark rounded',
    id: 'dark-rounded',
    classes: ['dark', 'rounded'],
  },
  {
    label: 'Light line',
    id: 'light-line',
    classes: ['lined'],
  },
  {
    label: 'Dark line',
    id: 'dark-line',
    classes: ['dark', 'lined'],
  },
]
```

Текущую тему будем хранить в константе `current`. А так же наблюдателя, который будет реагировать на изменение текущей темы, убирать устаревшие CSS-классы других тем, добавлять новые и сохранять идентификатор темы в localStorage.

Для упрощения примера все CSS-классы, используемые в темах, так же собраны в общий массив `availableClasses`

```js
const body = document.body
const availableClasses = ['dark', 'light', 'lined', 'rounded']
const STORAGE_CODE = 'DEMO_THEME'
const current = ref(defaultLight)
watch(current, (newValue) => {
    let i = 0
    for (; i < availableClasses.length; ++i) {
        body.classList.remove(availableClasses[i])
    }
    for (i = 0; i < newValue.classes.length; ++i) {
        body.classList.add(newValue.classes[i])
    }
    localStorage.setItem(STORAGE_CODE, newValue.id)
})
```
Теперь добавим логику восстановления темы при открытии страницы. Если в localStorage не найдено идентификатора темы, то проверяем системную тему, и если она темная, то задаем темную тему по умолчанию.

```js
const load = () => {
    const stored = localStorage.getItem(STORAGE_CODE)
    const exists = themes.find((item) => item.id === stored)
    if (typeof exists !== 'undefined') {
        current.value = exists
    } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        current.value = defaultDark
    }
}
onMounted(load)
```
Теперь передаем все необходимые параметры в компонент и производим настройки
```vue
<template>
    <v-select
    :searchable="false"
    :clearable="false"
    :options="themes"
    v-model="current"
    class="themes"
    />
</template>
```
Остается только настроить соответствующие CSS правила.

<CodePen url="dyrVrxL" height="350"/>