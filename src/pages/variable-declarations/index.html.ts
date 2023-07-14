// metadata
export const version = "0.1.0"
export const title = "Variable Declarations"
export const description = "Variable declarations in sCrypt"
export const replitLink = ""

const html = `<p>Variables can be declared in <code>@method</code>s by keywords <code>const</code> / <code>var</code> / <code>let</code>, like in normal TypeScript.</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">a</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">1n</span> <span class="hljs-comment">// n-suffix means the constant will be compiled as a bigint</span>
a = <span class="hljs-title class_">BigInt</span>(<span class="hljs-number">1</span>) <span class="hljs-comment">// Can also be defined with the BigInt() wrapper instead</span>
<span class="hljs-keyword">var</span> <span class="hljs-attr">b</span>: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">N</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3</span>
</code></pre>
`

export default html
