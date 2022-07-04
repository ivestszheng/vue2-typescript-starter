<!--
 * @Descripttion:
 * @Date: 2022-05-24 16:14:15
 * @LastEditTime: 2022-07-04 16:37:17
-->

# vue2-typescript-starter

Vue2 typescript starter template using composition-api.

## Features

- File based routing
- Commitlint
- TypeScript

### Plugins

- [`vue/compositon-api`](https://github.com/vuejs/composition-api) - Vue 2 plugin for Composition API
- [`axios`](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [`pinia`](https://github.com/vuejs/pinia) - Intuitive, type safe and flexible Store for Vue
- [`vue-router`](https://github.com/vuejs/vue-router) - The official router for Vue.js
- [`less`](https://github.com/less/less.js) - A backwards-compatible language extension for CSS
- [`eslint`](https://github.com/eslint/eslint) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [`prettier`](https://github.com/prettier/prettier) - An opinionated code formatter
- [`lint-staged`](https://github.com/okonet/lint-staged) - Run _linters_ on git _staged_ files
- [`jest`](https://github.com/facebook/jest) - A comprehensive JavaScript testing solution.
- [`husky` ](https://github.com/typicode/husky)- Modern native Git hooks made easy
- [`dep-check`](https://github.com/depcheck/depcheck) - A tool for analyzing the dependencies in a project to see

## Usage

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Run all unit tests

```
yarn test
```

### Run single Test

make sure in `tests -> unit`

```
cd .\tests\unit
```

test your file

```
yarn jest [FilePath like .\example.spec.ts]
```

### Format code manually.

```
yarn format
yarn lint-fix
```

### Use commitizen

```
yarn cz
```

### Check dependencies

```
yarn depcheck
```
