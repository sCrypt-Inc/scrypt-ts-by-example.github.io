---
title: Methods
version: 0.1.0
description: Methods in scryptTS
---

A smart contract can have two kinds of methods:

1. Methods without `@method` decorator. These methods are just like normal TypeScript class methods with no special restraints. These aren't part of the on-chain smart contract and can only be run locally.

2. Methods with `@method` decorator. These are part of the on-chain smart contract. These methods can only call **methods also decorated by `@method` or [functions](#Functions) specified below**. Similarly, **only the properties decorated by `@prop` can be accessed**.

### Public `@method`s

Each contract has at least one public method. It is denoted with the `public` modifier and does not return any value. It is visible outside the contract and acts as the entry point into the contract (like main in C and Java).

A public method can be called from an unlocking transaction. The input parameters are passed via an unlocking script.

```js
  @method()
  public unlock(x: bigint) {  // Value of x is passed via unlocking script
    assert(this.add(this.x, 1n) === x);
  }
```

### Non-Public `@method`s

Without a `public` modifier, a `@method` is an internal method and can only be called within the contract class.

It can return any valid types described later. The return type must be explicitly declared. e.g.,

```js
  @method()
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
```

Note: Recursion is disallowed. Both **Non-Public Methods** and **Public Methods** cannot call themselves in their body, either directly or indirectly.