"use client";

import { apiClient } from "@/api/ApiClient";
import { wixMadeforDisplay } from "@/app/fonts";
import { LinkedMap } from "@/common/LinkedMap";
import { userClientStore } from "@/store/onClient/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { StackOption } from "../../app/data/static-content";

interface CardNextQuestionProps {
  currentQuestionId: number;
  selectedStack: StackOption;
}

export const CardNextQuestion = ({
  currentQuestionId,
  selectedStack,
}: CardNextQuestionProps) => {
  const questionsList = userClientStore((store) => store.questionsList);
  const setQuestionsList = userClientStore((store) => store.setQuestionsList);
  const interviewsFilter = userClientStore((store) => store.interviewsFilter);

  useEffect(() => {
    apiClient.questions
      .get({
        stack: selectedStack.filterId,
        subStack:
          interviewsFilter.subStack.length > 1
            ? interviewsFilter.subStack.join(",")
            : interviewsFilter.subStack[0] || undefined,
        position:
          interviewsFilter.grade.length > 1
            ? interviewsFilter.grade.join(",")
            : interviewsFilter.grade[0],
        limit: 200,
      })
      .then((response) => {
        if (!response.isSuccess) return;

        const questionLinks = response.response?.items.map((x) => ({
          id: x.id,
          title: x.question,
          stack: `${x.stack} • ${x.freq} упоминаний`,
        }));
        const linkedMap = new LinkedMap(questionLinks, (x) => x.id);
        setQuestionsList(linkedMap);
      });
  }, [
    currentQuestionId,
    interviewsFilter.grade,
    interviewsFilter.subStack,
    selectedStack.filterId,
    setQuestionsList,
  ]);

  // Получаем следующий вопрос
  const next = questionsList?.getNextN(currentQuestionId, 1)[0]?.value;

  return (
    <div
      className={`bg-[#F6F6F6] rounded-[8px] p-[23px] md:p-[20px] mb-[40px] md:mb-20 ${wixMadeforDisplay.className}`}
    >
      <div className="flex items-center justify-between mb-[20px]">
        <h3 className="font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#232325] m-0">
          Следующий вопрос
        </h3>
        {next && (
          <Image
            src="/images/arrow-gray-to-right.svg"
            alt="Arrow"
            width={16}
            height={16}
            priority
            className="md:block md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
          />
        )}
      </div>
      {next ? (
        <Link
          href={next.id.toString()}
          className="block font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] tracking-[-0.5px] text-[#232325] mb-[8px]"
        >
          {next.title}
          {next.stack && (
            <div className="font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#86888E]">
              {next.stack}
            </div>
          )}
        </Link>
      ) : (
        <p className="text-[#86888E] text-[16px] leading-[20px]">
          Это единственный вопрос по вашему фильтру
        </p>
      )}
    </div>
  );
};
