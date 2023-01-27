---
title: Rabin Signatures
version: 0.1.0
description: Rabin signatures in scryptTS
---

A [Rabin signature](https://en.wikipedia.org/wiki/Rabin_signature_algorithm) is an alternative form of digital signature to ECDSA used in Bitcoin. It allows for efficient on-chain signature verification and is often used for signing and verifying oracle data.

```ts
type RabinPubKey = bigint

// Rabin signature is combination (S, U).
type RabinSig = {
  // S
  s: bigint
  // U
  padding: ByteString
}

class RabinVerifier extends SmartContractLib {
  @method()
  static hash(x: ByteString): ByteString {
    // expand into 512 bit hash
    const hx = sha256(x)
    return sha256(hx.slice(0, 32)) + sha256(hx.slice(32, 64))
  }

  @method()
  static verifySig(msg: ByteString, sig: RabinSig, pubKey: RabinPubKey): boolean {
    const h = Utils.fromLEUnsigned(RabinVerifier.hash(msg + sig.padding))
    return (sig.s * sig.s) % pubKey == h % pubKey
  }
}
```
