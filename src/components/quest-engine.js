// ─────────────────────────────────────────
//  Quest Engine — 모달 렌더링 + 진행 로직
// ─────────────────────────────────────────

let currentQuest = null;
let currentStep  = 0;

function openQuest(questId) {
  const quest = QUESTS.find(q => q.id === questId);
  if (!quest) return;

  // 잠김 체크
  const node = document.getElementById('qnode-' + questId);
  if (node && node.classList.contains('locked')) return;

  currentQuest = quest;
  currentStep  = 0;

  document.getElementById('modalChapter').textContent  = `Chapter ${quest.chapter}`;
  document.getElementById('modalQuestName').textContent = quest.title;

  renderStep();
  document.getElementById('questModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('questModal').classList.remove('open');
  document.body.style.overflow = '';
  currentQuest = null;
  currentStep  = 0;
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('questModal')) closeModal();
}

// ── 스텝 렌더 ──
function renderStep() {
  const quest     = currentQuest;
  const step      = quest.steps[currentStep];
  const total     = quest.steps.length;
  const body      = document.getElementById('modalBody');

  let html = '';

  // XP 뱃지
  html += `<div style="margin-bottom:12px;">
    <span style="font-size:11px;font-weight:700;background:var(--terra-bg);color:var(--terracotta);border:1px solid var(--terra-light);padding:3px 10px;border-radius:20px;">+${quest.xp} XP</span>
    <span style="font-size:11px;color:var(--text-light);margin-left:8px;">난이도 ${'⭐'.repeat(quest.difficulty)}</span>
  </div>`;

  // 진행 점 표시
  if (total > 1) {
    html += `<div class="quest-prog-wrap">
      <div class="quest-prog-label">${currentStep + 1} / ${total} 상황</div>
      <div class="quest-prog-dots">`;
    for (let i = 0; i < total; i++) {
      const cls = i < currentStep ? 'done' : i === currentStep ? 'active' : '';
      html += `<div class="qp-dot ${cls}"></div>`;
    }
    html += `</div></div>`;
  }

  // 씬 카드
  html += `<div class="scene-card">`;

  // 일러스트 (간호사 + 환자)
  html += `<div class="scene-illust-wrap">`;
  if (quest.patientChar) {
    html += `<div class="scene-char-patient">${CHARS[quest.patientChar]()}</div>`;
  }
  html += `<div class="scene-char-nurse">${CHARS[quest.nurseChar]()}</div>`;
  html += `</div>`;

  // 텍스트
  html += `<div class="scene-text-wrap">`;
  html += `<div class="scene-eyebrow">시나리오 · ${currentStep + 1}단계</div>`;
  html += `<div class="scene-body">${step.scenario.replace(/\n/g,'<br>')}</div>`;
  if (step.quote) {
    html += `<div class="scene-quote">${step.quote}</div>`;
  }
  if (step.vitals) {
    html += `<div class="vital-strip">`;
    step.vitals.forEach(v => {
      html += `<div class="vital-chip">
        <div class="vc-label">${v.label}</div>
        <div class="vc-val ${v.state}">${v.value}</div>
      </div>`;
    });
    html += `</div>`;
  }
  if (step.observations && step.observations.length) {
    html += `<div class="obs-tags">`;
    step.observations.forEach(o => { html += `<span class="obs-tag">${o}</span>`; });
    html += `</div>`;
  }
  html += `</div>`;
  html += `</div>`; // .scene-card

  // 질문
  html += `<div class="quest-question">${step.question}</div>`;

  // 선택지
  html += `<div class="options-list" id="optionList">`;
  step.options.forEach((opt, i) => {
    html += `<button class="option-btn" onclick="chooseOption(${i})">${opt.text}</button>`;
  });
  html += `</div>`;

  html += `<div id="feedbackArea"></div>`;

  body.innerHTML = html;
}

// ── 선택 처리 ──
function chooseOption(idx) {
  const step      = currentQuest.steps[currentStep];
  const isCorrect = step.options[idx].correct;
  const chosenTags = step.options[idx].tags || [];

  // 태그 누적
  chosenTags.forEach(t => {
    appState.tagCounts = appState.tagCounts || {};
    appState.tagCounts[t] = (appState.tagCounts[t] || 0) + 1;
  });

  // 정답률 통계
  appState.totalAnswers   = (appState.totalAnswers   || 0) + 1;
  if (isCorrect) {
    appState.correctAnswers = (appState.correctAnswers || 0) + 1;
    appState.streak         = (appState.streak         || 0) + 1;
    if (appState.streak > (appState.bestStreak || 0)) appState.bestStreak = appState.streak;
  } else {
    appState.streak = 0;
  }

  saveState();
  updateHUD();

  // 버튼 상태
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === idx)                   btn.classList.add(isCorrect ? 'correct' : 'wrong');
    else if (step.options[i].correct) btn.classList.add('reveal');
  });

  // 피드백
  const isLast     = currentStep === currentQuest.steps.length - 1;
  const nextLabel  = isLast ? '퀘스트 완료! 🎉' : '다음 상황 →';
  const fb         = document.getElementById('feedbackArea');

  fb.innerHTML = `
    <div class="feedback-box ${isCorrect ? 'correct' : 'wrong'}">
      <div class="feedback-title">${isCorrect ? '✓ 정답!' : '✗ 다시 생각해봐요'}</div>
      <div>${isCorrect ? step.feedbackCorrect : step.feedbackWrong}</div>
    </div>
    <div class="clearfix">
      <button class="btn-next" onclick="nextStep()">${nextLabel}</button>
    </div>`;
}

// ── 다음 스텝 ──
function nextStep() {
  if (currentStep < currentQuest.steps.length - 1) {
    currentStep++;
    renderStep();
    // 모달 스크롤 맨 위로
    document.querySelector('.modal-sheet').scrollTop = 0;
  } else {
    completeQuest(currentQuest);
  }
}

// ── 퀘스트 완료 ──
function completeQuest(quest) {
  const prevXP    = appState.totalXP || 0;
  appState.totalXP = prevXP + quest.xp;

  appState.clearedQuests = appState.clearedQuests || [];
  if (!appState.clearedQuests.includes(quest.id)) {
    appState.clearedQuests.push(quest.id);
  }

  appState.history = appState.history || [];
  appState.history.unshift({ questTitle: quest.title, xp: quest.xp, date: new Date().toLocaleDateString('ko-KR') });
  if (appState.history.length > 30) appState.history.pop();

  appState.notes = appState.notes || [];
  if (!appState.notes.find(n => n.questId === quest.id)) {
    appState.notes.unshift({ questId: quest.id, ...quest.note });
  }

  saveState();

  const prevLevel = getLevelInfo(prevXP).level;
  const newLevel  = getLevelInfo(appState.totalXP).level;

  // 완료 화면
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="quest-done-box">
      <div class="qd-icon">🎉</div>
      <div class="qd-title">퀘스트 클리어!</div>
      <div class="qd-body">${quest.note.body.split('\n')[0]}</div>
      <div class="qd-xp">+${quest.xp} XP</div>
      <div class="qd-xp-label">획득</div>
      <button class="btn-primary" style="max-width:200px;margin:0 auto;" onclick="closeModal();refreshAll();">맵으로 돌아가기</button>
    </div>`;

  updateHUD();
  updateMap();

  if (newLevel > prevLevel) setTimeout(() => showLevelUp(newLevel), 700);
}
