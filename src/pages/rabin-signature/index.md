---
title: Rabin Signatures
version: 0.1.0
description: Rabin signatures in scryptTS
---

A [Rabin signature](https://en.wikipedia.org/wiki/Rabin_signature_algorithm) is an alternative form of digital signature to ECDSA used in Bitcoin. It allows for efficient on-chain signature verification and is often used for signing and verifying oracle data.


```ts
class RabinSignature extends SmartContract {

  @method()
  hash(x: string): string {
    // Expand into 512 bit hash
    let hx = sha256(x);
    let idx = len(hx) / 2;
    return sha256(hx.slice(0, idx)) + sha256(hx.slice(idx));
  }

  @method()
  fromLEUnsigned(b: string): bigint {
    // Append positive sign byte in case it isn't already.
    // (if the suffix is '0000' the result stays the same)
    return unpack(b + '00');
  }

  @method()
  public verifySig(sig: bigint,
                   msg: string, padding: string,
                   n: bigint) {
    let h = this.fromLEUnsigned(this.hash(msg + padding));
    assert((sig * sig) % n == h % n);
  }

}

```