---
title: State
version: 0.1.0
description: Smart contract state in scryptTS
---

As shown on the previous page we can put arbitrary constraints on the data of next transaction by using `this.tx`. The following is an example of a simple counter smart contract. Every iteration of the contract must contain a value `count` which is bigger by one from the previous iteration.

```ts
class Counter extends SmartContract {
  @prop(true)
  count: bigint

  constructor(count: bigint) {
    super(count)
    this.count = count
  }

  @method()
  public increment() {
    // Update counter value.
    this.count++

    // Ensure the next output will hold our updated value.
    assert(
      this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)),
      "Output hashes don't match"
    )
  }
}
```
