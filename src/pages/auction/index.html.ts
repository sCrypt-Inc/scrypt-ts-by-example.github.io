// metadata
export const version = "0.1.0"
export const title = "Auction"
export const description = "Auction in sCrypt"
export const replitLink = ""

const html = `<p>The auction contract implements two public functions:</p>
<ul>
<li><code>bid</code> - If a higher bid is found, the current winner is updated and the previous highest bidder is refunded.</li>
<li><code>close</code> - The auctioneer can close the auction after it expires and take the offer.</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Auction</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {

  <span class="hljs-comment">// The bidder&#x27;s public key.</span>
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">bidder</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-comment">// The auctioneer&#x27;s public key.</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">auctioneer</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-comment">// Deadline of the auction. Can be block height or timestamp.</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">auctionDeadline</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">auctioneer: PubKey, auctionDeadline: <span class="hljs-built_in">bigint</span></span>) {
      <span class="hljs-variable language_">super</span>(...<span class="hljs-variable language_">arguments</span>)
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span> = auctioneer
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctioneer</span> = auctioneer
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctionDeadline</span> = auctionDeadline
  }

  <span class="hljs-comment">// Call this public method to bid with a higher offer.</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">bid</span>(<span class="hljs-params">bidder: PubKey, bid: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-attr">highestBid</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">utxo</span>.<span class="hljs-property">value</span>
    <span class="hljs-title function_">assert</span>(
      bid &gt; highestBid,
      <span class="hljs-string">&#x27;the auction bid is lower than the current highest bid&#x27;</span>
    )

    <span class="hljs-comment">// Change the public key of the highest bidder.</span>
    <span class="hljs-keyword">const</span> <span class="hljs-attr">highestBidder</span>: <span class="hljs-title class_">PubKey</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span> = bidder

    <span class="hljs-comment">// Auction continues with a higher bidder.</span>
    <span class="hljs-keyword">const</span> <span class="hljs-attr">auctionOutput</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildStateOutput</span>(bid)

    <span class="hljs-comment">// Refund previous highest bidder.</span>
    <span class="hljs-keyword">const</span> <span class="hljs-attr">refundOutput</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildPublicKeyHashOutput</span>(
      <span class="hljs-title function_">pubKey2Addr</span>(highestBidder),
      highestBid
    )
    <span class="hljs-keyword">let</span> <span class="hljs-attr">outputs</span>: <span class="hljs-title class_">ByteString</span> = auctionOutput + refundOutput

    <span class="hljs-comment">// Add change output.</span>
    outputs += <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildChangeOutput</span>()

    <span class="hljs-title function_">assert</span>(
      <span class="hljs-title function_">hash256</span>(outputs) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span>,
      <span class="hljs-string">&#x27;hashOutputs check failed&#x27;</span>
    )
  }

  <span class="hljs-comment">// Close the auction if deadline is reached.</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">close</span>(<span class="hljs-params">sig: Sig</span>) {
    <span class="hljs-comment">// Check auction deadline.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">timeLock</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">auctionDeadline</span>), <span class="hljs-string">&#x27;deadline not reached&#x27;</span>)
    <span class="hljs-comment">// Check signature of the auctioneer.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkSig</span>(sig, <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctioneer</span>), <span class="hljs-string">&#x27;signature check failed&#x27;</span>)
  }
  
}
</code></pre>
`

export default html
