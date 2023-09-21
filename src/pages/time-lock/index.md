---
title: Time Lock
version: 0.1.0
description: Time locks in sCrypt
---

We can write smart contracts that, whose method(s) can only be unlocked after a certain amount of time has passed. We leverage the [nLocktime](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) field of Bitcoin transactions:

```ts
class TimeLock extends SmartContract {
  @prop()
  readonly matureTime: bigint // Can be a timestamp or block height.

  constructor(matureTime: bigint) {
    super(...arguments)
    this.matureTime = matureTime
  }

  @method()
  public unlock() {
    assert(this.timeLock(this.matureTime), "time lock not yet expired")
  }
}
```

![](diagrams/time-lock.jpg)
