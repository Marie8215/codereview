"use client";

import { apiClient } from "@/api/ApiClient";
import { wixMadeforDisplay } from "@/app/fonts";
import { LinkedMap } from "@/common/LinkedMap";
import { userClientStore, VacancyLinkData } from "@/store/onClient/store";
import { useEffect, useRef } from "react";
import { VacancyLink } from "./VacancyLink";

interface SimilarVacanciesProps {
  currentVacancyId: number;
}

export const SimilarVacancies = ({
  currentVacancyId,
}: SimilarVacanciesProps) => {
  const jobsList = userClientStore((store) => store.jobsList);
  const stack = userClientStore((store) => store.selectedStack);
  const vacancyFilter = userClientStore((store) => store.jobsFilter);
  const setJobsList = userClientStore((store) => store.setJobsList);

  const prevFilterRef = useRef<typeof vacancyFilter | null>(null);
  const vacancy = jobsList?.get(currentVacancyId);

  useEffect(() => {
    const prevFilter = prevFilterRef.current;
    const isFilterChanged =
      JSON.stringify(prevFilter) !== JSON.stringify(vacancyFilter);

    if (!vacancy || isFilterChanged) {
      apiClient.vacancies
        .get({
          speciality: stack.filterId,
          remote: vacancyFilter.remote || undefined,
          internship: vacancyFilter.internship || undefined,
          location: vacancyFilter.city[0],
          source: vacancyFilter.sources[0],
          limit: 200,
        })
        .then((response) => {
          if (!response.isSuccess) {
            // пропускаем ошибку
            return;
          }

          const vacancyLinks = response.response?.items.map((x) => ({
            id: x.id,
            title: x.title,
            companyName: x.company_name,
          }));
          const linkedMap = new LinkedMap(vacancyLinks, (x) => x.id);
          setJobsList(linkedMap);
        });
    }
    prevFilterRef.current = vacancyFilter;
  }, [currentVacancyId, setJobsList, stack.filterId, vacancy, vacancyFilter]);

  const similar: VacancyLinkData[] =
    jobsList?.getNextN(currentVacancyId, 2)?.map((x) => x.value) ?? [];

  return (
    <div
      className={`bg-[#F6F6F6] rounded-[8px] p-[23px] md:p-[20px] mb-[40px] md:mb-20 ${wixMadeforDisplay.className}`}
    >
      <h3
        className={`font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#232325] mb-[20px]`}
      >
        Похожие вакансии
      </h3>

      <div className="flex flex-col gap-[15px]">
        {similar.length
          ? similar.map((vacancy, i) => (
              <div key={vacancy.id}>
                <VacancyLink
                  title={vacancy.title}
                  companyName={vacancy.companyName}
                  href={vacancy.id.toString()}
                />
                {i < similar.length - 1 && (
                  <div className="h-[1px] bg-[#EAEAEA] mt-[15px]" />
                )}
              </div>
            ))
          : "Это единственная вакансия по вашему фильтру"}
      </div>
    </div>
  );
};
