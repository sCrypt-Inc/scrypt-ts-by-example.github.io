// metadata
export const version = "0.1.0"
export const title = "State"
export const description = "Smart contract state in scryptTS"
export const replitLink = "https://replit.com/@msinkec/scryptTS-counter?embed=true"

const html = `<p>As shown on the previous page we can put arbitrary constraints on the data of next transaction by using <code>this.tx</code>. The following is an example of a simple counter smart contract. Every iteration of the contract must contain a value <code>count</code> which is bigger by one from the previous iteration.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Counter</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">count</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">count: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(count)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span> = count
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">increment</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// Update counter value.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span>++

    <span class="hljs-comment">// Ensure the next output will hold our updated value.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span> == <span class="hljs-title function_">hash256</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildStateOutput</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">value</span>)))
  }
}
</code></pre>
`

export default html
