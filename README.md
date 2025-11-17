<img width="675" height="757" alt="image" src="https://github.com/user-attachments/assets/cd623190-8fe2-4bdb-b4d5-61251e6e32e8" /># Aolda Homepage (Lite)


---
## 폴더 구조 (핵심만)

```
src/
  pages/
    Introduction/
      index.tsx        # 페이지를 조립하는 곳(중앙 스위치)
      style.ts         # 공통 섹션 여백 등 간단 스타일

  components/
    organisms/         # 페이지의 '섹션(덩어리)'
      Header/          # 상단 로고/메뉴/버튼
      IntroSection/    # 인트로(히어로) + 오른쪽 퀵링크
      NumbersSection/  # 숫자로 보는 섹션
      ServiceInfoSection/  # 서비스 소개(간단 카피)
      PartnersSection/ # 파트너 로고 목록
      ValuesSection/   # "불편함 3가지"/"약속 3가지"
      Footer/          # 하단 영역(로고 + 주소 + 링크)

    molecules/         # 조립에 쓰이는 작은 블록
      BrandLogo/       # 로고(텍스트/마크)
      IconButton/      # 파란색 Pill 버튼(화살표 포함 가능)
      ActionButton/    # 보조 버튼(아웃라인 등)
      SectionTitle/    # 섹션 제목/설명
      StatCard/        # 숫자 카드
      PromiseCard/     # 값(가치/약속) 카드
      PartnerLogo/     # 파트너 텍스트 로고
      QuickLinkCard/   # 인트로 우측 카드
      QuickLinksPanel/ # QuickLinkCard 묶음 패널
      ValueIcon/       # 불편함/약속 아이콘(SVG)
```

---

메인 홈페이지-> `src/pages/Introduction/index.tsx`

1. **상단 헤더** (`Header`)
2. **인트로(히어로) 섹션** (`IntroSection`)
3. **숫자로 보는 섹션** (`NumbersSection`)
4. **서비스 소개 섹션** (`ServiceInfoSection`)
5. **파트너 섹션** (`PartnersSection`)
6. **우리의 가치/약속 섹션** (`ValuesSection`)
7. **하단 푸터** (`Footer`)

---

## 각 컴포넌트가 하는 일 (비개발 설명)

### Header (상단바)
- 왼쪽에 로고, 가운데 메뉴(텍스트), 오른쪽 "콘솔로 이동" 파란 버튼이 있습니다.
- 메뉴 버튼은 현재 페이지 내에서 이동하는 용도의 라벨(시각적)입니다.

### IntroSection
- **왼쪽**: 인트로 이미지를 크게 보여줍니다(`/public/day1.png`).
- **오른쪽**: 2개의 "퀵 링크 카드"(QuickLinksPanel)로 사용 설명/블로그 등 외부로 이동할 수 있습니다.
- 퀵링크 문구/URL은 `IntroSection/index.tsx` 상단 `quickLinks` 배열에서 변경합니다.

### NumbersSection
- "숫자로 보는 아올다" 카드를 3개 보여줍니다.
- 카드의 숫자/설명은 `NumbersSection/index.tsx` 상단의 `defaultStats`에서 바꿉니다.

### ServiceInfoSection
- 서비스의 한 줄 요약을 보여주는 간단한 소개 블록입니다.
- 문구는 해당 컴포넌트 파일의 `SectionTitle`에 직접 적혀 있습니다.

### PartnersSection
- 파트너(협력 단체) 이름을 나열합니다.
- 목록은 `partners` 배열에서 수정합니다.

### ValuesSection
- **위쪽**: "불편함 3가지" (파란 포인트 색)
- **아래쪽**: "약속 3가지" (빨간 포인트 색)
- 타이틀 일부만 색상을 다르게 강조하고, 각 항목은 카드 3개로 표시합니다.

**수정 위치:**
- 문구: `inconveniences`, `promises` 배열의 `title`, `description`
- 아이콘: `iconType`에 `free | instances | members | ban | account | wrench` 중 하나를 지정

### Footer
- **왼쪽**: 흰색 로고 이미지 `Logo_white.svg` + "Aolda" 텍스트, 그 아래 태그라인
- **오른쪽**: 주소 + 링크(이메일 안내/콘솔 안내/문서 안내)
- 로고 이미지는 `/public/Logo_white.svg`이며 크기는 20px로 맞춤

---

## 텍스트/이미지 바꾸는 법

| 항목 | 수정 위치 |
|------|----------|
| 헤더 로고 | `components/molecules/BrandLogo/` (혹은 `Footer`의 로고는 `/public/Logo_white.svg` 교체) |
| 퀵링크 카드 | `IntroSection/index.tsx` > `quickLinks` |
| 숫자 카드 | `NumbersSection/index.tsx` > `defaultStats` |
| 파트너 목록 | `PartnersSection/index.tsx` > `partners` |
| 가치/약속 카드 | `ValuesSection/index.tsx` > `inconveniences`, `promises` |
| 색상·폰트 | `src/styles/theme.ts` (필요 시) |

---

## 기술 스택

- **React** + **TypeScript**
- **styled-components** (섹션/버튼/타이포 등 스타일링)
- **Vite** (개발 서버 & 빌드)

---

