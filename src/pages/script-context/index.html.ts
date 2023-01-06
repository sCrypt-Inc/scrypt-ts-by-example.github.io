// metadata
export const version = "0.1.0"
export const title = "ScriptContext"
export const description = "ScriptContext in scryptTS"
export const replitLink = ""

const html = `<p>Using <a href="https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1">OP_PUSH_TX</a> allows the contract code to access the entire transaction data, including all inputs and outputs.
This allows us to set any constraints on the data. This opens up endless possibilities for running various smart contracts on the BSV network.</p>
<p>OP_PUSH_TX requires the <a href="https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm">transaction preimage</a> to be computed externally, and the transaction preimage is passed into the contract through the public function parameters of the contract.</p>
<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Counter</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">count</span>: <span class="hljs-built_in">bigint</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">count: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(count);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span> = count;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">increment</span>(<span class="hljs-params">txPreimage: SigHashPreimage</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span>++;
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">updateState</span>(txPreimage, <span class="hljs-title class_">SigHash</span>.<span class="hljs-title function_">value</span>(txPreimage)));
  }
}
</code></pre>
<p><strong>scryptTS</strong> encapsulates the computation of the transaction preimage. Users do not need to explicitly calculate and pass the transaction preimage. The data of the entire transaction can be accessed through <code>ScriptContext</code>.</p>
<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">ScriptContext</span> = {
    <span class="hljs-attr">nVersion</span>: <span class="hljs-title class_">ByteString</span>;
    <span class="hljs-attr">utxo</span>: <span class="hljs-variable constant_">UTXO</span>;
    <span class="hljs-attr">hashPrevouts</span>: <span class="hljs-title class_">ByteString</span>;
    <span class="hljs-attr">hashSequence</span>: <span class="hljs-title class_">ByteString</span>;
    <span class="hljs-attr">nSequence</span>: <span class="hljs-built_in">bigint</span>;
    <span class="hljs-attr">hashOutputs</span>: <span class="hljs-title class_">ByteString</span>;
    <span class="hljs-attr">nLocktime</span>: <span class="hljs-built_in">bigint</span>;
    <span class="hljs-attr">sigHashType</span>: <span class="hljs-title class_">SigHashType</span>;
};
</code></pre>
<p>Correspondence between <code>ScriptContext</code> structure and transaction preimage <code>txPreimage</code>:</p>
<table>
<thead>
<tr>
<th>ScriptContext</th>
<th>transaction preimage <code>txPreimage</code></th>
</tr>
</thead>
<tbody><tr>
<td>nVersion</td>
<td>nVersion of the transaction</td>
</tr>
<tr>
<td>utxo.value</td>
<td>value of the output spent by this input (8-byte little endian)</td>
</tr>
<tr>
<td>utxo.scriptCode</td>
<td>scriptCode of the input (serialized as scripts inside CTxOuts)</td>
</tr>
<tr>
<td>utxo.outpoint.txid</td>
<td>prevTx id in 32-byte hash</td>
</tr>
<tr>
<td>utxo.outpoint.outputIndex</td>
<td>outputIndex in prevTx</td>
</tr>
<tr>
<td>hashPrevouts</td>
<td><code>hashPrevouts</code> is the double SHA256 of the serialization of all input outpoints;</td>
</tr>
<tr>
<td>hashSequence</td>
<td><code>hashSequence</code> is the double SHA256 of the serialization of nSequence of all inputs;</td>
</tr>
<tr>
<td>nSequence</td>
<td>nSequence of the input</td>
</tr>
<tr>
<td>hashOutputs</td>
<td><code>hashOutputs</code> is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey (serialized as scripts inside CTxOuts);</td>
</tr>
<tr>
<td>nLocktime</td>
<td>nLocktime of the transaction</td>
</tr>
<tr>
<td>sigHashType</td>
<td>sighash type of the signature</td>
</tr>
</tbody></table>
<p>You can directly access the relevant data of the transaction preimage through <code>this.ctx</code> in the public functions of the contract (access in non-public functions is not supported).</p>
<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Counter</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">count</span>: <span class="hljs-built_in">bigint</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">count: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(count);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span> = count;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">increment</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span>++;
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span> == <span class="hljs-title function_">hash256</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildStateOutput</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">value</span>)));
  }
}
</code></pre>
<p>There is no need to pass in the transaction preimage <code>txPreimage</code> when calling the contract:</p>
<pre><code class="language-ts"><span class="hljs-title function_">getCallTx</span>(<span class="hljs-attr">utxos</span>: <span class="hljs-variable constant_">UTXO</span>[], <span class="hljs-attr">prevTx</span>: bsv.<span class="hljs-property">Transaction</span>, <span class="hljs-attr">nextInst</span>: <span class="hljs-title class_">Counter</span>): bsv.<span class="hljs-property">Transaction</span> {
<span class="hljs-keyword">const</span> inputIndex = <span class="hljs-number">1</span>;
<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> bsv.<span class="hljs-title class_">Transaction</span>().<span class="hljs-title function_">from</span>(utxos)
    .<span class="hljs-title function_">addInputFromPrevTx</span>(prevTx)
    .<span class="hljs-title function_">setOutput</span>(<span class="hljs-number">0</span>, <span class="hljs-function">(<span class="hljs-params">tx: bsv.Transaction</span>) =&gt;</span> {
    nextInst.<span class="hljs-property">lockTo</span> = { tx, <span class="hljs-attr">outputIndex</span>: <span class="hljs-number">0</span> };
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> bsv.<span class="hljs-property">Transaction</span>.<span class="hljs-title class_">Output</span>({
        <span class="hljs-attr">script</span>: nextInst.<span class="hljs-property">lockingScript</span>,
        <span class="hljs-attr">satoshis</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">balance</span>,
    })
    })
    .<span class="hljs-title function_">setInputScript</span>(inputIndex, <span class="hljs-function">(<span class="hljs-params">tx: bsv.Transaction</span>) =&gt;</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">unlockFrom</span> = { tx, inputIndex };
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getUnlockingScript</span>(<span class="hljs-function"><span class="hljs-params">self</span> =&gt;</span> {
        self.<span class="hljs-title function_">increment</span>();
    })
    });
}
</code></pre>
`

export default html
