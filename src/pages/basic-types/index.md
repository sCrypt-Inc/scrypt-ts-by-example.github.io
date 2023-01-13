---
title: Basic Types
version: 0.1.0
description: Basic types in scryptTS
---

Basic types allowed to be used in `@prop`s and `@method`s are `boolean` and `bigint`, along with their wrapper types `Boolean` and `BigInt`.

A `string` literal is not allowed to be used directly without being converted into a `ByteString`.

```ts
@method()
public example(x: bigint, y: ByteString, z: boolean) {
    assert(x == 5n);
    assert(z);
    // Strings must by converted to ByteString before being used
    // in a smart contract:
    assert(y == utf8ToByteString("hello world!"));
}
```

Compile time constants can also be of type `number`:

- An array index

```ts
let idx: number = 3
let item = arr[idx]
```

- An induction variable in `for` statement

```ts
for(let i: number =0; i < 5; i++) …
```
