---
title: Параметры
head:
  - [ meta, { name: title , content: Параметры Vs Vue3 Select} ]
  - [ meta, { name: og:title , content: Параметры Vs Vue3 Select} ]
  - [ meta, { name: description , content: Документация по параметрам компонента Vs Vue3 Select} ]
  - [ meta, { name: og:description , content: Документация по параметрам компонента Vs Vue3 Select} ]
  - [ meta, { name: og:url , content: https://vue3-select.va-soft.ru/ru/api/props/ } ]
  - [ link, { rel: canonical , href: https://vue3-select.va-soft.ru/ru/api/props/ } ]
  - [ meta, { name: keywords , content: "select, select input,multiselect,props,properties,component props,vue,vue3,vue3 component, vue3 select, параметры компонента" } ]
prev:
  text: Фильтрация опций
  link: /ru/customizing/filtering
next:
  text: Слоты
  link: /ru/api/slots
---

# Параметры

## ariaLabel

Значение свойства будет передано в 
[HTML атрибут aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
элемента ввода поискового значения. По умолчанию `Search for option`.

```js
ariaLabel: {
    type: String,
    default: 'Search for option'
},
```

## appendToBody

Если true выпадающий список будет добавляться в конец тега body, а размер и позиция будут вычисляться динамически. Это может потребоваться когда есть проблемы с выходом списка за пределы видимости или с z-index.

Более детально описано в разделе [Позиция выпадающего списка](../../../ru/customizing/positioning/).

```js
appendToBody: {
    type: Boolean,
    default: false
},
```

## autocomplete

Значение свойства будет передано в
[HTML атрибут autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
элемента ввода поискового значения. По умолчанию `off`.

```js
autocomplete: {
    type: String,
    default: 'off'
},
```

## autoscroll

При значении true выпадающий список будет автоматически прокручиваться, что бы выделенный параметр находится в области видимости выпадающего списка при навигации с помощью клавиатуры.

```js
autoscroll: {
    type: Boolean,
    default: true
}
```
## autoSelect

При значении true при потере фокуса компонентом будет автоматически выбрана подсвеченная в списке опция.

```js
autoSelect: {
    type: Boolean,
    default: false
}
```

## calculatePosition
Когда `appendToBody` имеет значение true, эта функция отвечает за позиционирование выпадающего списка.

Если функция возвращается из calculatePosition, она будет вызвана, когда выпадающий список будет удален из DOM. Это позволяет выполнять любую сборку мусора, которая вам может понадобиться.

Более подробную информацию смотрите в разделе [Положение выпадающего списка](../../../ru/customizing/positioning/).

```js
calculatePosition: {
    type: Function,
    /**
     * @param dropdownList {HTMLUListElement}
     * @param component {Vue} текущий экземпляр компонента 
     * @param width {string} вычесленная ширина выпадающего списка в пикселях
     * @param top {string} абсолютное значение сверху (top) в пикселях относительно всей страницы
     * @param left {string} абсолютное значение слева (left) в пикселях относительно всей страницы
     * @return {function|void}
     */
    default(dropdownList, component, {width, top, left}) {
        dropdownList.style.top = top;
        dropdownList.style.left = left;
        dropdownList.style.width = width;
    }
}
```
```ts
export type CalculatePositionGeometry = {
    width: string,
    top: string,
    left: string
}
export type CalculatePositionFunction = (dropdownList: HTMLUListElement, component: Component<any>, geometry: CalculatePositionGeometry) => Function | void;
```

## clearable

Устанавливает может ли пользователь очистить выбранное

```js
clearable: {
    type: Boolean,
    default: true
},
```

## clearSearchOnBlur

Включает/отключает очистку строки поиска, когда элемент теряет фокус.

```js
clearSearchOnBlur: {
    type: Function,
    default: function ({ clearSearchOnSelect, multiple }) {
        return clearSearchOnSelect
    }
},
```
```ts
export type ClearSearchOnBlurFunctionProperty = { clearSearchOnSelect?: boolean, multiple?: boolean };
export type ClearSearchOnBlurFunction = (props: ClearSearchOnBlurFunctionProperty) => boolean
```
## clearSearchOnSelect

Включает/отключает очистку строки поиска, когда опция выбрана

```js
clearSearchOnSelect: {
    type: Boolean,
    default: true
},
```

## closeOnSelect

Закрывать ли выпадающий список при выборе опции. При false, раскрывающийся список остается открытым (полезно, например, 
в сочетании с множественным выбором)

```js
closeOnSelect: {
    type: Boolean,
    default: true
},
```

## completeSearch

При значении true часть выбранной опции, которая не была введена пользователем, отображается в строке поиска после 
курсора ввода.

```js
completeSearch: {
    type: Boolean,
    default: false
}
```

## components

API для перезаписи компонентов по умолчанию `vs-vue3-select` своими собственными. Это можно использовать например для
изменения кнопки очистки или индикатора состояния открытия списка вашей собственной разметкой.

Объект, предоставленный в prop компонентов, будет объединен с компонентами Vs Vue3 Select по умолчанию.

Более подробную информацию смотрите в [Компоненты](../../../ru/styling/components/).

```js
import Deselect from './Deselect';
import OpenIndicator from './OpenIndicator';

// ...

components: {
    type: Object,
    default: function () {
        Deselect,
        OpenIndicator
    }
},
```

## createOption

Определяемая пользователем функция для добавления опций

```js
createOption: {
    type: Function,
    default(newOption) {
        if (typeof this.optionList[0] === 'object') {
            newOption = {[this.label]: newOption}
        }

        this.$emit('option:created', newOption)
        return newOption
    }
},
```
```ts
export type CreateOptionFunction = (option: string | number) => Object | string | number;
```

## deselectFromDropdown

Определяет, может ли пользователь отменить выбор опции, щелкнув по ней в выпадающем меню.

```js
deselectFromDropdown: {
    type: Boolean,
    default: false
},
```

## dir

Устанавливает поддержку RTL-стандарта. Допустимые значения: `ltr`, `rtl`, `auto`.

```js
dir: {
    type: String,
    default: "auto"
},
```

## disabled

Устанавливает заблокированное состояние компонента.

```js
disabled: {
    type: Boolean,
    default: false
},
```

## dropdownShouldOpen

Определяет, должен ли открываться выпадающий список. Используется для переопределения поведения выпадающего списка по
умолчанию. Получает экземпляр `vs-vue3-select` в качестве единственного аргумента функции.

```js
dropdownShouldOpen: {
    type: Function,
    default({noDrop, open, mutableLoading}) {
        return noDrop ? false : open && !mutableLoading;
    }
}
```
```ts
export type DropdownShouldOpenFunction = (component: Component) => boolean;
```
 

## filter

Функция обратного вызова для фильтрации результатов при вводе текста поиска. Реализация по умолчанию перебирает каждую 
опцию и возвращает результат this.filterBy.

```js
filter: {
    type: Function,
    default(options, search) {
        return options.filter(option => {
            let label = this.getOptionLabel(option);
            if (typeof label === "number") {
                label = label.toString();
            }
            return this.filterBy(option, label, search);
        });
    }
},
```
```ts
export type FilterFunction = (options: [], search: String, component: Component) => boolean;
```

## filterable

При значении true существующие параметры будут отфильтрованы по тексту поиска. Не следует использовать в сочетании с
taggable.

```js
filterable: {
    type: Boolean,
    default: true
},
```

## filterBy

Функция обратного вызова, определяющая, соответствует ли предоставленная опция текущему тексту поиска. Используется для
определения того, должна ли отображаться опция.

```js
filterBy: {
    type: Function,
    default(option, label, search) {
        return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    }
},
```
```ts
export type FilterByFunction = (option: object | string, label: string, search: string, component: Component) => boolean;
```

## getOptionKey

Функция обратного вызова для получения ключа опции. Если option является объектом и имеет идентификатор, по умолчанию 
возвращает option.id, в противном случае пытается сериализовать опцию в JSON.

Ключ должен быть уникальным для опции.

```js
getOptionKey: {
    type: Function,
    default(option) {
        if (typeof option === 'object' && option.id) {
            return option.id
        } else {
            try {
                return JSON.stringify(option)
            } catch(e) {
                return console.warn(
                    `[vs-vue3-select warn]: Could not stringify option ` +
                    `to generate unique key. Please provide 'getOptionKey' prop ` +
                    `to return a unique key for each option.\n` +
                    'https://vue3-select.va-soft.ru/api/props.html#getoptionkey'
                )
                return null
            }
        }
    }
},
```
```ts
export type GetOptionKeyFunction = (option: object | string) => string;
```

## getOptionLabel

Функция обратного вызова для генерации текста метки. Если {option} является объектом, по умолчанию возвращает 
`option[this.label]`.

Текст метки используется для фильтрации, сравнения и отображения. Если вам необходимо только настроить отображение,
следует использовать слоты `option` и `selected-option`.

```js
getOptionLabel: {
    type: Function,
    default(option) {
        if (typeof option === 'object') {
            if (!option.hasOwnProperty(this.label)) {
                return console.warn(
                    `[vs-vue3-select warn]: Label key "option.${this.label}" does not` +
                    ` exist in options object ${JSON.stringify(option)}.\n` +
                    'https://vue3-select.va-soft.ru/api/props.html#getoptionlabel'
                )
            }
            return option[this.label]
        }
        return option;
    }
},
```
```ts
export type GetOptionLabelFunction = (option: object | string) => string;
```

## inputId

Задает значение атрибута id элемента строки поиска.

```js
inputId: {
    type: String
},
```

## label

Указывает `vs-vue3-select`, какой ключ использовать при генерации текста опций, в случе если опция является объектом.

```js
label: {
    type: String,
    default: "label"
},
```

## loading

Показывать индикатор загрузки, когда компонент находится в соответствующем состоянии.

```js
loading: {
    type: Boolean,
    default: false
},
```

## mapKeydown

Позволяет переопределять реакцию компонента на события нажатия клавиш, в то время как строка поиска имеет фокус

```js

    mapKeydown: {
      type: Function,
      default: (map) => map,
    },
```
```ts
export type MapKeydownFunction = (map: object, component?: Component) => object
```

## multiple

Эквивалентно атрибуту `multiple` тега `<select>`.

```js
multiple: {
    type: Boolean,
    default: false
},
```

## noDrop

Отключает выпадающий список

```js
noDrop: {
    type: Boolean,
    default: false
},
```

## options

Массив строк или объектов, которые будут использоваться в выпадающем списке. Если вы используете массив объектов, 
`vs-vue3-select` будет искать ключ метки (например: `[{label: 'Canada', value: 'CA'}]`). Пользовательский ключ метки 
может быть установлен с помощью параметра `label`.

```js
options: {
    type: Array,
    default() {
        return [];
    }
},
```

### optgroups

Опции также могут быть сгруппированы вместе. Каждая группа представляет собой объект, содержащий название группы и 
массив опций.

```vue
<v-select
  v-model="selected"
  :options="optgroups"
/>
```

```js
const optgroups = [
  {
    groupLabel: 'Germany',
    groupOptions: [
      { label: 'Berlin', value: 'BE' },
      { label: 'Frankfurt', value: 'FFM' },
    ],
  },
  {
    groupLabel: 'USA',
    groupOptions: [
      { label: 'Chicago', value: 'CHI' },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
  {
    groupLabel: 'Taiwan',
    groupOptions: [
      { label: 'Taipei', value: 'TPE' },
      { label: 'Kaohsiung', value: 'KHH' },
      { label: 'Taichung', value: 'TXG' },
    ],
  },
]
```
## pasteSeparator <Badge type="tip" text="v1.3.0+" vertical="top" />

Указывает разделитель для вставки нескольких значений из буфера обмена. Когда это свойство установлено, вставляемая
строка будет разделена на отдельные опции с использованием указанного разделителя.

Эта опция используется, когда компонент находится в режиме множественного выбора.

```js
pasteSeparator: {
   type: String,
   default: ''
},
```

## pasteTrim <Badge type="tip" text="v1.3.0+" vertical="top" />

Если установлено значение true, каждый параметр, полученный после разделения во время вставки, будет подвергнут обрезке
с использованием метода
[String.prototype.trim()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/trim).
Это включает в себя удаление начальных и конечных пробелов, разрывов строк и т.п.

Эта опция используется, когда компонент находится в режиме множественного выбора.

```js
pasteTrim: {
  type: Boolean,
  default: true
},
```

## placeholder

Эквивалентно атрибуту `placeholder` тега `<input>`.

```js
placeholder: {
	type: String,
	default: ""
},
```

## pushTags

При значении true вновь созданные теги будут добавлены в список опций.

```js
pushTags: {
	type: Boolean,
	default: false
},
```

## reduce

При работе с объектами функция reduce позволяет преобразовать полученный объект только в ту информацию, которую вы 
хотите передать в обработчик v-model или событие @input.

```js
reduce: {
  type: Function,
  default: option => option,
},
```
```ts
export type ReduceFunction = (option: object | string) => object | string;
```

## resetOnOptionsChange

При значении false обновление списка опций не приведет к сбросу выбранного значения.

Может принимать либо логическое значение, либо функцию, которая возвращает логическое значение.

Если определено как функция, оно получит параметры, перечисленные ниже.

```js
/**
* @type {Boolean|Function}
* @param {Array} newOptions новый список
* @param {Array} oldOptions старый список
* @param {Array} selectedValue выбранное значение
*/
resetOnOptionsChange: {
    default: false,
    validator: (value) => ['function', 'boolean'].includes(typeof value)
},
```
```ts
export type ResetOnOptionsChangeFunction = (newOption: object | string, oldOption: object | string, selectedValue: object | string) => boolean;
```
## searchable

Включает/отключает фильтрацию параметров.

```js
searchable: {
	type: Boolean,
	default: true
},
```

## selectable

Функция определяющая, является ли переданная в качестве параметра опция выбираемой или нет. Если `selectable` возвращает
значение false для данной опции, она будет отображаться с классом `vs__dropdown-option--disabled`. Опция будет отключена
и ее невозможно будет выбрать.

```js
selectable: {
  type: Function,
  /**
   * @param {Object|String} option
   * @return {boolean}
   */
  default: option => true,
},
```
```ts
export type SelectableFunction = (option?: object | string) => boolean;
```

## tabindex

Устанавливает атрибут `tabindex` для элемента строки поиска

```js
tabindex: {
	type: Number,
	default: null
},
```

## taggable

Включает/отключает возможность создания опций пользователем из строки поиска.

```js
taggable: {
	type: Boolean,
	default: false
},
```

## transition

Устанавливает Vue свойство transition для выпадающего списка. vs-vue3-select не включает CSS для переходов, вам 
необходимо будет добавить их самостоятельно.

```js
transition: {
	type: String,
	default: "fade"
},
```

## uid

Функция генерации уникального идентификатора для генерации идентификаторов, которые так же используются для атрибутов 
DOM. Значение должно быть уникальным для каждого экземпляра. 

```js
uid: {
  type: [String, Number],
  default: () => uniqueId(),
},
```

## value

Содержит выбранное в данный момент значение. Очень похоже на атрибут value в `<input>`. Вы можете отслеживать изменения, 
используя событие 'input'.

```js
value: {
	default: null
},
```
