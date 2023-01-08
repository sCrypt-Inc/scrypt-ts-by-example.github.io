// metadata
export const version = "0.1.0"
export const title = "Tic-Tac-Toe"
export const description = "Tic-Tac-Toe in scryptTS"
export const replitLink = ""

const html = `<p>To initiate a game, Alice and Bob each lock up X amount of bitcoins into a contract UTXO. They take turns to play the game by sending signed transactions interacting with the <a href="https://scrypt.io/scrypt-ts/tutorials/stateful-contract">stateful contract</a>. If one of them wins, the winner claims the 2X bitcoins. If there is a draw, they take back their bitcoins. </p>
<pre><code class="language-ts"><span class="hljs-keyword">class</span> <span class="hljs-title class_">TicTacToe</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">SmartContract</span> {
  
  <span class="hljs-comment">// Game params:</span>
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">TURNLEN</span> = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">BOARDLEN</span> = <span class="hljs-number">9</span>;
  
  <span class="hljs-comment">// Field flags:</span>
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">EMPTY</span> = <span class="hljs-number">0</span>;
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">ALICE</span> = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">BOB</span> = <span class="hljs-number">2</span>;

  <span class="hljs-comment">// Public keys:</span>
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">alice</span>: <span class="hljs-title class_">PubKey</span>;
  <span class="hljs-meta">@prop</span>()
  <span class="hljs-attr">bob</span>: <span class="hljs-title class_">PubKey</span>;
  
  <span class="hljs-comment">// Represents whether it is alice&#x27;s turn to play chess:</span>
  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">isAliceTurn</span>: <span class="hljs-built_in">boolean</span>;

  <span class="hljs-meta">@prop</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-attr">board</span>: <span class="hljs-built_in">bigint</span>[<span class="hljs-number">9</span>];

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">alice: PubKey, bob: PubKey</span>) {
    <span class="hljs-variable language_">super</span>(alice, bob);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> = alice;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span> = bob;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">isAliceTurn</span> = <span class="hljs-literal">true</span>;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">won</span>(<span class="hljs-attr">player</span>: <span class="hljs-built_in">bigint</span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">let</span> lines = [
      [<span class="hljs-number">0n</span>, <span class="hljs-number">1n</span>, <span class="hljs-number">2n</span>], [<span class="hljs-number">3n</span>, <span class="hljs-number">4n</span>, <span class="hljs-number">5n</span>], [<span class="hljs-number">6n</span>, <span class="hljs-number">7n</span>, <span class="hljs-number">8n</span>], 
      [<span class="hljs-number">0n</span>, <span class="hljs-number">3n</span>, <span class="hljs-number">6n</span>], [<span class="hljs-number">1n</span>, <span class="hljs-number">4n</span>, <span class="hljs-number">7n</span>], [<span class="hljs-number">2n</span>, <span class="hljs-number">5n</span>, <span class="hljs-number">8n</span>], 
      [<span class="hljs-number">0n</span>, <span class="hljs-number">4n</span>, <span class="hljs-number">8n</span>], [<span class="hljs-number">2n</span>, <span class="hljs-number">4n</span>, <span class="hljs-number">6n</span>]
      ];

    <span class="hljs-keyword">let</span> anyLine = <span class="hljs-literal">false</span>;
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">8</span>; i++) {
        <span class="hljs-keyword">let</span> line = <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = <span class="hljs-number">0</span>; j &lt; <span class="hljs-number">3</span>; j++) {
            line = line &amp;&amp; <span class="hljs-variable language_">this</span>.<span class="hljs-property">board</span>[lines[i][j]] == player;
        }
        anyLine = anyLine || line;
    }

    <span class="hljs-keyword">return</span> anyLine;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-title function_">full</span>(): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">let</span> full = <span class="hljs-literal">true</span>;

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-variable constant_">BOARDLEN</span>; i++) {
        full = full &amp;&amp; <span class="hljs-variable language_">this</span>.<span class="hljs-property">board</span>[i] != <span class="hljs-variable constant_">EMPTY</span>;
    }

    <span class="hljs-keyword">return</span> full;
  }

  <span class="hljs-meta">@method</span>()
  <span class="hljs-keyword">public</span> <span class="hljs-title function_">move</span>(<span class="hljs-params">n: <span class="hljs-built_in">bigint</span>, sig: Sig, amount: <span class="hljs-built_in">bigint</span></span>) {
    <span class="hljs-comment">// Check if selected field is within bounds.</span>
    <span class="hljs-title function_">assert</span>(n &gt;= <span class="hljs-number">0</span> &amp;&amp; n &lt; <span class="hljs-variable constant_">BOARDLEN</span>);
    
    <span class="hljs-comment">// Check that the selected field is not already filled.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">board</span>[n] == <span class="hljs-variable constant_">EMPTY</span>);
    
    <span class="hljs-keyword">let</span> player = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isAliceTurn</span> ? <span class="hljs-variable constant_">ALICE</span> : <span class="hljs-variable constant_">BOB</span>;
    <span class="hljs-keyword">let</span> playerPubKey = <span class="hljs-variable language_">this</span>.<span class="hljs-property">isAliceTurn</span> ? <span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span> : <span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span>;
    
    <span class="hljs-comment">// Check that this tx is signed be the correct player.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-title function_">checkSig</span>(sig, playerPubKey));
    
    <span class="hljs-comment">// Mark the move.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">board</span>[n] = player;
    
    <span class="hljs-comment">// Flip turn flag.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">isAliceTurn</span> = !<span class="hljs-variable language_">this</span>.<span class="hljs-property">isAliceTurn</span>;
    
    <span class="hljs-comment">// Check game state and construct output accordingly.</span>
    <span class="hljs-keyword">let</span> outputs = <span class="hljs-string">&#x27;&#x27;</span>;
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">won</span>(player)) {
      <span class="hljs-comment">// Winner takes all.</span>
      <span class="hljs-keyword">let</span> outputScript = <span class="hljs-title function_">buildPublicKeyHashScript</span>(<span class="hljs-title function_">hash160</span>(player));
      outputs = <span class="hljs-title function_">buildOutput</span>(outputScript, amount);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">full</span>()) {
      <span class="hljs-comment">// Split amount 50/50.</span>
      <span class="hljs-keyword">let</span> aliceScript = <span class="hljs-title function_">buildPublicKeyHashScript</span>(<span class="hljs-title function_">hash160</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">alice</span>));
      <span class="hljs-keyword">let</span> aliceOut = <span class="hljs-title function_">buildOutput</span>(aliceScript, amount);

      <span class="hljs-keyword">let</span> bobScript = <span class="hljs-title function_">buildPublicKeyHashScript</span>(<span class="hljs-title function_">hash160</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">bob</span>));
      <span class="hljs-keyword">let</span> bobOut = <span class="hljs-title function_">buildOutput</span>(bobScript, amount);
      
      outputs = aliceOut + bobOut;
    } <span class="hljs-keyword">else</span> {
      outputs = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">buildStateOutput</span>(amount);
    }
    
    <span class="hljs-comment">// Ensure the unlocking tx will actually contain</span>
    <span class="hljs-comment">// the correct output.</span>
    <span class="hljs-title function_">assert</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span>.<span class="hljs-property">hashOutputs</span> == <span class="hljs-title function_">hash256</span>(outputs));
  }

}
</code></pre>
`

export default html
