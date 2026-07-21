# NurseQuest v2 🏥

신규간호사를 위한 임상 판단 훈련 플랫폼

## 구조

```
nursequest-v2/
├── index.html
└── src/
    ├── styles/main.css            # 전체 스타일 (따뜻한 크림 테마)
    ├── characters/characters.js   # SVG 캐릭터 라이브러리
    ├── data/quests.js             # 퀘스트 데이터 + 레벨/페르소나 시스템
    └── components/
        ├── app.js                 # 상태 관리, HUD, 맵, 탭
        └── quest-engine.js        # 퀘스트 모달 렌더링
```

## 특징

- **빌드 없음** — index.html 바로 GitHub Pages 배포 가능
- **SVG 캐릭터** — 간호사/환자 일러스트 코드 내장 (이미지 파일 불필요)
- **성향 태그 시스템** — 선택지마다 숨겨진 태그 누적 → 최종 페르소나 도출
- **localStorage 자동 저장**

## 퀘스트 추가

`src/data/quests.js`의 QUESTS 배열에 추가:

```js
{
  id: 4,
  chapter: 1,
  title: '퀘스트 제목',
  subtitle: '부제목',
  xp: 100,
  difficulty: 1,           // 1~3 (별 개수)
  nurseChar: 'nurseThermometer',   // characters.js 키
  patientChar: 'patientBed',       // null 가능
  note: { title: '노트 제목', body: '내용\n줄바꿈은 \\n' },
  steps: [
    {
      scenario: '상황 설명',
      quote: '"환자 대사"',        // null 가능
      vitals: [                    // null 가능
        { label: 'SpO₂', value: '88%', state: 'danger' }
        // state: danger / warn / ok
      ],
      observations: ['증상1', '증상2'],  // null 가능
      question: '질문',
      options: [
        { text: '선택지', correct: false, tags: ['공감형'] },
        { text: '정답', correct: true, tags: ['관찰형', '근거형'] },
      ],
      feedbackCorrect: '정답 피드백',
      feedbackWrong: '오답 피드백',
    }
  ]
}
```

## 성향 태그 종류

| 태그 | 설명 |
|------|------|
| 관찰형 | 수치·신체 변화를 먼저 체크 |
| 공감형 | 환자 감정을 먼저 다룸 |
| 근거형 | 프로토콜·교과서 기반 판단 |
| 협력형 | 팀·선배에게 즉시 공유 |
| 직관형 | 빠른 전체 판단으로 행동 |
| 안전형 | 오류·위험 예방 최우선 |
| 행동형 | 빠르게 실행으로 옮기는 패턴 |

## 페르소나 결과 유형

- 임상판단 전문가 (관찰형 + 근거형)
- 환자의 정신적 지주 (공감형 + 안전형)
- 팀의 허브 (협력형)
- 근거기반 전문가 (근거형)
- 위기대응 리더 (직관형 + 행동형)
- 안전수호자 (안전형 + 관찰형)

## 캐릭터 키

| 키 | 설명 |
|----|------|
| nurseAnxious | 긴장한 신규 간호사 (시작 화면) |
| nurseConfident | 자신감 있는 간호사 (결과 화면) |
| nurseThermometer | 체온계 든 간호사 |
| nurseStethoscope | 청진기 든 간호사 |
| nurseChecking | 손 내밀어 확인하는 간호사 |
| patientBed | 침대에 누운 환자 (수액 포함) |
| patientBreathing | 앉아서 호흡 힘든 환자 |
| patientDrowsy | 처져있는 환자 |
