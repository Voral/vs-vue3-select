---
title: Проверки
head:
  - [meta, { name: title , content: Vs Vue3 Select Проверки }]
  - [meta, { name: og:title , content: Vs Vue3 Select Проверки }]
  - [meta, { name: description , content: Проверка значений компонента Vs Vue3 Select }]
  - [meta, { name: og:description , content: Проверка значений компонента Vs Vue3 Select }]
  - [meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/use-cases/validation/ }]
  - [link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/use-cases/validation/ }]
  - [meta, { name: keywords , content: "select,select input,multiselect,vue,vue3,vue3 component,vue3 select,dropdown,validation"} ]
sidebarDepth: 0
prev:
  text: Localization
  link: /ru/accessibility/localization
next:
  text: Ограничение выбора
  link: /ru/use-cases/selectable
---

# Проверки

## Обязательное

Если вам нужно убедиться, что опция выбрана до отправки формы, вы можете использовать атрибут `required` в сочетании со
строкой поиска.

Однако поисковая строка в компоненте фактически не хранит значение, поэтому простое добавление требуемого атрибута не
сработает. Вместо этого мы будем привязывать атрибут динамически, так что он будет присутствовать только в том случае,
если у нас нет выделения.

<ValidationRequired />

```html
<v-select :options="books" label="title" v-model="selected">
    <template #search="{attributes, events}">
        <input
                class="vs__search"
                :required="!selected"
                v-bind="attributes"
                v-on="events"
        />
    </template>
</v-select>
```