// metadata
export const version = "0.1.0"
export const title = "Methods"
export const description = "Methods in scryptTS"
export const replitLink = ""

const html = `<p>A smart contract can have two kinds of methods:</p>
<ol>
<li><p>Methods without <code>@method</code> decorator. These methods are just like normal TypeScript class methods with no special restraints. These aren&#39;t part of the on-chain smart contract and can only be run locally.</p>
</li>
<li><p>Methods with <code>@method</code> decorator. These are part of the on-chain smart contract. These methods can only call <strong>methods also decorated by <code>@method</code> or <a href="#Functions">functions</a> specified below</strong>. Similarly, <strong>only the properties decorated by <code>@prop</code> can be accessed</strong>.</p>
</li>
</ol>
<h3 id="public-methods">Public <code>@method</code>s</h3>
<p>Each contract has at least one public method. It is denoted with the <code>public</code> modifier and does not return any value. It is visible outside the contract and acts as the entry point into the contract (like main in C and Java).</p>
<p>A public method can be called from an unlocking transaction. The input parameters are passed via an unlocking script.</p>
<pre><code class="language-js">  @<span class="hljs-title function_">method</span>()
  public <span class="hljs-title function_">unlock</span>(<span class="hljs-params">x: bigint</span>) {  <span class="hljs-comment">// Value of x is passed via unlocking script</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">add</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">x</span>, <span class="hljs-number">1n</span>) === x);
  }
</code></pre>
<h3 id="non-public-methods">Non-Public <code>@method</code>s</h3>
<p>Without a <code>public</code> modifier, a <code>@method</code> is an internal method and can only be called within the contract class.</p>
<p>It can return any valid types described later. The return type must be explicitly declared. e.g.,</p>
<pre><code class="language-js">  @<span class="hljs-title function_">method</span>()
  <span class="hljs-title function_">add</span>(<span class="hljs-attr">x0</span>: bigint, <span class="hljs-attr">x1</span>:bigint) : bigint {
    <span class="hljs-keyword">return</span> x0 + x1;
  }
</code></pre>
<p>Note: Recursion is disallowed. Both <strong>Non-Public Methods</strong> and <strong>Public Methods</strong> cannot call themselves in their body, either directly or indirectly.</p>
`

export default html
