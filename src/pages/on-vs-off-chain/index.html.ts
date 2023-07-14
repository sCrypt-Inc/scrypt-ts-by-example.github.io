// metadata
export const version = "0.1.0"
export const title = "On-Chain vs Off-Chain Types"
export const description = "The difference between on-chain and off-chain types in sCrypt"
export const replitLink = ""

const html = `<p>It is important to distinguish between on-chain and off-chain types. Off-chain types cannot be used inside a smart contract.</p>
<p>A typical example are <code>PubKey</code> and <code>bsv.PublicKey</code>. While the first one is simply a wrapper of <code>ByteString</code> and thus can be used in a contract
On the other hand, the second is a more complex type, that has many functions for things such as the serialization to a WIF format and so on, which can be utilized off-chain.</p>
<table>
<thead>
<tr>
<th>Off-Chain</th>
<th>On-Chain</th>
</tr>
</thead>
<tbody><tr>
<td><code>bsv.PublicKey</code></td>
<td><code>PubKey</code></td>
</tr>
<tr>
<td><code>bsv.PrivateKey</code></td>
<td><code>PrivKey</code></td>
</tr>
<tr>
<td><code>bsv.Address</code></td>
<td><code>PubKeyHash</code> or <code>Ripemd160</code></td>
</tr>
<tr>
<td><code>bsv.crypto.Signature</code></td>
<td><code>Sig</code></td>
</tr>
<tr>
<td><code>bsv.crypto.Signature.ALL</code></td>
<td><code>SignatureHashType.ALL</code></td>
</tr>
</tbody></table>
`

export default html
