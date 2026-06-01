window.MODULES = window.MODULES || [];
window.MODULES.push({
  icon:'📐', title:'Proofs', desc:'Proof techniques, rules of inference, program correctness.',
  topics:[
    {title:'2.1 Definition of Proofs & Axiomatic Systems',
     content:`<div class="box box-def"><span class="box-label">Definition</span>A <b>proof</b> is a valid argument that establishes the truth of a statement using a sequence of logical steps from axioms, definitions, and previously proven theorems.</div>
<div class="box box-thm"><span class="box-label">Axiomatic System</span>
<ul>
<li><b>Axioms:</b> Statements accepted as true without proof (starting points)</li>
<li><b>Definitions:</b> Precise meanings of terms</li>
<li><b>Theorems:</b> Statements proven from axioms using rules of inference</li>
<li><b>Lemma:</b> A "helper" theorem used to prove a bigger result</li>
<li><b>Corollary:</b> A result that follows easily from a theorem</li>
</ul></div>`,
     quiz:{q:'What is an axiom?', opts:['A proven theorem','A statement accepted without proof','A counterexample','A definition'], ans:1}
    },

    {title:'2.2 Rules of Inference',
     content:`<div class="box box-thm"><span class="box-label">Key Rules of Inference (Memorize!)</span>
<table class="truth-table">
<tr><th>Rule</th><th>Pattern</th><th>Conclusion</th></tr>
<tr><td><b>Modus Ponens</b></td><td>p → q, p</td><td>∴ q</td></tr>
<tr><td><b>Modus Tollens</b></td><td>p → q, ¬q</td><td>∴ ¬p</td></tr>
<tr><td><b>Hypothetical Syllogism</b></td><td>p → q, q → r</td><td>∴ p → r</td></tr>
<tr><td><b>Disjunctive Syllogism</b></td><td>p ∨ q, ¬p</td><td>∴ q</td></tr>
<tr><td><b>Addition</b></td><td>p</td><td>∴ p ∨ q</td></tr>
<tr><td><b>Simplification</b></td><td>p ∧ q</td><td>∴ p</td></tr>
<tr><td><b>Conjunction</b></td><td>p, q</td><td>∴ p ∧ q</td></tr>
<tr><td><b>Resolution</b></td><td>p ∨ q, ¬p ∨ r</td><td>∴ q ∨ r</td></tr>
</table></div>
<div class="box box-warn"><span class="box-label">⚠️ Common Mistakes</span>
<ul>
<li><b>Affirming the consequent (INVALID):</b> p→q, q ∴ p ← WRONG!</li>
<li><b>Denying the antecedent (INVALID):</b> p→q, ¬p ∴ ¬q ← WRONG!</li>
</ul></div>
<div class="box box-ex"><span class="box-label">Worked Example</span>
<p><b>Q:</b> "If it rains, roads are wet. Roads are not wet. What can we conclude?"</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">p → q (If rain → wet roads)</div>
<div class="step">¬q (roads NOT wet)</div>
<div class="step">By <b>Modus Tollens</b>: ¬p (it did NOT rain) ✓</div>
</div></div></div></div>`,
     quiz:{q:'p → q and ¬q are given. By which rule do we conclude ¬p?',
           opts:['Modus Ponens','Modus Tollens','Hypothetical Syllogism','Disjunctive Syllogism'], ans:1}
    },

    {title:'2.3 Types of Proofs',
     content:`<div class="box box-thm"><span class="box-label">Proof Techniques</span>
<ul>
<li><b>Direct Proof:</b> Assume p is true, use logical steps to show q is true. (To prove p → q)</li>
<li><b>Proof by Contrapositive:</b> Prove ¬q → ¬p instead (equivalent to p → q!)</li>
<li><b>Proof by Contradiction:</b> Assume ¬p, derive a contradiction → p must be true</li>
<li><b>Proof by Cases:</b> Break into exhaustive cases, prove each separately</li>
<li><b>Mathematical Induction:</b> Prove base case, then prove if true for k → true for k+1</li>
<li><b>Proof by Counterexample:</b> Find ONE example where statement fails (to disprove)</li>
</ul></div>

<div class="box box-ex"><span class="box-label">Example: Direct Proof</span>
<p><b>Prove:</b> If n is odd, then n² is odd.</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">Assume n is odd, so n = 2k + 1 for some integer k</div>
<div class="step">n² = (2k+1)² = 4k² + 4k + 1 = 2(2k²+2k) + 1</div>
<div class="step">This is of the form 2m + 1, so n² is odd ✓</div>
</div></div></div></div>

<div class="box box-ex"><span class="box-label">Example: Proof by Contradiction</span>
<p><b>Prove:</b> √2 is irrational.</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">Assume √2 = a/b where a,b are integers with no common factors</div>
<div class="step">Then 2 = a²/b², so a² = 2b²</div>
<div class="step">So a² is even → a is even → a = 2c for some integer c</div>
<div class="step">(2c)² = 2b² → 4c² = 2b² → b² = 2c² → b is even</div>
<div class="step">Both a and b are even — contradicts "no common factors"! ✓</div>
</div></div></div></div>

<div class="box box-ex"><span class="box-label">Example: Mathematical Induction</span>
<p><b>Prove:</b> 1 + 2 + ... + n = n(n+1)/2</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step"><b>Base case (n=1):</b> LHS = 1, RHS = 1(2)/2 = 1 ✓</div>
<div class="step"><b>Inductive hypothesis:</b> Assume true for n = k: 1+2+...+k = k(k+1)/2</div>
<div class="step"><b>Inductive step (n=k+1):</b> 1+2+...+k+(k+1) = k(k+1)/2 + (k+1)</div>
<div class="step">= (k+1)(k/2 + 1) = (k+1)(k+2)/2 ✓</div>
</div></div></div></div>`,
     quiz:{q:'To prove p → q by contrapositive, what do you actually prove?', opts:['¬p → ¬q','q → p','¬q → ¬p','p ∧ ¬q → contradiction'], ans:2}
    },

    {title:'2.4 Program Correctness & Loop Invariants',
     content:`<div class="box box-def"><span class="box-label">Definition</span>A program is <b>correct</b> if for all valid inputs, it produces the expected output. We use <b>Hoare Triples</b>: {P} S {Q} means "if precondition P is true before S executes, then postcondition Q is true after."</div>

<div class="box box-thm"><span class="box-label">Loop Invariant Method</span>
<p>A <b>loop invariant</b> is a property that is:</p>
<ol>
<li><b>Initialization:</b> True before the loop starts</li>
<li><b>Maintenance:</b> If true before an iteration, remains true after</li>
<li><b>Termination:</b> When the loop ends, the invariant + loop exit condition → desired result</li>
</ol></div>

<div class="box box-ex"><span class="box-label">Example: Loop Invariant</span>
<p><b>Program:</b> Compute sum = 1 + 2 + ... + n</p>
<div class="code-block">i = 1, sum = 0
while (i ≤ n):
    sum = sum + i
    i = i + 1</div>
<p><b>Loop invariant:</b> "sum = 1 + 2 + ... + (i-1) = (i-1)·i/2"</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Verification</button><div class="spoiler-content">
<div class="steps">
<div class="step"><b>Init:</b> Before loop: i=1, sum=0. sum = (1-1)·1/2 = 0 ✓</div>
<div class="step"><b>Maintenance:</b> If sum = (i-1)i/2, after iteration: sum' = sum + i = (i-1)i/2 + i = i(i+1)/2, and i' = i+1. So sum' = (i'-1)i'/2 ✓</div>
<div class="step"><b>Termination:</b> Loop ends when i = n+1. Invariant gives sum = n(n+1)/2 ✓</div>
</div></div></div></div>`,
     quiz:{q:'A loop invariant must be true at which point(s)?', opts:['Only at the start','Only at the end','Before each iteration and after the loop','Only during the first iteration'], ans:2}
    }
  ]
});
