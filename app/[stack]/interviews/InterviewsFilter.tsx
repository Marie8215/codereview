"use client";

import { wixMadeforText } from "@/app/fonts";
import { useSearchParams } from "next/navigation";
import { DropdownList } from "@/components/Dropdown/DropdownList";
import { stackOptions } from "@/app/data/static-content";
import { InterviewsFilterState, userClientStore } from "@/store/onClient/store";
import { useEffect } from "react";
import { useSyncQueryParams } from "@/hooks/useSyncQueryParams";
import { useStackRoute } from "@/hooks/useStackRoute";

interface InterviewsFilterProps {
  gradeOptions?: string[];
  subStackOptions?: string[];
}

export const InterviewsFilter = ({
  gradeOptions,
  subStackOptions,
}: InterviewsFilterProps) => {
  const searchParams = useSearchParams();

  const filters = userClientStore((state) => state.interviewsFilter);
  const setFilters = userClientStore((state) => state.setIterviewsFilter);

  const [selectedStack, setSelectedStack] = useStackRoute();
  useSyncQueryParams(filters);

  const updateFilters = (
    key: keyof InterviewsFilterState,
    value: string | boolean | string[]
  ) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  useEffect(() => {
    const grade = searchParams.get("grade")?.split("&") || [];
    const subStack = searchParams.get("subStack")?.split("&") || [];

    setFilters({
      grade,
      subStack,
    });
  }, [searchParams, setFilters]);

  return (
    <div
      className={`md:mb-[25px] mb-[16px] md:flex md:gap-2
        md:items-center
        scrollbar-hide -mx-[20px] px-[20px]
        md:mx-0 md:px-0 flex items-center gap-[5px] flex-wrap
        ${wixMadeforText.className}
        font-medium md:text-[18px] text-[16px] md:leading-[22px] leading-[20px] tracking-[-0.5px] text-neutral-800`}
    >
      <DropdownList
        relative
        trigger={<span>{selectedStack.title}</span>}
        buttonLike
        items={stackOptions.map((item) => ({
          id: item.linkId,
          title: item.title,
          data: item,
        }))}
        multiselect={false}
        onSelect={(item) => setSelectedStack(item.data)}
      />
      <DropdownList
        relative
        buttonLike
        trigger="Стэк"
        onSelect={(_, selectedItems) =>
          updateFilters(
            "subStack",
            selectedItems.map((item) => item.id)
          )
        }
        items={
          subStackOptions?.map((subS) => ({
            title: subS,
            id: subS,
            data: subS,
          })) ?? []
        }
      />
      <DropdownList
        relative
        buttonLike
        trigger="Грейд"
        onSelect={(_, selectedItems) =>
          updateFilters(
            "grade",
            selectedItems.map((item) => item.id)
          )
        }
        activeIds={filters.grade}
        items={
          gradeOptions?.map((grade) => ({
            title: grade,
            id: grade,
            data: grade,
          })) ?? []
        }
      />
    </div>
  );
};
