---
title: Time Lock
version: 0.1.0
description: Time locks in sCrypt
---

We can write smart contracts that, whose method(s) can only be unlocked after a certain amount of time has passed. We leverage the [nLocktime](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) field of Bitcoin transactions:

```ts
class TimeLock extends SmartContract {
  @prop()
  matureTime: bigint

  constructor(matureTime: bigint) {
    super(matureTime)
    this.matureTime = matureTime
  }

  @method()
  public unlock() {
    ...

    assert(this.ctx.locktime >= this.matureTime, "locktime too low")
  }
}
```

![](diagrams/time-lock.jpg)
