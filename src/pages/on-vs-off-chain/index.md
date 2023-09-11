---
title: On-Chain vs Off-Chain Types
version: 0.1.0
description: The difference between on-chain and off-chain types in sCrypt
---

It is important to distinguish between on-chain and off-chain types. Off-chain types cannot be used inside a smart contract.

A typical example are `PubKey` and `bsv.PublicKey`. While the first one is simply a wrapper of `ByteString` and thus can be used in a contract
On the other hand, the second is a more complex type, that has many functions for things such as the serialization to a WIF format and so on, which can be utilized off-chain.

| Off-Chain                  | On-Chain                |
| -------------------------- | ----------------------- |
| `bsv.PublicKey`            | `PubKey`                |
| `bsv.PrivateKey`           | `PrivKey`               |
| `bsv.Address`              | `Addr`                  |
| `bsv.crypto.Signature`     | `Sig`                   |
| `bsv.crypto.Signature.ALL` | `SignatureHashType.ALL` |
