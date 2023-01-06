---
title: Array Types
version: 0.1.0
description: Array types in scryptTS
---

The common array types in TypeScript like `T[]` or `Array<T>` are not allowed to be used in `@prop`s and `@method`s. 

An array **must** be declared as type of `FixedArray<T, LENGTH>`, whose `LENGTH` must be a [CTC](#compile-time-constant) value described later, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

const N = 2;
let aab: FixedArray<bigint, N> = [1n, 2n];

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```