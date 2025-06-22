import { RenderedArticle } from "../../../../components/RenderedArticle/RenderedArticle";
import { wixMadeforDisplay } from "@/app/fonts";
import JobProperties from "@/components/JobProperties/JobProperties";

export interface VacancyProps {
  content: string | undefined;
  datePublished?: string;
  title?: string;
  remote?: boolean;
  internship?: boolean;
  salary?: string;
}

export const Vacancy = ({
  content,
  datePublished,
  title,
  remote = false,
  internship = false,
  salary,
}: VacancyProps) => {
  const date = new Date(datePublished || "").toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full w-[341px] md:w-[660px]">
      {date && (
        <p
          className={`${wixMadeforDisplay.className} font-medium text-[16px] md:text-[18px] leading-[20px] md:leading-[22px] tracking-[-0.5px] text-[#636469] mb-[10px]`}
        >
          Опубликовано {date}
        </p>
      )}

      <h1
        className={`${wixMadeforDisplay.className} font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[30px] tracking-[-1px] md:tracking-[-0.5px] text-[#232325] mb-[20px] md:mb-[30px]`}
      >
        {title}
      </h1>
      <div className="flex gap-[12px] mb-[20px] justify-start">
        <JobProperties
          remote={remote}
          internship={internship}
          salary={salary}
        />
      </div>
      <div className="h-[1px] w-full bg-[#D4D5D7] mb-[30px]" />
      <RenderedArticle content={content} />

      {/* Main content */}
    </div>
  );
};
