---
title: Bitwise Operators
version: 0.1.0
description: Bitwise operators in scryptTS
---

TypeScript's bitwise operator cannot be used in scryptTS. But you can use the bitwise built-in function provided by scryptTS.

| Operator              |         Description          | built-in function |
| :-------------------- | :--------------------------: | :---------------: |
| `&`                   |         Bitwise AND          |    `and(x,y)`     |
| <code> &#124; </code> |          Bitwise OR          |     `or(x,y)`     |
| `^`                   |         Bitwise XOR          |    `xor(x,y)`     |
| `~`                   |         Bitwise NOT          |   `invert(x,y)`   |
| `<<`                  |          Left shift          |   `lshift(x,y)`   |
| `>>`                  | Sign-propagating right shift |   `rshift(x,y)`   |
