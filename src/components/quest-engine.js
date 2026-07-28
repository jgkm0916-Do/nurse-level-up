// ═══════════════════════════════════════════
//  Quest Engine — 퀘스트 모달 + 진행 로직
// ═══════════════════════════════════════════

let currentQuest = null;
let currentStep  = 0;

// ── 환자 SVG ──
function patientSVG(type) {
  const p = {
    bed:`<svg viewBox="0 0 180 125" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="68" width="160" height="44" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
      <rect x="10" y="61" width="160" height="11" rx="4" fill="#d0dce8"/>
      <rect x="14" y="52" width="46" height="26" rx="8" fill="#fff" stroke="#e0d8d0" stroke-width="1"/>
      <rect x="14" y="74" width="150" height="30" rx="6" fill="#c8dce8"/>
      <rect x="14" y="108" width="10" height="14" rx="3" fill="#c0ccd8"/>
      <rect x="156" y="108" width="10" height="14" rx="3" fill="#c0ccd8"/>
      <circle cx="19" cy="122" r="4" fill="#a0b0c0"/>
      <circle cx="161" cy="122" r="4" fill="#a0b0c0"/>
      <ellipse cx="44" cy="50" rx="18" ry="18" fill="#f5c9a8"/>
      <ellipse cx="44" cy="36" rx="17" ry="10" fill="#5a3820"/>
      <ellipse cx="28" cy="46" rx="5" ry="9" fill="#5a3820"/>
      <circle cx="38" cy="50" r="2" fill="#3d2b1f"/>
      <circle cx="50" cy="50" r="2" fill="#3d2b1f"/>
      <path d="M40 57 Q44 55 48 57" fill="none" stroke="#a06040" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="35" cy="55" rx="5" ry="3" fill="#f08060" opacity=".45"/>
      <ellipse cx="53" cy="55" rx="5" ry="3" fill="#f08060" opacity=".45"/>
      <rect x="28" y="65" width="30" height="9" rx="4" fill="#b8cce0"/>
      <line x1="148" y1="6" x2="148" y2="62" stroke="#c0c0c0" stroke-width="2"/>
      <line x1="138" y1="6" x2="158" y2="6" stroke="#c0c0c0" stroke-width="2"/>
      <rect x="141" y="7" width="14" height="20" rx="4" fill="#d8eef8" stroke="#b0c8d8" stroke-width="1"/>
    </svg>`,
    breathing:`<svg viewBox="0 0 130 155" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="100" width="94" height="42" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
      <rect x="18" y="95" width="94" height="9" rx="4" fill="#d0dce8"/>
      <rect x="18" y="56" width="12" height="48" rx="5" fill="#d0dce8"/>
      <ellipse cx="65" cy="38" rx="21" ry="21" fill="#f5c9a8"/>
      <ellipse cx="65" cy="22" rx="19" ry="11" fill="#5a3820"/>
      <ellipse cx="46" cy="34" rx="6" ry="10" fill="#5a3820"/>
      <ellipse cx="84" cy="34" rx="6" ry="10" fill="#5a3820"/>
      <circle cx="57" cy="38" r="2.2" fill="#3d2b1f"/>
      <circle cx="73" cy="38" r="2.2" fill="#3d2b1f"/>
      <path d="M59 46 Q65 43 71 46" fill="none" stroke="#c06040" stroke-width="1.4" stroke-linecap="round"/>
      <ellipse cx="51" cy="44" rx="5" ry="3" fill="#f0a080" opacity=".4"/>
      <ellipse cx="79" cy="44" rx="5" ry="3" fill="#f0a080" opacity=".4"/>
      <ellipse cx="65" cy="47" rx="3" ry="2" fill="#d4957a" opacity=".5"/>
      <rect x="44" y="57" width="42" height="46" rx="10" fill="#b8cce0" stroke="#a0b8cc" stroke-width="1"/>
      <rect x="55" y="53" width="10" height="8" rx="3" fill="#f5c9a8"/>
      <rect x="28" y="59" width="16" height="35" rx="8" fill="#b8cce0"/>
      <rect x="86" y="59" width="16" height="35" rx="8" fill="#b8cce0"/>
      <ellipse cx="36" cy="96" rx="10" ry="7" fill="#f5c9a8"/>
      <ellipse cx="94" cy="96" rx="10" ry="7" fill="#f5c9a8"/>
      <path d="M100 40 Q107 33 114 40 Q121 47 114 54" fill="none" stroke="#c4704a" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
      <path d="M108 30 Q117 21 126 30" fill="none" stroke="#c4704a" stroke-width="1.2" stroke-linecap="round" opacity=".3"/>
    </svg>`,
    drowsy:`<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="66" width="160" height="46" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
      <rect x="10" y="59" width="160" height="11" rx="4" fill="#d0dce8"/>
      <rect x="14" y="50" width="46" height="26" rx="8" fill="#fff" stroke="#e0d8d0" stroke-width="1"/>
      <rect x="14" y="72" width="150" height="32" rx="6" fill="#c8dce8"/>
      <rect x="14" y="108" width="10" height="10" rx="3" fill="#c0ccd8"/>
      <rect x="156" y="108" width="10" height="10" rx="3" fill="#c0ccd8"/>
      <ellipse cx="44" cy="48" rx="19" ry="19" fill="#f5d0b0"/>
      <ellipse cx="44" cy="33" rx="17" ry="10" fill="#888070"/>
      <ellipse cx="27" cy="43" rx="5" ry="9" fill="#888070"/>
      <path d="M34 48 Q40 51 46 48" fill="none" stroke="#5a4030" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M48 48 Q54 51 60 48" fill="none" stroke="#5a4030" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M38 55 Q44 57 50 55" fill="none" stroke="#a06040" stroke-width="1.2" stroke-linecap="round"/>
      <rect x="28" y="65" width="32" height="9" rx="4" fill="#b8cce0"/>
      <text x="74" y="34" font-size="11" fill="#8ab0c8" opacity=".55">z</text>
      <text x="85" y="25" font-size="13" fill="#8ab0c8" opacity=".45">z</text>
      <text x="98" y="15" font-size="15" fill="#8ab0c8" opacity=".35">z</text>
    </svg>`,
    standing:`<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="130" width="20" height="25" rx="5" fill="#d0dce8"/>
      <ellipse cx="60" cy="35" rx="19" ry="19" fill="#f5c9a8"/>
      <ellipse cx="60" cy="20" rx="18" ry="10" fill="#888070"/>
      <ellipse cx="43" cy="31" rx="5" ry="9" fill="#777060"/>
      <ellipse cx="77" cy="31" rx="5" ry="9" fill="#777060"/>
      <circle cx="53" cy="35" r="2.2" fill="#3d2b1f"/>
      <circle cx="67" cy="35" r="2.2" fill="#3d2b1f"/>
      <path d="M55 43 Q60 41 65 43" fill="none" stroke="#a06040" stroke-width="1.3" stroke-linecap="round"/>
      <ellipse cx="52" cy="41" rx="4" ry="2.5" fill="#f0a080" opacity=".35"/>
      <ellipse cx="68" cy="41" rx="4" ry="2.5" fill="#f0a080" opacity=".35"/>
      <rect x="40" y="52" width="40" height="52" rx="10" fill="#b8cce0" stroke="#a0b8cc" stroke-width="1"/>
      <rect x="50" y="48" width="10" height="8" rx="3" fill="#f5c9a8"/>
      <rect x="26" y="54" width="15" height="32" rx="7" fill="#b8cce0"/>
      <rect x="79" y="54" width="15" height="32" rx="7" fill="#b8cce0"/>
      <ellipse cx="33" cy="88" rx="9" ry="6" fill="#f5c9a8"/>
      <ellipse cx="87" cy="88" rx="9" ry="6" fill="#f5c9a8"/>
      <rect x="44" y="102" width="13" height="30" rx="6" fill="#b8cce0"/>
      <rect x="63" y="102" width="13" height="30" rx="6" fill="#b8cce0"/>
      <ellipse cx="50" cy="132" rx="9" ry="4" fill="#a0b0c0"/>
      <ellipse cx="70" cy="132" rx="9" ry="4" fill="#a0b0c0"/>
      <path d="M20 60 Q14 68 20 76" fill="none" stroke="#f5c9a8" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  };
  return p[type] || p['bed'];
}

// ── 모달 열기 ──
function openQuest(questId) {
  const quest = QUESTS.find(q => q.id === questId);
  if (!quest) return;
  const node = document.getElementById('qnode-' + questId);
  if (node && node.classList.contains('locked')) return;
  currentQuest = quest;
  currentStep  = 0;
  document.getElementById('modalMeta').textContent  = `Chapter ${quest.chapter} · 난이도 ${'⭐'.repeat(quest.difficulty)}`;
  document.getElementById('modalTitle').textContent = quest.title;
  renderStep();
  document.getElementById('questModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('questModal').classList.remove('open');
  document.body.style.overflow = '';
  currentQuest = null; currentStep = 0;
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('questModal')) closeModal();
}

// ── 스텝 렌더 ──
function renderStep() {
  const quest  = currentQuest;
  const step   = quest.steps[currentStep];
  const total  = quest.steps.length;
  const body   = document.getElementById('modalBody');
  const stageInfo = getStageInfo(appState.totalXP || 0);
  const nurseImg  = stageInfo.img;

  let html = '';

  // 진행 점
  if (total > 1) {
    html += `<div class="quest-prog">
      <div class="quest-prog-label">${currentStep+1} / ${total} 상황</div>
      <div class="quest-prog-dots">
        ${Array.from({length:total},(_,i)=>`<div class="qp-dot ${i<currentStep?'done':i===currentStep?'active':''}"></div>`).join('')}
      </div></div>`;
  }

  // 씬 카드
  html += `<div class="scene-card">
    <div class="scene-illust">
      ${quest.patientType ? `<div class="scene-patient-svg">${patientSVG(quest.patientType)}</div>` : ''}
      <img class="scene-nurse-img" src="${nurseImg}" alt="간호사"/>
    </div>
    <div class="scene-text">
      <div class="scene-eyebrow">시나리오 · ${currentStep+1}단계</div>
      <div class="scene-body">${step.scenario.replace(/\n/g,'<br>')}</div>
      ${step.quote ? `<div class="scene-quote">${step.quote}</div>` : ''}
      ${step.vitals ? `<div class="vital-strip">${step.vitals.map(v=>`<div class="vital-chip"><div class="vc-label">${v.label}</div><div class="vc-val ${v.state}">${v.value}</div></div>`).join('')}</div>` : ''}
      ${step.observations && step.observations.length ? `<div class="obs-tags">${step.observations.map(o=>`<span class="obs-tag">${o}</span>`).join('')}</div>` : ''}
    </div>
  </div>`;

  // 선택지
  html += `<div class="quest-q">${step.question}</div>
  <div class="options" id="optionList">
    ${step.options.map((opt,i)=>`<button class="opt-btn" onclick="chooseOption(${i})">${opt.text}</button>`).join('')}
  </div>
  <div id="feedbackArea"></div>`;

  body.innerHTML = html;
}

// ── 선택 처리 ──
function chooseOption(idx) {
  const step      = currentQuest.steps[currentStep];
  const isCorrect = step.options[idx].correct;
  const tags      = step.options[idx].tags || [];

  // 태그 + 능력치 누적
  appState.tagCounts = appState.tagCounts || {};
  appState.stats     = appState.stats || { ...DEFAULT_STATS };
  tags.forEach(t => {
    appState.tagCounts[t] = (appState.tagCounts[t]||0)+1;
    const stat = TAG_STAT_MAP[t];
    if (stat) appState.stats[stat] = Math.min(99, (appState.stats[stat]||10) + (isCorrect?5:2));
  });

  // 통계
  appState.totalAnswers   = (appState.totalAnswers||0)+1;
  if (isCorrect) {
    appState.correctAnswers = (appState.correctAnswers||0)+1;
    appState.streak         = (appState.streak||0)+1;
    if (appState.streak > (appState.bestStreak||0)) appState.bestStreak = appState.streak;
  } else {
    appState.streak = 0;
  }
  saveState(); updateHUD();

  // 버튼 상태
  document.querySelectorAll('.opt-btn').forEach((btn,i) => {
    btn.disabled = true;
    if (i===idx) btn.classList.add(isCorrect?'correct':'wrong');
    else if (step.options[i].correct) btn.classList.add('reveal');
  });

  // 피드백
  const isLast = currentStep === currentQuest.steps.length-1;
  document.getElementById('feedbackArea').innerHTML = `
    <div class="feedback ${isCorrect?'correct':'wrong'}">
      <div class="fb-title">${isCorrect?'✓ 정답!':'✗ 다시 생각해봐요'}</div>
      <div>${isCorrect?step.feedbackCorrect:step.feedbackWrong}</div>
    </div>
    <div class="clearfix">
      <button class="btn-next" onclick="nextStep()">${isLast?'퀘스트 완료! 🎉':'다음 상황 →'}</button>
    </div>`;
}

// ── 다음 스텝 ──
function nextStep() {
  if (currentStep < currentQuest.steps.length-1) {
    currentStep++;
    renderStep();
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
  if (!appState.clearedQuests.includes(quest.id)) appState.clearedQuests.push(quest.id);
  appState.history = appState.history || [];
  appState.history.unshift({questTitle:quest.title, xp:quest.xp, date:new Date().toLocaleDateString('ko-KR')});
  if (appState.history.length>30) appState.history.pop();
  appState.notes = appState.notes || [];
  if (!appState.notes.find(n=>n.questId===quest.id)) appState.notes.unshift({questId:quest.id,...quest.note});
  saveState();

  const prevStage = getStageNum(prevXP);
  const newStage  = getStageNum(appState.totalXP);

  document.getElementById('modalBody').innerHTML = `
    <div class="quest-done">
      <div class="qd-icon">🎉</div>
      <div class="qd-title">퀘스트 클리어!</div>
      <div class="qd-body">${quest.note.body.split('\n')[0]}</div>
      <div class="qd-xp">+${quest.xp} XP</div>
      <div class="qd-xp-sub">획득</div>
      <button class="btn-primary" style="max-width:200px;margin:0 auto;" onclick="closeModal();refreshAll();">맵으로 돌아가기</button>
    </div>`;

  updateHUD(); updateMap();
  if (newStage > prevStage) setTimeout(()=>showLevelUp(newStage), 700);
}
