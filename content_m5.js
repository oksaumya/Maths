window.MODULES = window.MODULES || [];
window.MODULES.push({
  icon:'📊', title:'Advanced Counting', desc:'Recurrence relations, Master theorem, generating functions.',
  topics:[
    {title:'5.1 Recurrence Relations (Recursion)',
     content:`<div class="box box-def"><span class="box-label">Definition</span>
<p>A <b>recurrence relation</b> defines each term using previous terms. Example: aₙ = 3aₙ₋₁ + 2.</p></div>

<div class="box box-thm"><span class="box-label">Linear Homogeneous (Constant Coefficients)</span>
<p>Form: <b>aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ</b></p>
<p><b>Solution method:</b></p>
<ol>
<li>Write the <b>characteristic equation:</b> rᵏ - c₁rᵏ⁻¹ - c₂rᵏ⁻² - ... - cₖ = 0</li>
<li>Find roots r₁, r₂, ...</li>
<li>If roots are distinct: aₙ = A·r₁ⁿ + B·r₂ⁿ</li>
<li>If repeated root r: aₙ = (A + Bn)·rⁿ</li>
<li>Use initial conditions to find A, B</li>
</ol></div>

<div class="box box-ex"><span class="box-label">Example</span>
<p><b>Solve:</b> aₙ = 5aₙ₋₁ - 6aₙ₋₂, a₀=1, a₁=4</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">Characteristic equation: r² - 5r + 6 = 0 → (r-2)(r-3) = 0</div>
<div class="step">Roots: r₁ = 2, r₂ = 3. General solution: aₙ = A·2ⁿ + B·3ⁿ</div>
<div class="step">a₀ = 1: A + B = 1</div>
<div class="step">a₁ = 4: 2A + 3B = 4</div>
<div class="step">Solving: B = 2, A = -1. <b>Answer: aₙ = -2ⁿ + 2·3ⁿ</b></div>
</div></div></div></div>

<div class="box box-thm"><span class="box-label">Non-Homogeneous</span>
<p>Form: aₙ = c₁aₙ₋₁ + ... + f(n). Solution = homogeneous solution + particular solution.</p>
<p><b>Particular solution guesses:</b></p>
<ul>
<li>f(n) = constant → try p</li>
<li>f(n) = dⁿ → try A·dⁿ (or A·n·dⁿ if d is a root)</li>
<li>f(n) = polynomial degree k → try polynomial degree k</li>
</ul></div>`,
     quiz:{q:'The characteristic equation of aₙ = 4aₙ₋₁ - 4aₙ₋₂ is:', opts:['r² - 4r - 4 = 0','r² - 4r + 4 = 0','r² + 4r - 4 = 0','r² + 4r + 4 = 0'], ans:1}
    },

    {title:'5.2 Divide and Conquer Recurrences',
     content:`<div class="box box-def"><span class="box-label">General Form</span>
<p><b>T(n) = aT(n/b) + f(n)</b></p>
<ul>
<li>a = number of subproblems</li>
<li>n/b = size of each subproblem</li>
<li>f(n) = cost of dividing/combining</li>
</ul></div>
<div class="box box-ex"><span class="box-label">Common Examples</span>
<table class="truth-table">
<tr><th>Algorithm</th><th>Recurrence</th><th>Complexity</th></tr>
<tr><td>Binary Search</td><td>T(n) = T(n/2) + O(1)</td><td>O(log n)</td></tr>
<tr><td>Merge Sort</td><td>T(n) = 2T(n/2) + O(n)</td><td>O(n log n)</td></tr>
<tr><td>Strassen</td><td>T(n) = 7T(n/2) + O(n²)</td><td>O(n^2.81)</td></tr>
</table></div>`,
     quiz:{q:'Merge sort splits into how many subproblems of what size?', opts:['1 of n/2','2 of n/2','2 of n-1','4 of n/2'], ans:1}
    },

    {title:"5.3 Master's Theorem",
     content:`<div class="box box-thm"><span class="box-label">Master Theorem</span>
<p>For T(n) = aT(n/b) + Θ(nᶜ), let <b>x = log_b(a)</b>:</p>
<table class="truth-table">
<tr><th>Case</th><th>Condition</th><th>Result</th></tr>
<tr><td>1</td><td>c < x (recursion dominates)</td><td>T(n) = Θ(nˣ)</td></tr>
<tr><td>2</td><td>c = x (balanced)</td><td>T(n) = Θ(nᶜ log n)</td></tr>
<tr><td>3</td><td>c > x (work dominates)</td><td>T(n) = Θ(nᶜ)</td></tr>
</table></div>

<div class="box box-ex"><span class="box-label">Example</span>
<p><b>T(n) = 2T(n/2) + n:</b> a=2, b=2, c=1. x = log₂2 = 1. Since c = x → <b>Case 2: Θ(n log n)</b></p>
<p><b>T(n) = 4T(n/2) + n:</b> a=4, b=2, c=1. x = log₂4 = 2. Since c < x → <b>Case 1: Θ(n²)</b></p>
<p><b>T(n) = 3T(n/4) + n²:</b> a=3, b=4, c=2. x = log₄3 ≈ 0.79. Since c > x → <b>Case 3: Θ(n²)</b></p></div>`,
     quiz:{q:'For T(n) = 8T(n/2) + n², what is the solution?', opts:['Θ(n²)','Θ(n² log n)','Θ(n³)','Θ(n³ log n)'], ans:2}
    },

    {title:'5.4-5.5 Generating Functions',
     content:`<div class="box box-def"><span class="box-label">Definition</span>
<p>The <b>generating function</b> for sequence {a₀, a₁, a₂, ...} is:</p>
<p style="text-align:center;font-size:1.1em"><b>G(x) = a₀ + a₁x + a₂x² + a₃x³ + ...</b></p></div>

<div class="box box-thm"><span class="box-label">Key Generating Functions</span>
<table class="truth-table">
<tr><th>Sequence</th><th>G(x)</th></tr>
<tr><td>1, 1, 1, 1, ...</td><td>1/(1-x)</td></tr>
<tr><td>1, a, a², a³, ...</td><td>1/(1-ax)</td></tr>
<tr><td>1, 2, 3, 4, ...</td><td>1/(1-x)²</td></tr>
<tr><td>C(n,0), C(n,1), ..., C(n,n)</td><td>(1+x)ⁿ</td></tr>
<tr><td>0, 1, 2, 3, ...</td><td>x/(1-x)²</td></tr>
</table></div>

<div class="box box-thm"><span class="box-label">Operations on G.F.</span>
<ul>
<li><b>Shift right:</b> {0, a₀, a₁, ...} → x·G(x)</li>
<li><b>Shift left:</b> {a₁, a₂, ...} → (G(x) - a₀)/x</li>
<li><b>Scale:</b> {c·aₙ} → c·G(x)</li>
<li><b>Multiply by n:</b> {n·aₙ} → x·G'(x)</li>
<li><b>Sum:</b> Σaₙ = G(1)</li>
</ul></div>

<div class="box box-ex"><span class="box-label">Example: Counting with G.F.</span>
<p><b>Q:</b> How many ways to distribute 8 cookies to 3 kids, each gets 2-4?</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">Each child: x² + x³ + x⁴ (can get 2, 3, or 4)</div>
<div class="step">G(x) = (x² + x³ + x⁴)³</div>
<div class="step">= x⁶(1 + x + x²)³</div>
<div class="step">Need coefficient of x⁸ in G(x) = coefficient of x² in (1+x+x²)³</div>
<div class="step">(1+x+x²)³ = 1 + 3x + 6x² + ... → Coefficient of x² is <b>6</b></div>
</div></div></div></div>

<div class="box box-ex"><span class="box-label">Example: Solving Recurrence with G.F.</span>
<p><b>Q:</b> Solve aₙ = 3aₙ₋₁, a₀ = 2</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">G(x) = Σ aₙxⁿ. From recurrence: aₙ = 3aₙ₋₁</div>
<div class="step">G(x) - a₀ = Σ(n≥1) 3aₙ₋₁xⁿ = 3x·G(x)</div>
<div class="step">G(x) - 2 = 3x·G(x) → G(x)(1-3x) = 2</div>
<div class="step">G(x) = 2/(1-3x) → aₙ = 2·3ⁿ</div>
</div></div></div></div>`,
     quiz:{q:'What is the generating function for the sequence 1, 1, 1, 1, ...?', opts:['1/(1+x)','x/(1-x)','1/(1-x)','1-x'], ans:2}
    }
  ]
});
