// metadata
export const version = "0.1.0"
export const title = "ScriptContext"
export const description = "ScriptContext in sCrypt"
export const replitLink = ""

const html = `<p><code>ScriptContext</code> allows you to put arbitrary constraints on the subsequent (unlocking) transaction (more precisely it&#39;s <a href="https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm">hash preimage</a>). The most common among those is propagating state through a chain of UTXOs.</p>
<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">ScriptContext</span> = {
  <span class="hljs-attr">nVersion</span>: <span class="hljs-title class_">ByteString</span>
  <span class="hljs-attr">utxo</span>: <span class="hljs-variable constant_">UTXO</span>
  <span class="hljs-attr">hashPrevouts</span>: <span class="hljs-title class_">ByteString</span>
  <span class="hljs-attr">hashSequence</span>: <span class="hljs-title class_">ByteString</span>
  <span class="hljs-attr">sequence</span>: <span class="hljs-built_in">bigint</span>
  <span class="hljs-attr">hashOutputs</span>: <span class="hljs-title class_">ByteString</span>
  <span class="hljs-attr">locktime</span>: <span class="hljs-built_in">bigint</span>
  <span class="hljs-attr">sigHashType</span>: <span class="hljs-title class_">SigHashType</span>
}
</code></pre>
<p>You can directly access the relevant data of the transaction preimage through <code>this.ctx</code> in the public functions of the contract (access in non-public functions is not supported).</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckLockTimeVerify</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">matureTime</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">matureTime: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(matureTime)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span> = matureTime
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params"></span>) {
    ...

    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">locktime</span> &gt;= <span class="hljs-variable language_">this</span>.<span class="hljs-property">matureTime</span>, <span class="hljs-string">"locktime too low"</span>)
  }
}
</code></pre>
`

export default html
