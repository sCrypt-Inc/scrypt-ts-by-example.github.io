---
title: Auction
version: 0.1.0
description: Auction in scryptTS
---

The auction contract implements two public functions:

- `bid` - If a higher bid is found, the current winner is updated and the previous highest bidder is refunded.
- `close` - The auctioneer can close the auction after it expires and take the offer.

```ts
class Auction extends SmartContract {
  @prop(true)
  bidder: PubKeyHash

  @prop()
  auctioner: PubKey

  @prop()
  auctionDeadline: bigint

  constructor(bidder: PubKeyHash, auctioner: PubKey, auctionDeadline: bigint) {
    super(bidder, auctioner, auctionDeadline)
    this.bidder = bidder
    this.auctioner = auctioner
    this.auctionDeadline = auctionDeadline
  }

  // bid with a higher offer
  @method()
  public bid(
    bidder: PubKeyHash,
    bid: bigint,
    changeSats: bigint,
    txPreimage: SigHashPreimage
  ) {
    let highestBid: bigint = SigHash.value(txPreimage)
    assert(bid > highestBid)

    let highestBidder: PubKeyHash = this.bidder
    this.bidder = bidder

    // auction continues with a higher bidder
    let stateScript: ByteString = this.getStateScript()
    let auctionOutput: ByteString = Utils.buildOutput(stateScript, bid)

    // refund previous highest bidder
    let refundScript: ByteString = Utils.buildPublicKeyHashScript(highestBidder)
    let refundOutput: ByteString = Utils.buildOutput(refundScript, highestBid)
    let output: ByteString = auctionOutput + refundOutput

    if (changeSats > 0) {
      let changeScript: ByteString = Utils.buildPublicKeyHashScript(bidder)
      let changeOutput: ByteString = Utils.buildOutput(changeScript, changeSats)
      output += changeOutput
    }

    assert(this.propagateState(txPreimage, output))
  }

  @method()
  public close(sig: Sig, txPreimage: SigHashPreimage) {
    assert(this.checkPreimage(txPreimage))
    assert(SigHash.nLocktime(txPreimage) >= this.auctionDeadline)
    assert(this.checkSig(sig, this.auctioner))
  }

  @method()
  propagateState(txPreimage: SigHashPreimage, outputs: string): boolean {
    assert(this.checkPreimage(txPreimage))
    return hash256(outputs) == SigHash.hashOutputs(txPreimage)
  }
}
```
