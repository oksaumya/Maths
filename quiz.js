// Formula sheet content
window.FORMULAS = `
<h3 style="color:var(--accent2);margin-bottom:20px">📋 Quick Reference Formula Sheet</h3>

<h4 style="color:var(--accent3);margin:16px 0 8px">Logic</h4>
<table class="truth-table">
<tr><th>Law</th><th>Formula</th></tr>
<tr><td>De Morgan's</td><td>¬(p∧q) ≡ ¬p∨¬q &nbsp;|&nbsp; ¬(p∨q) ≡ ¬p∧¬q</td></tr>
<tr><td>Implication</td><td>p→q ≡ ¬p∨q</td></tr>
<tr><td>Contrapositive</td><td>p→q ≡ ¬q→¬p</td></tr>
<tr><td>Quantifier Negation</td><td>¬∀x P(x) ≡ ∃x ¬P(x) &nbsp;|&nbsp; ¬∃x P(x) ≡ ∀x ¬P(x)</td></tr>
</table>

<h4 style="color:var(--accent3);margin:16px 0 8px">Proofs — Rules of Inference</h4>
<table class="truth-table">
<tr><th>Rule</th><th>From</th><th>Conclude</th></tr>
<tr><td>Modus Ponens</td><td>p→q, p</td><td>q</td></tr>
<tr><td>Modus Tollens</td><td>p→q, ¬q</td><td>¬p</td></tr>
<tr><td>Hypothetical Syllogism</td><td>p→q, q→r</td><td>p→r</td></tr>
<tr><td>Disjunctive Syllogism</td><td>p∨q, ¬p</td><td>q</td></tr>
</table>

<h4 style="color:var(--accent3);margin:16px 0 8px">Groups</h4>
<ul>
<li><b>Group axioms:</b> Closure, Associativity, Identity, Inverse</li>
<li><b>|U(n)| = φ(n)</b></li>
<li><b>Generators of ℤₙ:</b> elements coprime to n</li>
<li><b>Lagrange:</b> |H| divides |G|, ord(a) divides |G|</li>
<li><b>Fermat's Little:</b> aᵖ⁻¹ ≡ 1 (mod p) for prime p, gcd(a,p)=1</li>
<li><b>Euler's:</b> aᶠ⁽ⁿ⁾ ≡ 1 (mod n) for gcd(a,n)=1</li>
</ul>

<h4 style="color:var(--accent3);margin:16px 0 8px">Recurrences & Master Theorem</h4>
<ul>
<li><b>Characteristic eq:</b> aₙ = c₁aₙ₋₁+c₂aₙ₋₂ → r²-c₁r-c₂=0</li>
<li><b>Master Theorem</b> T(n)=aT(n/b)+Θ(nᶜ), x=log_b(a): Case 1 (c<x): Θ(nˣ), Case 2 (c=x): Θ(nᶜ log n), Case 3 (c>x): Θ(nᶜ)</li>
</ul>

<h4 style="color:var(--accent3);margin:16px 0 8px">Generating Functions</h4>
<ul>
<li>1/(1-x) = 1+x+x²+... &nbsp;|&nbsp; 1/(1-ax) = 1+ax+a²x²+...</li>
<li>1/(1-x)² = 1+2x+3x²+... &nbsp;|&nbsp; (1+x)ⁿ = Σ C(n,k)xᵏ</li>
</ul>

<h4 style="color:var(--accent3);margin:16px 0 8px">Graph Theory</h4>
<ul>
<li><b>Handshaking:</b> Σdeg(v) = 2|E|</li>
<li><b>Kₙ:</b> n(n-1)/2 edges, each degree n-1</li>
<li><b>Euler circuit:</b> connected + all even degrees</li>
<li><b>Euler path:</b> connected + exactly 2 odd-degree vertices</li>
<li><b>Bipartite ⟺ no odd cycles</li>
<li><b>Dirac's:</b> deg(v) ≥ n/2 for all v → Hamiltonian circuit</li>
</ul>
`;
