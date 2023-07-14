---
title: ScriptContext
version: 0.1.0
description: ScriptContext in sCrypt
---

`ScriptContext` allows you to put arbitrary constraints on the subsequent (unlocking) transaction (more precisely it's [hash preimage](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)). The most common among those is propagating state through a chain of UTXOs.

```ts
export type ScriptContext = {
  nVersion: ByteString
  utxo: UTXO
  hashPrevouts: ByteString
  hashSequence: ByteString
  sequence: bigint
  hashOutputs: ByteString
  locktime: bigint
  sigHashType: SigHashType
}
```

You can directly access the relevant data of the transaction preimage through `this.ctx` in the public functions of the contract (access in non-public functions is not supported).

```ts
class CheckLockTimeVerify extends SmartContract {
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
