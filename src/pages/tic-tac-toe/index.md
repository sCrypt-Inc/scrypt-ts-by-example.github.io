---
title: Tic-Tac-Toe
version: 0.1.0
description: Tic-Tac-Toe in scryptTS
---

To initiate a game, Alice and Bob each lock up X amount of bitcoins into a contract UTXO. They take turns to play the game by sending signed transactions interacting with the [stateful contract](https://scrypt.io/scrypt-ts/tutorials/stateful-contract). If one of them wins, the winner claims the 2X bitcoins. If there is a draw, they take back their bitcoins. 

```ts
class TicTacToe extends SmartContract {
  
  // Game params:
  static const TURNLEN = 1;
  static const BOARDLEN = 9;
  
  // Field flags:
  static const EMPTY = 0;
  static const ALICE = 1;
  static const BOB = 2;

  // Public keys:
  @prop()
  alice: PubKey;
  @prop()
  bob: PubKey;
  
  // Represents whether it is alice's turn to play chess:
  @prop(true)
  isAliceTurn: boolean;

  @prop(true)
  board: bigint[9];

  constructor(alice: PubKey, bob: PubKey) {
    super(alice, bob);
    this.alice = alice;
    this.bob = bob;
    this.isAliceTurn = true;
  }

  @method()
  won(player: bigint): boolean {
    let lines = [
      [0n, 1n, 2n], [3n, 4n, 5n], [6n, 7n, 8n], 
      [0n, 3n, 6n], [1n, 4n, 7n], [2n, 5n, 8n], 
      [0n, 4n, 8n], [2n, 4n, 6n]
      ];

    let anyLine = false;
    for (let i = 0; i < 8; i++) {
        let line = true;
        for (let j = 0; j < 3; j++) {
            line = line && this.board[lines[i][j]] == player;
        }
        anyLine = anyLine || line;
    }

    return anyLine;
  }

  @method()
  full(): boolean {
    let full = true;

    for (let i = 0; i < BOARDLEN; i++) {
        full = full && this.board[i] != EMPTY;
    }

    return full;
  }

  @method()
  public move(n: bigint, sig: Sig, amount: bigint) {
    // Check if selected field is within bounds.
    assert(n >= 0 && n < BOARDLEN);
    
    // Check that the selected field is not already filled.
    assert(this.board[n] == EMPTY);
    
    let player = this.isAliceTurn ? ALICE : BOB;
    let playerPubKey = this.isAliceTurn ? this.alice : this.bob;
    
    // Check that this tx is signed be the correct player.
    assert(checkSig(sig, playerPubKey));
    
    // Mark the move.
    this.board[n] = player;
    
    // Flip turn flag.
    this.isAliceTurn = !this.isAliceTurn;
    
    // Check game state and construct output accordingly.
    let outputs = '';
    if (this.won(player)) {
      // Winner takes all.
      let outputScript = buildPublicKeyHashScript(hash160(player));
      outputs = buildOutput(outputScript, amount);
    } else if (this.full()) {
      // Split amount 50/50.
      let aliceScript = buildPublicKeyHashScript(hash160(this.alice));
      let aliceOut = buildOutput(aliceScript, amount);

      let bobScript = buildPublicKeyHashScript(hash160(this.bob));
      let bobOut = buildOutput(bobScript, amount);
      
      outputs = aliceOut + bobOut;
    } else {
      outputs = this.buildStateOutput(amount);
    }
    
    // Ensure the unlocking tx will actually contain
    // the correct output.
    assert(this.ctx.hashOutputs == hash256(outputs));
  }

}

```