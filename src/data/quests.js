// ─────────────────────────────────────────
//  퀘스트 데이터
//  nurseChar: 간호사 캐릭터 키
//  patientChar: 환자 캐릭터 키 (없으면 null)
//  tags: 선택지별 성향 태그 (정답/오답과 별개)
// ─────────────────────────────────────────

const QUESTS = [

  // ════ CHAPTER 1: 단일 증상 인식 ════

  {
    id: 0,
    chapter: 1,
    title: '열이 나요',
    subtitle: '단일 증상 · 열',
    xp: 80,
    difficulty: 1,
    nurseChar: 'nurseThermometer',
    patientChar: 'patientBed',
    note: {
      title: '발열 환자 기본 대응',
      body: '발열 기준: 38.0°C 이상\n추가 확인: 오한, 발한, 동반 증상\n기본 대응: 체온 재확인 → 수분 섭취 → 담당의 보고\n기억: 열 하나라도 다른 징후가 있는지 함께 봐야 해요',
    },
    steps: [
      {
        scenario: '오전 10시, 609호 박민준 환자(55세, 당뇨 합병증 입원 2일째) 라운딩 중 말합니다.',
        quote: '"선생님, 아까부터 좀 오한이 나고 열이 있는 것 같아요."',
        vitals: [
          { label: '체온', value: '38.7°C', state: 'danger' },
          { label: '맥박', value: '98회/분', state: 'warn' },
          { label: '혈압', value: '128/80', state: 'ok' },
          { label: 'SpO₂', value: '97%', state: 'ok' },
        ],
        observations: null,
        question: '이 상황에서 먼저 해야 할 것은?',
        options: [
          { text: '38.7도면 미열이라 지켜봐도 괜찮다. 다음 라운딩 때 다시 확인한다.', correct: false, tags: ['안전형'] },
          { text: '체온을 다시 측정하고, 오한·발한 등 동반 증상을 추가로 확인한다.', correct: true, tags: ['관찰형', '근거형'] },
          { text: '바로 해열제를 투여한다.', correct: false, tags: ['행동형'] },
          { text: '보호자에게 먼저 연락한다.', correct: false, tags: ['협력형'] },
        ],
        feedbackCorrect: '맞아요! 발열이 확인되면 한 번 더 측정하고 동반 증상을 파악하는 게 첫 번째예요. 당뇨 환자는 감염에 취약해서 열 하나도 가볍게 넘기면 안 됩니다.',
        feedbackWrong: '38.7°C는 발열(38.0°C 이상) 기준을 넘어요. 지켜보거나 즉시 약을 주기보다, 먼저 재측정 + 동반 증상 확인이 우선이에요.',
      },
      {
        scenario: '체온을 다시 쟀더니 38.9°C, 오한과 가벼운 기침도 있습니다. 소변도 어제부터 색이 진하다고 합니다.',
        quote: null,
        vitals: [
          { label: '체온', value: '38.9°C', state: 'danger' },
          { label: '소변색', value: '진함', state: 'warn' },
        ],
        observations: ['오한 호소', '기침 (경미)', '소변색 짙음'],
        question: '지금 가장 가능성 있는 상황은?',
        options: [
          { text: '단순 감기일 가능성이 높다. 해열제 처방을 요청한다.', correct: false, tags: ['행동형'] },
          { text: '발열 + 소변이상 + 기침 = 감염 가능성. 담당의에게 SBAR로 보고한다.', correct: true, tags: ['근거형', '협력형'] },
          { text: '수액이 부족해서 그럴 수 있다. 수액 속도를 올린다.', correct: false, tags: ['행동형'] },
          { text: '당뇨 환자라 혈당이 올라서 그런 것 같다. 혈당부터 측정한다.', correct: false, tags: ['관찰형'] },
        ],
        feedbackCorrect: '정확해요! 발열 + 소변 이상 + 기침이 함께 오면 감염을 먼저 의심해야 해요. 당뇨 환자는 패혈증으로 빠르게 진행할 수 있어서 즉시 보고가 맞아요.',
        feedbackWrong: '단순 증상 하나가 아니라, 발열 + 소변색 변화 + 기침이 함께 있어요. 이 조합은 감염을 강하게 시사해요. 빠른 보고가 필요합니다.',
      },
    ],
  },

  {
    id: 1,
    chapter: 1,
    title: '숨이 차요',
    subtitle: '단일 증상 · 호흡',
    xp: 100,
    difficulty: 1,
    nurseChar: 'nurseStethoscope',
    patientChar: 'patientBreathing',
    note: {
      title: '호흡곤란 환자 핵심',
      body: 'SpO₂ < 94%, 호흡수 > 20회/분 → 위험\n보조호흡근 사용, 식은땀 = 즉각 대응 필요\n행동 순서: 산소 적용 → 즉시 보고 → SBAR\n신규간호사: 혼자 해결하려 하지 말 것',
    },
    steps: [
      {
        scenario: '오전 10시, 603호 김철수 환자(68세, 폐렴 3일째) 라운딩 중 말합니다.',
        quote: '"선생님… 아까부터 숨이 좀 차요."',
        vitals: [
          { label: 'SpO₂', value: '88%', state: 'danger' },
          { label: '호흡수', value: '28회/분', state: 'danger' },
          { label: '맥박', value: '108회/분', state: 'warn' },
          { label: '혈압', value: '138/88', state: 'ok' },
        ],
        observations: ['보조호흡근 사용', '식은땀', '안절부절못함'],
        question: '이 환자를 보고 가장 먼저 드는 생각은?',
        options: [
          { text: '체위를 바꿔드리고 다음 라운딩 때 다시 확인한다.', correct: false, tags: ['안전형'] },
          { text: '지금 상태가 정상이 아니다. 즉시 뭔가 해야 한다.', correct: true, tags: ['직관형', '관찰형'] },
          { text: '입원 중에 이런 증상은 흔하니까 차트를 먼저 확인한다.', correct: false, tags: ['근거형'] },
          { text: '보호자에게 먼저 연락해서 상황을 전달한다.', correct: false, tags: ['공감형'] },
        ],
        feedbackCorrect: 'SpO₂ 88%, 호흡수 28회, 보조호흡근 사용 — 세 가지 모두 위험신호예요. "뭔가 이상하다"는 직감을 믿는 것, 그게 첫 번째 임상 역량이에요.',
        feedbackWrong: 'SpO₂ 88%는 정상(94~100%)보다 훨씬 낮고, 호흡수 28회도 위험 범위예요. 식은땀과 보조호흡근 사용까지 더하면 즉각 반응이 필요한 상황이에요.',
      },
      {
        scenario: '위험하다고 판단했습니다. 지금 당장 첫 번째 행동은?',
        quote: null,
        vitals: null,
        observations: null,
        question: '나는 지금 무엇을 해야 하나?',
        options: [
          { text: '차트를 열어 최근 주치의 오더를 확인한다.', correct: false, tags: ['근거형'] },
          { text: '산소를 적용하고 담당 의사 또는 charge nurse에게 즉시 보고한다.', correct: true, tags: ['협력형', '안전형'] },
          { text: '환자를 안심시키고 잠시 변화를 관찰한다.', correct: false, tags: ['공감형'] },
          { text: '다른 환자 처치를 먼저 마무리한다.', correct: false, tags: ['안전형'] },
        ],
        feedbackCorrect: '맞아요! 산소 적용 → 즉시 보고가 핵심이에요. 혼자 판단하지 않고 에스컬레이션하는 것 자체가 실력이에요.',
        feedbackWrong: '호흡 곤란 환자는 기다릴 시간이 없어요. 산소 적용 → 즉시 보고, 이 순서가 정답이에요.',
      },
      {
        scenario: '담당 레지던트에게 전화로 보고합니다.',
        quote: null,
        vitals: null,
        observations: null,
        question: '가장 적절한 보고 방식은?',
        options: [
          { text: '"603호 환자 좀 이상한 것 같아요, 와서 봐주세요."', correct: false, tags: ['직관형'] },
          { text: '"603호 김철수 환자, 68세, 폐렴 3일째입니다. SpO₂ 88%, 호흡수 28회, 보조호흡근 사용 중이고 식은땀을 흘립니다. 호흡 상태가 악화된 것 같아 보고드립니다."', correct: true, tags: ['근거형', '협력형'] },
          { text: '"선생님 지금 바쁘세요? 603호 환자가 숨차다고 해서요."', correct: false, tags: ['공감형'] },
          { text: '"603호 환자 산소포화도가 떨어졌는데 어떻게 할까요?"', correct: false, tags: ['협력형'] },
        ],
        feedbackCorrect: '완벽한 SBAR 보고예요! 환자 이름·나이·진단·수치·증상·판단을 담았어요. 의사가 전화 한 통으로 결정을 내릴 수 있는 보고예요.',
        feedbackWrong: '보고할 때는 환자 이름 + 나이 + 진단 + 객관적 수치 + 현재 상태가 필요해요. 이것을 SBAR 보고라고 해요.',
      },
    ],
  },

  {
    id: 2,
    chapter: 1,
    title: '어지러워요',
    subtitle: '단일 증상 · 혈압/혈당',
    xp: 90,
    difficulty: 1,
    nurseChar: 'nurseChecking',
    patientChar: 'patientBed',
    note: {
      title: '어지럼증 환자 감별 포인트',
      body: '혈압 측정 필수 (기립성 저혈압 확인)\n혈당 측정 필수 (저혈당 70mg/dL 미만)\n낙상 위험 → 즉시 침대로, 혼자 이동 금지\n원인 파악 후 보고: 저혈압/저혈당/빈혈 등',
    },
    steps: [
      {
        scenario: '오후 2시, 화장실에서 나오던 512호 이순자 환자(72세, 고혈압 조절 입원)가 복도에서 벽을 짚고 서 있습니다.',
        quote: '"선생님, 갑자기 눈앞이 빙글빙글 도네요. 일어서다가 그랬어요."',
        vitals: [
          { label: '혈압(서있을때)', value: '88/52', state: 'danger' },
          { label: '맥박', value: '92회/분', state: 'warn' },
          { label: '혈당', value: '확인 안됨', state: 'warn' },
        ],
        observations: ['벽 짚고 서 있음', '얼굴 창백', '식은땀 약간'],
        question: '이 상황에서 가장 먼저 해야 할 것은?',
        options: [
          { text: '원인 파악을 위해 바로 혈압과 혈당을 측정한다.', correct: false, tags: ['관찰형', '근거형'] },
          { text: '환자를 즉시 침대나 휠체어로 앉히고 낙상을 예방한 뒤 활력징후를 측정한다.', correct: true, tags: ['안전형', '관찰형'] },
          { text: '수분 섭취를 권유하고 잠시 기다려본다.', correct: false, tags: ['공감형'] },
          { text: '의사에게 바로 전화한다.', correct: false, tags: ['협력형'] },
        ],
        feedbackCorrect: '맞아요! 어지럼증 환자의 첫 번째는 낙상 예방이에요. 서 있는 상태에서 쓰러지면 이차 손상이 생겨요. 앉힌 후에 수치를 봐야 해요.',
        feedbackWrong: '어지럼증 환자에서 가장 먼저 해야 할 것은 낙상 예방이에요. 일어서 있는 상태에서 갑자기 쓰러질 수 있어요. 먼저 앉히고 수치를 측정해야 해요.',
      },
    ],
  },

  // ════ CHAPTER 2: 복합 증상 판단 (잠김) ════
  {
    id: 3,
    chapter: 2,
    title: '두 가지가 동시에',
    subtitle: '복합 증상 · 호흡 + 의식',
    xp: 140,
    difficulty: 2,
    nurseChar: 'nurseChecking',
    patientChar: 'patientDrowsy',
    note: {
      title: '복합 증상 판단',
      body: '추후 추가 예정',
    },
    steps: [
      {
        scenario: '야간 순회 중 802호 환자가 평소보다 처져 있고 숨도 빠릅니다.',
        quote: '"…선생님, 좀 힘들어요." (목소리가 약함)',
        vitals: [
          { label: 'SpO₂', value: '91%', state: 'danger' },
          { label: '호흡수', value: '24회/분', state: 'danger' },
          { label: 'GCS', value: '13점', state: 'warn' },
          { label: '체온', value: '38.2°C', state: 'warn' },
        ],
        observations: ['반응 느림', '목소리 힘없음', '발열+호흡저하 동시'],
        question: '이 환자에서 가장 우려되는 상황은?',
        options: [
          { text: '단순 피로이다. 내일 아침 담당의에게 보고한다.', correct: false, tags: ['안전형'] },
          { text: '발열 + 호흡저하 + 의식 변화 = 패혈증 가능성. 즉시 보고한다.', correct: true, tags: ['근거형', '직관형'] },
          { text: '산소만 올려주면 충분하다.', correct: false, tags: ['행동형'] },
          { text: '가족에게 먼저 연락한다.', correct: false, tags: ['공감형', '협력형'] },
        ],
        feedbackCorrect: '맞아요! 이 세 가지 조합 - 발열 + 호흡수 증가 + 의식 저하는 패혈증의 대표 징후예요. 즉각 보고가 필요합니다.',
        feedbackWrong: '발열 + 호흡저하 + 의식 변화는 함께 보면 매우 위험한 조합이에요. 패혈증으로 진행할 수 있어서 즉시 보고해야 해요.',
      },
    ],
  },
];

