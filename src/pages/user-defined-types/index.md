---
title: User-defined Types
version: 0.1.0
description: User-defined types in scryptTS
---

Users can be define customized types using `type` or `interface`, made of basic types.

```ts
type ST = {
  a: bigint
  b: boolean
}

interface ST1 {
  x: ST
  y: ByteString
}
```
