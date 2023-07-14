// metadata
export const version = "0.1.0"
export const title = "ECDSA-based Oracles"
export const description = "ECDSA-base oracles in sCrypt"
export const replitLink = ""

const html = `<p><strong>P</strong> and <strong>p</strong> denote an oracle’s public and private key, respectively. We first hash the data to be signed. The result is added with <strong>p</strong>, yielding a new private key <strong>p’</strong>.</p>
<blockquote>
<p>x = sha256(data)
p’ = p + x</p>
</blockquote>
<p>The corresponding public key, <strong>P’</strong>, can be derived as follows:</p>
<blockquote>
<p>P’ = p’ _ G = (p + x) _ G = P + x * G</p>
</blockquote>
<p>The oracle uses the derived private key <strong>p’</strong> to sign, instead of the original <strong>p</strong>. Since only the oracle knows <strong>p</strong>, only he knows <strong>p’</strong> and can use it to sign against <strong>P’</strong>. To calculate <strong>P’</strong> in a contract, we need to calculate <strong>X = x * G</strong> and then add the result with <strong>P</strong>.</p>
<p>In order to verify the correct public key sum efficiently, we also pass <strong>lambda</strong>, which is the gradient between <strong>P</strong> and <strong>X</strong>:</p>
<blockquote>
<p>n - secp256k1 curve order (often also denoted as p)</p>
</blockquote>
<blockquote>
<p>lambda = ((Xy - Py) / (Xx - Px)) % n</p>
</blockquote>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Oracle</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-comment">// Oracles public key:</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">P</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">P: PubKey</span>) {
    <span class="hljs-variable language_">super</span>(P)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">P</span> = P
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">data: ByteString, sig: Sig, derP: PubKey, X: PubKey, lambda: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-keyword">let</span> hash = <span class="hljs-title function_">sha256</span>(data)

    <span class="hljs-keyword">let</span> x = <span class="hljs-title class_">PrivKey</span>(<span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">fromLEUnsigned</span>(hash))

    <span class="hljs-comment">// Verify X = x * G</span>
    <span class="hljs-comment">// Use tx preimage trick for very efficient verification.</span>
    <span class="hljs-title function_">assert</span>(
      <span class="hljs-title class_">Tx</span>.<span class="hljs-title function_">checkPreimageAdvancedOCS</span>(
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>,
        x,
        X,
        <span class="hljs-variable constant_">TX</span>.<span class="hljs-property">invK</span>,
        <span class="hljs-variable constant_">TX</span>.<span class="hljs-property">r</span>,
        <span class="hljs-title class_">Tx</span>.<span class="hljs-property">rBigEndian</span>,
        <span class="hljs-title class_">SigHashType</span>(<span class="hljs-title function_">or</span>(<span class="hljs-title class_">Sighash</span>.<span class="hljs-property">ALL</span>, <span class="hljs-title class_">SigHash</span>.<span class="hljs-property">FORKID</span>))
      ),
      <span class="hljs-string">"Failed assertion: X = x * G"</span>
    )

    <span class="hljs-comment">// Verify P&#x27; = P + X</span>
    <span class="hljs-keyword">let</span> ec = <span class="hljs-keyword">new</span> <span class="hljs-title function_">EC</span>()
    <span class="hljs-title function_">assert</span>(ec.<span class="hljs-title function_">isPubKeySum</span>(P, X, lambda, derP), <span class="hljs-string">"Failed assertion: P&#x27; = P + X"</span>)

    <span class="hljs-comment">// Verify signature is from oracle, who knows p&#x27; = p + x</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">checkSig</span>(sig, derP), <span class="hljs-string">"Bad oracle sig"</span>)
  }
}
</code></pre>
`

export default html
