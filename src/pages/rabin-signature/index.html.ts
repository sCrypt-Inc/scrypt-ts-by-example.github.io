// metadata
export const version = "0.1.0"
export const title = "Rabin Signatures"
export const description = "Rabin signatures in scryptTS"
export const replitLink =
  "https://replit.com/@msinkec/scryptTS-rabinSignature?embed=true"

const html = `<p>A <a href="https://en.wikipedia.org/wiki/Rabin_signature_algorithm">Rabin signature</a> is an alternative form of digital signature to ECDSA used in Bitcoin. It allows for efficient on-chain signature verification and is often used for signing and verifying oracle data.</p>
<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">RabinPubKey</span> = <span class="hljs-built_in">bigint</span>

<span class="hljs-comment">// Rabin signature is combination (S, U).</span>
<span class="hljs-keyword">type</span> <span class="hljs-title class_">RabinSig</span> = {
  <span class="hljs-comment">// S</span>
  <span class="hljs-attr">s</span>: <span class="hljs-built_in">bigint</span>
  <span class="hljs-comment">// U</span>
  <span class="hljs-attr">padding</span>: <span class="hljs-title class_">ByteString</span>
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">RabinVerifier</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContractLib</span> {
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">static</span> <span class="hljs-title function_">hash</span>(<span class="hljs-attr">x</span>: <span class="hljs-title class_">ByteString</span>): <span class="hljs-title class_">ByteString</span> {
    <span class="hljs-comment">// expand into 512 bit hash</span>
    <span class="hljs-keyword">const</span> hx = <span class="hljs-title function_">sha256</span>(x)
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">sha256</span>(hx.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, <span class="hljs-number">32</span>)) + <span class="hljs-title function_">sha256</span>(hx.<span class="hljs-title function_">slice</span>(<span class="hljs-number">32</span>, <span class="hljs-number">64</span>))
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">static</span> <span class="hljs-title function_">verifySig</span>(<span class="hljs-attr">msg</span>: <span class="hljs-title class_">ByteString</span>, <span class="hljs-attr">sig</span>: <span class="hljs-title class_">RabinSig</span>, <span class="hljs-attr">pubKey</span>: <span class="hljs-title class_">RabinPubKey</span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">const</span> h = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">fromLEUnsigned</span>(<span class="hljs-title class_">RabinVerifier</span>.<span class="hljs-title function_">hash</span>(msg + sig.<span class="hljs-property">padding</span>))
    <span class="hljs-keyword">return</span> (sig.<span class="hljs-property">s</span> * sig.<span class="hljs-property">s</span>) % pubKey == h % pubKey
  }
}
</code></pre>
`

export default html
