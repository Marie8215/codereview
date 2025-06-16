import GradientButton from "@/components/GradientButton/GradientButton";
import { Cards } from "./comp";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import Toggle from "@/components/Toggle/Toggle";
import { DropdownContent } from "@/components/Dropdown/DropdownContent";
import { stackOptions } from "@/store/onClient/store";
import StatsRow from "@/components/StatsRow/StatsRow";
import { wixMadeforText } from "../fonts";
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";

export default function JobsPage() {
  return (
    <div className="md:w-[1022px] w-[345px] mx-auto md:mt-[100px] mt-[60px] ">
      <h1 className="text-[24px] leading-[28px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] md:mb-5 mb-[10px] text-neutral-800">
        Вакансии по Data Science
      </h1>
      <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.43px] font-medium md:mb-[50px] mb-[30px]">
        На этой странице агрегируются junior-вакансии{" "}
        <br className="md:hidden" />и стажировки из различных источников: hh.ru,
        Habr Career, LinkedIn, Telegram-каналы и многие другие
      </p>

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
        <Dropdown relative trigger={<span>Data Science</span>} buttonLike>
          <DropdownContent
            multiselect={false}
            items={stackOptions.map((item) => ({
              id: item,
              title: item,
            }))}
          />
        </Dropdown>
        <Dropdown relative trigger={<span>Источник</span>} buttonLike>
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
      <Cards />
      <div className="flex justify-center flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
        <ButtonLikeWrapper size="small">стажировка без опыта</ButtonLikeWrapper>
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
  );
}
