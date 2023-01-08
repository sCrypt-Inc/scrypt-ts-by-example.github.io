// metadata
export const version = "0.1.0"
export const title = "Basic Types"
export const description = "Basic types in scryptTS"
export const replitLink = ""

const html = `<p>The most basic types allowed are: <code>boolean</code> / <code>string</code> / <code>bigint</code>, along with their wrapper types <code>Boolean</code> / <code>String</code> / <code>Bigint</code>.</p>
<h4 id="bytestring-type"><code>ByteString</code> Type</h4>
<p>In a smart contract context (i.e., in <code>@method</code>s or <code>@prop</code>s), a <code>ByteString</code> type represents a byte array in hex format. It must be able be represented by the regular expression: <code>/^([0-9a-fA-F]{2})*$/</code>.</p>
<p>Literal <code>string</code> is not allowed to be used directly without being wrapped in these functions below:</p>
<ul>
<li><code>toByteString(input: string)</code>: return the raw value of <code>input</code> as a byte array while validating it as hex bytes.</li>
<li><code>utf8ToByteString(input: string)</code>: return a value in hex bytes format representing the utf8 encoding of <code>input</code>.</li>
</ul>
<p>For example:</p>
<pre><code class="language-js"><span class="hljs-keyword">let</span> s0 = <span class="hljs-title function_">utf8ToByteString</span>(<span class="hljs-string">"hello world"</span>) <span class="hljs-comment">// valid, s0 === "68656c6c6f20776f726c64"</span>

<span class="hljs-keyword">let</span> s1 = <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"01ab23ef"</span>) <span class="hljs-comment">// valid, s1 === &#x27;01ab23ef&#x27;</span>

<span class="hljs-keyword">let</span> invalid_str = <span class="hljs-string">"hello world"</span> <span class="hljs-comment">// invalid, string literal without wrapper function</span>

<span class="hljs-keyword">let</span> invalid_str2 = <span class="hljs-title function_">toByteString</span>(<span class="hljs-string">"012"</span>) <span class="hljs-comment">// invalid, odd number of hex characters</span>
</code></pre>
<p>Also there are only a few methods of <code>ByteString</code> can be used in <code>@method</code>s:</p>
<ul>
<li><p><code>ByteString.==</code> / <code>ByteString.===</code>: compare two strings, like <code>str1 == str2</code> or <code>str1 === str2</code>.</p>
</li>
<li><p><code>ByteString.+</code>: concat two strings, like <code>str1 + str2</code>.</p>
</li>
<li><p><code>ByteString.slice(indexStart, indexEnd?)</code>: return a substring like <code>str.slice(0, 2)</code>. Since <code>ByteString</code> is a byte array, <code>indexStart</code> and <code>indexEnd</code> must be even numbers.</p>
</li>
</ul>
<h4 id="number-type"><code>number</code> Type</h4>
<p>By default, type <code>number</code> is not allowed in <code>@prop</code>s and <code>@method</code>s because it may cause precision issues when representing a floating point number. There are a few exceptions:</p>
<ul>
<li><a href="#compile-time-constant">A compile-time constant</a></li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">const</span> <span class="hljs-attr">N</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">2</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">arr</span>: <span class="hljs-title class_">FixedArray</span>&lt;<span class="hljs-built_in">bigint</span>, N&gt; = [<span class="hljs-number">1n</span>, <span class="hljs-number">2n</span>]
</code></pre>
<ul>
<li>An array index</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">idx</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">3</span>
<span class="hljs-keyword">let</span> item = arr[idx]
</code></pre>
<ul>
<li>An induction variable in <code>for</code> statement</li>
</ul>
<pre><code class="language-ts"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> <span class="hljs-attr">i</span>: <span class="hljs-built_in">number</span> =<span class="hljs-number">0</span>; i &lt; <span class="hljs-number">5</span>; i++) …
</code></pre>
`

export default html
