"use client";
import { useEffect, useRef, useState } from "react";
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setMessage("복사되었습니다");
      timer.current = setTimeout(() => setMessage(""), 1800);
    } catch { setMessage("복사하지 못했습니다. 표시된 내용을 직접 복사해 주세요."); }
  }
  return <div className="copy-control"><button className="button" type="button" onClick={copy}>{message === "복사되었습니다" ? message : label}</button><span className={message.startsWith("복사하지") ? "feedback" : "sr-only"} role="status">{message}</span></div>;
}
