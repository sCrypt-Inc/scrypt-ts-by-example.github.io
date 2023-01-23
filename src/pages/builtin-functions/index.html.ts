// metadata
export const version = "0.1.0"
export const title = "Built-in Functions"
export const description = "Built-in functions in scryptTS"
export const replitLink = ""

const html = `<p>There is a wide array of useful built-in functions. The most commonly used built-in function is <code>assert(cond: boolean)</code>. It throws an error if <code>cond</code> is false. A contract call is successful if and only if all arguments passed to the <code>assert</code> functions are true.</p>
<p>The full list of functions can be found in the <a href="https://scrypt.io/scrypt-ts/reference/">scryptTS reference</a>.</p>
<pre><code class="language-ts"><span class="hljs-comment">// None of the below functions need an explicit import, as they&#x27;re built into scrypt-ts itself.</span>
<span class="hljs-keyword">let</span> h = <span class="hljs-title function_">sha256</span>(<span class="hljs-title function_">utf8ToByteString</span>(<span class="hljs-string">&#x27;hello&#x27;</span>))
<span class="hljs-title function_">assert</span>(h == <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824&#x27;</span>))
</code></pre>
`

export default html
