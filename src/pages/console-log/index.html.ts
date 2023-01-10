// metadata
export const version = "0.1.0"
export const title = "Built-in Functions"
export const description = "Built-in functions in scryptTS"
export const replitLink = ""

const html = `<p><code>console.log</code> can be used for debugging purposes.</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>()
<span class="hljs-title function_">add</span>(<span class="hljs-attr">x0</span>: <span class="hljs-built_in">bigint</span>, <span class="hljs-attr">x1</span>:<span class="hljs-built_in">bigint</span>) : <span class="hljs-built_in">bigint</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x0);
  <span class="hljs-keyword">return</span> x0 + x1;
}
</code></pre>
<p>When the method is executed locally, the value of <code>x0</code> gets written to the console.</p>
`

export default html
