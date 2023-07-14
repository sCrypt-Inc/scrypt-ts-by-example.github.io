---
title: Return Statement
version: 0.1.0
description: Return statement in sCrypt
---

Every smart contract method must end with a `return`statement. Additionally it is the only place where we can use it.

```ts
@method() m(x: bigint): bigint {
   if (x > 2n) return x; // invalid
   return x + 1n;  // valid
}
```

This is usually not a problem since it can be circumvented as follows:

```ts
@method()
abs(a: bigint): bigint {
    if (a > 0) {
        return a;
    } else {
        return -a;
    }
}
```

can be rewritten as

```ts
@method()
abs(a: bigint): bigint {
    let ret : bigint = 0;

    if (a > 0) {
        ret = a;
    } else {
        ret = -a;
    }
    return ret;
}
```
