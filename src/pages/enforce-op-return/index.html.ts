// metadata
export const version = "0.1.0"
export const title = "Enforce OP_RETURN Outputs"
export const description = "Enforce a OP_RETURN output using an sCrypt smart contact"
export const replitLink = ""

const html = `<p>Similarly as restricting the outputs to pay a specific address, as shown in a <a href="/enforce-recipient">previous example</a>, we can restrict them to include some <code>OP_RETURN</code> data.</p>
<p>The following contract pays out the address defined in <code>dest</code> and includes an additional <code>OP_RETURN</code> output containing a message.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">EnforceOpReturn</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">dest</span>: <span class="hljs-title class_">PubKeyHash</span>

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">message</span>: <span class="hljs-title class_">ByteString</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">
    message: ByteString,
  </span>) {
    <span class="hljs-variable language_">super</span>(...<span class="hljs-variable language_">arguments</span>)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">message</span> = message
  }

  <span class="hljs-meta">@method</span>(<span class="hljs-title class_">SigHash</span>.<span class="hljs-property">ANYONECANPAY_ALL</span>)
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> outputs = <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">&#x27;&#x27;</span>)

    <span class="hljs-comment">// 1st output: Pay the destination address.</span>
    outputs += <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildPublicKeyHashOutput</span>(winner, <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">value</span>)
    
    <span class="hljs-comment">// 2nd output: message</span>
    outputs += <span class="hljs-title function_">buildOpreturnScript</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">message</span>)
    
    <span class="hljs-comment">// Lastly, add change output if needed.</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">changeAmount</span> &gt; <span class="hljs-number">0n</span>) {
        outputs += <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildChangeOutput</span>()
    }
    
    <span class="hljs-title function_">assert</span>(
        <span class="hljs-title function_">hash256</span>(outputs) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span>,
        <span class="hljs-string">&#x27;hashOutputs check failed&#x27;</span>
    )
  }
}
</code></pre>
<p>We use the <code>ANYONECANPAY_ALL</code> sighash flag in order to control all the outputs of the unlocking transaction, instead of only a single one. Because of this the contract code itself also needs to account for a potential change output.</p>
<p>Note, that in order to unlock this contract we will also need to bind a custom transaction builder, that will create a transaction with the correct outputs. See <a href="https://docs.scrypt.io/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx#call-tx">this page</a> for more details.</p>
`

export default html
