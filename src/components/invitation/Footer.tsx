import { event } from "@/data/event";
import { Sparkle } from "@/components/decorative/Sparkle";
export function Footer() {
  return <footer className="footer"><Sparkle /><p className="footer-script" aria-hidden="true">See you<br />at the table.</p><p>{event.organizer}</p><p className="editorial-label">{event.year} · YEAR END</p><a className="source-link" href={event.sourceUrl} target="_blank" rel="noopener noreferrer">기존 초대장 보기<span className="sr-only"> (새 창)</span></a></footer>;
}
