// ===== APP.JS - Main application logic =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSidebar();
  initProgress();
  initFABs();
  buildModuleCards();
  buildContent();
  buildSidebarNav();
  initQuizzes();
  renderMath();
});

function initParticles() {
  const c = document.getElementById('particles-bg');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 200 + 50;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*10}s;animation-duration:${15+Math.random()*20}s`;
    c.appendChild(p);
  }
}

function initSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('sidebar-toggle');
  const close = document.getElementById('sidebar-close');
  const open = () => { sb.classList.add('open'); ov.classList.add('active'); };
  const shut = () => { sb.classList.remove('open'); ov.classList.remove('active'); };
  toggle.addEventListener('click', () => sb.classList.contains('open') ? shut() : open());
  close.addEventListener('click', shut);
  ov.addEventListener('click', shut);
}

function initProgress() {
  const fill = document.getElementById('reading-progress');
  const label = document.getElementById('progress-label');
  window.addEventListener('scroll', () => {
    const pct = Math.min(100, Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
    fill.style.width = pct + '%';
    label.textContent = pct + '%';
  });
}

function initFABs() {
  const top = document.getElementById('scroll-top');
  const formula = document.getElementById('formula-fab');
  window.addEventListener('scroll', () => {
    top.classList.toggle('visible', window.scrollY > 600);
  });
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  formula.addEventListener('click', showFormulaSheet);
  document.getElementById('formula-close')?.addEventListener('click', () => {
    document.getElementById('formula-modal').classList.add('hidden');
  });
}

function buildModuleCards() {
  const container = document.getElementById('module-cards');
  if (!container || !window.MODULES) return;
  container.innerHTML = window.MODULES.map((m, i) => `
    <a href="#module-${i+1}" class="module-card">
      <div class="mc-icon">${m.icon}</div>
      <div class="mc-number">Module ${i+1}</div>
      <div class="mc-title">${m.title}</div>
      <div class="mc-desc">${m.desc}</div>
      <div class="mc-topics">${m.topics.length} topics</div>
    </a>`).join('');
}

function buildContent() {
  const container = document.getElementById('content-container');
  if (!container || !window.MODULES) return;
  container.innerHTML = window.MODULES.map((m, i) => {
    const topicsHTML = m.topics.map((t, j) => `
      <div class="topic" id="topic-${i+1}-${j+1}">
        <h3 class="topic-title">${t.title}</h3>
        <div class="content-block">${t.content}</div>
        ${t.quiz ? buildInlineQuiz(t.quiz, `q${i+1}_${j+1}`) : ''}
      </div>`).join('');
    return `
    <section class="module-section" id="module-${i+1}">
      <div class="module-inner">
        <div class="module-header">
          <div class="module-num">Module ${i+1}</div>
          <h2 class="module-title">${m.icon} ${m.title}</h2>
          <p class="module-desc">${m.desc}</p>
        </div>
        ${topicsHTML}
      </div>
    </section>`;
  }).join('');
  // Init spoilers
  document.querySelectorAll('.spoiler-toggle').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });
}

function buildSidebarNav() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav || !window.MODULES) return;
  const colors = ['#6c5ce7','#00cec9','#00b894','#fdcb6e','#fd79a8','#e17055'];
  nav.innerHTML = window.MODULES.map((m, i) => `
    <div class="nav-module" data-mod="${i}">
      <button class="nav-module-title" onclick="this.parentElement.classList.toggle('expanded')">
        <span class="mod-icon" style="background:${colors[i]}20;color:${colors[i]}">${m.icon}</span>
        ${m.title}
      </button>
      <div class="nav-subtopics">
        ${m.topics.map((t, j) => `<button class="nav-subtopic" onclick="document.getElementById('topic-${i+1}-${j+1}').scrollIntoView({behavior:'smooth'});document.getElementById('sidebar').classList.remove('open');document.getElementById('sidebar-overlay').classList.remove('active')">${t.title}</button>`).join('')}
      </div>
    </div>`).join('');
}

function buildInlineQuiz(quiz, id) {
  return `<div class="quiz-inline" id="${id}">
    <h4>🧠 Quick Check</h4>
    <p class="quiz-question">${quiz.q}</p>
    <div class="quiz-options">${quiz.opts.map((o, i) => `
      <label class="quiz-opt" data-correct="${i === quiz.ans}" onclick="selectOpt(this)">
        <span class="opt-marker">${String.fromCharCode(65+i)}</span>
        <span>${o}</span>
      </label>`).join('')}
    </div>
    <button class="quiz-check-btn" onclick="checkQuiz(this)">Check Answer</button>
    <div class="quiz-feedback"></div>
  </div>`;
}

function selectOpt(el) {
  el.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function checkQuiz(btn) {
  const container = btn.closest('.quiz-inline');
  const selected = container.querySelector('.quiz-opt.selected');
  const fb = container.querySelector('.quiz-feedback');
  if (!selected) { fb.textContent = 'Please select an answer!'; fb.className = 'quiz-feedback show wrong-fb'; return; }
  const correct = selected.dataset.correct === 'true';
  container.querySelectorAll('.quiz-opt').forEach(o => {
    if (o.dataset.correct === 'true') o.classList.add('correct');
    else if (o.classList.contains('selected')) o.classList.add('wrong');
  });
  fb.textContent = correct ? '✅ Correct! Well done!' : '❌ Not quite. The highlighted answer is correct.';
  fb.className = `quiz-feedback show ${correct ? 'correct-fb' : 'wrong-fb'}`;
  btn.disabled = true;
}

function showFormulaSheet() {
  const modal = document.getElementById('formula-modal');
  const body = document.getElementById('formula-body');
  if (!window.FORMULAS) return;
  body.innerHTML = window.FORMULAS;
  modal.classList.remove('hidden');
  renderMath();
}

function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  } else {
    setTimeout(renderMath, 200);
  }
}

function initQuizzes() {
  const qmBtn = document.getElementById('quiz-mode-btn');
  if (qmBtn) qmBtn.addEventListener('click', () => {
    document.querySelectorAll('.quiz-inline').forEach(q => q.scrollIntoView({behavior:'smooth'}));
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
    alert('Scroll through the page — quiz questions are embedded after each topic!');
  });
  document.getElementById('quiz-close')?.addEventListener('click', () => {
    document.getElementById('quiz-modal').classList.add('hidden');
  });
}
