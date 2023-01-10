// metadata
export const version = "0.1.0"
export const title = "Domain Types"
export const description = "Domain types in scryptTS"
export const replitLink = ""

const html = `<p>There are several domain types, specific to the Bitcoin context, used to further improve type safety.</p>
<ul>
<li><p><code>PubKey</code> - a public key</p>
</li>
<li><p><code>PrivKey</code> - a private key</p>
</li>
<li><p><code>Sig</code> - a signature type in DER format, including signature hash</p>
</li>
<li><p><code>Ripemd160</code> - a RIPEMD-160 hash</p>
</li>
<li><p><code>PubKeyHash</code> - an alias for <code>Ripemd160</code>, usually representing a bitcoin address.</p>
</li>
<li><p><code>Sha1</code> - a SHA-1 hash</p>
</li>
<li><p><code>Sha256</code> - a SHA-256 hash</p>
</li>
<li><p><code>SigHashType</code> - a sighash</p>
</li>
<li><p><code>SigHashPreimage</code> - a sighash preimage</p>
</li>
<li><p><code>OpCodeType</code> - an OpCode</p>
</li>
</ul>
<p>Additionally, libraries derived from <code>SmartContract</code> can be imported as dependencies and reused by other <code>SmartContract</code>s.</p>
`

export default html
