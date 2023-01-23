// metadata
export const version = "0.1.0"
export const title = "Properties"
export const description = "Smart contract properties in scryptTS"
export const replitLink = ""

const html = `<p>Mark smart contract properties with the <code>@prop</code> decorator to store the value on chain.</p>
<p>This decorator takes a <code>boolean</code> parameter. By default, it is set to <code>false</code>, meaning the property cannot be changed after the contract is deployed. If the value is <code>true</code>, the property is a so-called <code>stateful</code> property and its value can be updated in subsequent contract calls.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Example</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-comment">// The value of "x" and "y" will get set during the deployment</span>
  <span class="hljs-comment">// of the smart contract (via the constructor).</span>

  <span class="hljs-comment">// The value of "x" stays the same and cannot be changed</span>
  <span class="hljs-comment">// during the smart contracts lifetime</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">x</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-comment">// The value of "y" on the other hand can be changed.</span>
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">y</span>: <span class="hljs-built_in">bigint</span>
  
  <span class="hljs-comment">// The value of z is a compile-time constant.</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">z</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-number">5n</span>

  <span class="hljs-comment">//...</span>
}
</code></pre>
<p>Check out the <a href="/state">smart contract state example</a> for a full demonstration of how a smart contract property might change over its lifetime.</p>
`

export default html
