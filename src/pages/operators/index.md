---
title: Functions
version: 0.1.0
description: Functions in scryptTS
---

**scryptTS** is a subset of TypeScript. Only the following TypeScript operators can be used directly.

| Operator                               |                                          Description                                           |                    Example                    |
| :------------------------------------- | :--------------------------------------------------------------------------------------------: | :-------------------------------------------: |
| `+`                                    |                                            Addition                                            |                    `x + y`                    |
| `-`                                    |                                          Subtraction                                           |                    `x - y`                    |
| `*`                                    |                                         Multiplication                                         |                    `x * y`                    |
| `/`                                    |                                            Division                                            |                    `x / y`                    |
| `%`                                    |                                           Remainder                                            |                    `x % y`                    |
| `++`                                   |                                  Increment (increments by 1)                                   |                `++x` or `x++`                 |
| `--`                                   |                                  Decrement (decrements by 1)                                   |                `--x` or `x--`                 |
| `==`                                   |                       Equal to: returns `true` if the operands are equal                       |                   `x == y`                    |
| `!=`                                   |                   Not equal to: returns `true` if the operands are not equal                   |                   `x != y`                    |
| `===`                                  |                                  Same as `==` in **scryptTS**                                  |                   `x === y`                   |
| `!==`                                  |                                  Same as `!=` in **scryptTS**                                  |                   `x !== y`                   |
| `>`                                    |             Greater than: `true` if left operand is greater than the right operand             |                    `x > y`                    |
| `>=`                                   | Greater than or equal to: `true` if left operand is greater than or equal to the right operand |                   `x >= y`                    |
| `<`                                    |              Less than: `true` if the left operand is less than the right operand              |                    `x < y`                    |
| `<=`                                   |  Less than or equal to: `true` if the left operand is less than or equal to the right operand  |                   `x <= y`                    |
| `&&`                                   |           Logical AND: `true` if both the operands are `true`, else returns `false`            |                   `x && y`                    |
| <code>&#124;&#124;</code>              |  Logical OR: `true` if either of the operands is `true`; returns `false` if both are `false`   |         <code>x &#124;&#124; y</code>         |
| `!`                                    |                 Logical NOT: `true` if the operand is `false` and vice-versa.                  |                     `!x`                      |
| `condition ? expression : expression ` |                              returns value based on the condition                              | `(5 > 3) ? 'success' : 'error'; // "success"` |

Note `**` is not supported currently.

### Bitwise Operators

TypeScript's bitwise operator cannot be used in scryptTS. But you can use the bitwise built-in function provided by scryptTS.

| Operator              |         Description          | built-in function |
| :-------------------- | :--------------------------: | :---------------: |
| `&`                   |         Bitwise AND          |    `and(x,y)`     |
| <code> &#124; </code> |          Bitwise OR          |     `or(x,y)`     |
| `^`                   |         Bitwise XOR          |    `xor(x,y)`     |
| `~`                   |         Bitwise NOT          |   `invert(x,y)`   |
| `<<`                  |          Left shift          |   `lshift(x,y)`   |
| `>>`                  | Sign-propagating right shift |   `rshift(x,y)`   |

The number in the Bitcoin virtual machine is saved in the [Sign–magnitude format](https://en.wikipedia.org/wiki/Signed_number_representations) in stack, not the [two's complement format](https://en.wikipedia.org/wiki/Signed_number_representations) commonly used by computers. If the operands participating in the operation are all positive numbers, the result of the operation is consistent with TypeScript's bitwise operator. (except `~`). Otherwise, the operation results may be inconsistent.
