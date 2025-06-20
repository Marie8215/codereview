import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { DropdownContent } from "@/components/Dropdown/DropdownContent";
import { wixMadeforText } from "../fonts";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { stackOptions } from "@/store/onClient/store";
import StatsRow from "@/components/StatsRow/StatsRow";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { SophyPromoCardLong } from "@/components/SophyPromoCardLong/SophyPromoCardLong";
import Pagination from "@/components/Pagination/Pagination";

export default function QuestionPage() {
  return (
    <div className="md:w-[1022px] w-[345px] mx-auto md:mt-[100px] mt-[60px] ">
      <h1 className="text-[26px] leading-[30px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] md:mb-5 mb-[10px] text-neutral-800">
        Вопросы по JavaScript
        <br />
        на собеседовании
      </h1>
      <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.5px] font-medium md:mb-[50px] mb-[30px] line-clamp-3 md:line-clamp-none">
        Раздел помогает пользователям подготовиться к техническим и
        поведенческим интервью. Здесь собраны реальные вопросы, которые задают
        работодатели, а также готовые ответы и пояснения. Вопросы сгруппированы
        по стеку и уровню сложности
      </p>

      <div
        className={`md:mb-[25px] mb-[16px] md:flex md:gap-2
          md:items-center
          scrollbar-hide -mx-[20px] px-[20px]
          md:mx-0 md:px-0 flex items-center gap-[5px] flex-wrap
          ${wixMadeforText.className}
          font-medium md:text-[18px] text-[16px] md:leading-[22px] leading-[20px] tracking-[-0.5px] text-neutral-800`}
      >
        <Dropdown relative trigger={<span>Data Science</span>} buttonLike>
          <DropdownContent
            multiselect={false}
            items={stackOptions.map((item) => ({
              id: item,
              title: item,
            }))}
          />
        </Dropdown>
        <Dropdown relative trigger={<span>Стек</span>} buttonLike>
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
        <Dropdown relative trigger={<span>Грейд</span>} buttonLike>
          <div>Контент</div>
        </Dropdown>
      </div>
      <div className="flex flex-col gap-[10px] md:mb-[20px]">
        <QuestionCard
          title="В чем разница передачи параметров по ссылке и значению?"
          stack="Java"
          frequency={1490}
        />
        <QuestionCard
          title="Какие знаете шаблоны проектирования? Расскажите о двух шаблонах, используемых в работе."
          stack="Java"
          frequency={1050}
        />
         <QuestionCard
          title="Какие типы данных в Java? Чем отличается объект от простых типов данных?"
          stack="Python, Machine Learning"
          frequency={12}
        />
        <SophyPromoCardLong />
        <QuestionCard
          title="Как найти стажировку по Data Science?"
          stack="Python, Machine Learning"
          frequency={12}
        />
         <QuestionCard
          title="Как найти стажировку по Data Science?"
          stack="Python, Machine Learning"
          frequency={12}
        />
         <QuestionCard
          title="Как найти стажировку по Data Science?"
          stack="Python, Machine Learning"
          frequency={12}
        />
         <QuestionCard
          title="Какие признаки JavaBean?"
          stack="Java"
          frequency={94}
        />
      </div>
      <div className="flex justify-center md:mt-5 mt-[15px] md:mb-[60px] mb-[50px]">
        <Pagination lastPage={24} currentPage={1} />
      </div>
      <div className="flex md:justify-center justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
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