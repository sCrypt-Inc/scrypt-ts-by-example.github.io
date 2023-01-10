---
title: Tic-Tac-Toe
version: 0.1.0
description: Tic-Tac-Toe in scryptTS
---

To initiate a game, Alice and Bob each lock up X amount of bitcoins into a contract UTXO. They take turns to play the game by sending signed transactions interacting with the [stateful contract](https://scrypt.io/scrypt-ts/tutorials/stateful-contract). If one of them wins, the winner claims the 2X bitcoins. If there is a draw, they take back their bitcoins.

```ts
class TicTacToe extends SmartContract {
  @prop()
  alice: PubKey
  @prop()
  bob: PubKey

  @prop(true)
  is_alice_turn: boolean

  @prop(true)
  board: FixedArray<bigint, 9>

  @prop()
  static readonly TURNLEN: bigint = 1n
  @prop()
  static readonly BOARDLEN: bigint = 9n
  @prop()
  static readonly EMPTY: bigint = 0n
  @prop()
  static readonly ALICE: bigint = 1n
  @prop()
  static readonly BOB: bigint = 2n

  constructor(
    alice: PubKey,
    bob: PubKey,
    is_alice_turn: boolean,
    board: FixedArray<bigint, 9>
  ) {
    super(alice, bob, is_alice_turn, board)
    this.alice = alice
    this.bob = bob
    this.is_alice_turn = is_alice_turn
    this.board = board
  }

  @method()
  public move(n: bigint, sig: Sig, amount: bigint) {
    assert(n >= 0n && n < TicTacToe.BOARDLEN)
    assert(this.board[Number(n)] == TicTacToe.EMPTY)

    let play = this.is_alice_turn ? TicTacToe.ALICE : TicTacToe.BOB
    let player: PubKey = this.is_alice_turn ? this.alice : this.bob

    assert(this.checkSig(sig, player))
    // make the move
    this.board[Number(n)] = play
    this.is_alice_turn = !this.is_alice_turn

    let outputs = toByteString("")
    if (this.won(play)) {
      let outputScript = Utils.buildPublicKeyHashScript(hash160(player))
      let output = Utils.buildOutput(outputScript, amount)
      outputs = output
    } else if (this.full()) {
      let aliceScript = Utils.buildPublicKeyHashScript(hash160(this.alice))
      let aliceOutput = Utils.buildOutput(aliceScript, amount)

      let bobScript = Utils.buildPublicKeyHashScript(hash160(this.bob))
      let bobOutput = Utils.buildOutput(bobScript, amount)

      outputs = aliceOutput + bobOutput
    } else {
      outputs = this.buildStateOutput(amount)
    }

    assert(this.ctx.hashOutputs == hash256(outputs))
  }

  @method()
  won(play: bigint): boolean {
    let lines: FixedArray<FixedArray<BigInt, 3>, 8> = [
      [0n, 1n, 2n],
      [3n, 4n, 5n],
      [6n, 7n, 8n],
      [0n, 3n, 6n],
      [1n, 4n, 7n],
      [2n, 5n, 8n],
      [0n, 4n, 8n],
      [2n, 4n, 6n],
    ]

    let anyLine = false

    for (let i = 0; i < 8; i++) {
      let line = true
      for (let j = 0; j < 3; j++) {
        line = line && this.board[Number(lines[i][j])] == play
      }

      anyLine = anyLine || line
    }

    return anyLine
  }

  @method()
  full(): boolean {
    let full = true
    for (let i = 0; i < TicTacToe.BOARDLEN; i++) {
      full = full && this.board[i] != TicTacToe.EMPTY
    }
    return full
  }
}
```
