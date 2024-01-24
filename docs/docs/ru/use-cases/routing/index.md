---
title: Навигация
head:
  - [ meta, { name: title , content: Vs Vue3 Select навигации} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select навигации} ]
  - [ meta, { name: description , content: Пример использования компонента Vs Vue3 Select для навигации} ]
  - [ meta, { name: og:description , content: Пример использования компонента Vs Vue3 Select для навигации} ]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/routing/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/routing/ }]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,routing,navigation"} ]
description: Пример использования компонента Vs Vue3 Select для навигации
keyword: select,routing,navigation
sidebarDepth: 0
prev:
  text: Поле ввода тегов
  link: /ru/use-cases/tag-input/
next:
  text: События клавиатуры
  link: /ru/customizing/keydown/
---
# Навигация

Иногда есть необходимость навигацию в приложении реализовать при помощи выпадающего списка. Давайте разберем как это сделать.

Для примера возьмем навигацию в которой, кроме полезных страниц, есть и технические на подобии страницы ошибки 404.
```js
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "404" }
];
```

На основе этих этого списка можно вычислить список опций для компонента
```js
const router = useRouter()
const links = computed(() => {
    const excludes = ['404']
    return router.options.routes.filter(
        (r) =>
            r.path.startsWith('/') &&
            typeof r.name === 'string' &&
            !excludes.includes(r.name),
    )
})
```
Текущий маршрут будет храниться в константе, и при ее изменении будем менять маршрут
```js
const current = ref(
    router.options.routes.find(
        item => item.path === router.currentRoute.value.path,
    ),
)
watch(current, router.push)
```

Остается настроить компонент: указать свойство содержащее метку опции и запретить очистку

```vue
<template>
  <v-select
      :clearable="false"
      :options="links"
      label="name"
      v-model="current"
  />
</template>
```

<CodePen url="VwRMKrv" height="350"/>