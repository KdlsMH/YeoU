"use client";
import { useState } from "react";
import { event } from "@/data/event";
import { createCalendar } from "@/lib/calendar";
export function CalendarButton() {
  const [message, setMessage] = useState("");
  function download() {
    try {
      const url = URL.createObjectURL(new Blob([createCalendar(event)], { type: "text/calendar;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url; link.download = `${event.title}.ics`; document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      setMessage("캘린더 파일을 내려받았습니다. 파일을 열어 일정을 추가해 주세요.");
    } catch { setMessage("캘린더 파일을 만들지 못했습니다. 잠시 후 다시 시도해 주세요."); }
  }
  return <div className="calendar-control"><button className="calendar-button" type="button" onClick={download}><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><rect x="3" y="5" width="14" height="12" rx="1" /><path d="M6 2v5m8-5v5M3 9h14m-10 4h6m-3-3v6" /></svg>캘린더에 추가</button><p className="feedback" role="status">{message}</p></div>;
}
