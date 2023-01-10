---
title: Properties
version: 0.1.0
description: Smart contract properties in scryptTS
---

Mark smart contract properties with the `@prop` decorator to store the value on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called `stateful` property and its value can be updated in subsequent contract calls.
