import type { Metadata } from "next";
import { Header } from "../components/Header/Header";
import "./globals.css";
import { Marquee } from "@/components/Marquee/Marquee";
import { Wix_Madefor_Text } from 'next/font/google';

export const metadata: Metadata = {
  title: "JunoJobs",
  description: "Поиск работы для IT-специалистов",
};

const wixMadeforText = Wix_Madefor_Text({
  subsets: ['latin'], // или ['latin', 'cyrillic'] если нужна кириллица
  weight: ['400', '500', '600', '700'], // укажи нужные веса
  variable: '--font-wix', // опционально: для использования через CSS переменную
  display: 'swap', // для улучшения перфоманса
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={wixMadeforText.className}>
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <footer>
          <Marquee text="Junojobs codereview" speed={40} />
        </footer>
      </body>
    </html>
  );
}
