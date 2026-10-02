import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Gowun_Batang } from "next/font/google";
import { event } from "@/data/event";
import "./globals.css";

const korean = Gowun_Batang({ weight: ["400", "700"], subsets: ["latin"], display: "swap", variable: "--font-korean" });
const editorial = Cormorant_Garamond({ weight: ["400", "500"], style: ["normal", "italic"], subsets: ["latin"], display: "swap", variable: "--font-editorial" });
const description = `${event.date} ${event.day}, ${event.venue}에서 열리는 ${event.title}에 초대합니다.`;
export const metadata: Metadata = {
  title: `${event.title} | ${event.host}`, description,
  openGraph: { title: event.title, description, locale: "ko_KR", type: "website" },
  twitter: { card: "summary", title: event.title, description },
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F4F1E7" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" className={`${korean.variable} ${editorial.variable}`}><body>{children}</body></html>;
}
