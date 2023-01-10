// metadata
export const version = "0.1.0"
export const title = "Bitwise Operators"
export const description = "Bitwise operators in scryptTS"
export const replitLink = ""

const html = `<p>TypeScript&#39;s bitwise operator cannot be used in scryptTS. But you can use the bitwise built-in function provided by scryptTS.</p>
<table>
<thead>
<tr>
<th align="left">Operator</th>
<th align="center">Description</th>
<th align="center">built-in function</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><code>&amp;</code></td>
<td align="center">Bitwise AND</td>
<td align="center"><code>and(x,y)</code></td>
</tr>
<tr>
<td align="left"><code> &#124; </code></td>
<td align="center">Bitwise OR</td>
<td align="center"><code>or(x,y)</code></td>
</tr>
<tr>
<td align="left"><code>^</code></td>
<td align="center">Bitwise XOR</td>
<td align="center"><code>xor(x,y)</code></td>
</tr>
<tr>
<td align="left"><code>~</code></td>
<td align="center">Bitwise NOT</td>
<td align="center"><code>invert(x,y)</code></td>
</tr>
<tr>
<td align="left"><code>&lt;&lt;</code></td>
<td align="center">Left shift</td>
<td align="center"><code>lshift(x,y)</code></td>
</tr>
<tr>
<td align="left"><code>&gt;&gt;</code></td>
<td align="center">Sign-propagating right shift</td>
<td align="center"><code>rshift(x,y)</code></td>
</tr>
</tbody></table>
`

export default html
