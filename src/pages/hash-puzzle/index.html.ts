// metadata
export const version = "0.1.0"
export const title = "Hash Puzzle"
export const description = "Hash puzzles in scryptTS"
export const replitLink = ""

const html = `<p>A hash puzzle is a smart contract that can be unlocked by providing a hash preimage of predefined hash value.</p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">HashPuzzle</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">sha256</span>: <span class="hljs-title class_">Sha256</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">sha256: Sha256</span>) {
    <span class="hljs-variable language_">super</span>(sha256)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">sha256</span> = sha256
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">unlock</span>(<span class="hljs-params">data: <span class="hljs-built_in">string</span></span>) {
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">sha256</span> == <span class="hljs-title function_">sha256</span>(data))
  }
}
</code></pre>
`

export default html
