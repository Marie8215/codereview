"use client";
import JobCard from "@/components/Card/Card";
import React, { useRef } from "react";
import SophyPromoCard from "@/components/Card/SophyPromoCard";
import { PaginatedResponse } from "@/api/models/pagination";
import { Vacancy } from "@/api/models/vacancy";
import { useLocalStorageTokenListner } from "@/hooks/useLocalStorageTokenListner";
import { WithPaginationContent } from "@/components/WithPaginationContent/WithPaginationContent";
import { getCardsWithSophyPromo } from "@/utils/getCardsWithSophyPromo"; // добавлен импорт

export interface JobCardsProps {
  data: PaginatedResponse<Vacancy> | undefined;
  baseUrl?: string;
  currentPage: number;
}

export const JobCards = ({ data, baseUrl, currentPage }: JobCardsProps) => {
  const refForOverlay = useRef<HTMLDivElement>(null);
  useLocalStorageTokenListner();

  const jobs =
    data?.items.map((job) => ({
      id: job.id.toString(),
      title: job.title,
      remote: job.remote,
      internship: job.internship,
      salary: job.salary,
      companyName: job.company_name,
      location: job.location,
      datePosted: job.date_publication,
    })) ?? [];

  const isDesktop =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true;

  const [isDesktopState, setIsDesktopState] = React.useState(isDesktop);

  React.useEffect(() => {
    const handler = () => {
      setIsDesktopState(window.matchMedia("(min-width: 768px)").matches);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const cardsWithPromo = getCardsWithSophyPromo(jobs, isDesktopState);

  const lastPageNumber = data ? Math.ceil(data.total / data.limit) : 0;

  const jobCardsGrid = (
    <div
      className="flex flex-row md:gap-y-4 gap-y-[10px] gap-x-[18px] flex-wrap justify-between"
      ref={refForOverlay}
    >
      {cardsWithPromo.map((item) =>
        item === "sophy" ? (
          <SophyPromoCard key="sophy-promo" />
        ) : (
          <JobCard key={item.id} data={item} baseUrl={baseUrl} />
        )
      )}
    </div>
  );

  if (!cardsWithPromo.length) {
    return (
      <p className="text-center mb-20 mt-10">по такому фильтру нет данных</p>
    );
  }

  return (
    <WithPaginationContent
      cardsGrid={jobCardsGrid}
      lastPageNumber={lastPageNumber}
      currentPage={currentPage}
      refForOverlay={refForOverlay}
      cardHeight={240}
      cardHeightDesktop={204}
      overlayType="jobs"
    />
  );
};
