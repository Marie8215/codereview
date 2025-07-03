"use client";
import GradientButton from "@/components/GradientButton/GradientButton";
import Toggle from "@/components/Toggle/Toggle";
import { wixMadeforText } from "@/app/fonts";
import { DropdownList } from "@/components/Dropdown/DropdownList";
import { JobsFilterState, userClientStore } from "@/store/onClient/store";
import { stackOptions } from "@/app/data/static-content";
import { useSyncQueryParams } from "@/hooks/useSyncQueryParams";
import Link from "next/link";
import { useSyncStoreFilter } from "@/hooks/useSyncStoreFilter";

interface JobsFilterProps {
  sources: string[];
  locations: string[];
}

export const JobsFilter = ({ sources, locations }: JobsFilterProps) => {
  const filters = userClientStore((state) => state.jobsFilter);
  const setFilters = userClientStore((state) => state.setJobsFilter);

  const selectedStack = userClientStore((state) => state.selectedStack);
  const setSelectedStack = userClientStore((state) => state.setSelectedStack);

  useSyncQueryParams(filters);
  useSyncStoreFilter(filters, setFilters);

  const updateFilters = (
    key: keyof JobsFilterState,
    value: string | boolean | string[]
  ) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div
      className={`md:mb-[25px] mb-[16px] md:flex md:gap-2
        md:items-center
        scrollbar-hide -mx-[20px] px-[20px]
        md:mx-0 md:px-0 flex items-center gap-2 flex-wrap
        ${wixMadeforText.className}
        font-medium md:text-[18px] text-[16px] md:leading-[22px] leading-[20px] tracking-[-0.5px] text-neutral-800`}
    >
      <Link href="/jobs/create">
        <GradientButton variant="light" size="normal" className="mr-2.5">
          Добавить вакансию
        </GradientButton>
      </Link>

      <DropdownList
        relative
        buttonLike
        trigger={<span>{selectedStack.title}</span>}
        onSelect={(item) => setSelectedStack(item.data)}
        items={stackOptions.map((item) => ({
          id: item.linkId,
          title: item.title,
          data: item,
        }))}
        multiselect={false}
      />

      <DropdownList
        relative
        buttonLike
        trigger={<span>Источник</span>}
        onSelect={(_, selectedItems) =>
          updateFilters(
            "sources",
            selectedItems.map((item) => item.id)
          )
        }
        multiselect={true}
        items={sources.map((source) => ({
          title: source,
          count: 0,
          id: source,
          data: source,
        }))}
        activeIds={filters.sources}
      />
      <DropdownList
        relative
        buttonLike
        trigger={<span>Город</span>}
        onSelect={(_, selectedItems) =>
          updateFilters(
            "city",
            selectedItems.map((item) => item.id)
          )
        }
        multiselect={true}
        items={locations.map((location) => ({
          title: location,
          count: 0,
          id: location,
          data: location,
        }))}
        activeIds={filters.city}
      />
      <Toggle
        buttonLike
        checked={filters.remote}
        onChange={(value) => updateFilters("remote", value)}
      >
        <span>Удаленно</span>
      </Toggle>
      <Toggle
        buttonLike
        checked={filters.internship}
        onChange={(value) => updateFilters("internship", value)}
      >
        <span>Стажировка</span>
      </Toggle>
    </div>
  );
};
