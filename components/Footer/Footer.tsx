"use client";
import { wixMadeforText } from "../../app/fonts";
import { BlackDuckIcon } from "../Icon/Icons";
import { Marquee } from "../Marquee/Marquee";

export const Footer = () => {
  return (
    <footer className={`w-full ${wixMadeforText.className}`}>
      {/* Бегущая строка */}
      <Marquee
        text={
          <div className="flex items-center gap-2">
            Этим сайтом пользуется больше 30.000 человек каждый месяц
            <span className="contents">
              <BlackDuckIcon />
            </span>
            Сайт был сделан джунами с нашего карьерного трека
            <span className="contents">
              <BlackDuckIcon />
            </span>
          </div>
        }
        speed={40}
      />

      {/* Основной черный блок */}
      <div
        className="w-full bg-neutral-800 h-[659px] md:h-[403px]"
        style={{
          backgroundImage: "url('/images/bg-footer.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "100% auto",
        }}
      >
        {/* Желтый блок - добавлены pt-[20px] и px-[15px] для мобильной версии */}
        <div className="h-full pt-[20px] md:pt-[60px] px-[15px] md:px-[110px]">
          <div className="w-full md:w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-[233px] h-[287px] md:h-full order-1 md:order-2 flex flex-col justify-between">
              {/* Логотип */}
              <div className="text-[#86888E] text-[20px] md:text-[30px] leading-[20px] md:leading-[30px] font-semibold tracking-[-1px] text-left md:text-right w-full mt-0">
                {"<codereview />"}
              </div>

              {/* Контейнер для телефона и почты */}
              <div className="flex flex-col items-start md:items-end md:text-right">
                <div className="text-[#F6F6F6] text-[20px] md:text-[24px] leading-[24px] md:leading-[26px] font-semibold tracking-[-0.5px] mt-0 md:mt-[60px]">
                  +7 (499) 110-82-76
                </div>
                <div className="text-[#86888E] text-[16px] md:text-[18px] leading-[18px] md:leading-[22px] font-semibold tracking-[-0.5px] mt-[10px]">
                  yourcodereview@gmail.com
                </div>
              </div>
            </div>

            {/* Фиолетовый блок */}
            <div className="w-full md:w-[734px] mt-[20px] md:mt-0 order-2 md:order-1 flex flex-col md:flex-row md:items-center">
              {/* Мобильная версия */}
              <div className="md:hidden flex flex-row w-full mb-[30px]">
                <div className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px] flex flex-col space-y-4">
                  <span>Программа тестирования</span>
                  <span>Тарифы</span>
                  <span>Команда</span>
                  <span>О нас</span>
                  <span>Блог</span>
                </div>
                <div className="text-[#F6F6F6] text-[16px] leading-[18px] font-normal tracking-[-0.5px] flex flex-col space-y-4 ml-[40px]">
                  <span>Вакансии</span>
                  <span>Запись</span>
                  <span>Отзывы</span>
                  <span>Вопросы и ответы</span>
                </div>
              </div>

              {/* Карточка для мобильной версии */}
              <div className="md:hidden bg-[#232325] w-full h-[120px] rounded-[8px] flex flex-col items-center justify-center">
                <div className="text-center">
                  <p className="text-[#F6F6F6] text-[16px] leading-[18px] font-medium tracking-[-0.5px]">
                    На какую зарплату я могу претендовать?
                  </p>
                  <p className="text-[#86888E] text-[16px] leading-[18px] font-medium tracking-[-0.5px] mt-[50px]">
                    Пройти тест
                  </p>
                </div>
              </div>

              {/* Десктоп версия */}
              <div className="hidden md:flex w-full mb-[30px] md:mb-0">
                <div className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px] flex flex-col space-y-4">
                  <span className="mb-3">Программа и тестирование</span>
                  <span className="mb-3">Тарифы</span>
                  <span className="mb-3">Команда</span>
                  <span className="mb-3">О нас</span>
                  <span className="mb-3">Блог</span>
                </div>
                <div className="ml-[50px] text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px] flex flex-col space-y-4">
                  <span className="mb-3">Вакансии</span>
                  <span className="mb-3">Запись</span>
                  <span className="mb-3">Отзывы</span>
                  <span className="mb-3">Вопросы и ответы</span>
                </div>
                <div className="ml-[50px] bg-[#232325] w-[152px] h-[158px] rounded-[8px] flex flex-col">
                  <div className="px-[15px] pt-[15px] text-left">
                    <p className="text-[#F6F6F6] text-[16px] leading-[18px] font-medium tracking-[-0.5px]">
                      На какую зарплату я могу претендовать?
                    </p>
                    <p className="text-[#86888E] text-[16px] leading-[18px] font-medium tracking-[-0.5px] mt-[50px]">
                      Пройти тест
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Розовый блок */}
          <div className="w-full h-[178px] md:h-[105px] md:w-[1180px] mx-auto mt-[20px] md:mt-[60px] relative">
            {/* Десктоп версия */}
            <div className="hidden md:block">
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#414246] transform -translate-y-1/2"></div>
              <div className="absolute left-0 top-0 w-[351px] h-[22px] flex items-center justify-between px-4 md:px-0">
                <a
                  href="#"
                  className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px]"
                >
                  Политика конфиденциальности
                </a>
                <div className="w-[5px] h-[5px] rounded-full bg-[#86888E]"></div>
                <a
                  href="#"
                  className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px]"
                >
                  Оферта
                </a>
              </div>
              <div className="absolute right-0 top-0 flex">
                <a href="#" className="w-[30px] h-[30px]">
                  <img
                    src="/images/telegram-icon.svg"
                    alt="Telegram"
                    className="w-full h-full"
                  />
                </a>
                <a href="#" className="w-[30px] h-[30px] ml-[10px]">
                  <img
                    src="/images/youtube-icon.svg"
                    alt="YouTube"
                    className="w-full h-full"
                  />
                </a>
                <a href="#" className="w-[30px] h-[30px] ml-[10px]">
                  <img
                    src="/images/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-full h-full"
                  />
                </a>
              </div>
              <div className="absolute left-0 bottom-0 text-[#86888E] p-4 md:p-0">
                <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px]">
                  ИП Примак Максим Андреевич
                </p>
                <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px] mt-1">
                  ИНН 772142877813 ОГРН 322774600410191
                </p>
              </div>
              <div className="absolute right-0 bottom-0 flex items-center">
                <img
                  src="/images/duck-icon.svg"
                  alt="Duck Icon"
                  className="w-[30px] h-[30px] mr-[10px]"
                />
                <p className="text-[#F0F1F1] text-[16px] leading-[20px] font-normal tracking-[-0.5px]">
                  junior for juniors
                </p>
              </div>
            </div>

            {/* Мобильная версия с исправленными отступами */}
            <div className="md:hidden h-full flex flex-col px-[15px]">
              {/* Первый блок (иконки и текст) */}
              <div className="h-[61px] flex flex-col justify-between items-center pt-[10px]">
                <div className="flex">
                  <a href="#" className="w-[30px] h-[30px]">
                    <img
                      src="/images/telegram-icon.svg"
                      alt="Telegram"
                      className="w-full h-full"
                    />
                  </a>
                  <a href="#" className="w-[30px] h-[30px] ml-[10px]">
                    <img
                      src="/images/youtube-icon.svg"
                      alt="YouTube"
                      className="w-full h-full"
                    />
                  </a>
                  <a href="#" className="w-[30px] h-[30px] ml-[10px]">
                    <img
                      src="/images/linkedin-icon.svg"
                      alt="LinkedIn"
                      className="w-full h-full"
                    />
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px]"
                  >
                    Политика конфиденциальности
                  </a>
                  <div className="w-[5px] h-[5px] rounded-full bg-[#86888E] mx-[10px]"></div>
                  <a
                    href="#"
                    className="text-[#F6F6F6] text-[18px] leading-[22px] font-normal tracking-[-0.5px]"
                  >
                    Оферта
                  </a>
                </div>
              </div>

              {/* Отступ 20px */}
              <div className="h-[20px]"></div>

              {/* Второй блок (разделитель, утка, текст) */}
              <div className="flex-1 flex flex-col justify-between pb-[10px]">
                {/* Разделительная линия */}
                <div className="w-full h-[1px] bg-[#414246]"></div>

                {/* Блок с уткой - добавлен mb-[16px] для отступа после линии */}
                <div className="flex justify-center items-center mb-[16px]">
                  <img
                    src="/images/duck-icon.svg"
                    alt="Duck Icon"
                    className="w-[30px] h-[30px] mr-[10px]"
                  />
                  <p className="text-[#F0F1F1] text-[16px] leading-[20px] font-normal tracking-[-0.5px]">
                    junior for juniors
                  </p>
                </div>

                {/* Текст ИП и ИНН - добавлен mt-[20px] для отступа после утки */}
                <div className="text-center text-[#86888E] mt-[20px]">
                  <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px]">
                    ИП Примак Максим Андреевич
                  </p>
                  <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px] mt-1">
                    ИНН 772142877813 ОГРН 322774600410191
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};