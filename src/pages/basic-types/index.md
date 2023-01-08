---
title: Basic Types
version: 0.1.0
description: Basic types in scryptTS
---

The most basic types allowed are: `boolean` / `string` / `bigint`, along with their wrapper types `Boolean` / `String` / `Bigint`.

#### `ByteString` Type

In a smart contract context (i.e., in `@method`s or `@prop`s), a `ByteString` type represents a byte array in hex format. It must be able be represented by the regular expression: `/^([0-9a-fA-F]{2})*$/`.

Literal `string` is not allowed to be used directly without being wrapped in these functions below:

- `toByteString(input: string)`: return the raw value of `input` as a byte array while validating it as hex bytes.
- `utf8ToByteString(input: string)`: return a value in hex bytes format representing the utf8 encoding of `input`.

For example:

```js
let s0 = utf8ToByteString("hello world") // valid, s0 === "68656c6c6f20776f726c64"

let s1 = toByteString("01ab23ef") // valid, s1 === '01ab23ef'

let invalid_str = "hello world" // invalid, string literal without wrapper function

let invalid_str2 = toByteString("012") // invalid, odd number of hex characters
```

Also there are only a few methods of `ByteString` can be used in `@method`s:

- `ByteString.==` / `ByteString.===`: compare two strings, like `str1 == str2` or `str1 === str2`.

- `ByteString.+`: concat two strings, like `str1 + str2`.

- `ByteString.slice(indexStart, indexEnd?)`: return a substring like `str.slice(0, 2)`. Since `ByteString` is a byte array, `indexStart` and `indexEnd` must be even numbers.

#### `number` Type

By default, type `number` is not allowed in `@prop`s and `@method`s because it may cause precision issues when representing a floating point number. There are a few exceptions:

- [A compile-time constant](#compile-time-constant)

```ts
const N: number = 2
let arr: FixedArray<bigint, N> = [1n, 2n]
```

- An array index

```ts
let idx: number = 3
let item = arr[idx]
```

- An induction variable in `for` statement

```ts
for(let i: number =0; i < 5; i++) …
```
