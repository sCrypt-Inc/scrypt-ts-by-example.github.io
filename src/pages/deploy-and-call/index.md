---
title: Deploy and Call a Contract
version: 0.1.0
description: Deploy and call an sCrypt contract on the Bitcoin testnet
---

Make sure you have the sCrypt CLI tool installed:

```sh
npm install -g scrypt-cli
```

Create a demo project:

```sh
scrypt project demo && \
cd demo/
```

Create a file named `deploy.ts` in the root of the project with the following content:

```ts
import { Demo } from "./src/contracts/demo"
import { getDefaultSigner, inputSatoshis } from "./tests/testnet/utils/txHelper"
import { toByteString, sha256 } from "scrypt-ts"

;(async () => {
  const message = toByteString("hello world", true)

  await Demo.compile()
  const instance = new Demo(sha256(message))

  // connect to a signer
  await instance.connect(getDefaultSigner())

  // contract deployment
  const deployTx = await instance.deploy(inputSatoshis)
  console.log("Demo contract deployed: ", deployTx.id)

  // contract call
  const { tx: callTx } = await instance.methods.unlock(message)
  console.log('Demo contract "unlock" called: ', callTx.id)
})()
```

Now run the file:

```sh
npx ts-node deploy.ts
```

At first it will probably ask you to fund a generated address with some testnet coin. Go ahead and get some via [the sCrypt faucet](https://scrypt.io/#faucet) and run the command once again.

The script will first deploy the contract on the Bitcoin testnet and then call its public method named `unlock`.
