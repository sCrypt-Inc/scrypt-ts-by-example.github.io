// metadata
export const version = "0.1.0"
export const title = "HashedSet"
export const description = "HashedSet in scryptTS"
export const replitLink = ""

const html = `<p><code>HashedSet</code> can be regarded as a special <a href="/hashed-map"><code>HashedMap</code></a> where a value is the same as the key and is thus omitted. Again, only the hashes of the keys get stored on-chain.</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> { method, prop, <span class="hljs-title class_">SmartContract</span>, assert, <span class="hljs-title class_">HashedSet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;scrypt-ts&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">HashedSetDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
    <span class="hljs-meta">@prop</span>()
    <span class="hljs-attr">set</span>: <span class="hljs-title class_">HashedSet</span>&lt;<span class="hljs-built_in">bigint</span>&gt;

    <span class="hljs-title function_">constructor</span>(<span class="hljs-params">set: HashedSet&lt;<span class="hljs-built_in">bigint</span>&gt;</span>) {
        <span class="hljs-variable language_">super</span>(set)
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span> = set
    }

    <span class="hljs-meta">@method</span>()
    <span class="hljs-keyword">public</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">key: <span class="hljs-built_in">bigint</span></span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span>.<span class="hljs-title function_">add</span>(key)
        <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span>.<span class="hljs-title function_">has</span>(key), <span class="hljs-string">&#x27;hashedSet should have the key after add&#x27;</span>)
    }

    <span class="hljs-meta">@method</span>()
    <span class="hljs-keyword">public</span> <span class="hljs-title function_">delete</span>(<span class="hljs-params">key: <span class="hljs-built_in">bigint</span></span>) {
        <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span>.<span class="hljs-title function_">has</span>(key), <span class="hljs-string">&#x27;hashedSet should have the key before delete&#x27;</span>)
        <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span>.<span class="hljs-title function_">delete</span>(key), <span class="hljs-string">&#x27;delete key in hashedSet failed&#x27;</span>)
        <span class="hljs-title function_">assert</span>(
            !<span class="hljs-variable language_">this</span>.<span class="hljs-property">set</span>.<span class="hljs-title function_">has</span>(key),
            <span class="hljs-string">&#x27;hashedSet should not have the key after delete&#x27;</span>
        )
    }
}
</code></pre>
`

export default html
