import { apiClient } from "@/api/ApiClient";
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { CardNextQuestion } from "../../../../components/CardNextQuestion/CardNextQuestion";
import { CardPromo } from "../../../../components/CardPromo/CardPromo";
import { Question } from "./Question";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";
import { questionTags } from "@/data/questionTagsDictionary";
import { stackOptionsMap } from "../../../data/static-content";

interface QuetionPageProps {
  params: Promise<{ id: string, stack: string }>;
}

export default async function QuestionPage({ params }: QuetionPageProps) {
  const { id: questionId, stack } = await params;

  const apiResponse = await apiClient.questions.getById(questionId);
  const question = apiResponse.response;

  const selectedStack = stackOptionsMap.get(stack);

  return (
    <>
      <DefaultPageBackground />
      <div className="w-full flex justify-center mt-[60px] md:mt-[100px] px-[15px]">
        <div className="w-full max-w-[1020px] flex flex-col md:flex-row md:gap-[60px]">
          <Question
            stack={question?.stack}
            title={question?.question || ""}
            content={question?.answer || question?.question}
          />
          <div className="w-full md:w-[300px] flex flex-col-reverse md:flex-col gap-0 mt-[40px] md:mt-0">
            <CardPromo />
            <CardNextQuestion currentQuestionId={Number(questionId)} selectedStack={selectedStack!} />
          </div>
        </div>
      </div>
      <div className="flex justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px] max-w-[1020px] mx-auto px-[15px]">
        {questionTags.map((tag, idx) => (
          <ButtonLikeWrapper size="small" key={idx}>
            {tag.label}
          </ButtonLikeWrapper>
        ))}
      </div>
    </>
  );
}