"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="invitation p-8 text-center"><h1 className="text-2xl">초대장을 불러오지 못했습니다</h1><p className="my-6">잠시 후 다시 시도해 주세요.</p><button className="button" onClick={reset}>다시 시도하기</button></main>;
}
