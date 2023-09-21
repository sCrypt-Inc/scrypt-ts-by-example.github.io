---
title: Auction
version: 0.1.0
description: Auction in sCrypt
---

The auction contract implements two public functions:

- `bid` - If a higher bid is found, the current winner is updated and the previous highest bidder is refunded.
- `close` - The auctioneer can close the auction after it expires and take the offer.

```ts
class Auction extends SmartContract {
  // The bidder's public key.
  @prop(true)
  bidder: PubKey

  // The auctioneer's public key.
  @prop()
  readonly auctioneer: PubKey

  // Deadline of the auction. Can be block height or timestamp.
  @prop()
  readonly auctionDeadline: bigint

  constructor(auctioneer: PubKey, auctionDeadline: bigint) {
    super(...arguments)
    this.bidder = auctioneer
    this.auctioneer = auctioneer
    this.auctionDeadline = auctionDeadline
  }

  // Call this public method to bid with a higher offer.
  @method()
  public bid(bidder: PubKey, bid: bigint) {
    const highestBid: bigint = this.ctx.utxo.value
    assert(bid > highestBid, "the auction bid is lower than the current highest bid")

    // Change the public key of the highest bidder.
    const highestBidder: PubKey = this.bidder
    this.bidder = bidder

    // Auction continues with a higher bidder.
    const auctionOutput: ByteString = this.buildStateOutput(bid)

    // Refund previous highest bidder.
    const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(
      pubKey2Addr(highestBidder),
      highestBid
    )
    let outputs: ByteString = auctionOutput + refundOutput

    // Add change output.
    outputs += this.buildChangeOutput()

    assert(hash256(outputs) == this.ctx.hashOutputs, "hashOutputs check failed")
  }

  // Close the auction if deadline is reached.
  @method()
  public close(sig: Sig) {
    // Check auction deadline.
    assert(this.timeLock(this.auctionDeadline), "deadline not reached")
    // Check signature of the auctioneer.
    assert(this.checkSig(sig, this.auctioneer), "signature check failed")
  }
}
```
