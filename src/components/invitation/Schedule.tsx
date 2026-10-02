import { event } from "@/data/event";
export function Schedule() {
  if (!event.schedule?.length) return null;
  return <section className="section" aria-labelledby="schedule-heading"><p className="editorial-label" aria-hidden="true">THE PROGRAM</p><h2 id="schedule-heading">행사 일정</h2><dl className="program">{event.schedule.map(item => <div key={`${item.time}-${item.title}`}><dt>{item.time}</dt><dd>{item.title}</dd></div>)}</dl></section>;
}
