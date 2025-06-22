"use client";
import { PaginatedResponse } from "@/api/models/pagination";
import { Question } from "@/api/models/questions";
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { SophyPromoCardLong } from "@/components/SophyPromoCardLong/SophyPromoCardLong";
import Link from "next/link";
import { useWindowWidth } from "../jobs/JobCards";
import { useRef } from "react";

export interface QuestionCardProps {
  questions: PaginatedResponse<Question>;
}

export const QuestionsCards = ({ questions }: QuestionCardProps) => {
  const screenWidth = useWindowWidth();
  const cardsRef = useRef(null);

  return (
    <GradientOverlay
      cardHeight={screenWidth > 768 ? 76 : 113}
      childrenRef={cardsRef}
      className="mb-[56px]"
    >
      <div ref={cardsRef} className="flex flex-col gap-[10px] md:mb-[20px]">
        {questions.items
          .slice(0, Math.ceil(questions.items.length / 2))
          .map((question) => (
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
        {questions.items
          .slice(Math.ceil(questions.items.length / 2))
          .map((question) => (
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
    </GradientOverlay>
  );
};
