---
title: Hash Lock
version: 0.1.0
description: Hash Locks in sCrypt
---

A hash lock is a smart contract that can be unlocked by providing a hash preimage of predefined hash value.

```ts
class HashLock extends SmartContract {
  @prop()
  sha256: Sha256

  constructor(sha256: Sha256) {
    super(sha256)
    this.sha256 = sha256
  }

  @method()
  public unlock(data: string) {
    assert(this.sha256 == sha256(data), "Wrong data")
  }
}
```
