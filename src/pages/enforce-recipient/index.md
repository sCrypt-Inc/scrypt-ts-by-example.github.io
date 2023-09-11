---
title: Enforce Recipients
version: 0.1.0
description: Build and enforce a P2PKH output via an sCrypt smart contact
---

A smart contract can restrict a payment to be destined to a specific address. For example, the contract can check some arbitrary condition and based in the result it pays either Alice or Bob:

```ts
class Bet extends SmartContract {

  @prop()
  addrAlice: Addr

  @prop()
  addrBob: Addr

  constructor(
    addrAlice: Addr,
    addrBob: Addr,
  ) {
    super(...arguments)
    this.addrAlice = addrAlice
    this.addrBob = addrBob
  }

  // ANYONECANPAY_SINGLE is used here to ignore all inputs and outputs, other than the ones contains the state
  // see https://scrypt.io/scrypt-ts/getting-started/what-is-scriptcontext#sighash-type
  @method(SigHash.ANYONECANPAY_SINGLE)
  public unlockAndPay(...) {
    // Implement logic to choose winner...
    let winner: Addr = ...

    // Pay the winner, i.e. enforce a P2PKH that pays his address as the next output.
    const amount = this.ctx.utxo.value // Pay out the same amount, that was locked in the smart contract itself.
    const out = Utils.buildPublicKeyHashOutput(winner, amount)
    assert(
        hash256(out) == this.ctx.hashOutputs,
        'hashOutputs check failed'
    )
  }
}
```

As a matter of fact, using the [`buildOutput`](https://docs.scrypt.io/reference/classes/Utils/#buildoutput) we could define any type of output we like, not only P2PKH.

Note, that in order to unlock this contract we will also need to bind a custom transaction builder, that will create a transaction with the correct output. See [this page](https://docs.scrypt.io/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx#call-tx) for more details.
