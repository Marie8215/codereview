import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { SophyPromoCardLong } from "@/components/SophyPromoCardLong/SophyPromoCardLong";
import Pagination from "@/components/Pagination/Pagination";
import { FilterRow } from "./FilterRow";

export default function InterviewsPage() {
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
      <FilterRow />
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