// ── 레벨 시스템 ──
const LEVELS = [
  { level: 1, title: '신규 간호사',      minXP: 0    },
  { level: 2, title: '적응 중인 간호사', minXP: 200  },
  { level: 3, title: '경력 간호사',      minXP: 500  },
  { level: 4, title: '베테랑 간호사',    minXP: 900  },
  { level: 5, title: '수간호사',         minXP: 1400 },
];

function getLevelInfo(xp) {
  let info = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.minXP) info = l; }
  const idx = LEVELS.indexOf(info);
  const next = LEVELS[idx + 1];
  const prevXP = info.minXP;
  const nextXP = next ? next.minXP : prevXP + 500;
  const pct = Math.min(100, Math.round(((xp - prevXP) / (nextXP - prevXP)) * 100));
  return { ...info, nextXP, pct };
}

// ── 챕터별 퀘스트 분류 ──
const CHAPTERS = [
  { id: 1, title: '이상한 걸 알아채는 눈', sub: '단일 증상 인식' },
  { id: 2, title: '지금 뭐가 더 급한가',  sub: '복합 판단' },
  { id: 3, title: '말하고 연결하는 힘',   sub: 'SBAR 보고' },
  { id: 4, title: '왜 그렇게 하는가',     sub: '근거기반 판단' },
  { id: 5, title: '나는 어떤 간호사인가', sub: '간호 철학 완성' },
];

