import { Metadata } from "next";
import { VacancyCard } from "../../../../components/VacancyCard/VacancyCard";
import ButtonLikeWrapper from "../../../../components/ButtonLikeWrapper/ButtonLikeWrapper";
import { apiClient } from "@/api/ApiClient";
import { Vacancy } from "./Vacancy";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";

interface VacancyPageProps {
  params: Promise<{ id: string }>;
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
  const { id: vacancyId } = await params;

  const apiResponse = await apiClient.vacancies.getById(vacancyId);
  const vacancy = apiResponse.response;

  return (
    <>
      <DefaultPageBackground />
      <div className="w-full">
        <div className="w-full mx-auto max-w-[345px] md:max-w-[1020px] mt-[60px] md:mt-[100px] ">
          <div className="w-full md:flex md:flex-row md:gap-[60px]">
            <Vacancy
              content={vacancy?.description}
              datePublished={vacancy?.date_publication}
              title={vacancy?.title}
              remote={vacancy?.remote}
              internship={vacancy?.internship}
              salary={vacancy?.salary}
            />
            {/* Правый сайдбар */}
            <div className="w-full md:w-[300px]">
              <VacancyCard />
            </div>
          </div>
          <div className="flex justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
            <ButtonLikeWrapper size="small">вакансии джуниор</ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              как откликнуться на вакансию
            </ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              примеры вакансий junior
            </ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">вакансии по Java</ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              стажировки по Java
            </ButtonLikeWrapper>
          </div>
        </div>
      </div>
      {/* ...блок с тегами... */}
    </>
  );
}
