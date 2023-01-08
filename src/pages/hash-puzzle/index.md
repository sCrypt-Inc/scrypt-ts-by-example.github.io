---
title: Hash Puzzle
version: 0.1.0
description: Hash puzzles in scryptTS
---

A hash puzzle is a smart contract that can be unlocked by providing a hash preimage of predefined hash value.

```ts
class HashPuzzle extends SmartContract {
  @prop()
  sha256: Sha256

  constructor(sha256: Sha256) {
    super(sha256)
    this.sha256 = sha256
  }

  @method()
  public unlock(data: string) {
    assert(this.sha256 == sha256(data))
  }
}
```
