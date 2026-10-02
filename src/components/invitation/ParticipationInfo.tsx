import { event } from "@/data/event";
import { CopyButton } from "@/components/ui/CopyButton";
export function ParticipationInfo() {
  const rows = [["행사명", event.formalTitle], ["참석 대상", event.participationEligibility], ["주최", event.host], ["주관", event.organizer], ["참가비", event.participationFee], ["준비물", event.preparations], ["드레스코드", event.dressCode], ["참석 마감", event.rsvpDeadline]];
  return <section className="section" aria-labelledby="participation-heading">
    <p className="editorial-label" aria-hidden="true">FOR OUR GUESTS</p><h2 id="participation-heading">참석 안내</h2>
    <dl className="info-list">{rows.filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    {event.bankAccount && <div className="account-info"><p>{event.bankAccount}</p><CopyButton value={event.bankAccount} label="계좌번호 복사" /></div>}
    <ul className="notices">{event.notices.map(notice => <li key={notice}>{notice}</li>)}</ul>
    <a className="text-link" href={`tel:${event.contact}`}>주최 측에 문의하기 <span>{event.contact}</span></a>
  </section>;
}
