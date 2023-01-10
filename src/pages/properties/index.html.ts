// metadata
export const version = "0.1.0"
export const title = "Properties"
export const description = "Smart contract properties in scryptTS"
export const replitLink = ""

const html = `<p>Mark smart contract properties with the <code>@prop</code> decorator to store the value on chain.</p>
<p>This decorator takes a <code>boolean</code> parameter. By default, it is set to <code>false</code>, meaning the property cannot be changed after the contract is deployed. If the value is <code>true</code>, the property is a so-called <code>stateful</code> property and its value can be updated in subsequent contract calls.</p>
`

export default html
