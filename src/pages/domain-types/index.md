---
title: Domain Types
version: 0.1.0
description: Domain types in scryptTS
---

There are several domain types, specific to the Bitcoin context, used to further improve type safety.

* [PubKey](../reference/classes/PubKey.md) - a public key

* [PrivKey](../reference/classes/PrivKey.md) - a private key

* [Sig](../reference/classes/Sig.md) - a signature type in DER format, including signature hash

* [Ripemd160](../reference/classes/Ripemd160.md) - a RIPEMD-160 hash

* [PubKeyHash](../reference/classes/PubKeyHash.md) - an alias for `Ripemd160`, usually representing a bitcoin address.

* [Sha1](../reference/classes/Sha1.md) - a SHA-1 hash

* [Sha256](../reference/classes/Sha256.md) - a SHA-256 hash

* [SigHashType](../reference/classes/SigHashType.md) - a sighash

* [SigHashPreimage](../reference/classes/SigHashPreimage.md) - a sighash preimage

* [OpCodeType](../reference/classes/OpCodeType.md) - an OpCode

### `SmartContract` subclasses Types

Libraries derived from `SmartContract` can be imported as dependencies and reused by other `SmartContract`s.