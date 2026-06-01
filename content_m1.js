window.MODULES = window.MODULES || [];
window.MODULES.push({
  icon:'🔮', title:'Logic & Applications', desc:'Propositional logic, predicates, quantifiers, and Boolean algebra.',
  topics:[
    {title:'1.1 Propositional Logic',
     content:`<div class="box box-def"><span class="box-label">Definition</span>A <b>proposition</b> is a declarative statement that is either TRUE (T) or FALSE (F), never both.</div>
<p><b>Examples:</b> "2 + 2 = 4" ✅ (TRUE proposition) &nbsp;|&nbsp; "Is it raining?" ❌ (not a proposition — it's a question)</p>

<div class="box box-thm"><span class="box-label">Logical Connectives</span>
<ul>
<li><b>Negation ¬p:</b> "not p" — flips truth value</li>
<li><b>Conjunction p ∧ q:</b> "p and q" — true only when BOTH are true</li>
<li><b>Disjunction p ∨ q:</b> "p or q" — true when AT LEAST ONE is true</li>
<li><b>Implication p → q:</b> "if p then q" — false ONLY when p is true and q is false</li>
<li><b>Biconditional p ↔ q:</b> "p if and only if q" — true when both have SAME truth value</li>
</ul></div>

<div class="box box-warn"><span class="box-label">⚠️ Common Trap</span>
<b>p → q is TRUE when p is FALSE</b>, regardless of q! This is the #1 mistake. Think: "a false promise is not a lie."<br>
<b>Only FALSE case:</b> T → F = F. All others (T→T, F→T, F→F) are TRUE.</div>

<table class="truth-table"><tr><th>p</th><th>q</th><th>¬p</th><th>p∧q</th><th>p∨q</th><th>p→q</th><th>p↔q</th></tr>
<tr><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
<tr><td>T</td><td>F</td><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td></tr>
<tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>F</td></tr>
<tr><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr></table>

<div class="box box-thm"><span class="box-label">Key Equivalences (Memorize These!)</span>
<ul>
<li><b>Contrapositive:</b> p → q ≡ ¬q → ¬p (ALWAYS equivalent)</li>
<li><b>Converse:</b> q → p (NOT equivalent to p → q)</li>
<li><b>Inverse:</b> ¬p → ¬q (NOT equivalent to p → q)</li>
<li><b>De Morgan's:</b> ¬(p ∧ q) ≡ ¬p ∨ ¬q &nbsp;&nbsp;|&nbsp;&nbsp; ¬(p ∨ q) ≡ ¬p ∧ ¬q</li>
<li><b>Implication:</b> p → q ≡ ¬p ∨ q</li>
<li><b>Tautology:</b> always true (e.g., p ∨ ¬p)</li>
<li><b>Contradiction:</b> always false (e.g., p ∧ ¬p)</li>
</ul></div>

<div class="box box-ex"><span class="box-label">Worked Example</span>
<p><b>Q:</b> What is the truth value of (p → q) ∧ (q → r) when p=T, q=F, r=T?</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">p → q = T → F = <b>F</b></div>
<div class="step">q → r = F → T = <b>T</b> (remember: F → anything = T)</div>
<div class="step">F ∧ T = <b>F</b></div>
</div>
<p><b>Answer: FALSE</b></p>
</div></div></div>`,
     quiz:{q:'What is the truth value of p → q when p is FALSE and q is FALSE?',
           opts:['TRUE','FALSE','Undefined','Cannot determine'], ans:0}
    },

    {title:'1.2 Predicate Logic & Quantifiers',
     content:`<div class="box box-def"><span class="box-label">Definition</span>A <b>predicate</b> is a statement with variables that becomes a proposition when you substitute specific values. Example: P(x) = "x > 5".</div>

<div class="box box-thm"><span class="box-label">Quantifiers</span>
<ul>
<li><b>Universal ∀x P(x):</b> "For ALL x, P(x) is true" — ONE counterexample makes it FALSE</li>
<li><b>Existential ∃x P(x):</b> "There EXISTS at least one x where P(x) is true" — ONE example makes it TRUE</li>
</ul></div>

<div class="box box-warn"><span class="box-label">⚠️ Negation Rules (Exam Favorite!)</span>
<ul>
<li><b>¬(∀x P(x)) ≡ ∃x ¬P(x)</b> — "not everything is P" = "something is not P"</li>
<li><b>¬(∃x P(x)) ≡ ∀x ¬P(x)</b> — "nothing is P" = "everything is not P"</li>
</ul>
<p>Just flip the quantifier and negate the predicate!</p></div>

<div class="box box-thm"><span class="box-label">Nested Quantifiers</span>
<p><b>Order matters!</b></p>
<ul>
<li><b>∀x ∃y P(x,y):</b> "For every x, there is some y..." (y can depend on x)</li>
<li><b>∃y ∀x P(x,y):</b> "There is one y that works for ALL x..." (much stronger!)</li>
</ul>
<p><b>Example:</b> ∀x ∃y (x+y=0) is TRUE over integers (y = -x). But ∃y ∀x (x+y=0) is FALSE (no single y works for all x).</p></div>

<div class="box box-ex"><span class="box-label">Worked Example</span>
<p><b>Q:</b> Negate: "Every student has submitted at least one assignment."</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<p>Formal: ∀s ∃a Submitted(s,a)</p>
<p>Negation: ¬(∀s ∃a Submitted(s,a)) ≡ ∃s ∀a ¬Submitted(s,a)</p>
<p><b>English: "There exists a student who has not submitted any assignment."</b></p>
</div></div></div>`,
     quiz:{q:'What is the negation of ∃x P(x)?',
           opts:['∃x ¬P(x)','∀x ¬P(x)','¬∃x ¬P(x)','∀x P(x)'], ans:1}
    },

    {title:'1.3 Boolean Algebra',
     content:`<div class="box box-def"><span class="box-label">Definition</span><b>Boolean Algebra</b> uses binary values (0 and 1) with operations AND (·), OR (+), and NOT (‾). It's the math behind digital circuits.</div>

<div class="box box-thm"><span class="box-label">Core Laws</span>
<table class="truth-table">
<tr><th>Law</th><th>AND form</th><th>OR form</th></tr>
<tr><td>Identity</td><td>x · 1 = x</td><td>x + 0 = x</td></tr>
<tr><td>Domination</td><td>x · 0 = 0</td><td>x + 1 = 1</td></tr>
<tr><td>Idempotent</td><td>x · x = x</td><td>x + x = x</td></tr>
<tr><td>Complement</td><td>x · x̄ = 0</td><td>x + x̄ = 1</td></tr>
<tr><td>De Morgan</td><td>(x·y)̄ = x̄+ȳ</td><td>(x+y)̄ = x̄·ȳ</td></tr>
<tr><td>Distributive</td><td>x·(y+z)=x·y+x·z</td><td>x+(y·z)=(x+y)·(x+z)</td></tr>
<tr><td>Absorption</td><td>x·(x+y)=x</td><td>x+(x·y)=x</td></tr>
</table></div>

<div class="box box-tip"><span class="box-label">💡 Exam Strategy</span>
<p>To simplify Boolean expressions: (1) Apply De Morgan's to break up complements, (2) Distribute, (3) Look for x + x̄ = 1 or x · x̄ = 0, (4) Use absorption to clean up.</p></div>

<div class="box box-ex"><span class="box-label">Worked Example</span>
<p><b>Simplify:</b> (A + B)(A + B̄)</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">Distribute: A·A + A·B̄ + B·A + B·B̄</div>
<div class="step">Simplify: A + AB̄ + AB + 0 (since B·B̄=0, A·A=A)</div>
<div class="step">Factor: A(1 + B̄ + B) = A · 1 = <b>A</b></div>
</div></div></div></div>`,
     quiz:{q:'What is x + x̄ in Boolean algebra?',
           opts:['0','x','1','x̄'], ans:2}
    }
  ]
});
