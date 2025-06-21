"use client";
import GradientButton from "@/components/GradientButton/GradientButton";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import Toggle from "@/components/Toggle/Toggle";
import StatsRow from "@/components/StatsRow/StatsRow";
import { wixMadeforText } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { DropdownList } from "@/components/Dropdown/DropdownList";
import { useStore } from "@/store/onClient/store";
import { stackOptions } from "@/app/data/static-content";
import { DropdownItem } from "@/components/Dropdown/DropdownContent";

export const FilterRow = () => {
  const router = useRouter();
  const pathname = usePathname();

  const selectedStack = useStore((state) => state.selectedStack);
  const setSelectedStack = useStore((state) => state.setSelectedStack);

  const handleStackChange = (item: DropdownItem) => {
    setSelectedStack(item.title) // todo
    const pathSegments = pathname.split("/").filter(Boolean);
    // Replace first segment (stack) and keep the rest
    const newPath = `/${item.id}/${pathSegments.slice(1).join("/")}`;
    router.push(newPath);
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
      <GradientButton variant="light" size="normal" className="mr-2.5">
        Добавить вакансию
      </GradientButton>
      <DropdownList
        relative
        trigger={<span>{selectedStack}</span>}
        buttonLike
        onSelect={(item) => handleStackChange(item)}
        items={stackOptions.map((item) => ({
          id: item.linkId,
          title: item.title,
        }))}
        multiselect={false}
      />

      <DropdownList
        relative
        trigger={<span>Источник</span>}
        buttonLike
        items={[
          {
            title: <StatsRow key={1} label={"Москва"} count={24} />,
            id: "1",
          },
          {
            title: <StatsRow key={2} label={"Москва"} count={24} />,
            id: "2",
          },
          {
            title: <StatsRow key={3} label={"Москва"} count={24} />,
            id: "3",
          },
          {
            title: <StatsRow key={4} label={"Москва"} count={24} />,
            id: "4",
          },
          {
            title: <StatsRow key={5} label={"Москва"} count={24} />,
            id: "5",
          },
          {
            title: <StatsRow key={6} label={"Москва"} count={24} />,
            id: "6",
          },
          {
            title: <StatsRow key={7} label={"Москва"} count={24} />,
            id: "7",
          },
          {
            title: <StatsRow key={8} label={"Москва"} count={24} />,
            id: "8",
          },
        ]}
      />
      <Dropdown relative trigger={<span>Город</span>} buttonLike>
        <div>Контент</div>
      </Dropdown>
      <Toggle buttonLike>
        <span>Удаленно</span>
      </Toggle>
      <Toggle buttonLike>
        <span>Стажировка</span>
      </Toggle>
    </div>
  );
};
