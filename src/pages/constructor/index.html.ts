// metadata
export const version = "0.1.0"
export const title = "Constructor"
export const description = "Smart contract constructors in scryptTS"
export const replitLink = ""

const html = `<p>A smart contract must have an explicit constructor if it has at least one <code>@prop</code>.</p>
<p>The <code>super</code> method must be called in the constructor with all the arguments for <code>@prop</code>s in the same orders as they are passed in. For example,</p>
<pre><code class="language-js"><span class="hljs-keyword">class</span> <span class="hljs-title class_">A</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-attr">p0</span>: <span class="hljs-title class_">ByteString</span> <span class="hljs-comment">// Can&#x27;t be used inside @method&#x27;s</span>

  @<span class="hljs-title function_">prop</span>() <span class="hljs-attr">p1</span>: bigint

  @<span class="hljs-title function_">prop</span>() <span class="hljs-attr">p2</span>: boolean

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">p0: ByteString, p1: bigint, p2: boolean</span>) {
    <span class="hljs-variable language_">super</span>(p1, p2)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">p0</span> = p0
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">p1</span> = p1
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">p2</span> = p2
  }
}
</code></pre>
`

export default html
