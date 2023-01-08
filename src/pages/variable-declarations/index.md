---
title: Variable Declarations
version: 0.1.0
description: Variable declarations in scryptTS
---

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal TypeScript.

```ts
let a: bigint = 1n
var b: boolean = false
const N: number = 3
```

### Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds:

- A number literal like:

```ts
3
```

- A `const` variable:

```ts
const N = 3
```

- A `readonly` property:

```ts
class X {
  static readonly N = 3
}
```

Only numeric literal can be used to initialize CTC. Expressions are not allowed.

```ts
const N = 3 // valid
const N = 3 + 3 // invalid
class X {
  static readonly N = 3 // valid
  static readonly N = 3 + 3 // invalid
}
```

They can be used at places where a CTC is required, including:

- Array length in declaration

```ts
FixedArray<bigint, 3>
FixedArray<bigint, N>
FixedArray<bigint, X.N>
```

- Loop count in `for` statement

```ts
for(let i=0; i< 3; i++)
for(let i=0; i< N; i++)
for(let i=0; i< X.N; i++)
```
