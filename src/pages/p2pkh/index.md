---
title: P2PKH
version: 0.1.0
description: Pay to Public Key Hash (P2PKH) in sCrypt
---

Pay-to-PubKey-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) contract is used to send bitcoins to a bitcoin address. It is the most common contract on the Bitcoin network. Such contracts are unlocked by the public key and a signature created by the corresponding private key.

```ts
class P2PKH extends SmartContract {
  @prop()
  readonly address: Addr

  constructor(address: Addr) {
    super(address)
    this.address = address
  }

  @method()
  public unlock(sig: Sig, pubkey: PubKey) {
    assert(
      pubKey2Addr(pubkey) == this.address,
      "pub key does not correspond to address"
    )
    assert(this.checkSig(sig, pubkey), "signature check failed")
  }
}
```
