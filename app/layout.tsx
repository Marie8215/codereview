import type { Metadata } from "next";
import { Header } from "../components/Header/Header";
import "./globals.css";
import { Footer } from "../components/Footer/Footer";
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
        <Header/>
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
