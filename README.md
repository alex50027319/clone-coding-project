## 폴더 구조
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
      IconButton/      # 파란색 버튼
      ActionButton/    # 보조 버튼(아웃라인 등)
      SectionTitle/    # 섹션 제목/설명
      StatCard/        # 숫자 카드
      PromiseCard/     # 값(가치/약속) 카드
      PartnerLogo/     # 파트너 텍스트 로고
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

## 기술 스택

- **React** + **TypeScript**
- **styled-components** (섹션/버튼/타이포 등 스타일링)
- **Vite** (개발 서버 & 빌드)

---

