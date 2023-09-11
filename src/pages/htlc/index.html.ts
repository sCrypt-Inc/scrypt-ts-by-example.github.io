// metadata
export const version = "0.1.0"
export const title = "HTLC - Hash Time Locked Contract"
export const description = "HTLCs in sCrypt"
export const replitLink = ""

const html = `<p>HTLCs are a type of smart contract that ensures a transaction is completed within a specific timeframe or it can be cancelled. HTLCs utilize cryptographic hash functions and time locks, ensuring that the payment is only made if the receiver can provide the hash&#39;s preimage (original input) before the expiry of the time lock.</p>
<p>These contracts are often used in <a href="https://xiaohuiliu.medium.com/cross-chain-atomic-swaps-f13e874fcaa7">cross-chain atomic swaps</a>.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">HashTimeLockContract</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>() <span class="hljs-keyword">readonly</span> <span class="hljs-attr">alicePubKey</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-meta">@prop</span>() <span class="hljs-keyword">readonly</span> <span class="hljs-attr">bobPubKey</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-meta">@prop</span>() <span class="hljs-keyword">readonly</span> <span class="hljs-attr">hashX</span>: <span class="hljs-title class_">Sha256</span>

  <span class="hljs-meta">@prop</span>() <span class="hljs-keyword">readonly</span> <span class="hljs-attr">timeout</span>: <span class="hljs-built_in">bigint</span> <span class="hljs-comment">// Can be a timestamp or block height.</span>

  <span class="hljs-comment">// hash lock</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">x: ByteString, aliceSig: Sig</span>) {
    <span class="hljs-comment">// Check if H(x) == this.hashX</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">sha256</span>(x) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">hashX</span>, <span class="hljs-string">"Invalid secret."</span>)

    <span class="hljs-comment">// Verify Alices signature.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkSig</span>(aliceSig, <span class="hljs-variable language_">this</span>.<span class="hljs-property">alicePubKey</span>))
  }

  <span class="hljs-comment">// time lock</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">cancel</span>(<span class="hljs-params">bobSig: Sig</span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">locktime</span> &gt;= <span class="hljs-variable language_">this</span>.<span class="hljs-property">timeout</span>, <span class="hljs-string">"locktime has not yet expired"</span>)

    <span class="hljs-comment">// ...</span>

    <span class="hljs-comment">// Verify Bobs signature.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkSig</span>(bobSig, <span class="hljs-variable language_">this</span>.<span class="hljs-property">bobPubKey</span>))
  }
}
</code></pre>
`

export default html
