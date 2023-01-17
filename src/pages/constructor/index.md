---
title: Constructor
version: 0.1.0
description: Smart contract constructors in scryptTS
---

A smart contract must have an explicit constructor if it has at least one `@prop`.

The `super` method must be called in the constructor with all the arguments for `@prop`s in the same orders as they are passed in. For example,

```js
class A extends SmartContract {
  p0: ByteString // Can't be used inside @method's

  @prop() p1: bigint

  @prop() p2: boolean

  constructor(p0: ByteString, p1: bigint, p2: boolean) {
    super(p1, p2)
    this.p0 = p0
    this.p1 = p1
    this.p2 = p2
  }
}
```
