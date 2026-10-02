import { event } from "@/data/event";
import { SectionDivider } from "@/components/decorative/SectionDivider";
export function InvitationMessage() {
  return <section className="invitation-message section" aria-labelledby="message-heading">
    <SectionDivider /><p className="editorial-label" aria-hidden="true">A WARM INVITATION</p>
    <h2 id="message-heading">모시는 글</h2>
    <div className="message-copy">{event.description.map(p => <p key={p}>{p}</p>)}</div>
    <p className="signature">{event.organizer} 드림</p>
  </section>;
}
