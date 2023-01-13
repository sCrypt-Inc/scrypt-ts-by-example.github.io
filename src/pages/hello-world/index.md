---
title: Hello World
version: 0.1.0
description: Hello world in scryptTS
---

The following is a simple smart contract class. It takes an integer `x` as a parameter for the constructor.
It exposes a single public method `equals`, which checks if the passed parameter is equal to `x`.
In a Bitcoin context this means, that we need to include an integer `y` in the unlocking script, that unlocks the output containing our smart contract (which stores `x`).

```typescript
class Demo extends SmartContract {
  @prop()
  x: bigint

  constructor(x: bigint) {
    super(x)
    this.x = x
  }

  @method()
  public equals(y: bigint) {
    assert(this.x == y, "x doesn't equal y")
  }
}
```
