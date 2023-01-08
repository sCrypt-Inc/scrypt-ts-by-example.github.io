---
title: Functions
version: 0.1.0
description: Functions in scryptTS
---

### Built-in Functions

#### `assert`

The most commonly used built-in function is `assert(cond: boolean)`. It throws an error if `cond` is false. A contract call is successful if and only if all arguments passed to the `assert` functions are true.

### Whitelisted Functions

Be default, all Javascript/TypeScript built-in functions/global variables are not allowed in `@method`s, except the following kinds.

#### `console.log`

`console.log` can be used for debugging purposes.

```ts
@method()
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0);
  return x0 + x1;
}
```
