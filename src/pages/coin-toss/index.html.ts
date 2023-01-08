// metadata
export const version = "0.1.0"
export const title = "Coin Toss"
export const description = "Coin toss in scryptTS"
export const replitLink = ""

const html = `<p>Alice and Bob decide to flip a coin, but they have no physical coin or they want to do it over the Internet. They can achieve fair coin tossing by following protocol on Bitcoin.</p>
<ol>
<li>Alice and Bob each locks X bitcoins in a smart contract shown below.</li>
<li>They both reveal their secret number, which are XOR’d to determine if the coin toss results in heads or tails. Alice wins if it is heads, otherwise Bob wins. Whoever wins takes all 2X bitcoins.</li>
</ol>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CoinToss</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {

  <span class="hljs-comment">// Public keys:</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">alice</span>: <span class="hljs-title class_">PubKey</span>;
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">bob</span>: <span class="hljs-title class_">PubKey</span>;
  
  <span class="hljs-comment">// Commitments:</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">aliceHash</span>: <span class="hljs-title class_">Sha256</span>;
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">bobHash</span>: <span class="hljs-title class_">Sha256</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">alice: PubKey, bob: PubKey,
              aliceHash: Sha256, bobHash: Sha256</span>) {
    <span class="hljs-variable language_">super</span>(alice, bob, aliceHash, bobHash);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> = alice;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span> = bob;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">aliceHash</span> = aliceHash;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bobHash</span> = bobHash;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">toss</span>(<span class="hljs-params">aliceNonce: <span class="hljs-built_in">string</span>, bobNonce: <span class="hljs-built_in">string</span>, sig: Sig</span>) {
    <span class="hljs-comment">// Nonces can be of any length, as long as they&#x27;re</span>
    <span class="hljs-comment">// resistant to brute-force attacks.</span>
    <span class="hljs-comment">// We use 256 bits / 32 bytes as an example here.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">len</span>(aliceNonce) == <span class="hljs-number">32</span>);
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">hash256</span>(aliceNonce) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">aliceHash</span>);
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">len</span>(bobNonce) == <span class="hljs-number">32</span>);
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">hash256</span>(bobNonce) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">bobHash</span>);
    
    <span class="hljs-keyword">let</span> aliceNonceInt = <span class="hljs-title function_">unpack</span>(aliceNonce);
    <span class="hljs-keyword">let</span> bobNonceInt = <span class="hljs-title function_">unpack</span>(bobNonce);
    <span class="hljs-keyword">let</span> head = <span class="hljs-title function_">and</span>(<span class="hljs-title function_">xor</span>(aliceNonceInt, bobNonceInt), <span class="hljs-number">0n</span>);
    
    <span class="hljs-keyword">let</span> winner = head ? <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> : <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span>;
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">checkSig</span>(sig, winner));
  }

}
</code></pre>
`

export default html
