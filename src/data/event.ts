export type EventData = {
  title: string; formalTitle: string; eyebrow: string; year: string;
  date: string; day: string; endDate: string; endDay: string;
  startTime: string; endTime: string; startDateTime: string; endDateTime: string; timeZone: string;
  venue: string; address: string; floors: string;
  introduction: string; description: string[]; host: string; organizer: string;
  participationEligibility: string; contact: string; venueContact: string;
  sourceUrl: string; sourceCheckedAt: string;
  station: string; landmark: string;
  transportationInfo: string[]; entranceInfo: string[]; checkInInfo: string[];
  parkingInfo: { name: string; address: string; notes: string[] }[];
  notices: string[];
  schedule?: { time: string; title: string }[];
  participationFee?: string; bankAccount?: string; dressCode?: string; preparations?: string;
  rsvpDeadline?: string; rsvpUrl?: string; rsvpInstructions?: string; mapUrl?: string;
};

// 사실 정보의 유일한 출처: 아래 sourceUrl의 공개 초대장.
// 원문의 행사 종료(12:00)와 숙소 체크아웃(11:00)은 서로 다른 안내로 보존합니다.
// 신청 링크, 세부 프로그램, 회비, 계좌, 드레스코드는 원문에 없어 생략합니다.
export const event: EventData = {
  title: "여우굴 연말 정기총회",
  formalTitle: "2026 (주)여우굴 Year-End Workshop & Party",
  eyebrow: "연말 정기총회 · 파티 초대장",
  year: "2026",
  date: "2026년 12월 18일", day: "금요일",
  endDate: "2026년 12월 19일", endDay: "토요일",
  startTime: "오후 3시", endTime: "낮 12시",
  startDateTime: "2026-12-18T15:00:00+09:00", endDateTime: "2026-12-19T12:00:00+09:00",
  timeZone: "Asia/Seoul",
  venue: "부산 서면 플레이인더시티 2호점",
  address: "부산광역시 부산진구 서전로10번길 33", floors: "4층 및 5층",
  introduction: "따뜻한 온기와 소통을 나누는\n연말 파티에 초대합니다.",
  description: [
    "가을이 지나고 어느덧 2026년 한 해를 마무리하는 계절이 찾아왔습니다.",
    "올 한 해도 (주)여우굴의 성장과 발전을 위해 헌신해 주신 이사진 여러분의 노고에 진심으로 감사드립니다.",
    "바쁜 일상을 잠시 내려놓고 부산에서 따뜻한 온기와 소통을 나누고자 연말 파티를 개최합니다. 부디 참석하시어 자리를 빛내 주시기 바랍니다.",
  ],
  host: "(주)여우굴", organizer: "여우굴 이사회",
  participationEligibility: "(주)여우굴 전체 임직원",
  contact: "010-7997-4023", venueContact: "010-2085-7858",
  sourceUrl: "https://xchodae.com/x/gv0vji?v=1", sourceCheckedAt: "2026-10-02",
  station: "서면역 2번 출구", landmark: "컴포즈커피 서면역점 건물, 4층 체크인",
  transportationInfo: [
    "서면역 2번 출구로 나와 그대로 직진합니다.",
    "처음 보이는 ‘현풍 닭칼국수’ 골목으로 들어옵니다.",
    "약 30초 더 직진하면 정면에 건물이 보입니다. 1층에 컴포즈커피 서면역점과 HUMBLE 옷가게가 있습니다.",
    "옷가게 우측 계단을 이용해 4층으로 올라오시면 됩니다.",
  ],
  entranceInfo: [
    "지도 앱에서 ‘컴포즈커피 서면역점’을 검색하면 쉽게 찾아오실 수 있습니다.",
    "1층 HUMBLE 옷가게와 댄싱컵 매장 사이의 계단을 이용해 주세요. 체크인은 4층에서 진행합니다.",
    "4층과 5층의 출입 비밀번호는 모두 0202*입니다.",
  ],
  checkInInfo: [
    "예약 시간부터 체크인할 수 있습니다. 별도 연락 없이 예약 시간 이후 편하게 입실하시면 됩니다.",
    "원문 숙소 안내: 체크인 3:00~, 체크아웃 11:00까지.",
    "늦은 체크아웃은 시간당 10,000원으로 1:00까지 가능합니다. 필요한 경우 10시 이전에 미리 말씀해 주세요. 비용은 청소 담당자의 추가 근무비로 사용됩니다.",
  ],
  parkingInfo: [
    { name: "동보주차장", address: "부산 부산진구 중앙대로 704 동보프라자", notes: ["체크인부터 체크아웃까지, 2일에 걸친 주차 15,000원.", "타워주차장으로 SUV는 주차가 어렵습니다. 영업시간은 23:00까지입니다."] },
    { name: "남흥주차장", address: "부산 부산진구 중앙대로702번길 43 1층", notes: ["체크인부터 다음 날 오전 10시까지 20,000원.", "일반 차량과 SUV가 가능하지만 모하비·카니발 등 초대형 차량은 주차할 수 없습니다."] },
    { name: "서면 엔젤주차장", address: "중앙대로692번길 46-10 / 부전동 219-3", notes: ["주차할 때 바로 앞 펜션에 왔다고 말씀하셔야 제휴가가 적용됩니다.", "오후 6시부터 다음 날 낮 12시 출차 기준 10,000원. 일찍 도착하면 시간당 3,000원이 추가됩니다.", "타워에 입고 가능한 차량만 이용할 수 있습니다. 모하비·스타렉스·초대형 SUV는 주차가 어렵습니다.", "원문 참고: 주변 주차장은 일 주차 평균 20,000원, 대형 차량은 30,000원이 넘기도 합니다."] },
    { name: "서면 쌍용주차장", address: "동천로 70 / 전포동 683-11", notes: ["오후 3시 입고, 다음 날 오전 11시 출고 기준 일반 차량 15,000원, 노면주차가 필요한 대형 차량 20,000원.", "노면주차가 가능해 대형 차량도 이용할 수 있습니다.", "‘리조트인더시티(인더시티)’라고 꼭 말씀하셔야 제휴 가격으로 안내받을 수 있습니다."] },
  ],
  notices: ["무료 주차는 제공되지 않습니다. 아래 제휴 주차장 안내를 확인해 주세요.", "행사 종료는 19일 낮 12시이며, 숙소 안내에는 체크아웃이 11:00까지로 별도 기재되어 있습니다. 이용 시간은 주최 측에 확인해 주세요."],
};
