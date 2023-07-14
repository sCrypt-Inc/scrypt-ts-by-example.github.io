// metadata
export const version = "0.1.0"
export const title = "Number Type"
export const description = "Number type in sCrypt"
export const replitLink = ""

const html = `<p>The <code>number</code> type is not allowed in <code>@prop</code>s and <code>@method</code>.</p>
<p>In some special cases, parameters of type <code>number</code> must be passed. In this case, we can use <code>Number()</code> function to convert <code>bigint</code> to <code>number</code>.</p>
<pre><code class="language-ts"><span class="hljs-comment">// Array indexes:</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">arr</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, <span class="hljs-number">3</span>&gt; = [<span class="hljs-number">1n</span>, <span class="hljs-number">3n</span>, <span class="hljs-number">3n</span>]
<span class="hljs-keyword">let</span> <span class="hljs-attr">index</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">2n</span>
<span class="hljs-keyword">let</span> item = arr[<span class="hljs-title class_">Number</span>(idx)]

<span class="hljs-comment">// ByteString operations:</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">size</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">3n</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">b</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title function_">reverseBytes</span>(<span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"001122"</span>), <span class="hljs-title class_">Number</span>(size))
<span class="hljs-keyword">let</span> <span class="hljs-attr">end</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">1n</span>
b.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, <span class="hljs-title class_">Number</span>(end))
</code></pre>
<p>You can also convert <code>number</code> types into <code>bigint</code>:</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">x</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-title class_">BigInt</span>(<span class="hljs-number">10</span>)
</code></pre>
`

export default html
