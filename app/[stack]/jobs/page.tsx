import { Metadata } from "next";
import { JobCards } from "./JobCards";
import { stackOptionsMap } from "@/app/data/static-content";
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { notFound } from "next/navigation";
import { JobsFilter } from "./JobsFilter";
import { apiClient } from "@/api/ApiClient";
import { ApiResponse } from "@/api/models/base";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";

interface JobsPageProps {
  params: Promise<{
    stack: string;
  }>;
  searchParams: Promise<JobsPageFilter>;
}

interface JobsPageFilter {
  remote?: string;
  internship?: string;
  city?: string;
  sources?: string;
  page?: string;
}

async function getSources(): Promise<ApiResponse<string[]>> {
  const response = await apiClient.vacancies.getSources();

  return response;
}

async function getLocations(): Promise<ApiResponse<string[]>> {
  const response = await apiClient.vacancies.getLocations();

  return response;
}

export async function generateMetadata({
  params,
}: JobsPageProps): Promise<Metadata> {
  const { stack } = await params;
  const currentStack = stackOptionsMap.get(stack);

  if (!currentStack) {
    return {
      title: "Страница не найдена | Codereview",
      description: "Запрашиваемая страница не найдена",
    };
  }

  return {
    title: `${currentStack.title} вакансии и стажировки | Поиск работы | Codereview`,
    description: `Актуальные вакансии и стажировки для ${currentStack.title}-разработчиков. Junior-позиции и стажировки с hh.ru, Habr Career, LinkedIn и других платформ.`,
  };
}

export default async function JobsPage({
  params,
  searchParams,
}: JobsPageProps) {
  const { stack } = await params;
  const { remote, internship, city, sources, page } = await searchParams;

  const currentStack = stackOptionsMap.get(stack);

  if (!currentStack) {
    notFound();
  }

  const pageSize = 7;

  const apiResponse = await apiClient.vacancies.get({
    speciality: currentStack?.filterId,
    remote: remote ? remote === "true" : undefined,
    internship: internship ? internship === "true" : undefined,
    location: city,
    source: sources,
    limit: pageSize,
    skip: page ? (Number(page) - 1) * pageSize : undefined,
  });

  // todo показать ошибку, если есть
  const data = apiResponse.response;

  const sourcesResponse = await getSources();
  const sourcesOptions = sourcesResponse.response || [];

  const locationsResponse = await getLocations();
  const locations = locationsResponse.response || [];

  return (
    <>
      <DefaultPageBackground />
      <div className="xl:w-[1022px] sm:w-[90%] w-[345px] mx-auto md:mt-[100px] mt-[60px] ">
        <h1 className="text-[24px] leading-[28px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] md:mb-5 mb-[10px] text-neutral-800">
          Вакансии по {currentStack.title}
        </h1>
        <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.43px] font-medium md:mb-[50px] mb-[30px]">
          На этой странице агрегируются junior-вакансии{" "}
          <br className="md:hidden" />и стажировки из различных источников:
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
        </p>
        <JobsFilter sources={sourcesOptions} locations={locations} />
        <JobCards
          data={data}
          currentPage={Number(page) || 1}
          baseUrl={`${stack}/jobs`}
        />
        <div className="flex sm:justify-center flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
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
