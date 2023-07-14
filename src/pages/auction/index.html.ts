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
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">bidder</span>: <span class="hljs-title class_">PubKeyHash</span>

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">auctioner</span>: <span class="hljs-title class_">PubKey</span>

  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">auctionDeadline</span>: <span class="hljs-built_in">bigint</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">bidder: PubKeyHash, auctioner: PubKey, auctionDeadline: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-variable language_">super</span>(bidder, auctioner, auctionDeadline)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span> = bidder
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctioner</span> = auctioner
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctionDeadline</span> = auctionDeadline
  }

  <span class="hljs-comment">// bid with a higher offer</span>
  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">bid</span>(<span class="hljs-params">
    bidder: PubKeyHash,
    bid: <span class="hljs-built_in">bigint</span>,
    changeSats: <span class="hljs-built_in">bigint</span>,
    txPreimage: SigHashPreimage
  </span>) {
    <span class="hljs-keyword">let</span> <span class="hljs-attr">highestBid</span>: <span class="hljs-built_in">bigint</span> = <span class="hljs-title class_">SigHash</span>.<span class="hljs-title function_">value</span>(txPreimage)
    <span class="hljs-title function_">assert</span>(bid &gt; highestBid)

    <span class="hljs-keyword">let</span> <span class="hljs-attr">highestBidder</span>: <span class="hljs-title class_">PubKeyHash</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bidder</span> = bidder

    <span class="hljs-comment">// auction continues with a higher bidder</span>
    <span class="hljs-keyword">let</span> <span class="hljs-attr">stateScript</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getStateScript</span>()
    <span class="hljs-keyword">let</span> <span class="hljs-attr">auctionOutput</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildOutput</span>(stateScript, bid)

    <span class="hljs-comment">// refund previous highest bidder</span>
    <span class="hljs-keyword">let</span> <span class="hljs-attr">refundScript</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildPublicKeyHashScript</span>(highestBidder)
    <span class="hljs-keyword">let</span> <span class="hljs-attr">refundOutput</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildOutput</span>(refundScript, highestBid)
    <span class="hljs-keyword">let</span> <span class="hljs-attr">output</span>: <span class="hljs-title class_">ByteString</span> = auctionOutput + refundOutput

    <span class="hljs-keyword">if</span> (changeSats &gt; <span class="hljs-number">0</span>) {
      <span class="hljs-keyword">let</span> <span class="hljs-attr">changeScript</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildPublicKeyHashScript</span>(bidder)
      <span class="hljs-keyword">let</span> <span class="hljs-attr">changeOutput</span>: <span class="hljs-title class_">ByteString</span> = <span class="hljs-title class_">Utils</span>.<span class="hljs-title function_">buildOutput</span>(changeScript, changeSats)
      output += changeOutput
    }

    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">propagateState</span>(txPreimage, output))
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">close</span>(<span class="hljs-params">sig: Sig, txPreimage: SigHashPreimage</span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkPreimage</span>(txPreimage))
    <span class="hljs-title function_">assert</span>(<span class="hljs-title class_">SigHash</span>.<span class="hljs-title function_">nLocktime</span>(txPreimage) &gt;= <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctionDeadline</span>)
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkSig</span>(sig, <span class="hljs-variable language_">this</span>.<span class="hljs-property">auctioner</span>))
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">propagateState</span>(<span class="hljs-attr">txPreimage</span>: <span class="hljs-title class_">SigHashPreimage</span>, <span class="hljs-attr">outputs</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkPreimage</span>(txPreimage))
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">hash256</span>(outputs) == <span class="hljs-title class_">SigHash</span>.<span class="hljs-title function_">hashOutputs</span>(txPreimage)
  }
}
</code></pre>
`

export default html
