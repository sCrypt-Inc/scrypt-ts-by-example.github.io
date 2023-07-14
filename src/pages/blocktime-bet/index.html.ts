// metadata
export const version = "0.1.0"
export const title = "BlockTime Bet"
export const description = "BlockTime bet in sCrypt"
export const replitLink = ""

const html = `<p>By verifying Merkle proofs (read section 8 of the <a href="https://craigwright.net/bitcoin-white-paper.pdf">Bitcoin whitepaper</a>) in a smart contract we can do interesting things such as betting on the time the next block will be mined. In the following smart contract Alice and Bob bet whether it will take more or less than 10 minutes to mine the next block.</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Blockchain</span>, <span class="hljs-title class_">BlockHeader</span>, <span class="hljs-title class_">MerkleProof</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"scrypt-ts-lib"</span>

<span class="hljs-keyword">class</span> <span class="hljs-title class_">BlockTimeBet</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-comment">// 7 means the transaction has 6 confirmations</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> N = <span class="hljs-number">7n</span>

  <span class="hljs-comment">// 10 minutes in seconds</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">readonly</span> <span class="hljs-variable constant_">AVG_BLOCK_TIME</span> = <span class="hljs-number">600n</span>

  <span class="hljs-comment">// Maximal target for any block to be considered valid.</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">blockchainTarget</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">alice</span>: <span class="hljs-title class_">PubKey</span>
  <span class="hljs-attr">bob</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">blockchainTarget: <span class="hljs-built_in">bigint</span>, alice: PubKey, bob: PubKey</span>) {
    <span class="hljs-variable language_">super</span>(...<span class="hljs-variable language_">arguments</span>)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">blockchainTarget</span> = blockchainTarget
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> = alice
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span> = bob
  }

  <span class="hljs-comment">// headers[1] is the block containing the contract tx</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">main</span>(<span class="hljs-params">headers: FixedArray&lt;BlockHeader, N&gt;, merkleProof: MerkleProof, sig: Sig</span>) {
    <span class="hljs-comment">// Get ID of previous tx.</span>
    <span class="hljs-keyword">let</span> prevTxid = <span class="hljs-title class_">Sha256</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">outpoint</span>.<span class="hljs-property">txid</span>)

    <span class="hljs-comment">// Validate a chain of block headers.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title class_">Blockchain</span>.<span class="hljs-title function_">isBlockHeaderChainValid</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">N</span>, headers, <span class="hljs-variable language_">this</span>.<span class="hljs-property">blockchainTarget</span>))

    <span class="hljs-comment">// Verify previous tx is in block with index 1.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title class_">Blockchain</span>.<span class="hljs-title function_">txInBlock</span>(prevTxid, headers[<span class="hljs-number">1</span>], merkleProof))

    <span class="hljs-comment">// Block time is the time difference between this block and last.</span>
    <span class="hljs-keyword">let</span> blockTime = headers[<span class="hljs-number">1</span>].<span class="hljs-property">time</span> - headers[<span class="hljs-number">0</span>].<span class="hljs-property">time</span>

    <span class="hljs-comment">// Alice wins if block is mined within 10 mins; otherwise Bob wins.</span>
    <span class="hljs-keyword">let</span> winner = blockTime &lt; <span class="hljs-variable language_">this</span>.<span class="hljs-property">AVG_BLOCK_TIME</span> ? <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> : <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">checkSig</span>(sig, winner))
  }
}
</code></pre>
`

export default html
