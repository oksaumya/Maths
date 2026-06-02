window.MODULES = window.MODULES || [];
window.MODULES.push({
  icon:'🔢', title:'Set Theory', desc:"Russell's Paradox, countability, uncountability, and computability.",
  topics:[
    {title:"3.1 Russell's Paradox",
     content:`<div class="box box-def"><span class="box-label">The Paradox</span>
<p>Consider S = {x : x ∉ x} — the set of all sets that don't contain themselves.</p>
<p><b>Is S ∈ S?</b></p>
<ul>
<li>If S ∈ S, then by definition S ∉ S — contradiction!</li>
<li>If S ∉ S, then by definition S ∈ S — contradiction!</li>
</ul>
<p>This shows <b>naive set theory is inconsistent</b>. We need axioms (like ZFC) to avoid such paradoxes.</p></div>

<div class="box box-tip"><span class="box-label">💡 Why It Matters</span>
<p>Russell's Paradox forced mathematicians to be precise about what constitutes a "set." In modern math, we use <b>ZFC axioms</b> where you can't just form any set — you can only form subsets of existing sets (Axiom of Specification).</p></div>`,
     quiz:{q:"Russell's Paradox shows that:", opts:['All sets are finite','Naive set theory leads to contradictions','Every set contains itself','The empty set does not exist'], ans:1}
    },

    {title:'3.2 Countability',
     content:`<div class="box box-def"><span class="box-label">Definition</span>
<p>A set is <b>countable</b> if its elements can be put in a one-to-one correspondence (bijection) with the natural numbers ℕ = {0,1,2,...}, or it is finite.</p>
<p>Equivalently: you can <b>list all elements</b> as a sequence: a₀, a₁, a₂, ...</p></div>

<div class="box box-thm"><span class="box-label">Key Countable Sets</span>
<ul>
<li><b>ℕ</b> (natural numbers) — countable by definition</li>
<li><b>ℤ</b> (integers) — list as: 0, 1, -1, 2, -2, 3, -3, ...</li>
<li><b>ℚ</b> (rationals) — use <b>Cantor's diagonal zigzag</b> on a grid of p/q</li>
<li><b>ℕ × ℕ</b> — countable (zigzag/dovetail enumeration)</li>
<li>Countable union of countable sets is countable</li>
</ul></div>

<div class="box box-ex"><span class="box-label">Proving ℤ is Countable</span>
<p>Define f: ℕ → ℤ as: f(0)=0, f(1)=1, f(2)=-1, f(3)=2, f(4)=-2, ...</p>
<p>Formula: f(n) = n/2 if n even, -(n+1)/2 if n odd. This is a bijection! ✓</p></div>`,
     quiz:{q:'Which of these sets is countable?', opts:['The real numbers ℝ','The set of all functions from ℕ to ℕ','The rational numbers ℚ','The power set of ℕ'], ans:2}
    },

    {title:'3.3 Uncountability',
     content:`<div class="box box-thm"><span class="box-label">Cantor\'s Diagonalization Theorem</span>
<p><b>The real numbers ℝ are uncountable.</b></p></div>

<div class="box box-ex"><span class="box-label">Proof (Diagonalization)</span>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Proof</button><div class="spoiler-content">
<div class="steps">
<div class="step">Assume (for contradiction) that ℝ (or just [0,1]) is countable. Then we can list all reals: r₁ = 0.d₁₁d₁₂d₁₃..., r₂ = 0.d₂₁d₂₂d₂₃..., etc.</div>
<div class="step">Construct a new number x = 0.x₁x₂x₃... where xₙ ≠ dₙₙ (the diagonal digit). For example, if dₙₙ = 5, pick xₙ = 6.</div>
<div class="step">This x differs from rₙ in the n-th digit, so x ≠ rₙ for ALL n.</div>
<div class="step">But x ∈ [0,1] and is NOT in our list — contradiction! ✓</div>
</div></div></div></div>

<div class="box box-thm"><span class="box-label">Other Uncountable Sets</span>
<ul>
<li><b>ℝ</b> — the reals</li>
<li><b>P(ℕ)</b> — power set of naturals (Cantor's theorem: |S| < |P(S)| always)</li>
<li><b>Set of all functions ℕ → {0,1}</b> — same cardinality as P(ℕ)</li>
<li><b>(0,1)</b> — the open interval has same cardinality as ℝ</li>
</ul></div>`,
     quiz:{q:"Cantor's diagonalization proves:", opts:['ℚ is uncountable','ℝ is countable','ℝ is uncountable','ℕ is uncountable'], ans:2}
    },

    {title:'3.4 Applications in Computability & Automata',
     content:`<div class="box box-thm"><span class="box-label">Key Result</span>
<p><b>There exist problems that NO computer can ever solve!</b></p>
<ul>
<li>The set of all programs/Turing machines is <b>countable</b> (they're finite strings)</li>
<li>The set of all possible problems (functions ℕ → {0,1}) is <b>uncountable</b></li>
<li>Since countable < uncountable, most problems are <b>undecidable</b></li>
</ul></div>

<div class="box box-ex"><span class="box-label">Famous Undecidable Problem</span>
<p><b>The Halting Problem:</b> No program can determine, for ALL programs P and inputs I, whether P halts on I.</p>
<p><b>Proof sketch:</b> Assume such a program H exists. Build program D that does the opposite of what H predicts. D on itself creates a contradiction (like Russell's Paradox for programs!).</p></div>

<div class="box box-tip"><span class="box-label">💡 Connection to Automata</span>
<p>The languages recognized by different automata form a hierarchy. Countability arguments show:</p>
<ul>
<li>Regular languages (DFA/NFA) are countable</li>
<li>All languages over an alphabet are uncountable</li>
<li>So most languages are NOT regular, NOT context-free, NOT even decidable!</li>
</ul></div>`,
     quiz:{q:'Why do undecidable problems exist?', opts:['Computers are too slow','There are more problems than programs','We haven\'t found the right algorithm yet','Memory is limited'], ans:1}
    }
  ]
});
