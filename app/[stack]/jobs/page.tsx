"use client";
import { Cards } from "./comp";
import { stackOptions } from "@/app/data/static-content";
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { notFound } from "next/navigation";
import { FilterRow } from "./FilterRow";

interface JobsPageProps {
  params: {
    stack: string;
  };
}

export default function JobsPage({ params }: JobsPageProps) {
  const currentStack = stackOptions.find(
    (stack) => stack.linkId === params.stack
  );

  if (!currentStack) {
    notFound();
  }

  return (
    <div className="md:w-[1022px] w-[345px] mx-auto md:mt-[100px] mt-[60px] ">
      <h1 className="text-[24px] leading-[28px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] md:mb-5 mb-[10px] text-neutral-800">
        Вакансии по {currentStack.title}
      </h1>
      <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.43px] font-medium md:mb-[50px] mb-[30px]">
        На этой странице агрегируются junior-вакансии{" "}
        <br className="md:hidden" />и стажировки из различных источников: hh.ru,
        Habr Career, LinkedIn, Telegram-каналы и многие другие
      </p>
      <FilterRow />
      <Cards />
      <div className="flex justify-center flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
        <ButtonLikeWrapper size="small">стажировка без опыта</ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">вакансии джуниор</ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">
          как откликнуться на вакансию
        </ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">
          примеры вакансий junior
        </ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">стажировки по Java</ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">
          Junior Java Developer
        </ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">
          Вакансии Java без опыта
        </ButtonLikeWrapper>
        <ButtonLikeWrapper size="small">
          Java Spring Boot вакансии
        </ButtonLikeWrapper>
      </div>
    </div>
  );
}
