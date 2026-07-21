// ─────────────────────────────────────────
//  App — 상태 관리, HUD, 맵, 탭
// ─────────────────────────────────────────

const STORAGE_KEY = 'nursequest_v2';

let appState = {
  name: '',
  totalXP: 0,
  clearedQuests: [],
  streak: 0,
  bestStreak: 0,
  totalAnswers: 0,
  correctAnswers: 0,
  tagCounts: {},
  history: [],
  notes: [],
};

// ── 저장/로드 ──
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) Object.assign(appState, JSON.parse(raw));
  } catch(e) {}
}

// ── 시작 ──
function startApp() {
  const input = document.getElementById('nurseNameInput');
  const name  = input.value.trim();
  if (!name) { input.focus(); return; }
  appState.name = name;
  saveState();
  showApp();
}

function showApp() {
  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  updateHUD();
  updateMap();
}

// ── HUD ──
function updateHUD() {
  const xp   = appState.totalXP || 0;
  const info = getLevelInfo(xp);

  document.getElementById('hudLvBadge').textContent = `Lv ${info.level}  ${info.title}`;
  document.getElementById('xpBarFill').style.width  = info.pct + '%';
  document.getElementById('xpLabel').textContent    = `${xp} / ${info.nextXP} XP`;
  document.getElementById('hudStreak').textContent  = appState.streak || 0;
  document.getElementById('hudCleared').textContent = (appState.clearedQuests || []).length;
}

// ── 퀘스트 맵 ──
function updateMap() {
  const cleared = appState.clearedQuests || [];
  const list    = document.getElementById('chapterList');

  // 챕터별로 퀘스트 그룹화
  const chapterMap = {};
  QUESTS.forEach(q => {
    if (!chapterMap[q.chapter]) chapterMap[q.chapter] = [];
    chapterMap[q.chapter].push(q);
  });

  let html = '';

  CHAPTERS.forEach(ch => {
    const quests   = chapterMap[ch.id] || [];
    const chDone   = quests.filter(q => cleared.includes(q.id)).length;
    const chTotal  = quests.length;
    // 챕터 잠금: 첫 챕터는 항상 열림, 이후는 이전 챕터 퀘스트 전부 클리어
    const prevQuests = chapterMap[ch.id - 1] || [];
    const chLocked = ch.id > 1 && prevQuests.some(q => !cleared.includes(q.id));

    html += `<div class="chapter-card${chLocked ? ' locked' : ''}">`;
    html += `<div class="ch-header">
      <span class="ch-badge${chLocked ? ' locked' : ''}">Ch ${ch.id}</span>
      <span class="ch-title">${ch.title}</span>
      <span class="ch-progress">${chDone} / ${chTotal}</span>
    </div>`;

    if (chLocked) {
      html += `<div class="chapter-locked-msg">🔒 이전 챕터를 완료하면 열려요</div>`;
    } else {
      html += `<div class="quest-nodes">`;
      quests.forEach((quest, i) => {
        const isCleared  = cleared.includes(quest.id);
        const isUnlocked = quest.id === 0 || cleared.includes(quest.id - 1) ||
                           (i === 0); // 챕터 첫 번째는 챕터 잠금만 확인
        const nodeClass  = isCleared ? 'cleared' : isUnlocked ? 'unlocked' : 'locked';

        // 커넥터
        if (i > 0) {
          const prevCleared = cleared.includes(quests[i-1].id);
          html += `<div class="qn-conn${prevCleared ? ' lit' : ''}"></div>`;
        }

        html += `<div class="qn ${nodeClass}" id="qnode-${quest.id}" onclick="openQuest(${quest.id})">
          <div class="qn-circle">
            ${isCleared ? '<span class="qn-check">✓</span>' : quest.difficulty === 1 ? '🌱' : quest.difficulty === 2 ? '🌿' : '🌳'}
          </div>
          <div class="qn-label">${quest.title}</div>
        </div>`;
      });
      html += `</div>`;
    }

    html += `</div>`;
  });

  list.innerHTML = html;
}

// ── 탭 전환 ──
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  if (tab === 'progress') updateProgressTab();
  if (tab === 'notes')    updateNotesTab();
}

