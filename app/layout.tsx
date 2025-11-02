import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "KẾ Media",
  description: "Agency sáng tạo – Quay chụp sản phẩm & video quảng cáo chuyên nghiệp"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen antialiased bg-white text-neutral-900 dark:bg-[#0d0d0d] dark:text-neutral-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
