// metadata
export const version = "0.1.0"
export const title = "HashedMap"
export const description = "HashedMap in sCrypt"
export const replitLink = ""

const html = `<p>The <code>HashedMap</code> library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored. Only the hashes of th key and value are stored on-chain.</p>
<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">HashedMapDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">map</span>: <span class="hljs-title class_">MyMap</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">map: MyMap</span>) {
    <span class="hljs-variable language_">super</span>(map)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span> = map
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">key: <span class="hljs-built_in">bigint</span>, val: ByteString</span>) {
    <span class="hljs-comment">// Set key-value pair.</span>
    <span class="hljs-comment">// Note, that inside a smart contract method keys and values of the map cannot be accessed.</span>
    <span class="hljs-comment">// Only the following can be used in a contracts method: canGet, set, delete, has, clear, size.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">set</span>(key, val)

    <span class="hljs-comment">// This would throw an error!</span>
    <span class="hljs-comment">//let test = this.map.get(123n)</span>

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">4</span>; i++) {
      <span class="hljs-keyword">if</span> (i &lt; <span class="hljs-number">2</span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">set</span>(key + <span class="hljs-title class_">BigInt</span>(i), val)
        <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">has</span>(key + <span class="hljs-title class_">BigInt</span>(i)))
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">set</span>(key * <span class="hljs-number">2n</span> + <span class="hljs-title class_">BigInt</span>(i), val)
      }
    }

    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">canGet</span>(key, val), <span class="hljs-string">"Cannot get key-value pair from HashedMap"</span>)
    <span class="hljs-title function_">assert</span>(
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">canGet</span>(key * <span class="hljs-number">2n</span> + <span class="hljs-number">2n</span>, val),
      <span class="hljs-string">"Cannot get key-value pair from HashedMap"</span>
    )
    <span class="hljs-title function_">assert</span>(
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">canGet</span>(<span class="hljs-number">123n</span>, <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"aabbcc"</span>)),
      <span class="hljs-string">"Cannot get key-value pair from HashedMap"</span>
    )
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-property">size</span> &gt;= <span class="hljs-number">5</span>)
    <span class="hljs-title function_">assert</span>(<span class="hljs-literal">true</span>)
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">delete</span>(<span class="hljs-params">key: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">has</span>(key), <span class="hljs-string">"HashedMap should have the key before delete"</span>)
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">delete</span>(key), <span class="hljs-string">"Delete key in hashedMap failed"</span>)
    <span class="hljs-title function_">assert</span>(!<span class="hljs-variable language_">this</span>.<span class="hljs-property">map</span>.<span class="hljs-title function_">has</span>(key), <span class="hljs-string">"HashedMap should not have the key after delete"</span>)
    <span class="hljs-title function_">assert</span>(<span class="hljs-literal">true</span>)
  }
}

;(<span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">await</span> <span class="hljs-title class_">HashedMapDemo</span>.<span class="hljs-title function_">compile</span>()

  <span class="hljs-keyword">const</span> <span class="hljs-attr">map</span>: <span class="hljs-title class_">MyMap</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">HashedMap</span>&lt;<span class="hljs-built_in">bigint</span>, <span class="hljs-title class_">ByteString</span>&gt;()
  map.<span class="hljs-title function_">set</span>(<span class="hljs-number">123n</span>, <span class="hljs-string">"aabbcc"</span>)

  <span class="hljs-comment">// Off-chain you can access the values.</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(map.<span class="hljs-title function_">get</span>(<span class="hljs-number">123n</span>))

  <span class="hljs-keyword">const</span> mapDemo = <span class="hljs-keyword">new</span> <span class="hljs-title class_">HashedMapDemo</span>(map)

  mapDemo.<span class="hljs-title function_">unlock</span>(<span class="hljs-number">7n</span>, <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"07"</span>))
})()
</code></pre>
`

export default html
