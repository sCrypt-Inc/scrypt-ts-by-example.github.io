// metadata
export const version = "0.1.0"
export const title = "Multi-Sig Payment"
export const description = "Multi-Sig payment in sCrypt"
export const replitLink = ""

const html = `<p>A multi-sig payment contract is used to send funds to a group of Bitcoin addresses. It employs the checkMultiSig function, which distinguishes itself from the checkSig function by accepting an array of signature-public key pairs rather than just one pair. Each signature must be valid.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">MultiSigPayment</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-comment">// Public key hashes of the 3 recipients</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">pubKeyHashes</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-title class_">PubKeyHash</span>, <span class="hljs-number">3</span>&gt;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">pubKeyHashes: FixedArray&lt;PubKeyHash, <span class="hljs-number">3</span>&gt;</span>) {
    <span class="hljs-variable language_">super</span>(...<span class="hljs-variable language_">arguments</span>)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">pubKeyHashes</span> = pubKeyHashes
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">signatures: FixedArray&lt;Sig, <span class="hljs-number">3</span>&gt;, publicKeys: FixedArray&lt;PubKey, <span class="hljs-number">3</span>&gt;</span>) {
    <span class="hljs-comment">// Check if the passed public keys belong to the specified public key hashes.</span>
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">3</span>; i++) {
      <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">hash160</span>(publicKeys[i]) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">pubKeyHashes</span>[i], <span class="hljs-string">"public key hash mismatch"</span>)
    }

    <span class="hljs-comment">// Validate signatures.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkMultiSig</span>(signatures, publicKeys), <span class="hljs-string">"checkMultiSig failed"</span>)
  }
}
</code></pre>
`

export default html
