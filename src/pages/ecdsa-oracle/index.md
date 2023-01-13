---
title: ECDSA-based Oracles
version: 0.1.0
description: ECDSA-base oracles in scryptTS
---

**P** and **p** denote an oracle’s public and private key, respectively. We first hash the data to be signed. The result is added with **p**, yielding a new private key **p’**.

> x = sha256(data)
> p’ = p + x

The corresponding public key, **P’**, can be derived as follows:

> P’ = p’ _ G = (p + x) _ G = P + x \* G

The oracle uses the derived private key **p’** to sign, instead of the original **p**. Since only the oracle knows **p**, only he knows **p’** and can use it to sign against **P’**. To calculate **P’** in a contract, we need to calculate **X = x \* G** and then add the result with **P**.

In order to verify the correct public key sum efficiently, we also pass **lambda**, which is the gradient between **P** and **X**:

> n - secp256k1 curve order (often also denoted as p)

> lambda = ((Xy - Py) / (Xx - Px)) % n

```ts
class Oracle extends SmartContract {
  // Oracles public key:
  @prop()
  P: PubKey

  constructor(P: PubKey) {
    super(P)
    this.P = P
  }

  @method()
  public verify(data: ByteString, sig: Sig, derP: PubKey, X: PubKey, lambda: bigint) {
    let hash = sha256(data)

    let x = PrivKey(Utils.fromLEUnsigned(hash))

    // Verify X = x * G
    // Use tx preimage trick for very efficient verification.
    assert(
      Tx.checkPreimageAdvancedOCS(
        this.ctx,
        x,
        X,
        TX.invK,
        TX.r,
        Tx.rBigEndian,
        SigHashType(or(Sighash.ALL, SigHash.FORKID))
      ),
      "Failed assertion: X = x * G"
    )

    // Verify P' = P + X
    let ec = new EC()
    assert(ec.isPubKeySum(P, X, lambda, derP), "Failed assertion: P' = P + X")

    // Verify signature is from oracle, who knows p' = p + x
    assert(checkSig(sig, derP), "Bad oracle sig")
  }
}
```
