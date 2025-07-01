import { Metadata } from "next";
import { VacancySideBlock } from "../../../../components/VacancySideBlock/VacancySideBlock";
import ButtonLikeWrapper from "../../../../components/ButtonLikeWrapper/ButtonLikeWrapper";
import { apiClient } from "@/api/ApiClient";
import { Vacancy } from "./Vacancy";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";
import { vacancyTagsDictionary } from "@/data/vacancyTagsDictionary";
import { stackOptionsMap } from "../../../data/static-content";

interface VacancyPageProps {
  params: Promise<{ id: string; stack: string }>;
}

export async function generateMetadata({
  params,
}: VacancyPageProps): Promise<Metadata> {
  const { id: vacancyId } = await params;
  const apiResponse = await apiClient.vacancies.getById(vacancyId);
  const vacancy = apiResponse.response;

  if (!vacancy) {
    return {
      title: "Вакансия не найдена | Codereview",
      description: "Запрашиваемая вакансия не найдена",
    };
  }

  return {
    title: `${vacancy.title} | ${vacancy.company_name} | Codereview`,
    description: `${vacancy.internship ? "Стажировка" : "Вакансия"} ${
      vacancy.title
    } в компании ${vacancy.company_name}. ${
      vacancy.remote ? "Удаленная работа" : ""
    } ${vacancy.salary ? `Зарплата ${vacancy.salary}` : ""}`,
  };
}

export default async function VacancyPage({ params }: VacancyPageProps) {
  const { id: vacancyId, stack } = await params;
  const apiResponse = await apiClient.vacancies.getById(vacancyId);
  const vacancy = apiResponse.response;

  // Получаем stack из URL (например, /java/jobs/123)
  let stackKey: keyof typeof vacancyTagsDictionary = "java";

  stackKey = stack
    ?.toLowerCase()
    .replace(/-/g, "") as keyof typeof vacancyTagsDictionary;

  const tags = vacancyTagsDictionary[stackKey] || [];

  const selectedStack = stackOptionsMap.get(stack)!;

  return (
    <>
      <DefaultPageBackground />
      <div className="w-full">
        <div className="w-full mx-auto max-w-[345px] lg:max-w-[1020px] md:max-w-[90%] mt-[60px] md:mt-[100px] ">
          <div className="w-full md:flex md:flex-row md:gap-[60px]">
            <Vacancy
              content={vacancy?.description}
              datePublished={vacancy?.date_publication}
              title={vacancy?.title}
              remote={vacancy?.remote}
              internship={vacancy?.internship}
              salary={vacancy?.salary}
            />
            <div className="w-full md:w-[300px]">
              <VacancySideBlock
                location={vacancy?.location}
                companyName={vacancy?.company_name}
                sourceLink={vacancy?.url}
                imageSrc={vacancy?.image || undefined}
                id={Number(vacancyId)}
                selectedStack={selectedStack}
              />
            </div>
          </div>
          <div className="flex justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
            {tags.map((tag, idx) => (
              <ButtonLikeWrapper size="small" key={idx}>
                {tag.label}
              </ButtonLikeWrapper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
