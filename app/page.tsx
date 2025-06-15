import Image from "next/image";

import "./vacancy-card.css";
import { PageLinksGrid } from "../components/PageLinkGrid/PageLinksGrid";
import { MainPageBackground } from "../components/Background/MainPageBackground";
import { StackOptions } from "@/components/StackOptions/StackOptions";

export default function Home() {
  return (
    <>
      <MainPageBackground />
      <div className="flex flex-col items-center max-w-[1000px] mx-auto z-0">
        <Image
          src="/images/sophy-main.png"
          alt="Sophy"
          width={96}
          height={99}
          className="rounded-[666px] mb-5"
          priority
        />
        <h1 className="md:w-[436px] text-[26px] leading-[30px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] text-center mb-5 with-display text-neutral-800">
          <span className="md:-translate-x-1 -translate-x-0.5 inline-block z-0">Твой Ассистент</span> <br />
          по поиску работы
        </h1>
        <p className="md:w-[417px] w-[279px] text-[18px] leading-[22px] tracking-[-0.5px] font-medium text-center md:mb-20 mb-12.5 md:text-[22px] md:leading-[26px]">
          Я собрала для тебя все в одном месте, чтобы ты смог быстро найти
          работу
        </p>
      </div>
      <div className="mx-auto">
        <StackOptions className="justify-center" />
      </div>
      <PageLinksGrid />
    </>
  );
}
