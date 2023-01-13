// metadata
export const version = "0.1.0"
export const title = "CLTV - Check LockTime Verify"
export const description = "Time locks in scryptTS"
export const replitLink = "https://replit.com/@msinkec/scryptTS-cltv?embed=true"

const html = `<p>We can write smart contracts that can only be unlocked after a certain amount of time has passed. We leverage the <a href="https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence">nLocktime</a> field of Bitcoin transactions:</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckLockTimeVerify</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">matureTime</span>: <span class="hljs-built_in">bigint</span> <span class="hljs-comment">// Can be timestamp or block height.</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">matureTime: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(matureTime)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span> = matureTime
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// Ensure nSequence is less than UINT_MAX.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">nSequence</span> &lt; <span class="hljs-number">4294967295n</span>, <span class="hljs-string">&#x27;nSequence must be less than UINT_MAX&#x27;</span>)

    <span class="hljs-comment">// Check if using block height.</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span> &lt; <span class="hljs-number">500000000n</span>) {
      <span class="hljs-comment">// Enforce nLocktime field to also use block height.</span>
      <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">nLocktime</span> &lt; <span class="hljs-number">500000000n</span>, <span class="hljs-string">&#x27;nLocktime too low&#x27;</span>)
    }
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">nLocktime</span> &gt;= <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span>, <span class="hljs-string">&#x27;nLocktime too low&#x27;</span>)
  }
}
</code></pre>
`

export default html
