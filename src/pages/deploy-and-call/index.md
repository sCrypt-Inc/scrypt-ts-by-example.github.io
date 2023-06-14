---
title: Deploy and Call a Contract
version: 0.1.0
description: Deploy and call an sCrypt contract on the Bitcoin testnet
---

Make sure you have the sCrypt CLI tool installed:

```sh
npm install -g scrypt-cli
```

Create a demo project and install its dependencies:

```sh
scrypt project demo && \
cd demo/ && npm i
```

Run the following command to generate a testnet address and fund it using the [sCrypt faucet](https://scrypt.io/faucet):

```sh
npm run genprivkey
```

Now simply run the CLI's `deploy` command in the root of the project to deploy the contract:

```sh
scrypt deploy
```

Under the hood this executes the file named `deploy.ts`. For further deployments, you can adjust it to your needs.

Now, that we have deployed our smart contract, we can also call one of its methods. Create a file named `call.ts`:

```ts
import { Demo } from "./src/contracts/demo"
import { toByteString, DefaultProvider, bsv, TestWallet } from "scrypt-ts"
import * as dotenv from "dotenv"

// Load the .env file
dotenv.config()

// Read the private key from the .env file.
// The default private key inside the .env file is meant to be used for the Bitcoin testnet.
// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys
const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY || "")

// Prepare signer.
// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider
const provider = new DefaultProvider({
  network: bsv.Networks.testnet,
})
const signer = new TestWallet(privateKey, provider)

async function main() {
  await Demo.compile()

  // Fetch tx of deployed contract and reconstruct contract instance.
  // TODO: Adjust TXID:
  const tx = await provider.getTransaction(
    "dac4122c585e3f72d2f839417871286f6048e9ff110254d340fd2767ccc18d08"
  )
  const instance = Demo.fromTx(tx, 0)

  // We need to connect a signer in order to call the contracts method.
  instance.connect(signer)

  // Contract call. Adjust message value if needed.
  const message = toByteString("hello world", true)
  const { tx: callTx } = await instance.methods.unlock(message)
  console.log('Demo contract "unlock" called: ', callTx.id)
}

main()
```

Inside the file adjust the transaction ID of your deployed contract and also the message, if you already modified `deploy.ts`.

Now run the file:

```sh
npx ts-node call.ts
```

If successful, the script will output something like the following:

```sh
Demo contract "unlock" called:  759e318c1b1fc0ccc78ef0eb913fb9ef94895731e11b0fb4114adb53007dcd72
```
