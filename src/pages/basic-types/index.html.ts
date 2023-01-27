// metadata
export const version = "0.1.0"
export const title = "Basic Types"
export const description = "Basic types in scryptTS"
export const replitLink = ""

const html = `<p>Basic types allowed to be used in <code>@prop</code>s and <code>@method</code>s are <code>boolean</code> and <code>bigint</code>, along with their wrapper types <code>Boolean</code> and <code>BigInt</code>.</p>
<p>A <code>string</code> literal is not allowed to be used directly without being converted into a <code>ByteString</code>.</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>()
<span class="hljs-keyword">public</span> <span class="hljs-title function_">example</span>(<span class="hljs-params">x: <span class="hljs-built_in">bigint</span>, y: ByteString, z: <span class="hljs-built_in">boolean</span></span>) {

    <span class="hljs-title function_">assert</span>(x == <span class="hljs-number">5n</span>)

    <span class="hljs-title function_">assert</span>(z)

    <span class="hljs-comment">// Strings must by converted to ByteString before being used</span>
    <span class="hljs-comment">// in a smart contract:</span>
    <span class="hljs-title function_">assert</span>(y == <span class="hljs-title function_">utf8ToByteString</span>(<span class="hljs-string">"hello world!"</span>))

    <span class="hljs-comment">// We can also parse hex strings:</span>
    <span class="hljs-title function_">assert</span>(x == <span class="hljs-title function_">unpack</span>(<span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;05&#x27;</span>)))

    <span class="hljs-comment">// Vice versa, we can turn integers into ByteStrings:</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">pack</span>(x) == <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;05&#x27;</span>))

    <span class="hljs-comment">// Little-endian signed-magnitude representation is being used:</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">pack</span>(-x) == <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;85&#x27;</span>))
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">pack</span>(-x * <span class="hljs-number">1000n</span>) == <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;8893&#x27;</span>))

}
</code></pre>
<p>Compile time constants can also be of type <code>number</code>:</p>
<ul>
<li>An array index</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">idx</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3</span>
<span class="hljs-keyword">let</span> item = arr[idx]
</code></pre>
<ul>
<li>An induction variable in <code>for</code> statement</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> <span class="hljs-attr">i</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">5</span>; i++) …
</code></pre>
`

export default html
