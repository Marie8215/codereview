import type { Metadata } from "next";
import { Header } from "../components/Header/Header";
import "./globals.css";
import { Footer } from "../components/Footer/Footer";
import { wixMadeforDisplay, wixMadeforText } from "./fonts";
import { AppInitialization } from "@/components/AppInitialization/AppInitialization";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Codereview | Платформа для поиска работы в IT",
  description:
    "Codereview - агрегатор вакансий и стажировок для начинающих IT-специалистов. Вакансии, стажировки, тестовые задания, собеседования и карьерные советы.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${wixMadeforText.className} ${wixMadeforDisplay.className}`}
    >
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={null}>
          <AppInitialization />
        </Suspense>
        <Header />
        <main className="flex-grow main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
