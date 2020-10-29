# Description
`GraphQL`の学習用ソース。
`graphql-yoga + Typescript`で作成。

# Install

```shell
yarn install
```

# Run
`chapter-1`から`chapter-5`まで順番に実行していくと理解が捗る。
各チャプター共通で、実行後は`localhost:4000`からPlayground画面を開いて検証する。

## Chapter1 基本的なクエリ(`src/basic`)

```shell
yarn chapter-1
```

一番基本的な形。
下記のようなクエリを実行する。

```graphql
query {
    chapter: {
        no
        name
        version
        original
        postDate
    }
}
```

## Chapter2 パラメータ付きクエリ(`src/params`)

```shell
yarn chapter-2
```

`Chapter1`のクエリに加えて、パラメータを付けたサンプル。
ここでは`no:2`の場合のみ値を取得できるようにしている。
クエリは以下の通り。

```graphql
query {
  chapter(param:{no:2}) {
    no
    name
    version
    original
    postDate
  }
}
```

## Chapter3 配列型のレスポンス(`src/multiple`)

```shell
yarn chapter-3
```

`Chapter1`のクエリを変形し、配列型のレスポンスを扱うサンプル。
クエリは以下の通り。

```graphql
query {
  chapters {
    no
    name
    version
    original
    postDate
  }
}
```

## Chapter4 Mutationを用いた作成・更新処理(`src/mutation`)

```shell
yarn chapter-4
```

`Mutation`を定義し、値の生成や変更を行う場合のサンプル。
クエリ以外に`QueryValiables`を指定する必要がある。

クエリ
```graphql
mutation($param: UpdateParam!) {
  update(param: $param) {
    no
    name
    version
    original
    postDate
  }
}
```

QueryValiables

```json
{
    "param": {
      "no": 4,
      "name": "Mutationを使って追加・更新を行う",
      "version": "1.0.0",
      "original": true,
      "postDate": "2020-10-29T:12:00:00Z"
    }
}
```

## Chapter5 Validation処理(`src/validation`)

```shell
yarn chapter-5
```

`Chapter4`の内容にValidation機能を加えたサンプル。
`create()`を行う時に`no`が`4`以下だったら重複エラーを出すようにしている。

```graphql
mutation($param: CreateParam!) {
  create(param: $param) {
    data {
      no
      name
      version
      original
      postDate
    }
    statusCode
    error {
      code
      value
    }
  }
}
```

QueryValiables(エラーが発生するパターン)

```json
{
    "param": {
        "no": 4,
        "name": "Validationを追加する",
        "version": "1.0.0",
        "original": true,
        "postDate": "2020-10-29T:12:00:00Z"
    }
}
```

QueryValiables(成功パターン)

```json
{
    "param": {
        "no": 4,
        "name": "Validationを追加する",
        "version": "1.0.0",
        "original": true,
        "postDate": "2020-10-29T:12:00:00Z"
    }
}
```