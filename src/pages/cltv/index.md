---
title: CLTV
version: 0.1.0
description: Time locks in scryptTS
---

Using scryptTS we can write smart contracts that can only be unlocked after a certain amount of time has passed. We leverage the [nLocktime](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) field of Bitcoin transactions:

```ts
class CheckLockTimeVerify extends SmartContract {
  @prop()
  matureTime: bigint // Can be timestamp or block height.

  constructor(matureTime: bigint) {
    super(matureTime)
    this.matureTime = maturetime
  }

  @method()
  public unlock() {
    assert(this.ctx.tx.nLockTime >= this.matureTime)
  }
}
```
