import { event } from "@/data/event";
export function RSVP() {
  if (!event.rsvpUrl) return null;
  return <section className="section rsvp" aria-labelledby="rsvp-heading"><p className="editorial-label" aria-hidden="true">YOU ARE INVITED</p><h2 id="rsvp-heading">함께해 주실래요?</h2>{event.rsvpInstructions && <p>{event.rsvpInstructions}</p>}{event.rsvpDeadline && <p>참석 신청 마감: {event.rsvpDeadline}</p>}<a className="button" href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">참석 신청하기<span className="sr-only"> (새 창)</span></a></section>;
}
