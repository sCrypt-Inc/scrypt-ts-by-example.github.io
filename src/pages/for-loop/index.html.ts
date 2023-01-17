// metadata
export const version = "0.1.0"
export const title = "Loops"
export const description = "Loops in scryptTS"
export const replitLink = ""

const html = `<p>Bitcoin Script does not provide looping constructs natively for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside <code>@method</code>, you must strictly use the following format:</p>
<pre><code class="language-ts"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; maxLoopCount; i++) {
  ...
}
</code></pre>
<p>Note:</p>
<ul>
<li>the initial value must be <code>0</code>, the operator <code>&lt;</code> (no <code>&lt;=</code>), and increment <code>i++</code> (no pre-increment <code>++i</code>).</li>
<li><code>maxLoopCount</code> must be a compile-time constant.</li>
<li><code>break</code> and <code>continue</code> are currently not allowed.</li>
</ul>
`

export default html
