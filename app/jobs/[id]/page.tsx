import IconWithText from "@/components/IconWithText/IconWithText";
import Image from "next/image";
// import ButtonLikeWrapper from "../../../components/ButtonLikeWrapper/ButtonLikeWrapper";
import { AutosubscribePromo } from "@/components/AutosubscribePromo/AutosubscribePromo";
import { VacancyCard } from "../../../components/VacancyCard/VacancyCard";
import ButtonLikeWrapper from "../../../components/ButtonLikeWrapper/ButtonLikeWrapper";
import { wixMadeforDisplay } from "@/app/fonts";

export default function VacancyPage() {
  return (
    <>
      <div className="w-full">
        <div className="w-full mx-auto max-w-[345px] md:max-w-[1020px] mt-[60px] md:mt-[100px] ">
          <div className="w-full md:flex md:flex-row md:gap-[60px]">
            {/* Левый контент */}
            <div className="w-full w-[341px] md:w-[660px]">
              <p
                className={`${wixMadeforDisplay.className} font-medium text-[16px] md:text-[18px] leading-[20px] md:leading-[22px] tracking-[-0.5px] text-[#636469] mb-[10px]`}
              >
                Опубликовано 16.04.2025
              </p>

              <h1
                className={`${wixMadeforDisplay.className} font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[30px] tracking-[-1px] md:tracking-[-0.5px] text-[#232325] mb-[20px] md:mb-[30px]`}
              >
                Тестировщик Java/QA инженер <br className="hidden md:inline" />{" "}
                по автоматизированному тестированию{" "}
                <br className="hidden md:inline" /> Java с нуля (стажер)
              </h1>

              {/* Icons section */}
              <div className="flex gap-[12px] mb-[20px] justify-start">
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
                  size="small"
                />
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
                  size="small"
                />
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
                  size="small"
                />
              </div>

              <div className="h-[1px] w-full bg-[#D4D5D7] mb-[30px]" />

              {/* Main content */}
              <div
                className={`${wixMadeforDisplay.className} font-medium text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] md:mb-[15px] space-y-[30px]`}
              >
                {/* About company */}
                <div className="mb-[30px]">
                  <p className="mb-[15px]">
                    Компания IT_ONE запускает стажировку для будущих Java
                    разработчиков, целью которой является подготовка
                    специалистов уровня от Junior+ до Middle-.
                  </p>
                  <p>
                    Наши стажеры смогут получить опыт работы в профессиональной
                    среде, развить свои навыки под руководством
                    высококвалифицированных специалистов и открыть новые
                    возможности для своей карьеры в IT-индустрии.
                  </p>
                </div>

                {/* About program */}
                <div className="mb-[30px]">
                  <h2 className="font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                    О программе:
                  </h2>
                  <ul className="list-disc pl-5 space-y-[8px] translate-x-[4px] md:translate-x-[8px]">
                    <li>Период стажировки: июнь-август 2025;</li>
                    <li>Продолжительность 3 месяца;</li>
                    <li>Онлайн формат;</li>
                    <li>До 30 часов в неделю;</li>
                    <li>Обучение с тренером soft skills;</li>
                    <li>
                      Работа над собственным проектом с ментором. Встречи раз в
                      неделю по 2 <br className="md:hidden"/>часа;
                    </li>
                    <li>
                      Материалы для изучения + домашние задания + контрольные
                      работы;
                    </li>
                    <li>
                      {"Этапы отбора: отправка резюме -> заполнение анкеты -> собеседование" +
                        " с рекрутером -> собеседование с техническим специалистом."}
                    </li>
                  </ul>
                </div>

                {/* About candidate */}
                <div className="mb-[30px]">
                  <h2 className="font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                    Ожидания от кандидата:
                  </h2>
                  <ul className="list-disc pl-5 space-y-[8px] translate-x-[-2px] md:translate-x-[0px] ml-[8px]">
                    <li>
                      Мы ищем выпускников технических вузов, которые имеют
                      базовые знания Java Core, Spring Framework, SQL.
                    </li>
                    <li>
                      Будет плюсом наличие опыта работы в технической сфере, а
                      также в IT в целом и в разработке в частности.
                    </li>
                  </ul>
                </div>

                {/* Autosubscribe promo */}
                <div className="mb-[30px]">
                  <AutosubscribePromo />
                </div>

                {/* Additional advantages */}
                <div className="mb-[30px]">
                  <h2 className="font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                    Дополнительное преимущество:
                  </h2>
                  <ul className="list-disc pl-5 space-y-[8px] ml-[5px] md:ml-[8px]">
                    <li>Понимание ООП</li>
                    <li>
                      Понимание микросервисной архитектуры и многопоточности
                    </li>
                  </ul>
                </div>

                {/* What we offer */}
                <div className="mb-[30px] md:mb-[60px]">
                  <h2 className="font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] mb-[15px]">
                    Что мы предлагаем после успешного прохождения стажировки:
                  </h2>
                  <ul className="list-disc pl-5 space-y-[8px] ml-[5px] md:ml-[8px]">
                    <li>
                      Официальное трудоустройство по ТК РФ в аккредитованную
                      IT-компанию;
                    </li>
                    <li>Возможность удаленной работы из любого города;</li>
                    <li>ДМС после прохождения испытательного срока;</li>
                    <li>
                      Работа в команде высококвалифицированных профессионалов;
                    </li>
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
            {/* Правый сайдбар */}
            <div className="w-full md:w-[300px]">
              <VacancyCard />
            </div>
          </div>
          <div className="flex justify-start flex-wrap font-medium text-[14px] gap-2 leading-[18px] tracking-[-0.5px] text-neutral-800 mb-[20px]">
            <ButtonLikeWrapper size="small">
              вакансии джуниор
            </ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">как откликнуться на вакансию</ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              примеры вакансий junior
            </ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              вакансии по Java
            </ButtonLikeWrapper>
            <ButtonLikeWrapper size="small">
              стажировки по Java
            </ButtonLikeWrapper>
          </div>
        </div>
      </div>
      {/* ...блок с тегами... */}
    </>
  );
}
