import IconWithText from "@/components/IconWithText/IconWithText";
import Image from "next/image";
import ButtonLikeWrapper from "../../../components/ButtonLikeWrapper/ButtonLikeWrapper";
import { AutosubscribePromo } from "@/components/AutosubscribePromo/AutosubscribePromo";
import { VacancyCard } from "../../../components/VacancyCard/VacancyCard";

export default function VacancyPage({ params }: { params: { id: string } }) {
  const tags = [
    "вакансии джуниор",
    "как откликнуться на вакансию",
    "примеры вакансий junior",
    "вакансии по Java",
    "стажировки по Java",
  ];

  return (
    <main className="min-h-screen bg-neutral-0">
      <div className="mx-[190px] mt-[100px] flex justify-between">
        {/* Left content */}
        <div className="max-w-[660px]">
          <div className="top-info h-[172px] flex flex-col justify-between mb-[20px]">
            <div>
              <p className="publish-date font-['Wix_Madefor_Display'] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#636469] mb-[10px]">
                Опубликовано 16.04.2025
              </p>

              <h1 className="vacancy-title font-bold text-[32px] leading-[38px] tracking-[-1px] text-[#232325]">
                Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)
              </h1>
            </div>

            <div className="flex items-center">
              <IconWithText
                icon={
                  <Image
                    src="/images/building-icon.svg"
                    alt="Office"
                    width={18}
                    height={18}
                    priority
                  />
                }
                text="в офис"
              />

              <div className="w-[12px]" />

              <IconWithText
                icon={
                  <Image
                    src="/images/briefcase-icon.svg"
                    alt="Employment type"
                    width={18}
                    height={18}
                    priority
                  />
                }
                text="стажировка"
              />

              <div className="w-[12px]" />

              <IconWithText
                icon={
                  <Image
                    src="/images/moneybag-icon.svg"
                    alt="Salary"
                    width={18}
                    height={18}
                    priority
                  />
                }
                text="от 50 000 ₽"
              />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#D4D5D7] mb-[30px]" />

          {/* Main content */}
          <div className="vacancy-content font-['Wix_Madefor_Display']">
            {/* About company */}
            <div className="mb-[30px]">
              <p className="text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                Компания IT_ONE запускает стажировку для будущих Java разработчиков,
                целью которой является подготовка специалистов уровня от Junior+ до
                Middle-.
              </p>
              <p className="text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325]">
                Наши стажеры смогут получить опыт работы в профессиональной среде,
                развить свои навыки под руководством высококвалифицированных
                специалистов и открыть новые возможности для своей карьеры в
                IT-индустрии.
              </p>
            </div>

            {/* About program */}
            <div className="mb-[30px]">
              <h2 className="font-bold text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                О программе:
              </h2>
              <ul className="list-disc pl-5 space-y-[8px] text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325]">
                <li>Период стажировки: июнь-август 2025;</li>
                <li>Продолжительность 3 месяца;</li>
                <li>Онлайн формат;</li>
                <li>До 30 часов в неделю;</li>
                <li>Обучение с тренером soft skills;</li>
                <li>
                  Работа над собственным проектом с ментором. Встречи раз в неделю по
                  2 часа;
                </li>
                <li>Материалы для изучения + домашние задания + контрольные работы;</li>
                <li>
                  Этапы отбора: отправка резюме -> заполнение анкеты -> собеседование
                  с рекрутером -> собеседование с техническим специалистом.
                </li>
              </ul>
            </div>

            {/* About candidate */}
            <div className="mb-[30px]">
              <h2 className="font-bold text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                Ожидания от кандидата:
              </h2>
              <p className="text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325]">
                Мы ищем выпускников технических вузов, которые имеют базовые знания
                Java Core, Spring Framework, SQL. Будет плюсом наличие опыта работы в
                технической сфере, а также в IT в целом и в разработке в частности.
              </p>
            </div>

            {/* Autosubscribe promo */}
            <div className="mb-[30px]">
              <AutosubscribePromo />
            </div>

            {/* Additional advantages */}
            <div className="mb-[30px]">
              <h2 className="font-bold text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                Дополнительное преимущество:
              </h2>
              <ul className="list-disc pl-5 space-y-[8px] text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325]">
                <li>Понимание ООП</li>
                <li>Понимание микросервисной архитектуры и многопоточности</li>
              </ul>
            </div>

            {/* What we offer */}
            <div className="mb-[60px]">
              <h2 className="font-bold text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                Что мы предлагаем после успешного прохождения стажировки:
              </h2>
              <ul className="list-disc pl-5 space-y-[8px] text-[18px] leading-[24px] tracking-[-0.5px] text-[#232325]">
                <li>
                  Официальное трудоустройство по ТК РФ в аккредитованную IT-компанию;
                </li>
                <li>Возможность удаленной работы из любого города;</li>
                <li>ДМС после прохождения испытательного срока;</li>
                <li>Работа в команде высококвалифицированных профессионалов;</li>
                <li>
                  Дополнительное обучение, библиотека, возможность посещения
                  конференций, вебинаров, тренингов;
                </li>
                <li>Корпоративные скидки от партнеров;</li>
                <li>Насыщенная корпоративная культура.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-[300px]">
          <VacancyCard />
        </div>
      </div>
    </main>
  );
}
