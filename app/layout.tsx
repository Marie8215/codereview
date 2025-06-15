import type { Metadata } from "next";
import { Header } from "../components/Header/Header";
import "./globals.css";
import { Marquee } from "@/components/Marquee/Marquee";
import { wixMadeforDisplay, wixMadeforText } from "./fonts";

export const metadata: Metadata = {
  title: "JunoJobs",
  description: "Поиск работы для IT-специалистов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${wixMadeforText.className} ${wixMadeforDisplay.className}`}>
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
