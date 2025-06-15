import { Card } from "@/components/Card";
import {
  BriefcaseIcon,
  CalendarIcon,
  CodeAsteriskIcon,
  CodeIcon,
  FreeIcon,
  MessageIcon,
  MicrophoneIcon,
  PhotoContIcon,
  SparklesIcon,
  StackIcon,
} from "@/components/Icon/Icons";
import { MainScreenCard } from "@/components/MainScreenCard";
import Image from "next/image";

import "./vacancy-card.css";

// todo "понравишемся"?
export default function Home() {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/stars-background-main.svg')",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}
      />
      <div className="flex flex-col items-center">
        <Image
          src="/images/sophy-main.png"
          alt="Sophy"
          width={96}
          height={99}
          className="rounded-[666px]"
          priority
        />
        <h1 className="md:w-[436px] font-bold text-[50px] leading-[52px] tracking-[-1px] text-center mb-5">
          Твой Ассистент <br />по поиску работы
        </h1>
        <p className="md:w-[417px] font-medium text-[22px] leading-[26px] tracking-[-0.5px] text-center mb-20">
          Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу
        </p>
      </div>
      <div className="mx-auto lg:w-[1020px] w-[345px] sm:w-[90%]">
        <div className="grid gap-2 md:grid-cols-4 grid-cols-2">
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="Вакансии / Cтажировки"
            icon={<BriefcaseIcon />}
            text="Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ"
            hoverType="code"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title={
              <span>
                Необходимые
                <br />
                навыки
              </span>
            }
            icon={<StackIcon />}
            text="Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме"
            hoverType="code"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="Тестовые задания"
            icon={<CodeIcon />}
            gradient="light"
            text="Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио"
            hoverType="code"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="Собеседования"
            icon={<MicrophoneIcon />}
            hoverType="code"
            text="Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="IT-мероприятия"
            icon={<CalendarIcon />}
            gradient="dark"
            hoverType="code"
            text="Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="Пет-проекты"
            icon={<CodeAsteriskIcon />}
            hoverType="code"
            text="Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title={
              <span>
                Контакты
                <br />
                рекрутеров
              </span>
            }
            icon={<MessageIcon />}
            hoverType="code"
            text="Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование"
          />
          <MainScreenCard
            className="h-[150px] md:h-[280px]"
            title="ИИ инструменты"
            icon={<SparklesIcon />}
            hoverType="code"
            text="Подборка AI-тулзов для автоматизации, разработки и поиска работы — c описаниями и рейтингом полезности
"
          />
          <MainScreenCard
            className="col-span-full md:col-span-3 h-[121px] md:h-[157px]"
            title={
              <span className="md:text-2xl md:leading-[26px] text-base leading-[18px]">
                База резюме соискателей. Свяжитесь
                <br />с понравившемся кандидатами напрямую
              </span>
            }
            icon={<PhotoContIcon />}
            hoverType="stars-long"
          />
          <Card className="col-span-full md:col-span-1 h-[64px] md:h-[157px]">
            <div className="vacancy-card-container h-full bg-neutral-700">
              <div className="vacancy-card-bg"></div>
              <div className="vacancy-card-content flex flex-col justify-between md:p-5 p-[15px] h-full">
                <div className="flex justify-start">
                  <FreeIcon />
                </div>
                <div className="flex justify-start">
                  <span className="md:text-xl font-semibold md:leading-5 tracking-[-0.5px] align-bottom text-base leading-[18px] text-neutral-10">
                    <span>
                      Разместить
                      <br />
                      вакансию
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
