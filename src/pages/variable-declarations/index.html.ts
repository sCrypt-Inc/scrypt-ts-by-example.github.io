// metadata
export const version = "0.1.0"
export const title = "Variable Declarations"
export const description = "Variable declarations in scryptTS"
export const replitLink = ""

const html = `<p>Variables can be declared in <code>@method</code>s by keywords <code>const</code> / <code>var</code> / <code>let</code>, like in normal TypeScript.</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">a</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">1n</span>
<span class="hljs-keyword">var</span> <span class="hljs-attr">b</span>: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">N</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3</span>
</code></pre>
<h3 id="compile-time-constant">Compile-time Constant</h3>
<p>A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds:</p>
<ul>
<li>A number literal like:</li>
</ul>
<pre><code class="language-ts"><span class="hljs-number">3</span>
</code></pre>
<ul>
<li>A <code>const</code> variable:</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">const</span> N = <span class="hljs-number">3</span>
</code></pre>
<ul>
<li>A <code>readonly</code> property:</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">X</span> {
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> N = <span class="hljs-number">3</span>
}
</code></pre>
<p>Only numeric literal can be used to initialize CTC. Expressions are not allowed.</p>
<pre><code class="language-ts"><span class="hljs-keyword">const</span> N = <span class="hljs-number">3</span> <span class="hljs-comment">// valid</span>
<span class="hljs-keyword">const</span> N = <span class="hljs-number">3</span> + <span class="hljs-number">3</span> <span class="hljs-comment">// invalid</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">X</span> {
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> N = <span class="hljs-number">3</span> <span class="hljs-comment">// valid</span>
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> N = <span class="hljs-number">3</span> + <span class="hljs-number">3</span> <span class="hljs-comment">// invalid</span>
}
</code></pre>
<p>They can be used at places where a CTC is required, including:</p>
<ul>
<li>Array length in declaration</li>
</ul>
<pre><code class="language-ts"><span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, <span class="hljs-number">3</span>&gt;
<span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, N&gt;
<span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, X.<span class="hljs-property">N</span>&gt;
</code></pre>
<ul>
<li>Loop count in <code>for</code> statement</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i=<span class="hljs-number">0</span>; i&lt; <span class="hljs-number">3</span>; i++)
<span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i=<span class="hljs-number">0</span>; i&lt; N; i++)
<span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i=<span class="hljs-number">0</span>; i&lt; X.<span class="hljs-property">N</span>; i++)
</code></pre>
`

export default html
