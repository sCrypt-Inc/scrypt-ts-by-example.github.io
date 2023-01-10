---
title: Domain Types
version: 0.1.0
description: Domain types in scryptTS
---

There are several domain types, specific to the Bitcoin context, used to further improve type safety.

- `PubKey` - a public key

- `PrivKey` - a private key

- `Sig` - a signature type in DER format, including signature hash

- `Ripemd160` - a RIPEMD-160 hash

- `PubKeyHash` - an alias for `Ripemd160`, usually representing a bitcoin address.

- `Sha1` - a SHA-1 hash

- `Sha256` - a SHA-256 hash

- `SigHashType` - a sighash

- `SigHashPreimage` - a sighash preimage

- `OpCodeType` - an OpCode

Additionally, libraries derived from `SmartContract` can be imported as dependencies and reused by other `SmartContract`s.
