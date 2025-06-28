"use client";
import { PaginatedResponse } from "@/api/models/pagination";
import { Question } from "@/api/models/questions";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { SophyPromoCardLong } from "@/components/SophyPromoCardLong/SophyPromoCardLong";
import { WithPaginationContent } from "@/components/WithPaginationContent/WithPaginationContent";
import { useLocalStorageTokenListner } from "@/hooks/useLocalStorageTokenListner";
import Link from "next/link";
import { useRef } from "react";

export interface QuestionCardProps {
  data: PaginatedResponse<Question> | undefined;
  currentPage: number;
}

export const QuestionsCards = ({ data, currentPage }: QuestionCardProps) => {
  const cardsRef = useRef(null);
  useLocalStorageTokenListner();

  const questions = data?.items ?? [];

  const cardsGrid = (
    <div ref={cardsRef} className="flex flex-col gap-[10px] md:mb-[20px]">
      {questions.slice(0, Math.ceil(questions.length / 2)).map((question) => (
        <Link
          href={`interviews/${question.id}`}
          className="contents"
          key={question.id}
        >
          <QuestionCard
            key={question.id}
            title={question.question}
            stack={question.stack}
            frequency={question.freq}
          />
        </Link>
      ))}
      <SophyPromoCardLong />
      {questions.slice(Math.ceil(questions.length / 2)).map((question) => (
        <Link
          href={`interviews/${question.id}`}
          className="contents"
          key={question.id}
        >
          <QuestionCard
            title={question.question}
            stack={question.stack}
            frequency={question.freq}
          />
        </Link>
      ))}
    </div>
  );

  if (!questions.length) {
    return <p className="text-center mb-20 mt-10">по такому фильтру нет данных</p>;
  }

  const lastPageNumber = questions ? Math.ceil(data!.total / data!.limit) : 0;

  return (
    <WithPaginationContent
      cardsGrid={cardsGrid}
      lastPageNumber={lastPageNumber}
      currentPage={currentPage}
      refForOverlay={cardsRef}
      cardHeight={76}
      cardHeightDesktop={73}
      overlayType="questions" // явно указываем
    />
  );
};
