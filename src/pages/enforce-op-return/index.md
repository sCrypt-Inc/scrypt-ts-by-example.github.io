---
title: Enforce OP_RETURN Outputs
version: 0.1.0
description: Enforce a OP_RETURN output using an sCrypt smart contact
---

Similarly as restricting the outputs to pay a specific address, as shown in a [previous example](/enforce-recipient), we can restrict them to include some `OP_RETURN` data.

The following contract pays out the address defined in `dest` and includes an additional `OP_RETURN` output containing a message.

```ts
class EnforceOpReturn extends SmartContract {
  @prop()
  dest: Addr

  @prop()
  message: ByteString

  constructor(message: ByteString) {
    super(...arguments)
    this.message = message
  }

  @method(SigHash.ANYONECANPAY_ALL)
  public unlock() {
    let outputs = toByteString("")

    // 1st output: Pay the destination address.
    outputs += Utils.buildPublicKeyHashOutput(winner, this.ctx.utxo.value)

    // 2nd output: message
    outputs += buildOpreturnScript(this.message)

    // Lastly, add change output if needed.
    if (this.changeAmount > 0n) {
      outputs += this.buildChangeOutput()
    }

    assert(hash256(outputs) == this.ctx.hashOutputs, "hashOutputs check failed")
  }
}
```

We use the `ANYONECANPAY_ALL` sighash flag in order to control all the outputs of the unlocking transaction, instead of only a single one. Because of this the contract code itself also needs to account for a potential change output.

Note, that in order to unlock this contract we will also need to bind a custom transaction builder, that will create a transaction with the correct outputs. See [this page](https://docs.scrypt.io/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx#call-tx) for more details.
