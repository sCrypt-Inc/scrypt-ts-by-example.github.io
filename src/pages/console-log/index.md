---
title: Built-in Functions
version: 0.1.0
description: Built-in functions in scryptTS
---

`console.log` can be used for debugging purposes.

```ts
@method()
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0);
  return x0 + x1;
}
```

When the method is executed locally, the value of `x0` gets written to the console.
