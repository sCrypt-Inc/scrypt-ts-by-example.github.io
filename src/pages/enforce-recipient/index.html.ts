// metadata
export const version = "0.1.0"
export const title = "Enforce Recipients"
export const description =
  "Build and enforce a P2PKH output via an sCrypt smart contact"
export const replitLink = ""

const html = `<p>A smart contract can restrict a payment to be destined to a specific address. For example, the contract can check some arbitrary condition and based in the result it pays either Alice or Bob:</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Bet</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">addrAlice</span>: <span class="hljs-title class_">PubKeyHash</span>

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">addrBob</span>: <span class="hljs-title class_">PubKeyHash</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">
    addrAlice: PubKeyHash,
    addrBob: PubKeyHash,
  </span>) {
    <span class="hljs-variable language_">super</span>(...<span class="hljs-variable language_">arguments</span>)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">addrAlice</span> = addrAlice
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">addrBob</span> = addrBob
  }

  <span class="hljs-comment">// ANYONECANPAY_SINGLE is used here to ignore all inputs and outputs, other than the ones contains the state</span>
  <span class="hljs-comment">// see https://scrypt.io/scrypt-ts/getting-started/what-is-scriptcontext#sighash-type</span>
  <span class="hljs-meta">@method</span>(<span class="hljs-title class_">SigHash</span>.<span class="hljs-property">ANYONECANPAY_SINGLE</span>)
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlockAndPay</span>(<span class="hljs-params">...</span>) {
    <span class="hljs-comment">// Implement logic to choose winner...</span>
    <span class="hljs-keyword">let</span> <span class="hljs-attr">winner</span>: <span class="hljs-title class_">PubKeyHash</span> = ...

    <span class="hljs-comment">// Pay the winner, i.e. enforce a P2PKH that pays his address as the next output.</span>
    <span class="hljs-keyword">const</span> amount = <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">value</span> <span class="hljs-comment">// Pay out the same amount, that was locked in the smart contract itself.</span>
    <span class="hljs-keyword">const</span> out = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildPublicKeyHashOutput</span>(winner, amount)
    <span class="hljs-title function_">assert</span>(
        <span class="hljs-title function_">hash256</span>(out) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span>,
        <span class="hljs-string">&#x27;hashOutputs check failed&#x27;</span>
    )
  }
}
</code></pre>
<p>As a matter of fact, using the <a href="https://docs.scrypt.io/reference/classes/Utils/#buildoutput"><code>buildOutput</code></a> we could define any type of output we like, not only P2PKH.</p>
<p>Note, that in order to unlock this contract we will also need to bind a custom transaction builder, that will create a transaction with the correct output. See <a href="https://docs.scrypt.io/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx#call-tx">this page</a> for more details.</p>
`

export default html
