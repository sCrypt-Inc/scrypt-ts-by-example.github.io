// metadata
export const version = "0.1.0"
export const title = "Functions"
export const description = "Functions in scryptTS"
export const replitLink = ""

const html = `<h3 id="built-in-functions">Built-in Functions</h3>
<h4 id="assert"><code>assert</code></h4>
<p>The most commonly used built-in function is <code>assert(cond: boolean)</code>. It throws an error if <code>cond</code> is false. A contract call is successful if and only if all arguments passed to the <code>assert</code> functions are true.</p>
<h3 id="whitelisted-functions">Whitelisted Functions</h3>
<p>Be default, all Javascript/TypeScript built-in functions/global variables are not allowed in <code>@method</code>s, except the following kinds.</p>
<h4 id="consolelog"><code>console.log</code></h4>
<p><code>console.log</code> can be used for debugging purposes.</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>()
<span class="hljs-title function_">add</span>(<span class="hljs-attr">x0</span>: <span class="hljs-built_in">bigint</span>, <span class="hljs-attr">x1</span>:<span class="hljs-built_in">bigint</span>) : <span class="hljs-built_in">bigint</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x0);
  <span class="hljs-keyword">return</span> x0 + x1;
}
</code></pre>
`

export default html
