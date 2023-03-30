// metadata
export const version = "0.1.0"
export const title = "Deploy and Call a Contract"
export const description = "Deploy and call an sCrypt contract on the Bitcoin testnet"
export const replitLink = ""

const html = `<p>Make sure you have the sCrypt CLI tool installed:</p>
<pre><code class="language-sh">npm install -g scrypt-cli
</code></pre>
<p>Create a demo project:</p>
<pre><code class="language-sh">scrypt project demo &amp;&amp; \\
<span class="hljs-built_in">cd</span> demo/
</code></pre>
<p>Create a file named <code>deploy.ts</code> in the root of the project with the following content:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Demo</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"./src/contracts/demo"</span>
<span class="hljs-keyword">import</span> { getDefaultSigner, inputSatoshis } <span class="hljs-keyword">from</span> <span class="hljs-string">"./tests/testnet/utils/txHelper"</span>
<span class="hljs-keyword">import</span> { toByteString, sha256 } <span class="hljs-keyword">from</span> <span class="hljs-string">"scrypt-ts"</span>
;(<span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> message = <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"hello world"</span>, <span class="hljs-literal">true</span>)

  <span class="hljs-keyword">await</span> <span class="hljs-title class_">Demo</span>.<span class="hljs-title function_">compile</span>()
  <span class="hljs-keyword">const</span> instance = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Demo</span>(<span class="hljs-title function_">sha256</span>(message))

  <span class="hljs-comment">// connect to a signer</span>
  <span class="hljs-keyword">await</span> instance.<span class="hljs-title function_">connect</span>(<span class="hljs-title function_">getDefaultSigner</span>())

  <span class="hljs-comment">// contract deployment</span>
  <span class="hljs-keyword">const</span> deployTx = <span class="hljs-keyword">await</span> instance.<span class="hljs-title function_">deploy</span>(inputSatoshis)
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Demo contract deployed: "</span>, deployTx.<span class="hljs-property">id</span>)

  <span class="hljs-comment">// contract call</span>
  <span class="hljs-keyword">const</span> { <span class="hljs-attr">tx</span>: callTx } = <span class="hljs-keyword">await</span> instance.<span class="hljs-property">methods</span>.<span class="hljs-title function_">unlock</span>(message)
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Demo contract "unlock" called: &#x27;</span>, callTx.<span class="hljs-property">id</span>)
})()
</code></pre>
<p>Now run the file:</p>
<pre><code class="language-sh">npx ts-node deploy.ts
</code></pre>
<p>At first it will probably ask you to fund a generated address with some testnet coin. Go ahead and get some via <a href="https://scrypt.io/#faucet">the sCrypt faucet</a> and run the command once again.</p>
<p>The script will first deploy the contract on the Bitcoin testnet and then call its public method named <code>unlock</code>.</p>
`

export default html
