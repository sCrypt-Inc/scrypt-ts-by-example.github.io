---
title: Number Type
version: 0.1.0
description: Number type in scryptTS
---

The `number` type is not allowed in `@prop`s and `@method`.

In some special cases, parameters of type `number` must be passed. In this case, we can use `Number()` function to convert `bigint` to `number`.

```ts
// Array indexes:
let arr: FixedArray<bigint, 3> = [1n, 3n, 3n]
let index: bigint = 2n
let item = arr[Number(idx)]

// ByteString operations:
let size: bigint = 3n
let b: ByteString = reverseBytes(toByteString("001122"), Number(size))
let end: bigint = 1n
b.slice(0, Number(end))
```
