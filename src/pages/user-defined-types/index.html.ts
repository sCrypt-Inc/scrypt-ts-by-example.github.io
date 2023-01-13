// metadata
export const version = "0.1.0"
export const title = "User-defined Types"
export const description = "User-defined types in scryptTS"
export const replitLink = ""

const html = `<p>Users can be define customized types using <code>type</code> or <code>interface</code>, made of basic types.</p>
<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-variable constant_">ST</span> = {
  <span class="hljs-attr">a</span>: <span class="hljs-built_in">bigint</span>
  <span class="hljs-attr">b</span>: <span class="hljs-built_in">boolean</span>
}

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">ST1</span> {
  <span class="hljs-attr">x</span>: <span class="hljs-variable constant_">ST</span>
  <span class="hljs-attr">y</span>: <span class="hljs-title class_">ByteString</span>
}
</code></pre>
`

export default html
