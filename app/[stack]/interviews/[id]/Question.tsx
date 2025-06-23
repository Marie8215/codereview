import { AutosubscribePromo } from "@/components/AutosubscribePromo/AutosubscribePromo";
import { RenderedArticle } from "@/components/RenderedArticle/RenderedArticle";

export interface QuestionProps {
  content?: string | undefined;
  datePublished?: string;
  title?: string;
  stack?: string;
  company?: string;
}

export const Question = ({
  content,
  datePublished,
  title,
  stack,
  company,
}: QuestionProps) => {
  return (
    <div className="w-full md:w-[660px]">
      <div className="font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#636469] mb-[10px]">
        {(company || content || stack) &&
          `${company || "Встречается на собеседованиях"}  •  ${datePublished || "сегодня"}  •  ${stack || ""}`}
      </div>
      <h1 className="font-bold text-[22px] leading-[26px] tracking-[-1px] text-[#232325] mb-[20px]">
        {title || `Вопрос по стэку ${stack}`}
      </h1>
      <div className="text-[16px] leading-[22px] text-[#232325] mb-[30px]">
        <RenderedArticle
          content={content}
          promo={
            <AutosubscribePromo
              bgClassName="bg-[linear-gradient(90deg,_rgba(244,184,184,0.5)_0%,_rgba(227,179,234,0.5)_50%,_rgba(197,201,241,0.5)_100%)]"
              topText="Софи собрала все вопросы — тренируйся и получай офферы быстрее!"
            />
          }
        />
      </div>
    </div>
  );
};
