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
class Counter extends SmartContract {
  @prop(true)
  count: bigint

  constructor(count: bigint) {
    super(count)
    this.count = count
  }

  @method()
  public increment() {
    this.count++
    assert(this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)))
  }
}
```
