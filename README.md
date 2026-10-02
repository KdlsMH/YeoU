# 여우굴 연말 정기총회 초대장

첨부된 종이 초대장의 크림색·블루 선화·세리프 분위기를 새 HTML/CSS/SVG로 구현한 모바일 초대장입니다. Next.js App Router, TypeScript, React, Tailwind CSS, next/font를 사용합니다. 별도 서버, 데이터베이스, API 키, 환경변수가 필요하지 않습니다.

## 실행

Node.js 22 이상과 npm을 사용합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## 행사 정보 출처

- 원본: https://xchodae.com/x/gv0vji?v=1
- 확인일: 2026년 10월 2일. 브라우저에서 전체 본문과 지도 펼침을 직접 확인했습니다.
- 행사: 여우굴 연말 정기총회 / 2026 (주)여우굴 Year-End Workshop & Party
- 시작: 2026년 12월 18일 금요일 오후 3시
- 종료: 2026년 12월 19일 토요일 낮 12시
- 장소: 부산 서면 플레이인더시티 2호점, 부산광역시 부산진구 서전로10번길 33, 4층 및 5층
- 대상: (주)여우굴 전체 임직원
- 주최: (주)여우굴, 여우굴 이사회
- 주최 연락처: 010-7997-4023 / 장소 연락처: 010-2085-7858
- 초대 메시지, 출입·입실 안내, 교통, 네 곳의 주차장 주소·조건·요금, 늦은 체크아웃 조건을 반영했습니다.

### 원문에 있는 차이와 누락

행사 종료는 12:00, 숙소 체크아웃 안내는 11:00입니다. 임의로 통일하지 않고 두 안내와 주최 측 확인 문구를 함께 제공합니다. 숙소 안내의 `3:00~`, `1:00`, `10시 이전` 표현도 추가로 오전/오후를 추정하지 않았습니다.

별도 RSVP/참석 신청 링크, 참석 마감, 회비, 계좌, 준비물, 드레스코드, 세부 프로그램은 확인되지 않아 표시하지 않습니다. 축하 메시지와 꽃 구매는 참석 신청이 아니므로 재구현하지 않았습니다. 기존 초대장 링크로 원 서비스를 확인할 수 있습니다.

원본에는 펼쳐지는 네이버 지도가 있지만 외부 길찾기 링크는 확인되지 않았습니다. 지도 이미지·스크립트를 복제하거나 임의 URL을 만들지 않았으며, 정확한 주소 복사와 원문의 지도 검색어를 제공합니다. `mapUrl`에 검증한 지도 링크를 넣으면 버튼이 나타납니다.

## 행사 수정

`src/data/event.ts`가 단일 행사 설정입니다. 행사명, 날짜·요일·시각, 주소, 대상, 주최, 연락처, 초대 메시지, 교통·주차·체크인·주의사항을 수정할 수 있습니다. 화면 표시용 날짜와 ISO 8601 날짜를 함께 수정해 주세요. 시간대는 `Asia/Seoul`, ISO 값의 오프셋은 `+09:00`입니다.

선택 필드: `schedule`, `participationFee`, `bankAccount`, `dressCode`, `preparations`, `rsvpDeadline`, `rsvpUrl`, `rsvpInstructions`, `mapUrl`. 실제 확인된 값만 넣으세요. 값이 없으면 해당 UI는 생략됩니다. RSVP는 외부 링크로만 연결하며 새 저장 API나 신청 완료 화면은 만들지 않습니다.

## 파일 구조

- `src/app/`: 페이지 구성, 한국어 metadata, 전역 스타일, 아이콘, 한국어 오류 페이지
- `src/data/event.ts`: 행사 사실 정보
- `src/components/invitation/`: Hero, 초대 메시지, 식탁 선화, 행사 표, 참석·교통 안내, 조건부 일정/RSVP, 푸터
- `src/components/decorative/`: 미러볼, 별, 구분선
- `src/components/ui/`: 복사, 캘린더 다운로드, 스크롤 등장 효과
- `src/lib/calendar.ts`: UTF-8 행 접기를 포함한 ICS 생성

기본은 Server Component입니다. 복사·캘린더·등장 효과·오류 복구만 Client Component를 사용합니다. 스크립트가 없어도 내용과 펼침 안내를 읽을 수 있습니다. 폰트는 무료 Gowun Batang과 Cormorant Garamond를 next/font로 빌드 시 내려받아 자체 제공합니다. 빌드에는 npm 및 Google Fonts 네트워크 접근이 필요합니다.

Open Graph 제목·설명과 `ko_KR`를 설정했습니다. 별도 OG 이미지 파일은 없으며 존재하지 않는 파일을 metadata에 참조하지 않습니다. 실제 이미지를 추가하려면 `public/og-image.png`를 넣고 `layout.tsx`의 Open Graph 설정에 추가하세요. 행사 초대장이므로 검색 엔진 색인은 비활성화했습니다.

## Vercel 배포

1. 이 폴더의 내용(`package.json`이 있는 위치)을 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project → Import Git Repository**를 선택합니다.
3. Framework Preset은 **Next.js**, Root Directory는 이 프로젝트 폴더로 설정합니다. 이 폴더만 저장소로 올렸다면 기본값을 사용합니다.
4. Build Command `npm run build`, Install Command `npm ci`, Node.js 22 이상을 사용합니다. Output Directory는 기본값을 유지합니다.
5. 환경변수 입력 없이 **Deploy**를 누릅니다.

상위 작업 폴더 전체를 GitHub에 올리는 경우 Root Directory는 `outputs/yeougul-invitation`입니다. Vercel 계정 연결·GitHub 업로드·실제 배포는 이번 작업에서 수행하지 않았습니다.

공식 배포 문서: https://vercel.com/docs/frameworks/full-stack/nextjs
