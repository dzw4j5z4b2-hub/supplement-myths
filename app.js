const app = document.querySelector('#app');
const questions = window.QUESTIONS || [];

// The order and position live for the current page session. A new round always reshuffles.
let roundOrder = [];
let roundPosition = 0;
let activeQuestionId = null;
let selectedOption = null;
let answerRevealed = false;
let currentView = 'home';

function shuffleQuestions(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startRound() {
  roundOrder = shuffleQuestions(questions);
  roundPosition = 0;
  activeQuestionId = null;
  selectedOption = null;
  answerRevealed = false;
  currentView = 'question';
  location.hash = `question/${roundOrder[0].id}`;
}

function currentQuestion() {
  return roundOrder[roundPosition];
}

function render() {
  const [page, rawId] = location.hash.replace(/^#/, '').split('/');
  const id = Number(rawId);
  document.body.classList.toggle('home-view', !page || page === 'home');
  if (!page || page === 'home') return renderHome();
  if (page === 'questions') return renderQuestions();
  if (page === 'detail') return renderQuestionDetail(id);
  if (page === 'start') return startRound();
  if (page === 'question' || page === 'answer') {
    const q = currentQuestion();
    if (!q || q.id !== id) {
      if (q) location.hash = `question/${q.id}`;
      else location.hash = 'questions';
      return;
    }
    if (activeQuestionId !== q.id) {
      activeQuestionId = q.id;
      selectedOption = null;
      answerRevealed = false;
    }
    if (page === 'answer' && selectedOption !== null) answerRevealed = true;
    currentView = answerRevealed ? 'answer' : 'question';
    return renderQuestion(q, answerRevealed);
  }
  if (page === 'next') return advanceRound();
  if (page === 'complete') return renderComplete();
  renderHome();
}

function renderHome() {
  app.innerHTML = `
    <section class="cover-hero">
      <div class="cover-copy">
        <span class="eyebrow"><i></i> HEALTH KNOWLEDGE</span>
        <p class="cover-overline">互動講座・健康知識</p>
        <h1>保健食品<br><em>15 大迷思破解</em></h1>
        <p class="lead">從日常疑問出發，一起看懂保健食品的常見說法。</p>
        <div class="cover-meta"><span class="meta-check" aria-hidden="true">✓</span><span>15 題隨機挑戰<span class="meta-divider">・</span>每輪不重複</span></div>
        <button class="button cover-cta" id="start-round">開始 15 題挑戰 <span aria-hidden="true">→</span></button>
      </div>
      <div class="cover-art" aria-label="以營養膠囊與植物葉片構成的健康主視覺">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-leaf leaf-one"></div><div class="art-leaf leaf-two"></div><div class="art-leaf leaf-three"></div>
        <div class="art-sun"></div>
        <div class="nutrition-card"><span class="nutrition-label">DAILY WELLNESS</span><span class="nutrition-plus">＋</span><span class="nutrition-rule"></span><span class="nutrition-dots"><i></i><i></i><i></i></span></div>
        <div class="hero-capsule"><span></span></div>
        <div class="art-note"><span class="note-mark">✓</span><span><strong>先了解，再選擇</strong><small>讓健康資訊更清晰</small></span></div>
        <span class="art-caption">BALANCE · KNOWLEDGE · WELLNESS</span>
      </div>
    </section>`;
  document.querySelector('#start-round').addEventListener('click', startRound);
}

function renderQuestions() {
  app.innerHTML = `
    <section class="page-heading"><span class="section-kicker">QUESTION BANK</span><h1>15 大迷思題庫</h1><p>開始一輪隨機挑戰，15 題不重複。</p><button class="button" id="start-round">開始隨機挑戰 <span>→</span></button></section>
    <section class="question-grid">${questions.map((q) => `
      <a class="question-card" href="#detail/${q.id}" aria-label="查看第 ${q.number || q.id} 題詳細內容">
        <span class="card-number">${q.number || String(q.id).padStart(2, '0')}</span>
        <span class="card-content"><strong>${q.title}</strong><small>查看題目與解析</small></span>
        <span class="card-arrow" aria-hidden="true">→</span>
      </a>`).join('')}</section>`;
  document.querySelector('#start-round').addEventListener('click', startRound);
}

function renderQuestionDetail(id) {
  const q = questions.find((item) => item.id === id);
  if (!q) {
    app.innerHTML = `<section class="empty-state"><h1>找不到這一題</h1><a class="button secondary" href="#questions">返回題庫</a></section>`;
    return;
  }
  app.innerHTML = `<section class="quiz-wrap detail-wrap"><a class="back-link" href="#questions">← 返回題庫</a><article class="quiz-card detail-card"><span class="section-kicker">QUESTION ${q.number || String(q.id).padStart(2, '0')}</span><h1>${q.title}</h1>${q.question ? `<p class="lead">${q.question}</p>` : ''}<div class="detail-options">${q.options.map((option) => `<p class="detail-option">${option}</p>`).join('')}</div><div class="answer-banner">正確答案：${q.answerText || q.options[q.answerIndex]}</div><p class="explanation">${q.explanation}</p><p class="explanation"><strong>一句話記住：</strong>${q.takeaway}</p><a class="button secondary" href="#questions">返回題庫</a></article></section>`;
}

function renderQuestion(q, reveal) {
  if (!q.title || !q.options?.length || q.answerIndex === null) {
    app.innerHTML = `<section class="empty-state"><h1>題目資料不完整</h1><a class="button secondary" href="#questions">返回題庫</a></section>`;
    return;
  }
  const progress = roundPosition + 1;
  app.innerHTML = `<section class="quiz-wrap"><a class="back-link" href="#questions">← 返回題庫</a><div class="quiz-progress"><span>第 ${progress} / ${roundOrder.length} 題</span><span>迷思 ${q.number || String(q.id).padStart(2, '0')}</span></div><div class="progress-track"><i style="width:${progress / roundOrder.length * 100}%"></i></div><article class="quiz-card"><span class="section-kicker">${reveal ? 'THE ANSWER' : 'WHAT DO YOU THINK?'}</span><h1>${q.title}</h1>${q.question ? `<p class="lead">${q.question}</p>` : ''}${reveal ? `<div class="answer-banner">正確答案：${q.answerText || q.options[q.answerIndex]}</div><p class="explanation">${q.explanation}</p><p class="explanation"><strong>一句話記住：</strong>${q.takeaway}</p>` : `<div class="options">${q.options.map((option, index) => `<button class="option ${selectedOption === index ? 'selected' : ''}" data-option="${index}" aria-pressed="${selectedOption === index}"><span>${String.fromCharCode(65 + index)}</span>${option.replace(/^[A-C]\s/, '')}</button>`).join('')}</div><button class="button reveal-button" id="reveal" ${selectedOption === null ? 'disabled' : ''}>揭曉答案 <span>→</span></button>`}</article>${reveal ? `<div class="answer-actions"><button class="button secondary" id="review-question">再看一次題目</button><button class="button next-button" id="next-question">${progress === roundOrder.length ? '完成本輪' : '下一題'} <span>→</span></button></div>` : ''}</section>`;
  if (!reveal) {
    document.querySelectorAll('.option').forEach((button) => button.addEventListener('click', () => {
      if (answerRevealed) return;
      selectedOption = Number(button.dataset.option);
      currentView = 'question';
      document.querySelectorAll('.option').forEach((item) => {
        item.classList.toggle('selected', Number(item.dataset.option) === selectedOption);
        item.setAttribute('aria-pressed', String(Number(item.dataset.option) === selectedOption));
      });
      document.querySelector('#reveal').disabled = false;
    }));
    document.querySelector('#reveal').addEventListener('click', () => {
      if (selectedOption === null || answerRevealed) return;
      answerRevealed = true;
      currentView = 'answer';
      location.hash = `answer/${q.id}`;
    });
  } else {
    document.querySelector('#review-question').addEventListener('click', () => {
      answerRevealed = false;
      currentView = 'question';
      location.hash = `question/${q.id}`;
    });
    document.querySelector('#next-question').addEventListener('click', advanceRound);
  }
}

function advanceRound() {
  if (!roundOrder.length || !answerRevealed || selectedOption === null) {
    location.hash = 'questions';
    return;
  }
  roundPosition += 1;
  selectedOption = null;
  answerRevealed = false;
  activeQuestionId = null;
  location.hash = roundPosition >= roundOrder.length
    ? 'complete'
    : `question/${currentQuestion().id}`;
}

function renderComplete() {
  app.innerHTML = `<section class="complete-page"><div class="complete-card"><div class="complete-copy"><div class="event-logos" role="group" aria-label="獅子會 25 週年與 Lions International 標誌"><img src="assets/lions-25th.png" alt="獅子會 25 週年徽章"><img src="assets/lions-international.png" alt="Lions International Logo"></div><span class="section-kicker">CHALLENGE COMPLETE</span><div class="complete-check" aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="m7 16 6 6L25 10"/></svg></div><h1>15 題全部完成</h1><p class="complete-lead">你已經完成這一輪的保健食品迷思挑戰。</p><div class="closing-note"><span class="note-line"></span><p>健康知識不是記住更多答案，<br><strong>而是學會判斷資訊。</strong></p></div><p class="completion-slogan">USANA × 健康與自由</p><div class="complete-actions"><button class="button" id="restart-round">重新開始一輪 <span aria-hidden="true">→</span></button><a class="button secondary" href="#questions">回到題庫</a></div></div><div class="complete-art" aria-hidden="true"><div class="complete-ring ring-back"></div><div class="complete-ring ring-front"></div><div class="complete-number">15</div><span class="complete-number-label">QUESTIONS<br>COMPLETED</span><span class="complete-leaf leaf-a"></span><span class="complete-leaf leaf-b"></span><span class="complete-leaf leaf-c"></span><span class="complete-spark">＋</span></div></div></section>`;
  document.querySelector('#restart-round').addEventListener('click', startRound);
}

window.addEventListener('hashchange', render);
render();
