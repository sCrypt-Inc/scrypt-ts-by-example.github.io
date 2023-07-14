---
title: HashedMap
version: 0.1.0
description: HashedMap in sCrypt
---

The `HashedMap` library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored. Only the hashes of th key and value are stored on-chain.

```ts
export class HashedMapDemo extends SmartContract {
  @prop()
  map: MyMap

  constructor(map: MyMap) {
    super(map)
    this.map = map
  }

  @method()
  public unlock(key: bigint, val: ByteString) {
    // Set key-value pair.
    // Note, that inside a smart contract method keys and values of the map cannot be accessed.
    // Only the following can be used in a contracts method: canGet, set, delete, has, clear, size.
    this.map.set(key, val)

    // This would throw an error!
    //let test = this.map.get(123n)

    for (let i = 0; i < 4; i++) {
      if (i < 2) {
        this.map.set(key + BigInt(i), val)
        assert(this.map.has(key + BigInt(i)))
      } else {
        this.map.set(key * 2n + BigInt(i), val)
      }
    }

    assert(this.map.canGet(key, val), "Cannot get key-value pair from HashedMap")
    assert(
      this.map.canGet(key * 2n + 2n, val),
      "Cannot get key-value pair from HashedMap"
    )
    assert(
      this.map.canGet(123n, toByteString("aabbcc")),
      "Cannot get key-value pair from HashedMap"
    )
    assert(this.map.size >= 5)
    assert(true)
  }

  @method()
  public delete(key: bigint) {
    assert(this.map.has(key), "HashedMap should have the key before delete")
    assert(this.map.delete(key), "Delete key in hashedMap failed")
    assert(!this.map.has(key), "HashedMap should not have the key after delete")
    assert(true)
  }
}

;(async () => {
  await HashedMapDemo.compile()

  const map: MyMap = new HashedMap<bigint, ByteString>()
  map.set(123n, "aabbcc")

  // Off-chain you can access the values.
  console.log(map.get(123n))

  const mapDemo = new HashedMapDemo(map)

  mapDemo.unlock(7n, toByteString("07"))
})()
```
