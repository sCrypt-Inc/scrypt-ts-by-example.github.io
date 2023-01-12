---
title: Properties
version: 0.1.0
description: Smart contract properties in scryptTS
---

Mark smart contract properties with the `@prop` decorator to store the value on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called `stateful` property and its value can be updated in subsequent contract calls.


```ts
class Example extends SmartContract {

  // The value of `x` and `y` will get set during the deployment
  // of the smart contract (via the constructor).

  // The value of `x` stays the same and cannot be changed
  // during the smart contracts lifetime
  @prop()
  x: bigint 
  
  // The value of `y` on the other hand can be changed.
  @prop(true)
  y: bigint
  
  //...
  
}
```

Check out the [smart contract state example](/state) for a full demonstration of how a smart contract property might change over its lifetime.
