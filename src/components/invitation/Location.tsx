import { event } from "@/data/event";
import { CopyButton } from "@/components/ui/CopyButton";
export function Location() {
  return <section className="section location" aria-labelledby="location-heading">
    <p className="editorial-label" aria-hidden="true">MEET US HERE</p><h2 id="location-heading">오시는 길</h2>
    <p className="location-name">{event.venue}</p><p className="address">{event.address}<br />{event.floors}</p>
    <div className="actions"><CopyButton value={`${event.address} ${event.floors}`} label="주소 복사" />{event.mapUrl && <a className="button" href={event.mapUrl} target="_blank" rel="noopener noreferrer">지도에서 보기<span className="sr-only"> (새 창)</span></a>}</div>
    <div className="location-directions"><span className="station-mark" aria-hidden="true">M</span><p><strong>{event.station}</strong><br />{event.landmark}</p></div>
    <div className="practical-info">
      <details open><summary>지하철 · 입구 안내<span aria-hidden="true" /></summary><div className="details-content"><ol>{event.transportationInfo.map(p => <li key={p}>{p}</li>)}</ol>{event.entranceInfo.map(p => <p key={p}>{p}</p>)}</div></details>
      <details><summary>체크인 · 체크아웃<span aria-hidden="true" /></summary><div className="details-content">{event.checkInInfo.map(p => <p key={p}>{p}</p>)}</div></details>
      <details><summary>제휴 주차장 안내<span aria-hidden="true" /></summary><div className="details-content">{event.parkingInfo.map(parking => <article className="parking" key={parking.name}><h3>{parking.name}</h3><p>{parking.address}</p><ul>{parking.notes.map(note => <li key={note}>{note}</li>)}</ul></article>)}</div></details>
    </div>
    <a className="text-link venue-contact" href={`tel:${event.venueContact}`}>장소에 문의하기 <span>{event.venueContact}</span></a>
  </section>;
}
