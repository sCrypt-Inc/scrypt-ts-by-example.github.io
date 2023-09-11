---
title: Domain Types
version: 0.1.0
description: Domain types in sCrypt
---

There are several [domain types](https://scrypt.io/scrypt-ts/getting-started/how-to-write-a-contract#domain-types), specific to the Bitcoin context, used to further improve type safety.

```ts
let pubKey = PubKey(
  toByteString("02a2ef6eb12d3076dbdc98241920f75ac88b664656400aa390a0b236ea1eb6ec0b")
)

let pkh = Addr(pubKey2Addr(pubKey))

let h = Sha256(sha256(utf8ToByteString("hello")))

// Will fail as passed data is not a SHA256 hash:
//let h2 = Sha256(utf8ToByteString('ffaabb'))
```
