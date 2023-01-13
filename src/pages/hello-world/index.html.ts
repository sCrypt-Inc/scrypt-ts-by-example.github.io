// metadata
export const version = "0.1.0"
export const title = "Hello World"
export const description = "Hello world in scryptTS"
export const replitLink = "https://replit.com/@msinkec/scryptTS-demo?embed=true"

const html = `<p>The following is a simple smart contract class. It takes an integer <code>x</code> as a parameter for the constructor.
It exposes a single public method <code>equals</code>, which checks if the passed parameter is equal to <code>x</code>.
In a Bitcoin context this means, that we need to include an integer <code>y</code> in the unlocking script, that unlocks the output containing our smart contract (which stores <code>x</code>).</p>
<pre><code class="language-typescript"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Demo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">x</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">x: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(x)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">x</span> = x
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">equals</span>(<span class="hljs-params">y: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">x</span> == y, <span class="hljs-string">&#x27;x doesn\\&#x27;t equal y&#x27;</span>)
  }
}
</code></pre>
`

export default html
