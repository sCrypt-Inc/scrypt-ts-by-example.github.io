// metadata
export const version = "0.1.0"
export const title = "Return Statement"
export const description = "Return statement in scryptTS"
export const replitLink = ""

const html = `<p>Due to the lack of native return semantics support in Bitcoin Script, a function currently must end with a <code>return</code> statement and it is the only valid place for a <code>return</code> statement. This requirement may be relaxed in the future.</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>() <span class="hljs-title function_">m</span>(<span class="hljs-attr">x</span>: <span class="hljs-built_in">bigint</span>): <span class="hljs-built_in">bigint</span> {
   <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">2n</span>) <span class="hljs-keyword">return</span> x; <span class="hljs-comment">// invalid</span>
   <span class="hljs-keyword">return</span> x + <span class="hljs-number">1n</span>;  <span class="hljs-comment">// valid</span>
}
</code></pre>
<p>This is usually not a problem since it can be circumvented as follows:</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>()
<span class="hljs-title function_">abs</span>(<span class="hljs-attr">a</span>: <span class="hljs-built_in">bigint</span>): <span class="hljs-built_in">bigint</span> {
    <span class="hljs-keyword">if</span> (a &gt; <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">return</span> a;
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> -a;
    }
}
</code></pre>
<p>can be rewritten as</p>
<pre><code class="language-ts"><span class="hljs-meta">@method</span>()
<span class="hljs-title function_">abs</span>(<span class="hljs-attr">a</span>: <span class="hljs-built_in">bigint</span>): <span class="hljs-built_in">bigint</span> {
    <span class="hljs-keyword">let</span> ret : <span class="hljs-built_in">bigint</span> = <span class="hljs-number">0</span>;

    <span class="hljs-keyword">if</span> (a &gt; <span class="hljs-number">0</span>) {
        ret = a;
    } <span class="hljs-keyword">else</span> {
        ret = -a;
    }
    <span class="hljs-keyword">return</span> ret;
}
</code></pre>
`

export default html
