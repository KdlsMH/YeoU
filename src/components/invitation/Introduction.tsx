import { event } from "@/data/event";
export function Introduction() {
  return <section className="introduction" aria-labelledby="invitation-heading">
    <p className="small-label">{event.participationEligibility}</p>
    <h2 id="invitation-heading">{event.introduction}</h2>
  </section>;
}
