---
title: Coin Toss
version: 0.1.0
description: Coin toss in scryptTS
---

Alice and Bob decide to flip a coin, but they have no physical coin or they want to do it over the Internet. They can achieve fair coin tossing by following protocol on Bitcoin.

1. Alice and Bob each locks X bitcoins in a smart contract shown below.
2. They both reveal their secret number, which are XOR’d to determine if the coin toss results in heads or tails. Alice wins if it is heads, otherwise Bob wins. Whoever wins takes all 2X bitcoins.

```ts
class CoinToss extends SmartContract {

  // Public keys:
  @prop()
  alice: PubKey;
  @prop()
  bob: PubKey;
  
  // Commitments:
  @prop()
  aliceHash: Sha256;
  @prop()
  bobHash: Sha256;

  constructor(alice: PubKey, bob: PubKey,
              aliceHash: Sha256, bobHash: Sha256) {
    super(alice, bob, aliceHash, bobHash);
    this.alice = alice;
    this.bob = bob;
    this.aliceHash = aliceHash;
    this.bobHash = bobHash;
  }

  @method()
  public toss(aliceNonce: string, bobNonce: string, sig: Sig) {
    // Nonces can be of any length, as long as they're
    // resistant to brute-force attacks.
    // We use 256 bits / 32 bytes as an example here.
    assert(len(aliceNonce) == 32);
    assert(hash256(aliceNonce) == this.aliceHash);
    assert(len(bobNonce) == 32);
    assert(hash256(bobNonce) == this.bobHash);
    
    let aliceNonceInt = unpack(aliceNonce);
    let bobNonceInt = unpack(bobNonce);
    let head = and(xor(aliceNonceInt, bobNonceInt), 0n);
    
    let winner = head ? this.alice : this.bob;
    assert(checkSig(sig, winner));
  }

}

```