import type { EventData } from "@/data/event";
const escapeText = (value: string) => value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
const utc = (value: string) => new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

// RFC 5545: 각 물리 행은 UTF-8 75바이트 이하, 다음 행은 공백으로 연결합니다.
function foldLine(line: string): string {
  const encoder = new TextEncoder();
  let output = "", length = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (length + size > 75) { output += "\r\n "; length = 1; }
    output += character; length += size;
  }
  return output;
}

export function createCalendar(event: EventData, now = new Date()): string {
  const start = Date.parse(event.startDateTime), end = Date.parse(event.endDateTime);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) throw new Error("행사 날짜와 시간을 확인해 주세요.");
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Yeougul//Invitation//KO", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "BEGIN:VEVENT",
    `UID:${new URL(event.sourceUrl).pathname.replaceAll("/", "-")}-${utc(event.startDateTime)}@yeougul-invitation`,
    `DTSTAMP:${utc(now.toISOString())}`, `DTSTART:${utc(event.startDateTime)}`, `DTEND:${utc(event.endDateTime)}`,
    `SUMMARY:${escapeText(event.title)}`, `LOCATION:${escapeText(`${event.venue}, ${event.address} ${event.floors}`)}`,
    `DESCRIPTION:${escapeText(`${event.formalTitle}\n${event.description.join("\n\n")}\n\n${event.notices.join("\n")}\n문의: ${event.contact}`)}`,
    `URL:${event.sourceUrl}`, "END:VEVENT", "END:VCALENDAR", "",
  ].map(foldLine).join("\r\n");
}
