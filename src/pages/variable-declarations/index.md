---
title: Variable Declarations
version: 0.1.0
description: Variable declarations in scryptTS
---

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal TypeScript.

```ts
let a: bigint = 1n // n-suffix means the constant will be compiled as a bigint
a = BigInt(1) // Can also be defined with the BigInt() wrapper instead
var b: boolean = false
const N: number = 3
```
