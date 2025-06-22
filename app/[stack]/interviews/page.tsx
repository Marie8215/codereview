import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { apiClient } from "@/api/ApiClient";
import { PaginatedResponse } from "@/api/models/pagination";
import { Question } from "@/api/models/questions";
import { InterviewsFilter } from "./InterviewsFilter";
import { stackOptionsMap } from "@/app/data/static-content";
import { notFound } from "next/navigation";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";
import { QuestionsCards } from "./QuestionsCards";

interface InterviewPageProps {
  params: Promise<{
    stack: string;
  }>;
  searchParams: Promise<InterviewPageFilter>;
}

interface InterviewPageFilter {
  stack?: string;
  grade?: string;
}

async function getQuestions(
  stack?: string,
  subStack?: string,
  grade?: string
): Promise<PaginatedResponse<Question>> {
  // const stackOption = stackOptionsMap.get(stack);

  const response = await apiClient.questions.get({
    stack: stack,
    position: grade,
    subStack: subStack,
    // position: filter?.grade,
  });

  return response.response!;
}

export default async function InterviewsPage(props: InterviewPageProps) {
  const { stack } = await props.params;
  const { stack: subStack, grade } = await props.searchParams;

  const currentStack = stackOptionsMap.get(stack);
  if (!currentStack) {
    notFound();
  }

  const questions = await getQuestions(stack, subStack, grade);

  const gradesResponse = await apiClient.questions.getGrades();
  const grades = gradesResponse.response;

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
        <QuestionsCards questions={questions} />
        {/* <div className="flex justify-center md:mt-5 mt-[15px] md:mb-[60px] mb-[50px]">
          <Pagination lastPage={24} currentPage={1} />
        </div> */}
        <div className="flex md:justify-center justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
          <ButtonLikeWrapper size="small">
            стажировка без опыта
          </ButtonLikeWrapper>
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
    </>
  );
}