// ── 진행 탭 ──
function updateProgressTab() {
  const cleared  = (appState.clearedQuests || []).length;
  const total    = appState.totalAnswers  || 0;
  const correct  = appState.correctAnswers || 0;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) + '%' : '—';

  document.getElementById('statCleared').textContent    = cleared;
  document.getElementById('statAccuracy').textContent   = accuracy;
  document.getElementById('statBestStreak').textContent = appState.bestStreak || 0;
  document.getElementById('statXP').textContent         = appState.totalXP    || 0;

  const history = appState.history || [];
  const listEl  = document.getElementById('historyList');

  if (!history.length) {
    listEl.innerHTML = '<div class="empty-state">아직 완료한 퀘스트가 없어요.<br>첫 퀘스트를 시작해보세요! 🌱</div>';
    return;
  }

  listEl.innerHTML = history.map(h => `
    <div class="history-item">
      <div class="history-icon">🎯</div>
      <div style="flex:1">
        <div class="history-name">${h.questTitle}</div>
        <div class="history-date">${h.date}</div>
      </div>
      <div class="history-xp">+${h.xp} XP</div>
    </div>`).join('');
}

// ── 노트 탭 ──
function updateNotesTab() {
  const notes  = appState.notes || [];
  const listEl = document.getElementById('notesList');

  if (!notes.length) {
    listEl.innerHTML = '<div class="empty-state">📋<br><br>아직 기록된 노트가 없어요<br>퀘스트를 완료하면 여기 쌓여요</div>';
    return;
  }

  listEl.innerHTML = notes.map(n => `
    <div class="note-card">
      <div class="note-title">${n.title}</div>
      <div class="note-body">${n.body.replace(/\n/g, '<br>')}</div>
    </div>`).join('');
}

// ── 결과 화면 ──
function showResult() {
  const persona = getPersona(appState.tagCounts || {});
  const tags    = Object.entries(appState.tagCounts || {})
                        .sort((a,b) => b[1]-a[1])
                        .slice(0,6);

  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-result').classList.add('active');

  // 자신감 있는 간호사 캐릭터
  document.getElementById('resultChar').innerHTML = CHARS.nurseConfident();
  document.getElementById('resultPersona').textContent  = persona.title;
  document.getElementById('resultTag').textContent      = persona.tags.join(' + ');
  document.getElementById('resultMsg').innerHTML        = persona.msg.replace(/\n/g,'<br>');
  document.getElementById('resultPhilosophy').textContent = persona.philosophy;

  // 성향 pills
  const strong = persona.tags;
  document.getElementById('resultTraits').innerHTML = tags.map(([tag, cnt]) =>
    `<span class="trait-pill ${strong.includes(tag) ? 'strong' : ''}">${tag} ${cnt}회</span>`
  ).join('');
}

function goBackToMap() {
  document.getElementById('screen-result').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  refreshAll();
}

// ── 레벨업 팝업 ──
function showLevelUp(level) {
  const info = LEVELS.find(l => l.level === level);
  document.getElementById('luNum').textContent   = level;
  document.getElementById('luTitle').textContent = info ? info.title : '';
  const overlay = document.getElementById('levelupOverlay');
  overlay.classList.add('show');
  setTimeout(() => overlay.classList.remove('show'), 2500);
}

// ── 전체 새로고침 ──
function refreshAll() {
  updateHUD();
  updateMap();
  updateProgressTab();
  updateNotesTab();

  // 모든 퀘스트 클리어 시 결과 보기 버튼 제안
  const ch1Quests = QUESTS.filter(q => q.chapter === 1);
  const allCh1Done = ch1Quests.every(q => (appState.clearedQuests||[]).includes(q.id));
  if (allCh1Done && !document.getElementById('resultBtn')) {
    const mapTab = document.getElementById('tab-map');
    const btn = document.createElement('button');
    btn.id = 'resultBtn';
    btn.className = 'btn-primary';
    btn.style.marginTop = '20px';
    btn.textContent = '✨ 나의 간호 성향 결과 보기';
    btn.onclick = showResult;
    mapTab.appendChild(btn);
  }
}

// ── 초기화 ──
(function init() {
  loadState();

  // 시작 화면 캐릭터 삽입
  document.getElementById('startChar').innerHTML = CHARS.nurseAnxious();

  if (appState.name) {
    showApp();
  }
})();
