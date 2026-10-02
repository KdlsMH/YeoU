import { event } from "@/data/event";
import { CalendarButton } from "@/components/ui/CalendarButton";
export function EventDetails() {
  return <section aria-label="행사 일시와 장소" className="event-details">
    <dl className="event-grid">
      <div><dt>시작</dt><dd><time dateTime={event.startDateTime}>{event.date}<br /><span>{event.day} · {event.startTime}</span></time></dd></div>
      <div><dt>마무리</dt><dd><time dateTime={event.endDateTime}>{event.endDate}<br /><span>{event.endDay} · {event.endTime}</span></time></dd></div>
      <div className="event-venue"><dt>행사 장소</dt><dd>{event.venue}<br /><span>{event.address} · {event.floors}</span></dd></div>
    </dl>
    {event.startDateTime && event.endDateTime && <CalendarButton />}
  </section>;
}
