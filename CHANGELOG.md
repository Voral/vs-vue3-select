# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.3.4](https://github.com/voral/vs-vue3-select/compare/v1.3.3...v1.3.4) (2024-01-23)


### Bug Fixes

* the option:selected event was not always emitted ([337ddce](https://github.com/voral/vs-vue3-select/commit/337ddce29313d49905d169c8beac1c6e98794052))


### Chores

* Added type for mapKeydown  property ([e4cda88](https://github.com/voral/vs-vue3-select/commit/e4cda88ad7bb610d87547f7b4a04ab33a889f3ce))

### [1.3.3](https://github.com/voral/vs-vue3-select/compare/v1.3.2...v1.3.3) (2024-01-15)


### Refactor

* Improved safety through a more secure approach for verifying object property existence ([22b25d3](https://github.com/voral/vs-vue3-select/commit/22b25d35e8b31d3fc3aca1d393b8e371fcea709e))
* Legacy lint warnings have been processed ([846145c](https://github.com/voral/vs-vue3-select/commit/846145c6409e48fd5093f7f4dbaefc606af93f65))


### Chores

* Added type declarations for the component ([e98625c](https://github.com/voral/vs-vue3-select/commit/e98625c5565d00a4b2380ed502665d3449f63bcc)), closes [#1](https://github.com/voral/vs-vue3-select/issues/1)

### [1.3.2](https://github.com/voral/vs-vue3-select/compare/v1.3.1...v1.3.2) (2024-01-02)


### Bug Fixes

* Behavior when an incorrect reduce function is passed ([6bbc0f6](https://github.com/voral/vs-vue3-select/commit/6bbc0f6887c04e49e4d49a4e50c6dc010356763b))

### [1.3.1](https://github.com/voral/vs-vue3-select/compare/v1.3.0...v1.3.1) (2023-12-29)


### Bug Fixes

* Fixed dropdown toggle behavior when search is absent ([08b1f26](https://github.com/voral/vs-vue3-select/commit/08b1f263a07eb2c006893bc7f69c941dd0f227d3))

## [1.3.0](https://github.com/voral/vs-vue3-select/compare/v1.2.3...v1.3.0) (2023-12-28)


### Features

* **clipboard:** Paste from clipboard with separate in multiple mode ([a1477c9](https://github.com/voral/vs-vue3-select/commit/a1477c9ea1be85e500b4e7464e243c08aeb1725b))


### Style Updates

* Added --vs-selected-options-padding, --vs-selected-options-gap, --vs-selected-multiple-padding ([a86e1de](https://github.com/voral/vs-vue3-select/commit/a86e1de07409082091b0e65d8af1dca745a3ad83))

### [1.2.3](https://github.com/voral/vs-vue3-select/compare/v1.2.2...v1.2.3) (2023-12-27)


### Bug Fixes

* Move vuepress dependencies from module to docs ([601a137](https://github.com/voral/vs-vue3-select/commit/601a1375b8af4484b788ec395e55eb5b353a1f07))

### [1.2.2](https://github.com/voral/vs-vue3-select/compare/v1.2.1...v1.2.2) (2023-12-23)


### Bug Fixes

* search text should clear on blur when component in multiple mode ([2bfeba1](https://github.com/voral/vs-vue3-select/commit/2bfeba1aacb4e475dee8f82ca538cfa40a878cd5))

### [1.2.1](https://github.com/voral/vs-vue3-select/compare/v1.2.0...v1.2.1) (2023-12-18)


### Bug Fixes

* **styles:** The selected option was visually cut off - fixed ([7a520a4](https://github.com/voral/vs-vue3-select/commit/7a520a4fe97429b93c446582b81803728a89102e))

## [1.2.0](https://github.com/voral/vs-vue3-select/compare/v1.1.0...v1.2.0) (2023-12-17)


### Features

* **accessibility:** Autocomplete ([7f6c4b6](https://github.com/voral/vs-vue3-select/commit/7f6c4b6f13ea0a6a0decf20133eac7b53bf26359))
* **useCase:** Enhance header slot with additional props: id, selectedValues, open. ([8c01534](https://github.com/voral/vs-vue3-select/commit/8c01534e9d0d573d6988d0b6916b86fda73036d4))


### Chores

* **description:** Changed project description ([fbcdb3a](https://github.com/voral/vs-vue3-select/commit/fbcdb3ab9098256e4eb9017142e9535692ad7e44))

## [1.1.0](https://github.com/voral/vs-vue3-select/compare/v1.0.0...v1.1.0) (2023-12-12)


### Chores

* codepen examples ([55eb00e](https://github.com/voral/vs-vue3-select/commit/55eb00ed578a69753210e0e83aff5e6d69d0daa9))
* package.json edit ([acef49c](https://github.com/voral/vs-vue3-select/commit/acef49cf9b29cc9c3abfa23ee0a533057df9b9b9))


### Refactor

* Remove deprecated props selectOnTab and onTab ([003aa31](https://github.com/voral/vs-vue3-select/commit/003aa31f3ec97f83546e0a64b14a1fc28d14bfe6))

## [1.0.0](https://github.com/voral/vs-vue3-select/compare/v0.2.1...v1.0.0) (2023-12-08)

### Bug Fixes

* Fixed CSS syntax violations and added initialization of the variable
* The dropdown list did not close when clicking outside
