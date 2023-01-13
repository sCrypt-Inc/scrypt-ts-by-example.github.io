---
title: Bitwise Operators
version: 0.1.0
description: Bitwise operators in scryptTS
---

TypeScript's bitwise operator cannot be used in scryptTS. But you can use the [bitwise built-in functions](https://scrypt.io/scrypt-ts/getting-started/how-to-write-a-contract/#bitwise-operators) provided by scryptTS.

```ts
let a = 42n // 101010
let b = 13n // 001101
let c = 0n // 000000

assert(and(a, b) == 8n) // 001000
assert(or(a, b) == 47n) // 101111

assert(or(a, c) == a)
assert(xor(a, b) == 39n) // 100111

assert(rshift(a, 5n) == 1n)
assert(lshift(b, 1n) == 26n) // 011010
```
