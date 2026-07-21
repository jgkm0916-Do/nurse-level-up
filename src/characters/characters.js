// ─────────────────────────────────────────
//  NurseQuest 캐릭터 SVG 라이브러리
//  각 함수는 SVG 문자열을 반환합니다
// ─────────────────────────────────────────

const CHARS = {

  // ── 시작 화면: 긴장한 신규 간호사 ──
  nurseAnxious: () => `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
  <!-- 모자 -->
  <rect x="52" y="28" width="56" height="18" rx="4" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="64" y="20" width="32" height="12" rx="3" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="76" y="22" width="8" height="8" rx="1" fill="#f08080"/>
  <line x1="80" y1="23" x2="80" y2="29" stroke="#fff" stroke-width="1.5"/>
  <line x1="77" y1="26" x2="83" y2="26" stroke="#fff" stroke-width="1.5"/>
  <!-- 머리 -->
  <ellipse cx="80" cy="58" rx="24" ry="26" fill="#f5c9a8"/>
  <!-- 머리카락 -->
  <ellipse cx="80" cy="40" rx="24" ry="14" fill="#6b4226"/>
  <ellipse cx="56" cy="55" rx="7" ry="12" fill="#6b4226"/>
  <ellipse cx="104" cy="55" rx="7" ry="12" fill="#6b4226"/>
  <ellipse cx="80" cy="40" rx="22" ry="12" fill="#7a4f2e"/>
  <!-- 묶은 머리 -->
  <circle cx="104" cy="50" r="6" fill="#6b4226"/>
  <!-- 긴장한 표정 -->
  <circle cx="72" cy="58" r="2.5" fill="#3d2b1f"/>
  <circle cx="88" cy="58" r="2.5" fill="#3d2b1f"/>
  <path d="M74 68 Q80 65 86 68" fill="none" stroke="#c4704a" stroke-width="1.5" stroke-linecap="round"/>
  <!-- 땀방울 -->
  <ellipse cx="98" cy="50" rx="3" ry="4" fill="#a8d8ea" opacity=".8"/>
  <path d="M98 48 Q100 52 98 54" fill="#a8d8ea" opacity=".6"/>
  <!-- 눈썹 (긴장) -->
  <path d="M69 53 Q72 51 75 53" fill="none" stroke="#6b4226" stroke-width="1.5"/>
  <path d="M85 53 Q88 51 91 53" fill="none" stroke="#6b4226" stroke-width="1.5"/>
  <!-- 볼 홍조 -->
  <ellipse cx="68" cy="64" rx="5" ry="3" fill="#f0a090" opacity=".5"/>
  <ellipse cx="92" cy="64" rx="5" ry="3" fill="#f0a090" opacity=".5"/>
  <!-- 몸 (흰 가운) -->
  <rect x="52" y="82" width="56" height="68" rx="12" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="62" y="78" width="16" height="10" rx="3" fill="#f5c9a8"/>
  <!-- 가운 포켓 -->
  <rect x="58" y="108" width="16" height="18" rx="4" fill="#f5f0eb" stroke="#e0d4cc" stroke-width="0.5"/>
  <!-- 청진기 -->
  <path d="M72 84 Q68 100 74 108" fill="none" stroke="#b0c8d8" stroke-width="2" stroke-linecap="round"/>
  <circle cx="74" cy="110" r="4" fill="none" stroke="#b0c8d8" stroke-width="1.5"/>
  <!-- 클립보드 (두 손으로 꽉 쥠) -->
  <rect x="86" y="94" width="28" height="36" rx="4" fill="#f9e8d4" stroke="#e0c8b0" stroke-width="1"/>
  <rect x="89" y="90" width="22" height="8" rx="2" fill="#c4704a"/>
  <line x1="91" y1="103" x2="111" y2="103" stroke="#e0c8b0" stroke-width="1"/>
  <line x1="91" y1="109" x2="111" y2="109" stroke="#e0c8b0" stroke-width="1"/>
  <line x1="91" y1="115" x2="105" y2="115" stroke="#e0c8b0" stroke-width="1"/>
  <!-- 팔 -->
  <rect x="36" y="84" width="18" height="32" rx="9" fill="#f5c9a8"/>
  <rect x="106" y="84" width="18" height="32" rx="9" fill="#f5c9a8"/>
  <!-- 손 (클립보드 잡기) -->
  <ellipse cx="114" cy="118" rx="7" ry="5" fill="#f5c9a8"/>
  <!-- 다리 -->
  <rect x="60" y="148" width="16" height="36" rx="8" fill="#f0f0f0"/>
  <rect x="84" y="148" width="16" height="36" rx="8" fill="#f0f0f0"/>
  <!-- 신발 -->
  <ellipse cx="68" cy="184" rx="10" ry="5" fill="#e0e0e0"/>
  <ellipse cx="92" cy="184" rx="10" ry="5" fill="#e0e0e0"/>
  <!-- 물음표 (긴장) -->
  <text x="118" y="72" font-size="18" fill="#c4704a" opacity=".7">?</text>
</svg>`,

  // ── 결과 화면: 자신감 있는 간호사 ──
  nurseConfident: () => `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="52" y="28" width="56" height="18" rx="4" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="64" y="20" width="32" height="12" rx="3" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="76" y="22" width="8" height="8" rx="1" fill="#f08080"/>
  <line x1="80" y1="23" x2="80" y2="29" stroke="#fff" stroke-width="1.5"/>
  <line x1="77" y1="26" x2="83" y2="26" stroke="#fff" stroke-width="1.5"/>
  <ellipse cx="80" cy="58" rx="24" ry="26" fill="#f5c9a8"/>
  <ellipse cx="80" cy="40" rx="24" ry="14" fill="#6b4226"/>
  <ellipse cx="56" cy="55" rx="7" ry="12" fill="#6b4226"/>
  <ellipse cx="104" cy="55" rx="7" ry="12" fill="#6b4226"/>
  <ellipse cx="80" cy="40" rx="22" ry="12" fill="#7a4f2e"/>
  <circle cx="104" cy="50" r="6" fill="#6b4226"/>
  <!-- 자신감 있는 표정 -->
  <circle cx="72" cy="57" r="2.5" fill="#3d2b1f"/>
  <circle cx="88" cy="57" r="2.5" fill="#3d2b1f"/>
  <!-- 반짝이는 눈 -->
  <circle cx="73" cy="56" r="1" fill="#fff"/>
  <circle cx="89" cy="56" r="1" fill="#fff"/>
  <!-- 미소 -->
  <path d="M72 66 Q80 72 88 66" fill="none" stroke="#c4704a" stroke-width="1.8" stroke-linecap="round"/>
  <!-- 눈썹 (자신감) -->
  <path d="M69 52 Q72 50 75 52" fill="none" stroke="#6b4226" stroke-width="1.5"/>
  <path d="M85 52 Q88 50 91 52" fill="none" stroke="#6b4226" stroke-width="1.5"/>
  <ellipse cx="68" cy="63" rx="5" ry="3" fill="#f0a090" opacity=".5"/>
  <ellipse cx="92" cy="63" rx="5" ry="3" fill="#f0a090" opacity=".5"/>
  <rect x="52" y="82" width="56" height="68" rx="12" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="62" y="78" width="16" height="10" rx="3" fill="#f5c9a8"/>
  <rect x="58" y="108" width="16" height="18" rx="4" fill="#f5f0eb" stroke="#e0d4cc" stroke-width="0.5"/>
  <path d="M72 84 Q68 100 74 108" fill="none" stroke="#b0c8d8" stroke-width="2"/>
  <circle cx="74" cy="110" r="4" fill="none" stroke="#b0c8d8" stroke-width="1.5"/>
  <!-- 한 손 엄지 위로 -->
  <rect x="36" y="84" width="18" height="32" rx="9" fill="#f5c9a8"/>
  <rect x="106" y="84" width="18" height="32" rx="9" fill="#f5c9a8"/>
  <ellipse cx="45" cy="108" rx="8" ry="6" fill="#f5c9a8"/>
  <rect x="41" y="94" width="8" height="16" rx="4" fill="#f5c9a8"/>
  <rect x="60" y="148" width="16" height="36" rx="8" fill="#f0f0f0"/>
  <rect x="84" y="148" width="16" height="36" rx="8" fill="#f0f0f0"/>
  <ellipse cx="68" cy="184" rx="10" ry="5" fill="#e0e0e0"/>
  <ellipse cx="92" cy="184" rx="10" ry="5" fill="#e0e0e0"/>
  <!-- 별 -->
  <text x="110" y="55" font-size="14" fill="#f0a020" opacity=".8">★</text>
  <text x="30" y="65" font-size="10" fill="#f0a020" opacity=".6">★</text>
</svg>`,

  // ── 퀘스트 1: 체온계 든 간호사 ──
  nurseThermometer: () => `
<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="38" y="12" width="44" height="14" rx="3" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="48" y="6" width="24" height="10" rx="2" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="57" y="7" width="6" height="6" rx="1" fill="#f08080"/>
  <line x1="60" y1="8" x2="60" y2="12" stroke="#fff" stroke-width="1.2"/>
  <line x1="58" y1="10" x2="62" y2="10" stroke="#fff" stroke-width="1.2"/>
  <ellipse cx="60" cy="38" rx="18" ry="20" fill="#f5c9a8"/>
  <ellipse cx="60" cy="24" rx="18" ry="10" fill="#7a4f2e"/>
  <ellipse cx="44" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <ellipse cx="76" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <circle cx="76" cy="32" r="5" fill="#6b4226"/>
  <circle cx="54" cy="38" r="2" fill="#3d2b1f"/>
  <circle cx="66" cy="38" r="2" fill="#3d2b1f"/>
  <path d="M56 46 Q60 49 64 46" fill="none" stroke="#c4704a" stroke-width="1.3" stroke-linecap="round"/>
  <ellipse cx="51" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <ellipse cx="69" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <rect x="38" y="56" width="44" height="52" rx="10" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="47" y="52" width="12" height="8" rx="2" fill="#f5c9a8"/>
  <!-- 오른팔 - 체온계 들기 -->
  <rect x="82" y="58" width="14" height="28" rx="7" fill="#f5c9a8" transform="rotate(20 82 58)"/>
  <!-- 체온계 -->
  <rect x="90" y="48" width="5" height="28" rx="2.5" fill="#e8f4f8" stroke="#b0c8d8" stroke-width="0.5"/>
  <rect x="91" y="65" width="3" height="10" rx="1.5" fill="#f08080"/>
  <circle cx="92.5" cy="76" r="4" fill="#f08080"/>
  <!-- 왼팔 -->
  <rect x="24" y="58" width="16" height="28" rx="8" fill="#f5c9a8"/>
  <rect x="42" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <rect x="66" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <ellipse cx="48" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
  <ellipse cx="72" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
</svg>`,

  // ── 퀘스트 2: 청진기 든 간호사 ──
  nurseStethoscope: () => `
<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="38" y="12" width="44" height="14" rx="3" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="48" y="6" width="24" height="10" rx="2" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="57" y="7" width="6" height="6" rx="1" fill="#f08080"/>
  <line x1="60" y1="8" x2="60" y2="12" stroke="#fff" stroke-width="1.2"/>
  <line x1="58" y1="10" x2="62" y2="10" stroke="#fff" stroke-width="1.2"/>
  <ellipse cx="60" cy="38" rx="18" ry="20" fill="#f5c9a8"/>
  <ellipse cx="60" cy="24" rx="18" ry="10" fill="#7a4f2e"/>
  <ellipse cx="44" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <ellipse cx="76" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <circle cx="76" cy="32" r="5" fill="#6b4226"/>
  <circle cx="54" cy="38" r="2" fill="#3d2b1f"/>
  <circle cx="66" cy="38" r="2" fill="#3d2b1f"/>
  <path d="M55 46 Q60 50 65 46" fill="none" stroke="#c4704a" stroke-width="1.3" stroke-linecap="round"/>
  <ellipse cx="51" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <ellipse cx="69" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <rect x="38" y="56" width="44" height="52" rx="10" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="47" y="52" width="12" height="8" rx="2" fill="#f5c9a8"/>
  <!-- 청진기 -->
  <path d="M55 58 Q48 70 50 82 Q52 90 60 90 Q68 90 70 82 Q72 70 65 58" fill="none" stroke="#8ab4c8" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="60" cy="92" r="6" fill="none" stroke="#8ab4c8" stroke-width="2"/>
  <circle cx="60" cy="92" r="3" fill="#8ab4c8"/>
  <!-- 이어피스 -->
  <circle cx="50" cy="58" r="3" fill="#8ab4c8"/>
  <circle cx="70" cy="58" r="3" fill="#8ab4c8"/>
  <!-- 팔 -->
  <rect x="24" y="58" width="16" height="28" rx="8" fill="#f5c9a8"/>
  <rect x="80" y="58" width="16" height="28" rx="8" fill="#f5c9a8"/>
  <rect x="42" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <rect x="66" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <ellipse cx="48" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
  <ellipse cx="72" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
</svg>`,

  // ── 퀘스트 3: 확인하는 간호사 (손 내밀기) ──
  nurseChecking: () => `
<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="38" y="12" width="44" height="14" rx="3" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="48" y="6" width="24" height="10" rx="2" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="57" y="7" width="6" height="6" rx="1" fill="#f08080"/>
  <line x1="60" y1="8" x2="60" y2="12" stroke="#fff" stroke-width="1.2"/>
  <line x1="58" y1="10" x2="62" y2="10" stroke="#fff" stroke-width="1.2"/>
  <ellipse cx="60" cy="38" rx="18" ry="20" fill="#f5c9a8"/>
  <ellipse cx="60" cy="24" rx="18" ry="10" fill="#7a4f2e"/>
  <ellipse cx="44" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <ellipse cx="76" cy="36" rx="5" ry="9" fill="#6b4226"/>
  <circle cx="76" cy="32" r="5" fill="#6b4226"/>
  <circle cx="54" cy="38" r="2" fill="#3d2b1f"/>
  <circle cx="66" cy="38" r="2" fill="#3d2b1f"/>
  <path d="M55 46 Q60 50 65 46" fill="none" stroke="#c4704a" stroke-width="1.3" stroke-linecap="round"/>
  <ellipse cx="51" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <ellipse cx="69" cy="43" rx="4" ry="2.5" fill="#f0a090" opacity=".5"/>
  <rect x="38" y="56" width="44" height="52" rx="10" fill="#ffffff" stroke="#e0d4cc" stroke-width="1"/>
  <rect x="47" y="52" width="12" height="8" rx="2" fill="#f5c9a8"/>
  <!-- 왼팔 앞으로 뻗기 -->
  <rect x="14" y="62" width="28" height="14" rx="7" fill="#f5c9a8" transform="rotate(-15 14 62)"/>
  <ellipse cx="18" cy="82" rx="8" ry="6" fill="#f5c9a8"/>
  <!-- 오른팔 -->
  <rect x="80" y="58" width="16" height="28" rx="8" fill="#f5c9a8"/>
  <rect x="42" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <rect x="66" y="108" width="12" height="28" rx="6" fill="#f0f0f0"/>
  <ellipse cx="48" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
  <ellipse cx="72" cy="136" rx="8" ry="4" fill="#e0e0e0"/>
</svg>`,

  // ── 환자 1: 침대에 누워있는 (열) ──
  patientBed: () => `
<svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
  <!-- 침대 프레임 -->
  <rect x="10" y="75" width="160" height="50" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
  <rect x="10" y="68" width="160" height="12" rx="4" fill="#d0dce8" stroke="#c0ccd8" stroke-width="1"/>
  <!-- 베개 -->
  <rect x="18" y="60" width="45" height="28" rx="8" fill="#ffffff" stroke="#e0d8d0" stroke-width="1"/>
  <!-- 이불 -->
  <rect x="18" y="82" width="148" height="36" rx="6" fill="#c8dce8" stroke="#b0c8d8" stroke-width="1"/>
  <!-- 이불 줄 -->
  <path d="M20 90 Q90 85 164 90" fill="none" stroke="#b0c8d8" stroke-width="1" opacity=".5"/>
  <!-- 침대 다리 -->
  <rect x="15" y="120" width="10" height="18" rx="3" fill="#c0ccd8"/>
  <rect x="155" y="120" width="10" height="18" rx="3" fill="#c0ccd8"/>
  <!-- 바퀴 -->
  <circle cx="20" cy="138" r="4" fill="#a0b0c0"/>
  <circle cx="160" cy="138" r="4" fill="#a0b0c0"/>
  <!-- 환자 머리 -->
  <ellipse cx="48" cy="56" rx="18" ry="18" fill="#f5c9a8"/>
  <ellipse cx="48" cy="42" rx="17" ry="10" fill="#5a3820"/>
  <ellipse cx="32" cy="50" rx="5" ry="8" fill="#5a3820"/>
  <circle cx="42" cy="56" r="2" fill="#3d2b1f"/>
  <circle cx="54" cy="56" r="2" fill="#3d2b1f"/>
  <!-- 힘든 표정 -->
  <path d="M44 63 Q48 61 52 63" fill="none" stroke="#a06040" stroke-width="1.3" stroke-linecap="round"/>
  <!-- 볼 홍조 (열) -->
  <ellipse cx="38" cy="61" rx="5" ry="3" fill="#f08060" opacity=".6"/>
  <ellipse cx="58" cy="61" rx="5" ry="3" fill="#f08060" opacity=".6"/>
  <!-- 땀 -->
  <ellipse cx="64" cy="46" rx="2.5" ry="3.5" fill="#a8d8ea" opacity=".7"/>
  <!-- 몸 (이불 밖) -->
  <rect x="30" y="72" width="34" height="14" rx="6" fill="#b8cce0"/>
  <!-- 수액줄 -->
  <line x1="150" y1="10" x2="150" y2="70" stroke="#b0c8d8" stroke-width="1.5"/>
  <rect x="143" y="8" width="14" height="22" rx="4" fill="#d8eef8" stroke="#b0c8d8" stroke-width="1"/>
  <line x1="150" y1="70" x2="80" y2="78" stroke="#b0c8d8" stroke-width="1" stroke-dasharray="3 2"/>
  <!-- 수액대 -->
  <line x1="150" y1="5" x2="150" y2="135" stroke="#c0c0c0" stroke-width="2"/>
  <line x1="138" y1="5" x2="162" y2="5" stroke="#c0c0c0" stroke-width="2"/>
  <circle cx="150" cy="135" r="6" fill="#b0b0b0"/>
</svg>`,

  // ── 환자 2: 앉아서 호흡 힘든 (호흡곤란) ──
  patientBreathing: () => `
<svg viewBox="0 0 140 170" xmlns="http://www.w3.org/2000/svg">
  <!-- 침대/의자 -->
  <rect x="20" y="110" width="100" height="45" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
  <rect x="20" y="105" width="100" height="10" rx="4" fill="#d0dce8"/>
  <rect x="15" y="148" width="8" height="20" rx="3" fill="#c0ccd8"/>
  <rect x="117" y="148" width="8" height="20" rx="3" fill="#c0ccd8"/>
  <!-- 등받이 -->
  <rect x="20" y="60" width="14" height="55" rx="5" fill="#d0dce8" stroke="#c0ccd8" stroke-width="1"/>
  <!-- 머리 -->
  <ellipse cx="80" cy="42" rx="22" ry="22" fill="#f5c9a8"/>
  <ellipse cx="80" cy="26" rx="20" ry="12" fill="#5a3820"/>
  <ellipse cx="60" cy="38" rx="6" ry="10" fill="#5a3820"/>
  <ellipse cx="100" cy="38" rx="6" ry="10" fill="#5a3820"/>
  <!-- 남성 환자 -->
  <circle cx="68" cy="42" r="2.2" fill="#3d2b1f"/>
  <circle cx="80" cy="42" r="2.2" fill="#3d2b1f"/>
  <!-- 힘들고 불안한 표정 -->
  <path d="M68 50 Q74 47 80 50" fill="none" stroke="#c06040" stroke-width="1.5" stroke-linecap="round"/>
  <!-- 볼 홍조 -->
  <ellipse cx="62" cy="47" rx="5" ry="3" fill="#f0a080" opacity=".4"/>
  <ellipse cx="86" cy="47" rx="5" ry="3" fill="#f0a080" opacity=".4"/>
  <!-- 입 (벌린 - 숨참) -->
  <ellipse cx="74" cy="51" rx="3" ry="2" fill="#d4957a" opacity=".6"/>
  <!-- 몸 (파자마) -->
  <rect x="50" y="62" width="60" height="52" rx="12" fill="#b8cce0" stroke="#a0b8cc" stroke-width="1"/>
  <rect x="62" y="58" width="16" height="10" rx="4" fill="#f5c9a8"/>
  <!-- 가슴 (보조호흡근 표현 - 선) -->
  <path d="M58 75 Q70 70 82 75" fill="none" stroke="#90a8bc" stroke-width="1" opacity=".6"/>
  <path d="M58 82 Q70 78 82 82" fill="none" stroke="#90a8bc" stroke-width="1" opacity=".6"/>
  <!-- 팔 -->
  <rect x="34" y="64" width="18" height="38" rx="9" fill="#b8cce0"/>
  <rect x="108" y="64" width="18" height="38" rx="9" fill="#b8cce0"/>
  <!-- 손 (무릎에 올린) -->
  <ellipse cx="43" cy="104" rx="10" ry="7" fill="#f5c9a8"/>
  <ellipse cx="117" cy="104" rx="10" ry="7" fill="#f5c9a8"/>
  <!-- 다리 -->
  <rect x="56" y="112" width="18" height="30" rx="6" fill="#b8cce0"/>
  <rect x="86" y="112" width="18" height="30" rx="6" fill="#b8cce0"/>
  <!-- 발 -->
  <ellipse cx="65" cy="142" rx="10" ry="5" fill="#a8b8c8"/>
  <ellipse cx="95" cy="142" rx="10" ry="5" fill="#a8b8c8"/>
  <!-- 호흡 표시 -->
  <path d="M105 45 Q110 40 115 45 Q120 50 115 55" fill="none" stroke="#c4704a" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
  <path d="M112 35 Q119 28 126 35 Q133 42 126 49" fill="none" stroke="#c4704a" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>
</svg>`,

  // ── 환자 3: 처져있는 (의식 저하) ──
  patientDrowsy: () => `
<svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
  <!-- 침대 -->
  <rect x="10" y="72" width="160" height="52" rx="8" fill="#e8eef5" stroke="#c8d4e0" stroke-width="1"/>
  <rect x="10" y="65" width="160" height="12" rx="4" fill="#d0dce8"/>
  <!-- 베개 -->
  <rect x="15" y="56" width="48" height="30" rx="8" fill="#ffffff" stroke="#e0d8d0" stroke-width="1"/>
  <!-- 이불 -->
  <rect x="15" y="80" width="150" height="36" rx="6" fill="#c8dce8"/>
  <!-- 침대 다리/바퀴 -->
  <rect x="15" y="118" width="10" height="16" rx="3" fill="#c0ccd8"/>
  <rect x="155" y="118" width="10" height="16" rx="3" fill="#c0ccd8"/>
  <circle cx="20" cy="134" r="4" fill="#a0b0c0"/>
  <circle cx="160" cy="134" r="4" fill="#a0b0c0"/>
  <!-- 환자 머리 (옆으로 살짝 기울) -->
  <ellipse cx="46" cy="54" rx="20" ry="20" fill="#f5d0b0"/>
  <ellipse cx="46" cy="38" rx="18" ry="11" fill="#888070"/>
  <ellipse cx="28" cy="48" rx="5" ry="9" fill="#888070"/>
  <!-- 감긴 눈 -->
  <path d="M36 54 Q42 57 48 54" fill="none" stroke="#5a4030" stroke-width="2" stroke-linecap="round"/>
  <path d="M50 54 Q56 57 62 54" fill="none" stroke="#5a4030" stroke-width="2" stroke-linecap="round"/>
  <!-- 힘없는 입 -->
  <path d="M40 62 Q46 63 52 62" fill="none" stroke="#a06040" stroke-width="1.3" stroke-linecap="round"/>
  <!-- 창백함 표현 -->
  <ellipse cx="36" cy="58" rx="6" ry="3.5" fill="#d4b090" opacity=".3"/>
  <ellipse cx="56" cy="58" rx="6" ry="3.5" fill="#d4b090" opacity=".3"/>
  <!-- 몸 -->
  <rect x="28" y="72" width="38" height="12" rx="5" fill="#b8cce0"/>
  <!-- zzz -->
  <text x="75" y="38" font-size="11" fill="#8ab0c8" opacity=".7">z</text>
  <text x="84" y="30" font-size="13" fill="#8ab0c8" opacity=".6">z</text>
  <text x="95" y="20" font-size="15" fill="#8ab0c8" opacity=".5">z</text>
</svg>`,

};

// 캐릭터 삽입 헬퍼
function insertChar(containerId, charKey) {
  const el = document.getElementById(containerId);
  if (el && CHARS[charKey]) {
    el.innerHTML = CHARS[charKey]();
  }
}
