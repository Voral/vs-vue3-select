---
prev:
 text: Работа со значением
 link: /ru/guide/values
next:
 text: Стилизация CSS
 link: /ru/guide/css
---

# Дочерние компоненты

## Свойство: `components` `{Object}`

Vs Vue3 Select использует дочерние компоненты и предоставляет API для перезаписи этих компонентов вашими собственными,
при помощи свойства `components` `{Object}.` Объект, предоставленный в свойстве `components`, будет объединен с
компонентами Vs Vue3 Select по умолчанию.

<CustomComponentRegistration/>

@[code](../../.vuepress/components/CustomComponentRegistration.vue)

CustomDeselect.vue

@[code](../../.vuepress/components/CustomDeselect.vue)

CustomOpenIndicator.vue

@[code](../../.vuepress/components/CustomOpenIndicator.vue)


Вы можете переопределить значение любого из этих ключей с помощью ваших собственных компонентов.

## Отмена выбора

Возможно, вы захотите включить свою собственную кнопку отмены выбора. Отмена выбора используется в тегах при 
множественном выборе и служит кнопкой очистки для одиночного выбора. Возможно, вы просто хотите использовать 
простую `<button>Очистить</button>` вместо штатной.

```html
<v-select :components="{Deselect}" />
```
CustomDeselect.vue

@[code](../../.vuepress/components/CustomDeselect.vue)

<ClearButtonOverride />

Так же это применяется и к компоненту в режиме мультивыбора (`multiple`):

<MultipleClearButtonOverride />

## Индикатор открытия

Компонент `OpenIndicator` - это "курсор", используемый в компоненте, который меняет ориентацию в зависимости от того,
открыт выпадающий список или закрыт.

```html
<v-select :components="{OpenIndicator}" />
```

CustomOpenIndicator.vue

@[code](../../.vuepress/components/CustomOpenIndicator.vue)

<OpenIndicatorOverride />

## Настройка компонентов глобально

Если вы хотите, чтобы все экземпляры Vs Vue3 Select использовали ваши пользовательские компоненты во всем вашем
приложении, при этом вам нужно будет зарегистрировать реализацию только один раз. Это можно сделать это при регистрации
Vs Vue3 Select в качестве компонента.

```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

vSelect.props.components.default = () => ({
  Deselect: {
    template: '❌',
  },
  OpenIndicator: {
    template: '<span>🔽</span>',
  },
})

Vue.component(vSelect)
```

<CodePen url="KKJLMvg" height="350"/>