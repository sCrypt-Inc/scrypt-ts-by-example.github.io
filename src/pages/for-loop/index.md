---
title: Loops
version: 0.1.0
description: Loops in sCrypt
---

Bitcoin Script does not provide looping constructs natively for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside `@method`, you must strictly use the following format:

```ts
for(let i = 0; i < maxLoopCount; i++) {
  ...
}
```

Note:

- the initial value must be `0`, the operator `<` (no `<=`), and increment `i++` (no pre-increment `++i`).
- `maxLoopCount` must be a compile-time constant.
- `break` and `continue` are currently not allowed.
