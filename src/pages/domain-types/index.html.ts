// metadata
export const version = "0.1.0"
export const title = "Domain Types"
export const description = "Domain types in scryptTS"
export const replitLink = ""

const html = `<p>There are several domain types, specific to the Bitcoin context, used to further improve type safety.</p>
<ul>
<li><p><a href="../reference/classes/PubKey.md">PubKey</a> - a public key</p>
</li>
<li><p><a href="../reference/classes/PrivKey.md">PrivKey</a> - a private key</p>
</li>
<li><p><a href="../reference/classes/Sig.md">Sig</a> - a signature type in DER format, including signature hash</p>
</li>
<li><p><a href="../reference/classes/Ripemd160.md">Ripemd160</a> - a RIPEMD-160 hash</p>
</li>
<li><p><a href="../reference/classes/PubKeyHash.md">PubKeyHash</a> - an alias for <code>Ripemd160</code>, usually representing a bitcoin address.</p>
</li>
<li><p><a href="../reference/classes/Sha1.md">Sha1</a> - a SHA-1 hash</p>
</li>
<li><p><a href="../reference/classes/Sha256.md">Sha256</a> - a SHA-256 hash</p>
</li>
<li><p><a href="../reference/classes/SigHashType.md">SigHashType</a> - a sighash</p>
</li>
<li><p><a href="../reference/classes/SigHashPreimage.md">SigHashPreimage</a> - a sighash preimage</p>
</li>
<li><p><a href="../reference/classes/OpCodeType.md">OpCodeType</a> - an OpCode</p>
</li>
</ul>
<h3 id="smartcontract-subclasses-types"><code>SmartContract</code> subclasses Types</h3>
<p>Libraries derived from <code>SmartContract</code> can be imported as dependencies and reused by other <code>SmartContract</code>s.</p>
`

export default html
