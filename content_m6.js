window.MODULES = window.MODULES || [];
window.MODULES.push({
  icon:'🕸️', title:'Graph Theory', desc:'Graph types, bipartite graphs, Euler & Hamiltonian paths.',
  topics:[
    {title:'6.1 Graph Terminologies',
     content:`<div class="box box-def"><span class="box-label">Basic Definitions</span>
<ul>
<li><b>Graph G = (V, E):</b> V = set of vertices, E = set of edges</li>
<li><b>Degree deg(v):</b> number of edges connected to v</li>
<li><b>Adjacent:</b> two vertices connected by an edge</li>
<li><b>Path:</b> sequence of distinct vertices connected by edges</li>
<li><b>Cycle:</b> path that starts and ends at the same vertex</li>
<li><b>Connected:</b> path exists between every pair of vertices</li>
<li><b>Simple graph:</b> no loops, no multiple edges</li>
</ul></div>
<div class="box box-thm"><span class="box-label">Handshaking Theorem</span>
<p><b>Σ deg(v) = 2|E|</b> (sum of all degrees = twice the number of edges)</p>
<p><b>Corollary:</b> The number of vertices with ODD degree is always EVEN.</p></div>
<div class="box box-ex"><span class="box-label">Example</span>
<p>A graph has degree sequence 4, 3, 3, 2, 2. How many edges?</p>
<p>Sum of degrees = 4+3+3+2+2 = 14. Edges = 14/2 = <b>7</b></p></div>`,
     quiz:{q:'If a graph has 5 vertices each of degree 4, how many edges?', opts:['5','10','15','20'], ans:1}
    },

    {title:'6.2 Types of Graphs',
     content:`<div class="box box-thm"><span class="box-label">Graph Types</span>
<ul>
<li><b>Undirected:</b> edges have no direction</li>
<li><b>Directed (digraph):</b> edges have direction (in-degree, out-degree)</li>
<li><b>Weighted:</b> edges have values/costs</li>
<li><b>Simple:</b> no loops or parallel edges</li>
<li><b>Multigraph:</b> allows parallel edges</li>
<li><b>Regular graph:</b> every vertex has the same degree. <b>k-regular</b> = all degrees are k.</li>
<li><b>Connected:</b> path between any two vertices</li>
<li><b>Strongly connected (directed):</b> directed path between every pair in both directions</li>
<li><b>Cut vertex:</b> removing it disconnects the graph</li>
<li><b>Cut edge (bridge):</b> removing it disconnects the graph</li>
</ul></div>`,
     quiz:{q:'A graph where every vertex has the same degree is called:', opts:['Complete','Regular','Bipartite','Simple'], ans:1}
    },

    {title:'6.4 Common Graphs: Kₙ, Cₙ, Wₙ, Qₙ, Km,n',
     content:`<div class="box box-thm"><span class="box-label">Special Graph Families</span>
<table class="truth-table">
<tr><th>Graph</th><th>Description</th><th>Vertices</th><th>Edges</th><th>Each Degree</th></tr>
<tr><td><b>Kₙ</b></td><td>Complete: every pair connected</td><td>n</td><td>n(n-1)/2</td><td>n-1</td></tr>
<tr><td><b>Cₙ</b></td><td>Cycle: single cycle through all</td><td>n</td><td>n</td><td>2</td></tr>
<tr><td><b>Wₙ</b></td><td>Wheel: Cₙ + center vertex</td><td>n+1</td><td>2n</td><td>3 (rim), n (hub)</td></tr>
<tr><td><b>Qₙ</b></td><td>Hypercube: 2ⁿ vertices</td><td>2ⁿ</td><td>n·2ⁿ⁻¹</td><td>n</td></tr>
<tr><td><b>Km,n</b></td><td>Complete bipartite</td><td>m+n</td><td>m·n</td><td>n or m</td></tr>
</table></div>

<div class="box box-ex"><span class="box-label">Quick Examples</span>
<ul>
<li><b>K₄:</b> 4 vertices, 6 edges, each vertex degree 3</li>
<li><b>C₅:</b> pentagon, 5 vertices, 5 edges, all degree 2</li>
<li><b>Q₃:</b> cube graph, 8 vertices, 12 edges, all degree 3</li>
<li><b>K₃,₃:</b> 6 vertices, 9 edges</li>
</ul></div>`,
     quiz:{q:'How many edges does K₇ have?', opts:['7','14','21','42'], ans:2}
    },

    {title:'6.5 Bipartite Graphs',
     content:`<div class="box box-def"><span class="box-label">Definition</span>
<p>A graph is <b>bipartite</b> if V can be split into two disjoint sets V₁, V₂ such that every edge connects a vertex in V₁ to one in V₂ (no edges within a set).</p></div>

<div class="box box-thm"><span class="box-label">Key Theorem</span>
<p><b>A graph is bipartite ⟺ it contains no odd-length cycles.</b></p></div>

<div class="box box-thm"><span class="box-label">Which standard graphs are bipartite?</span>
<ul>
<li><b>Kₙ:</b> Bipartite only for n ≤ 2</li>
<li><b>Cₙ:</b> Bipartite ⟺ n is even</li>
<li><b>Wₙ:</b> Never bipartite (for n ≥ 3, contains odd cycles)</li>
<li><b>Qₙ:</b> Always bipartite! (partition by even/odd number of 1s)</li>
<li><b>Km,n:</b> Always bipartite by definition</li>
</ul></div>`,
     quiz:{q:'Which graph is bipartite?', opts:['K₃','C₅','Q₄','W₅'], ans:2}
    },

    {title:'6.6 Euler & Hamiltonian Paths',
     content:`<div class="box box-def"><span class="box-label">Definitions</span>
<ul>
<li><b>Euler path:</b> visits every EDGE exactly once</li>
<li><b>Euler circuit:</b> Euler path that starts and ends at same vertex</li>
<li><b>Hamiltonian path:</b> visits every VERTEX exactly once</li>
<li><b>Hamiltonian circuit:</b> Hamiltonian path returning to start</li>
</ul></div>

<div class="box box-thm"><span class="box-label">Euler Theorems (Exam Essentials!)</span>
<table class="truth-table">
<tr><th>Condition</th><th>Euler Path</th><th>Euler Circuit</th></tr>
<tr><td>Connected + all degrees even</td><td>✅</td><td>✅</td></tr>
<tr><td>Connected + exactly 2 odd-degree vertices</td><td>✅ (between them)</td><td>❌</td></tr>
<tr><td>Otherwise</td><td>❌</td><td>❌</td></tr>
</table></div>

<div class="box box-thm"><span class="box-label">Euler paths for standard graphs</span>
<ul>
<li><b>Kₙ:</b> Euler circuit ⟺ n is odd. Euler path ⟺ n = 2.</li>
<li><b>Cₙ:</b> Always has Euler circuit (all degrees = 2)</li>
<li><b>Wₙ:</b> Euler circuit ⟺ n is odd</li>
<li><b>Qₙ:</b> Euler circuit ⟺ n is even</li>
<li><b>Km,n:</b> Euler circuit ⟺ m and n are both even</li>
</ul></div>

<div class="box box-warn"><span class="box-label">⚠️ Hamiltonian — No Easy Test!</span>
<p>Unlike Euler, there's <b>no simple necessary and sufficient condition</b> for Hamiltonian paths. But know these:</p>
<ul>
<li><b>Dirac's Theorem:</b> If n ≥ 3 and every vertex has degree ≥ n/2, then G has a Hamiltonian circuit.</li>
<li><b>Ore's Theorem:</b> If for every pair of non-adjacent vertices u,v: deg(u)+deg(v) ≥ n, then Hamiltonian circuit exists.</li>
<li><b>Bipartite + odd vertices → No Hamiltonian circuit</b></li>
</ul></div>

<div class="box box-ex"><span class="box-label">Example</span>
<p><b>Q:</b> Does K₅ have an Euler circuit?</p>
<div class="spoiler"><button class="spoiler-toggle">👁 Show Solution</button><div class="spoiler-content">
<div class="steps">
<div class="step">K₅ is connected ✓</div>
<div class="step">Every vertex has degree 4 (even) ✓</div>
<div class="step">All degrees even + connected → <b>Euler circuit exists!</b> ✓</div>
</div></div></div></div>`,
     quiz:{q:'A connected graph has an Euler circuit if and only if:', opts:['It has an even number of vertices','Every vertex has even degree','It has no bridges','It is bipartite'], ans:1}
    }
  ]
});
