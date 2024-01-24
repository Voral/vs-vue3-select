---
title: Routing
head:
  - [ meta, { name: title , content: Vs Vue3 Select Routing} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Routing} ]
  - [ meta, { name: description , content: An example of using the Vs Vue3 Select component for navigation} ]
  - [ meta, { name: og:description , content: An example of using the Vs Vue3 Select component for navigation} ]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/routing/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/routing/ }]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,routing,navigation"} ]
description: An example of using the Vs Vue3 Select component for navigation
keyword: select,routing,navigation
sidebarDepth: 0
prev:
  text: Tag Input Field
  link: /use-cases/tag-input/
next:
  text: Keydown Events
  link: /customizing/keydown/
---
# Routing

Sometimes, there is a need to implement navigation in an application using a dropdown list. Let's explore how to achieve this.

As an example, let's consider navigation that includes not only useful pages but also technical pages, such as a 404 error page.

```js
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "404" }
];
```

Based on this list, we can compute the options for the component:
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
The current route will be stored in a constant, and when it changes, the route will be updated:
```js
const current = ref(
    router.options.routes.find(
        (item) => item.path === router.currentRoute.value.path,
    ),
)
watch(current, router.push)
```

Now, let's configure the component by specifying the property containing the option label and disabling clearing:

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