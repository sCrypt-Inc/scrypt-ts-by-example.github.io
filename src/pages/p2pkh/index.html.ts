// metadata
export const version = "0.1.0"
export const title = "P2PKH"
export const description = "Pay to Public Key Hash (P2PKH) in sCrypt"
export const replitLink = "https://replit.com/@msinkec/sCrypt-p2pkh?embed=true"

const html = `<p>Pay-to-PubKey-Hash (<a href="https://learnmeabitcoin.com/guide/p2pkh">P2PKH</a>) contract is used to send bitcoins to a bitcoin address. It is the most common contract on the Bitcoin network. Such contracts are unlocked by the public key and a signature created by the corresponding private key.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">P2PKH</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">pubKeyHash</span>: <span class="hljs-title class_">PubKeyHash</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">pubKeyHash: PubKeyHash</span>) {
    <span class="hljs-variable language_">super</span>(pubKeyHash)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">pubKeyHash</span> = pubKeyHash
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">sig: Sig, pubkey: PubKey</span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">hash160</span>(pubkey) == <span class="hljs-variable language_">this</span>.<span class="hljs-property">pubKeyHash</span>, <span class="hljs-string">"Wrong pub key"</span>)
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">checkSig</span>(sig, pubkey), <span class="hljs-string">"Bad sig"</span>)
  }
}
</code></pre>
`

export default html
