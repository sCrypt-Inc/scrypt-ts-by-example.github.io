// metadata
export const version = "0.1.0"
export const title = "Bitwise Operators"
export const description = "Bitwise operators in scryptTS"
export const replitLink = ""

const html = `<p>TypeScript&#39;s bitwise operator cannot be used in scryptTS. But you can use the <a href="https://scrypt.io/scrypt-ts/getting-started/how-to-write-a-contract/#bitwise-operators">bitwise built-in functions</a> provided by scryptTS.</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> a = <span class="hljs-number">42n</span> <span class="hljs-comment">// 101010</span>
<span class="hljs-keyword">let</span> b = <span class="hljs-number">13n</span> <span class="hljs-comment">// 001101</span>
<span class="hljs-keyword">let</span> c = <span class="hljs-number">0n</span> <span class="hljs-comment">// 000000</span>

<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">and</span>(a, b) == <span class="hljs-number">8n</span>) <span class="hljs-comment">// 001000</span>
<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">or</span>(a, b) == <span class="hljs-number">47n</span>) <span class="hljs-comment">// 101111</span>

<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">or</span>(a, c) == a)
<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">xor</span>(a, b) == <span class="hljs-number">39n</span>) <span class="hljs-comment">// 100111</span>

<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">rshift</span>(a, <span class="hljs-number">5n</span>) == <span class="hljs-number">1n</span>)
<span class="hljs-title function_">assert</span>(<span class="hljs-title function_">lshift</span>(b, <span class="hljs-number">1n</span>) == <span class="hljs-number">26n</span>) <span class="hljs-comment">// 011010</span>
</code></pre>
`

export default html
