// metadata
export const version = "0.1.0"
export const title = "Array Types"
export const description = "Array types in scryptTS"
export const replitLink = ""

const html = `<p>The common array types in TypeScript like <code>T[]</code> or <code>Array&lt;T&gt;</code> are not allowed to be used in <code>@prop</code>s and <code>@method</code>s.</p>
<p>An array <strong>must</strong> be declared as type of <code>FixedArray&lt;T, LENGTH&gt;</code>, whose <code>LENGTH</code> must be a <a href="#compile-time-constant">CTC</a> value described later, like:</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">aaa</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, <span class="hljs-number">3</span>&gt; = [<span class="hljs-number">1n</span>, <span class="hljs-number">3n</span>, <span class="hljs-number">3n</span>]

<span class="hljs-keyword">const</span> N = <span class="hljs-number">2</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">aab</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, N&gt; = [<span class="hljs-number">1n</span>, <span class="hljs-number">2n</span>]

<span class="hljs-comment">// 2-dimensional array</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">abb</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, <span class="hljs-number">2</span>&gt;, <span class="hljs-number">3</span>&gt; = [
  [<span class="hljs-number">1n</span>, <span class="hljs-number">3n</span>],
  [<span class="hljs-number">1n</span>, <span class="hljs-number">3n</span>],
  [<span class="hljs-number">1n</span>, <span class="hljs-number">3n</span>],
]
</code></pre>
`

export default html
