// metadata
export const version = "0.1.0"
export const title = "Deploy and Call a Contract"
export const description = "Deploy and call an sCrypt contract on the Bitcoin testnet"
export const replitLink = ""

const html = `<p>Make sure you have the sCrypt CLI tool installed:</p>
<pre><code class="language-sh">npm install -g scrypt-cli
</code></pre>
<p>Create a demo project and install its dependencies:</p>
<pre><code class="language-sh">scrypt project demo &amp;&amp; \\
<span class="hljs-built_in">cd</span> demo/ &amp;&amp; npm i
</code></pre>
<p>Run the following command to generate a testnet address and fund it using the <a href="https://scrypt.io/faucet">sCrypt faucet</a>:</p>
<pre><code class="language-sh">npm run genprivkey
</code></pre>
<p>Now simply run the CLI&#39;s <code>deploy</code> command in the root of the project to deploy the contract:</p>
<pre><code class="language-sh">scrypt deploy
</code></pre>
<p>Under the hood this executes the file named <code>deploy.ts</code>. For further deployments, you can adjust it to your needs.</p>
<p>Now, that we have deployed our smart contract, we can also call one of its methods. Create a file named <code>call.ts</code>:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Demo</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"./src/contracts/demo"</span>
<span class="hljs-keyword">import</span> { toByteString, <span class="hljs-title class_">DefaultProvider</span>, bsv, <span class="hljs-title class_">TestWallet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"scrypt-ts"</span>
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> dotenv <span class="hljs-keyword">from</span> <span class="hljs-string">"dotenv"</span>

<span class="hljs-comment">// Load the .env file</span>
dotenv.<span class="hljs-title function_">config</span>()

<span class="hljs-comment">// Read the private key from the .env file.</span>
<span class="hljs-comment">// The default private key inside the .env file is meant to be used for the Bitcoin testnet.</span>
<span class="hljs-comment">// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys</span>
<span class="hljs-keyword">const</span> privateKey = bsv.<span class="hljs-property">PrivateKey</span>.<span class="hljs-title function_">fromWIF</span>(process.<span class="hljs-property">env</span>.<span class="hljs-property">PRIVATE_KEY</span> || <span class="hljs-string">""</span>)

<span class="hljs-comment">// Prepare signer.</span>
<span class="hljs-comment">// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider</span>
<span class="hljs-keyword">const</span> provider = <span class="hljs-keyword">new</span> <span class="hljs-title class_">DefaultProvider</span>({
  <span class="hljs-attr">network</span>: bsv.<span class="hljs-property">Networks</span>.<span class="hljs-property">testnet</span>,
})
<span class="hljs-keyword">const</span> signer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">TestWallet</span>(privateKey, provider)

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">await</span> <span class="hljs-title class_">Demo</span>.<span class="hljs-title function_">compile</span>()

  <span class="hljs-comment">// Fetch tx of deployed contract and reconstruct contract instance.</span>
  <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> Adjust TXID:</span>
  <span class="hljs-keyword">const</span> tx = <span class="hljs-keyword">await</span> provider.<span class="hljs-title function_">getTransaction</span>(
    <span class="hljs-string">"dac4122c585e3f72d2f839417871286f6048e9ff110254d340fd2767ccc18d08"</span>
  )
  <span class="hljs-keyword">const</span> instance = <span class="hljs-title class_">Demo</span>.<span class="hljs-title function_">fromTx</span>(tx, <span class="hljs-number">0</span>)

  <span class="hljs-comment">// We need to connect a signer in order to call the contracts method.</span>
  instance.<span class="hljs-title function_">connect</span>(signer)

  <span class="hljs-comment">// Contract call. Adjust message value if needed.</span>
  <span class="hljs-keyword">const</span> message = <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"hello world"</span>, <span class="hljs-literal">true</span>)
  <span class="hljs-keyword">const</span> { <span class="hljs-attr">tx</span>: callTx } = <span class="hljs-keyword">await</span> instance.<span class="hljs-property">methods</span>.<span class="hljs-title function_">unlock</span>(message)
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Demo contract "unlock" called: &#x27;</span>, callTx.<span class="hljs-property">id</span>)
}

<span class="hljs-title function_">main</span>()
</code></pre>
<p>Inside the file adjust the transaction ID of your deployed contract and also the message, if you already modified <code>deploy.ts</code>.</p>
<p>Now run the file:</p>
<pre><code class="language-sh">npx ts-node call.ts
</code></pre>
<p>If successful, the script will output something like the following:</p>
<pre><code class="language-sh">Demo contract <span class="hljs-string">"unlock"</span> called:  759e318c1b1fc0ccc78ef0eb913fb9ef94895731e11b0fb4114adb53007dcd72
</code></pre>
`

export default html
