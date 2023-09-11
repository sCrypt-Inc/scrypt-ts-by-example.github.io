---
title: HTLC - Hash Time Locked Contract
version: 0.1.0
description: HTLCs in sCrypt
---

HTLCs are a type of smart contract that ensures a transaction is completed within a specific timeframe or it can be cancelled. HTLCs utilize cryptographic hash functions and time locks, ensuring that the payment is only made if the receiver can provide the hash's preimage (original input) before the expiry of the time lock.

These contracts are often used in [cross-chain atomic swaps](https://xiaohuiliu.medium.com/cross-chain-atomic-swaps-f13e874fcaa7).

```ts
class HashTimeLockContract extends SmartContract {
  @prop() readonly alicePubKey: PubKey

  @prop() readonly bobPubKey: PubKey

  @prop() readonly hashX: Sha256

  @prop() readonly timeout: bigint // Can be a timestamp or block height.

  // hash lock
  @method()
  public unlock(x: ByteString, aliceSig: Sig) {
    // Check if H(x) == this.hashX
    assert(sha256(x) == this.hashX, "Invalid secret.")

    // Verify Alices signature.
    assert(this.checkSig(aliceSig, this.alicePubKey))
  }

  // time lock
  @method()
  public cancel(bobSig: Sig) {
    assert(this.ctx.locktime >= this.timeout, "locktime has not yet expired")

    // ...

    // Verify Bobs signature.
    assert(this.checkSig(bobSig, this.bobPubKey))
  }
}
```
