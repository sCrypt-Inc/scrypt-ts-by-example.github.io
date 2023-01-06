// metadata
export const version = "0.1.0"
export const title = "Functions"
export const description = "Functions in scryptTS"
export const replitLink = ""

const html = `<p><strong>scryptTS</strong> is a subset of TypeScript. Only the following TypeScript operators can be used directly.</p>
<table>
<thead>
<tr>
<th align="left">Operator</th>
<th align="center">Description</th>
<th align="center">Example</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><code>+</code></td>
<td align="center">Addition</td>
<td align="center"><code>x + y</code></td>
</tr>
<tr>
<td align="left"><code>-</code></td>
<td align="center">Subtraction</td>
<td align="center"><code>x - y</code></td>
</tr>
<tr>
<td align="left"><code>*</code></td>
<td align="center">Multiplication</td>
<td align="center"><code>x * y</code></td>
</tr>
<tr>
<td align="left"><code>/</code></td>
<td align="center">Division</td>
<td align="center"><code>x / y</code></td>
</tr>
<tr>
<td align="left"><code>%</code></td>
<td align="center">Remainder</td>
<td align="center"><code>x % y</code></td>
</tr>
<tr>
<td align="left"><code>++</code></td>
<td align="center">Increment (increments by 1)</td>
<td align="center"><code>++x</code> or <code>x++</code></td>
</tr>
<tr>
<td align="left"><code>--</code></td>
<td align="center">Decrement (decrements by 1)</td>
<td align="center"><code>--x</code> or <code>x--</code></td>
</tr>
<tr>
<td align="left"><code>==</code></td>
<td align="center">Equal to: returns <code>true</code> if the operands are equal</td>
<td align="center"><code>x == y</code></td>
</tr>
<tr>
<td align="left"><code>!=</code></td>
<td align="center">Not equal to: returns <code>true</code> if the operands are not equal</td>
<td align="center"><code>x != y</code></td>
</tr>
<tr>
<td align="left"><code>===</code></td>
<td align="center">Same as <code>==</code> in <strong>scryptTS</strong></td>
<td align="center"><code>x === y</code></td>
</tr>
<tr>
<td align="left"><code>!==</code></td>
<td align="center">Same as <code>!=</code> in <strong>scryptTS</strong></td>
<td align="center"><code>x !== y</code></td>
</tr>
<tr>
<td align="left"><code>&gt;</code></td>
<td align="center">Greater than: <code>true</code> if left operand is greater than the right operand</td>
<td align="center"><code>x &gt; y</code></td>
</tr>
<tr>
<td align="left"><code>&gt;=</code></td>
<td align="center">Greater than or equal to: <code>true</code> if left operand is greater than or equal to the right operand</td>
<td align="center"><code>x &gt;= y</code></td>
</tr>
<tr>
<td align="left"><code>&lt;</code></td>
<td align="center">Less than: <code>true</code> if the left operand is less than the right operand</td>
<td align="center"><code>x &lt; y</code></td>
</tr>
<tr>
<td align="left"><code>&lt;=</code></td>
<td align="center">Less than or equal to: <code>true</code> if the left operand is less than or equal to the right operand</td>
<td align="center"><code>x &lt;= y</code></td>
</tr>
<tr>
<td align="left"><code>&amp;&amp;</code></td>
<td align="center">Logical AND: <code>true</code> if both the operands are <code>true</code>, else returns <code>false</code></td>
<td align="center"><code>x &amp;&amp; y</code></td>
</tr>
<tr>
<td align="left"><code>&#124;&#124;</code></td>
<td align="center">Logical OR: <code>true</code> if either of the operands is <code>true</code>; returns <code>false</code> if both are <code>false</code></td>
<td align="center"><code>x &#124;&#124; y</code></td>
</tr>
<tr>
<td align="left"><code>!</code></td>
<td align="center">Logical NOT: <code>true</code> if the operand is <code>false</code> and vice-versa.</td>
<td align="center"><code>!x</code></td>
</tr>
<tr>
<td align="left"><code>condition ? expression : expression </code></td>
<td align="center">returns value based on the condition</td>
<td align="center"><code>(5 &gt; 3) ? &#39;success&#39; : &#39;error&#39;; // "success"</code></td>
</tr>
</tbody></table>
<p>Note <code>**</code> is not supported currently.</p>
<h3 id="bitwise-operators">Bitwise Operators</h3>
<p>TypeScript&#39;s bitwise operator cannot be used in scryptTS. But you can use the bitwise built-in function provided by scryptTS.</p>
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
<p>The number in the Bitcoin virtual machine is saved in the <a href="https://en.wikipedia.org/wiki/Signed_number_representations">Sign–magnitude format</a> in stack, not the <a href="https://en.wikipedia.org/wiki/Signed_number_representations">two&#39;s complement format</a> commonly used by computers. If the operands participating in the operation are all positive numbers, the result of the operation is consistent with TypeScript&#39;s bitwise operator. (except <code>~</code>). Otherwise, the operation results may be inconsistent.</p>
`

export default html
