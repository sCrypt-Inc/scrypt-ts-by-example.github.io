---
title: Built-in Functions
version: 0.1.0
description: Built-in functions in sCrypt
---

There is a wide array of useful built-in functions. The most commonly used built-in function is `assert(cond: boolean)`. It throws an error if `cond` is false. A contract call is successful if and only if all arguments passed to the `assert` functions are true.

The full list of functions can be found in the [sCrypt reference](https://scrypt.io/scrypt-ts/reference/).

```ts
// None of the below functions need an explicit import, as they're built into scrypt-ts itself.
let h = sha256(utf8ToByteString("hello"))
assert(
  h == toByteString("2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")
)
```
