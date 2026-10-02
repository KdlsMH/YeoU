import Link from "next/link";
export default function NotFound() {
  return <main className="invitation p-8 text-center"><h1 className="text-2xl">페이지를 찾을 수 없습니다</h1><p className="my-6">주소를 확인하거나 초대장으로 돌아가 주세요.</p><Link className="button" href="/">초대장으로 돌아가기</Link></main>;
}
