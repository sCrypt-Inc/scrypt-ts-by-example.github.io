---
title: CLTV - Check LockTime Verify
version: 0.1.0
description: Time locks in scryptTS
---

We can write smart contracts that can only be unlocked after a certain amount of time has passed. We leverage the [nLocktime](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) field of Bitcoin transactions:

```ts
class CheckLockTimeVerify extends SmartContract {
  @prop()
  matureTime: bigint // Can be timestamp or block height.

  constructor(matureTime: bigint) {
    super(matureTime)
    this.matureTime = matureTime
  }

  @method()
  public unlock() {
    // Ensure nSequence is less than UINT_MAX.
    assert(this.ctx.nSequence < 4294967295n)

    // Check if using block height.
    if (this.matureTime < 500000000n) {
      // Enforce nLocktime field to also use block height.
      assert(this.ctx.nLocktime < 500000000n)
    }
    assert(this.ctx.nLocktime >= this.matureTime)
  }
}
```
