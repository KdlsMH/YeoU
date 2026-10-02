import { event } from "@/data/event";
import { DiscoBall } from "@/components/decorative/DiscoBall";
export function Hero() {
  return <header className="hero">
    <DiscoBall />
    <p className="hero-eyebrow">{event.eyebrow}</p>
    <div className="hero-title" aria-hidden="true">
      <span className="dinner"><i>F</i>OX DEN ·</span>
      <span className="join-us">PLEASE JOIN US</span>
      <span className="party"><i>Y</i>EAR-END</span>
    </div>
    <h1 className="hero-name">{event.title}</h1>
    <p className="hero-edition">{event.year} · YEAR-END WORKSHOP &amp; PARTY</p>
  </header>;
}
