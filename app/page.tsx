import "./vacancy-card.css";
import { PageLinksGrid } from "../components/PageLinkGrid/PageLinksGrid";
import { MainPageBackground } from "../components/Background/MainPageBackground";
import { StackOptions } from "@/components/StackOptions/StackOptions";
import { PageHeader } from "@/components/PageHeader/PageHeader";

export default function Home() {
  return (
    <>
      <MainPageBackground />
      <PageHeader
        title={
          <>
            <span className="md:-translate-x-1 -translate-x-0.5 inline-block z-0">
              Твой Ассистент
            </span>
            <br />
            по поиску работы
          </>
        }
        description="Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу"
      />
      <div className="mx-auto w-[345px] sm:w-[90%]">
        <StackOptions className="justify-center" />
      </div>
      <PageLinksGrid />
    </>
  );
}
