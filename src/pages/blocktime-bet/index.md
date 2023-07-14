---
title: BlockTime Bet
version: 0.1.0
description: BlockTime bet in sCrypt
---

By verifying Merkle proofs (read section 8 of the [Bitcoin whitepaper](https://craigwright.net/bitcoin-white-paper.pdf)) in a smart contract we can do interesting things such as betting on the time the next block will be mined. In the following smart contract Alice and Bob bet whether it will take more or less than 10 minutes to mine the next block.

```ts
import { Blockchain, BlockHeader, MerkleProof } from "scrypt-ts-lib"

class BlockTimeBet extends SmartContract {
  // 7 means the transaction has 6 confirmations
  @prop()
  static readonly N = 7n

  // 10 minutes in seconds
  @prop()
  static readonly AVG_BLOCK_TIME = 600n

  // Maximal target for any block to be considered valid.
  @prop()
  blockchainTarget: bigint

  @prop()
  alice: PubKey
  bob: PubKey

  constructor(blockchainTarget: bigint, alice: PubKey, bob: PubKey) {
    super(...arguments)
    this.blockchainTarget = blockchainTarget
    this.alice = alice
    this.bob = bob
  }

  // headers[1] is the block containing the contract tx
  @method()
  public main(headers: FixedArray<BlockHeader, N>, merkleProof: MerkleProof, sig: Sig) {
    // Get ID of previous tx.
    let prevTxid = Sha256(this.ctx.utxo.outpoint.txid)

    // Validate a chain of block headers.
    assert(Blockchain.isBlockHeaderChainValid(this.N, headers, this.blockchainTarget))

    // Verify previous tx is in block with index 1.
    assert(Blockchain.txInBlock(prevTxid, headers[1], merkleProof))

    // Block time is the time difference between this block and last.
    let blockTime = headers[1].time - headers[0].time

    // Alice wins if block is mined within 10 mins; otherwise Bob wins.
    let winner = blockTime < this.AVG_BLOCK_TIME ? this.alice : this.bob
    assert(checkSig(sig, winner))
  }
}
```