// ── 성향 태그 → 페르소나 ──
const PERSONAS = [
  {
    key: 'observer',
    title: '임상판단 전문가',
    tags: ['관찰형', '근거형'],
    msg: '수치 하나, 표정 하나를 놓치지 않는 눈을 가졌어요.\n데이터 기반으로 생각하는 이 능력이 위기 상황에서 팀을 지킵니다.',
    philosophy: '"나는 보이지 않는 것을 보는 간호사가 되고 싶다. 환자의 숫자 뒤에 있는 이야기를 읽는 것."',
  },
  {
    key: 'empath',
    title: '환자의 정신적 지주',
    tags: ['공감형', '안전형'],
    msg: '수치보다 사람을 먼저 보는 따뜻함이 있어요.\n환자가 두려울 때 가장 먼저 떠올리는 이름이 될 거예요.',
    philosophy: '"환자의 손을 잡는 것도 치료다. 나는 수치를 보기 전에 눈을 먼저 본다."',
  },
  {
    key: 'connector',
    title: '팀의 허브',
    tags: ['협력형'],
    msg: '혼자 해결하려 하지 않고, 적재적소에 연결하는 능력이 탁월해요.\n팀이 잘 돌아가게 만드는 간호사, 그게 당신이에요.',
    philosophy: '"좋은 간호사는 모든 걸 아는 사람이 아니라, 누구에게 물어야 하는지 아는 사람이다."',
  },
  {
    key: 'evidence',
    title: '근거기반 전문가',
    tags: ['근거형'],
    msg: '"왜?"라는 질문을 멈추지 않는 탐구형 간호사예요.\n프로토콜을 단순히 따르는 게 아니라 이해하고 적용하는 능력이 있어요.',
    philosophy: '"나는 습관이 아닌 이해로 간호한다. 매번 근거를 물어보는 것, 그게 나의 방식이다."',
  },
  {
    key: 'intuitive',
    title: '위기대응 리더',
    tags: ['직관형', '행동형'],
    msg: '상황을 빠르게 읽고 먼저 움직이는 결단력이 있어요.\n위기 상황에서 팀이 믿고 따라가는 사람이에요.',
    philosophy: '"생각하는 동안 환자는 기다리지 않는다. 나는 느끼고, 움직이고, 그리고 설명한다."',
  },
  {
    key: 'guardian',
    title: '안전수호자',
    tags: ['안전형', '관찰형'],
    msg: '오류 하나, 위험 하나를 절대 넘기지 않는 꼼꼼함이 있어요.\n이 병동이 안전한 이유 중 하나가 당신이에요.',
    philosophy: '"예방은 치료보다 강하다. 나는 작은 신호를 보는 것이 가장 중요한 기술이라 믿는다."',
  },
];

function getPersona(tagCounts) {
  let best = PERSONAS[0];
  let bestScore = 0;
  for (const p of PERSONAS) {
    const score = p.tags.reduce((s, t) => s + (tagCounts[t] || 0), 0);
    if (score > bestScore) { bestScore = score; best = p; }
  }
  return best;
}
