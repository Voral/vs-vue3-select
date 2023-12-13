---
prev:
  text: Слоты
  link: /ru/api/slots
next:
  text: Vs Vue3 Select
  link: /ru/
---
# События

## `update:model-value`

Срабатывает при изменении выбранного значения. В качестве параметра передает в обработчик выбранную опцию (тип String 
или Object)

## `open`

Срабатывает тогда, когда раскрывается выпадающий список.

```js
this.$emit('open')
```

## `close`

Срабатывает тогда, когда закрывается выпадающий список.

```js
this.$emit('close')
```

## `option:selecting`

Срабатывает после выбора опции, <strong>перед</strong> обновлением внутреннего состояния.

```js
this.$emit('option:selecting', selectedOption)
```

## `option:selected`

Срабатывает после выбора опции, <strong>после</strong> обновления внутреннего состояния.

```js
this.$emit('option:selected', selectedOption)
```

## `option:deselecting`

Срабатывает после отмены опции, <strong>перед</strong> обновлением внутреннего состояния.

```js
this.$emit('option:deselecting', selectedOption)
```

## `option:deselected`

Срабатывает после отмены опции, <strong>после</strong> обновления внутреннего состояния.

```js
this.$emit('option:deselected', deselectedOption)
```

## `option:created`

Срабатывает, когда `taggable` имеет значение `true` и была создана новая опция.

```js
/**
 * @param {Object} newOption - created option
 */
this.$emit('option:created', newOption)
```

## `search`

Срабатывает всякий раз, когда строка поиска изменяется, генерируйте событие 'search'. Событие передается с двумя параметрами:
строкой поиска и функцией, которая принимает логический параметр для переключения состояния загрузки.

Полный пример смотрите в [руководстве по AJAX](/ru/guide/ajax.html#loading-options-with-ajax).

```js
/**
 * @param {String} searchString - строка поиска
 * @param {Function} toggleLoading - функция переключающая состояние загрузки, принимает логические true или false
 */
this.$emit('search', this.search, this.toggleLoading)
```

```vue
<!-- example usage -->
<v-select
    @search="
    (search, loading) => {
      loading(true)
      fetchOptions(search).then(() => loading(false))
    }
  "
/>
```

## `search:blur`

Срабатывает, когда ввод текста теряет фокус. Выпадающий список закроется непосредственно перед запуском этого события.

```js
this.$emit('search:blur')
```

## `search:focus`

Срабатывает, когда ввод текста получает фокус. Выпадающий список откроется непосредственно перед запуском этого события.

```js
this.$emit('search:focus')
```
