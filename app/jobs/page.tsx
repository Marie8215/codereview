import GradientButton from "@/components/GradientButton/GradientButton";
import { Cards } from "./comp";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import Toggle from "@/components/Toggle/Toggle";
import { DropdownContent } from "@/components/Dropdown/DropdownContent";
import { stackOptions } from "@/store/onClient/store";
import StatsRow from "@/components/StatsRow/StatsRow";
import { wixMadeforText } from "../fonts";

export default function JobsPage() {
  return (
    <div className="w-[1022px] mx-auto">
      <h1 className="text-[26px] leading-[30px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] mb-5 text-neutral-800">
        Вакансии по Data Science
      </h1>
      <p className="text-[18px] leading-[22px] tracking-[-0.43px] font-medium mb-[50px]">
        На этой странице агрегируются junior-вакансии и стажировки из различных
        источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие
        другие
      </p>

      <div className="mb-[25px] flex gap-2 items-center">
        <GradientButton variant="light" size="normal" className="mr-2.5">
          Добавить вакансию
        </GradientButton>
        <Dropdown
          relative
          trigger={
            <span
              className={`
            text-[18px] 
            leading-[22px] 
            tracking-[-0.5px] 
            font-medium
            ${wixMadeforText.className}
          `}
            >
              Data Science
            </span>
          }
          buttonLike
        >
          <DropdownContent
            multiselect={false}
            items={stackOptions.map((item) => ({
              id: item,
              title: item,
            }))}
          />
        </Dropdown>
        <Dropdown
          relative
          trigger={
            <span
              className={`
            text-[18px] 
            leading-[22px] 
            tracking-[-0.5px] 
            font-medium
            ${wixMadeforText.className}
          `}
            >
              Источник
            </span>
          }
          buttonLike
        >
          <DropdownContent
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
        </Dropdown>
        <Dropdown
          relative
          trigger={
            <span
              className={`
            text-[18px] 
            leading-[22px] 
            tracking-[-0.5px] 
            font-medium
            ${wixMadeforText.className}
          `}
            >
              Город
            </span>
          }
          buttonLike
        >
          <div>Контент</div>
        </Dropdown>
        <Toggle buttonLike>
          <span
            className={`
            text-[18px]
            leading-[22px]
            tracking-[-0.5px]
            font-medium
            ${wixMadeforText.className}
          `}
          >
            Удаленно
          </span>
        </Toggle>
        <Toggle buttonLike>
          <span
            className={`
            text-[18px]
            leading-[22px]
            tracking-[-0.5px]
            font-medium
            ${wixMadeforText.className}
          `}
          >
            Стажировка
          </span>
        </Toggle>
      </div>
      <Cards />
    </div>
  );
}
