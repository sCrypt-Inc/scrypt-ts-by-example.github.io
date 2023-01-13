---
title: ScriptContext
version: 0.1.0
description: ScriptContext in scryptTS
---

`ScriptContext` allows you to put arbitrary constraints on the subsequent (unlocking) transaction (more precisely it's [hash preimage](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)). The most common among those is propagating state through a chain of UTXOs.

```ts
export type ScriptContext = {
  nVersion: ByteString
  utxo: UTXO
  hashPrevouts: ByteString
  hashSequence: ByteString
  nSequence: bigint
  hashOutputs: ByteString
  nLocktime: bigint
  sigHashType: SigHashType
}
```

You can directly access the relevant data of the transaction preimage through `this.ctx` in the public functions of the contract (access in non-public functions is not supported).

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
    assert(this.ctx.nSequence < 4294967295n, "nSequence must be less than UINT_MAX")

    // Check if using block height.
    if (this.matureTime < 500000000n) {
      // Enforce nLocktime field to also use block height.
      assert(this.ctx.nLocktime < 500000000n, "nLocktime too low")
    }
    assert(this.ctx.nLocktime >= this.matureTime, "nLocktime too low")
  }
}
```
