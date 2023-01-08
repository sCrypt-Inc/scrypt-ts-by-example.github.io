---
title: Properties
version: 0.1.0
description: Smart contract properties in scryptTS
---

A smart contract can have two kinds of properties:

1. Properties with `@prop` decorator. These properties are **only allowed to have [types](#Types) specified below** and they shall only be initialized in the constructor.

2. Properties without `@prop` decorator. These properties are normal TypeScript class properties without any special requirement.

### `@prop(stateful: boolean = false)` decorator

Use this decorator to mark any property that intends to be stored on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called `stateful` property and its value can be updated in subsequent contract calls.
