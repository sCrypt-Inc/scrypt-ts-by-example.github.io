---
title: Rabin Signatures
version: 0.1.0
description: Rabin signatures in scryptTS
---

A [Rabin signature](https://en.wikipedia.org/wiki/Rabin_signature_algorithm) is an alternative form of digital signature to ECDSA used in Bitcoin. It allows for efficient on-chain signature verification and is often used for signing and verifying oracle data.

```ts
class RabinSignature extends SmartContract {
  @method()
  hash(x: ByteString): ByteString {
    // Expand into 512 bit hash
    let hx = sha256(x)
    let idx = len(hx) / 2
    return sha256(hx.slice(0, idx)) + sha256(hx.slice(idx))
  }

  @method()
  public verifySig(sig: bigint, msg: ByteString, padding: ByteString, n: bigint) {
    let h = Utils.fromLEUnsigned(this.hash(msg + padding))
    assert((sig * sig) % n == h % n, "Bad sig")
  }
}
```
