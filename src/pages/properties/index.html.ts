// metadata
export const version = "0.1.0"
export const title = "Properties"
export const description = "Smart contract properties in scryptTS"
export const replitLink = ""

const html = `<p>A smart contract can have two kinds of properties:</p>
<ol>
<li><p>Properties with <code>@prop</code> decorator. These properties are <strong>only allowed to have <a href="#Types">types</a> specified below</strong> and they shall only be initialized in the constructor.</p>
</li>
<li><p>Properties without <code>@prop</code> decorator. These properties are normal TypeScript class properties without any special requirement.</p>
</li>
</ol>
<h3 id="propstateful-boolean--false-decorator"><code>@prop(stateful: boolean = false)</code> decorator</h3>
<p>Use this decorator to mark any property that intends to be stored on chain.</p>
<p>This decorator takes a <code>boolean</code> parameter. By default, it is set to <code>false</code>, meaning the property cannot be changed after the contract is deployed. If the value is <code>true</code>, the property is a so-called <code>stateful</code> property and its value can be updated in subsequent contract calls.</p>
`

export default html
