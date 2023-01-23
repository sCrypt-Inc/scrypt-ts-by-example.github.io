---
title: Methods
version: 0.1.0
description: Methods in scryptTS
---

A smart contract can have two kinds of methods:

1. Methods without `@method` decorator. These methods are just like normal TypeScript class methods with no special restraints. These aren't part of the on-chain smart contract and can only be run locally.

2. Methods with `@method` decorator. These are part of the on-chain smart contract. These methods can only call **methods also decorated by `@method`** (and [built-in functions](builtin-functions/)). Similarly, **only the properties decorated by `@prop` can be accessed**.

```ts
  // Non-public methods are internal and can only be called from
  // within the contract
  @method()
  add(x0: bigint, x1: bigint): bigint {
    return x0 + x1
  }

  // Public methods can be called from the unlocking transaction.
  @method()
  public unlock(x: bigint) {  // Value of x is passed via unlocking script
    assert(this.add(this.x, 1n) == x);
  }

  // Functions without the "@method" decorator are just regular TS
  // functions. They aren't included in the smart contract code and
  // can't be called from a smart contract method.
  getContractName() : string {
    return "ExampleContract"
  }

```
