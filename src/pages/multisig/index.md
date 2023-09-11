---
title: Multi-Sig Payment
version: 0.1.0
description: Multi-Sig payment in sCrypt
---

A multi-sig payment contract is used to send funds to a group of Bitcoin addresses. It employs the checkMultiSig function, which distinguishes itself from the checkSig function by accepting an array of signature-public key pairs rather than just one pair. Each signature must be valid.

```ts
class MultiSigPayment extends SmartContract {
  // Public key hashes of the 3 recipients
  @prop()
  readonly addresses: FixedArray<Addr, 3>

  constructor(addresses: FixedArray<Addr, 3>) {
    super(...arguments)
    this.addresses = addresses
  }

  @method()
  public unlock(signatures: FixedArray<Sig, 3>, publicKeys: FixedArray<PubKey, 3>) {
    // Check if the passed public keys belong to the specified public key hashes.
    for (let i = 0; i < 3; i++) {
      assert(
        pubKey2Addr(publicKeys[i]) == this.addresses[i],
        "public key does not correspond to address"
      )
    }

    // Validate signatures.
    assert(this.checkMultiSig(signatures, publicKeys), "checkMultiSig failed")
  }
}
```
