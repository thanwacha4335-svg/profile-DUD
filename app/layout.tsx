import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUDSHOP777 | Official Profile",
  description: "เว็บไซต์โปรไฟล์อย่างเป็นทางการของ DUDSHOP777",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
