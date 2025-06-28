import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { apiClient } from "@/api/ApiClient";
import { InterviewsFilter } from "./InterviewsFilter";
import { stackOptionsMap } from "@/app/data/static-content";
import { notFound } from "next/navigation";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";
import { QuestionsCards } from "./QuestionsCards";
import { interviewTagsDictionary } from "@/data/interviewTagsDictionary";

interface InterviewPageProps {
  params: Promise<{
    stack: string;
  }>;
  searchParams: Promise<InterviewPageFilter>;
}

interface InterviewPageFilter {
  stack?: string;
  grade?: string;
  page?: string;
}

export default async function InterviewsPage(props: InterviewPageProps) {
  const { stack } = await props.params;
  const { stack: subStack, grade, page } = await props.searchParams;

  const currentStack = stackOptionsMap.get(stack);
  if (!currentStack) {
    notFound();
  }

  const pageSize = 7;

  const response = await apiClient.questions.get({
    stack: stack,
    position: grade,
    subStack: subStack,
    limit: 100,
    skip: page ? (Number(page) - 1) * pageSize : undefined,
  });

  const questions = response.response;

  const gradesResponse = await apiClient.questions.getGrades();
  const grades = gradesResponse.response;

  const stackKey = stack.toLowerCase().replace(/-/g, "") as keyof typeof interviewTagsDictionary;
  const tags = interviewTagsDictionary[stackKey] || [];

  return (
    <>
      <DefaultPageBackground />
      <div className="md:w-[1022px] w-[345px] mx-auto md:mt-[100px] mt-[60px] ">
        <h1 className="text-[26px] leading-[30px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] md:mb-5 mb-[10px] text-neutral-800">
          Вопросы по JavaScript
          <br />
          на собеседовании
        </h1>
        <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.5px] font-medium md:mb-[50px] mb-[30px] line-clamp-3 md:line-clamp-none">
          Раздел помогает пользователям подготовиться к техническим и
          поведенческим интервью. Здесь собраны реальные вопросы, которые задают
          работодатели, а также готовые ответы и пояснения. Вопросы
          сгруппированы по стеку и уровню сложности
        </p>
        <InterviewsFilter gradeOptions={grades} />
        <QuestionsCards data={questions} currentPage={Number(page) || 1} />

        <div className="flex md:justify-center justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
          {tags.map((tag, idx) => (
            <ButtonLikeWrapper size="small" key={idx}>
              {tag.label}
            </ButtonLikeWrapper>
          ))}
        </div>
      </div>
    </>
  );
}
