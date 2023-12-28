---
title: Infinite Scroll
head:
  - [ meta, { name: title , content: Vs Vue3 Select Infinite Scroll} ]
  - [ meta, { name: og:title , content: Vs Vue3 Select Infinite Scroll} ]
  - [ meta, { name: description , content: How to implement infinite dropdown list scrolling Vs Vue3 Select component} ]
  - [ meta, { name: og:description , content: How to implement infinite dropdown list scrolling Vs Vue3 Select component} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/use-cases/infinite-scroll/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/use-cases/infinite-scroll/ } ]
  - [ meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,infinite scroll"} ]
sidebarDepth: 0
prev:
 text: Pagination
 link: /use-cases/pagination
next:
 text: State manager
 link: /use-cases/state-manager
---

# Infinite Scroll

Vs Vue3 Select doesn't ship with first party support for infinite scroll, but it's
possible to implement by hooking into the `open`, `close`, and `search` events,
along with the `filterable` prop, and the `list-footer` slot.

Let's break down the example below, starting with the `data`.

- `observer` - a new `IntersectionObserver` with `infiniteScroll` set as the
  callback
- `limit` - the number of options to display
- `search` - since we've disabled Vs Vue3 Selects filtering, we'll need to filter
  options ourselves

When Vs Vue3 Select opens, the `open` event is emitted and `onOpen` will be called.
We wait for `$nextTick()` so that the `$ref` we need will exist, then begin
observing it for intersection.

The observer is set to call `infiniteScroll` when the `<li>` is completely
visible within the list. Some fancy destructuring is done here to get the first
`ObservedEntry`, and specifically the `isIntersecting` & `target` properties. If
the `<li>` is intersecting, we increase the `limit`, and ensure that the scroll
position remains where it was before the list size changed. Again, it's
important to wait for `$nextTick` here so that the DOM elements have been
inserted before setting the scroll position.

You could create observer directly in data(), but since these docs are server side rendered, `IntersectionObserver` 
doesn't exist in that environment, so we need to do it in `mounted()` instead.

<InfiniteScroll />

@[code](../../.vuepress/components/InfiniteScroll.vue)
