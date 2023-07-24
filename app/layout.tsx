import OneDayFooter from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "鹿児島高専 e-スポーツクラブ 特設サイト",
  description: "鹿児島高専e-スポーツクラブの活動様子など",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
        <OneDayFooter />
      </body>
    </html>
  );
}
