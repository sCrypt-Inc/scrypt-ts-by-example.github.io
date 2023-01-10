// metadata
export const version = "0.1.0"
export const title = "CLTV"
export const description = "Time locks in scryptTS"
export const replitLink = ""

const html = `<p>Using scryptTS we can write smart contracts that can only be unlocked after a certain amount of time has passed. We leverage the <a href="https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence">nLocktime</a> field of Bitcoin transactions:</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckLockTimeVerify</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">matureTime</span>: <span class="hljs-built_in">bigint</span> <span class="hljs-comment">// Can be timestamp or block height.</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">matureTime: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(matureTime)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span> = maturetime
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">tx</span>.<span class="hljs-property">nLockTime</span> &gt;= <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span>)
  }
}
</code></pre>
`

export default html
