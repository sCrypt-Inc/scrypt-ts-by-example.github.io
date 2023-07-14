// metadata
export const version = "0.1.0"
export const title = "Methods"
export const description = "Methods in sCrypt"
export const replitLink = ""

const html = `<p>A smart contract can have two kinds of methods:</p>
<ol>
<li><p>Methods without <code>@method</code> decorator. These methods are just like normal TypeScript class methods with no special restraints. These aren&#39;t part of the on-chain smart contract and can only be run locally.</p>
</li>
<li><p>Methods with <code>@method</code> decorator. These are part of the on-chain smart contract. These methods can only call <strong>methods also decorated by <code>@method</code></strong> (and <a href="builtin-functions/">built-in functions</a>). Similarly, <strong>only the properties decorated by <code>@prop</code> can be accessed</strong>.</p>
</li>
</ol>
<pre><code class="language-ts">  <span class="hljs-comment">// Non-public methods are internal and can only be called from</span>
  <span class="hljs-comment">// within the contract</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">add</span>(<span class="hljs-attr">x0</span>: <span class="hljs-built_in">bigint</span>, <span class="hljs-attr">x1</span>: <span class="hljs-built_in">bigint</span>): <span class="hljs-built_in">bigint</span> {
    <span class="hljs-keyword">return</span> x0 + x1
  }

  <span class="hljs-comment">// Public methods can be called from the unlocking transaction.</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">x: <span class="hljs-built_in">bigint</span></span>) {  <span class="hljs-comment">// Value of x is passed via unlocking script</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">add</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">x</span>, <span class="hljs-number">1n</span>) == x);
  }

  <span class="hljs-comment">// Functions without the "@method" decorator are just regular TS</span>
  <span class="hljs-comment">// functions. They aren&#x27;t included in the smart contract code and</span>
  <span class="hljs-comment">// can&#x27;t be called from a smart contract method.</span>
  <span class="hljs-title function_">getContractName</span>() : <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">"ExampleContract"</span>
  }
</code></pre>
`

export default html
