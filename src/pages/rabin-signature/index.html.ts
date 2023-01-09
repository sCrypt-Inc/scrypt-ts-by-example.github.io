// metadata
export const version = "0.1.0"
export const title = "Rabin Signatures"
export const description = "Rabin signatures in scryptTS"
export const replitLink = ""

const html = `<p>A <a href="https://en.wikipedia.org/wiki/Rabin_signature_algorithm">Rabin signature</a> is an alternative form of digital signature to ECDSA used in Bitcoin. It allows for efficient on-chain signature verification and is often used for signing and verifying oracle data.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">RabinSignature</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">hash</span>(<span class="hljs-attr">x</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-comment">// Expand into 512 bit hash</span>
    <span class="hljs-keyword">let</span> hx = <span class="hljs-title function_">sha256</span>(x)
    <span class="hljs-keyword">let</span> idx = <span class="hljs-title function_">len</span>(hx) / <span class="hljs-number">2</span>
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">sha256</span>(hx.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, idx)) + <span class="hljs-title function_">sha256</span>(hx.<span class="hljs-title function_">slice</span>(idx))
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">fromLEUnsigned</span>(<span class="hljs-attr">b</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">bigint</span> {
    <span class="hljs-comment">// Append positive sign byte in case it isn&#x27;t already.</span>
    <span class="hljs-comment">// (if the suffix is &#x27;0000&#x27; the result stays the same)</span>
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">unpack</span>(b + <span class="hljs-string">"00"</span>)
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">verifySig</span>(<span class="hljs-params">sig: <span class="hljs-built_in">bigint</span>, msg: <span class="hljs-built_in">string</span>, padding: <span class="hljs-built_in">string</span>, n: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-keyword">let</span> h = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">fromLEUnsigned</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">hash</span>(msg + padding))
    <span class="hljs-title function_">assert</span>((sig * sig) % n == h % n)
  }
}
</code></pre>
`

export default html
