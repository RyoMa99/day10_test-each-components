# day10

  [write test conde in each components](https://jp.vuejs.org/v2/cookbook/unit-testing-vue-components.html)

## 学んだこと
- defaultでeslintrcの中に__tests__配下にある.tsファイルはテスト対象になるので、各componentsに__tests__フォルダを作ればいい。
- simple-git-hooksを使ってコミット前にlintを行うと、整形に成功した時に新しいcommit前にファイルが作成されてしまう。⇒ 本当はcommitに失敗されてほしい。
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
