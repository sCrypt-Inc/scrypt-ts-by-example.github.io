// metadata
export const version = "0.1.0"
export const title = "Domain Types"
export const description = "Domain types in sCrypt"
export const replitLink = ""

const html = `<p>There are several <a href="https://scrypt.io/scrypt-ts/getting-started/how-to-write-a-contract#domain-types">domain types</a>, specific to the Bitcoin context, used to further improve type safety.</p>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> pubKey = <span class="hljs-title class_">PubKey</span>(
  <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"02a2ef6eb12d3076dbdc98241920f75ac88b664656400aa390a0b236ea1eb6ec0b"</span>)
)

<span class="hljs-keyword">let</span> pkh = <span class="hljs-title class_">Addr</span>(<span class="hljs-title function_">pubKey2Addr</span>(pubKey))

<span class="hljs-keyword">let</span> h = <span class="hljs-title class_">Sha256</span>(<span class="hljs-title function_">sha256</span>(<span class="hljs-title function_">utf8ToByteString</span>(<span class="hljs-string">"hello"</span>)))

<span class="hljs-comment">// Will fail as passed data is not a SHA256 hash:</span>
<span class="hljs-comment">//let h2 = Sha256(utf8ToByteString(&#x27;ffaabb&#x27;))</span>
</code></pre>
`

export default html
