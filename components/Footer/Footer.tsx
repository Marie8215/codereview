"use client";
import Image from "next/image";
import { wixMadeforDisplay, wixMadeforText } from "../../app/fonts";
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
      <div
        className="w-full bg-neutral-800 md:h-[403px]"
        style={{
          backgroundImage: "url('/images/bg-footer.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-[20px] md:pt-[60px] px-[15px] md:px-[110px]">
          <div className="w-full xl:w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-start md:mb-[60px] mb-[20px] gap-y-[34px]">
            <div className="w-full md:w-[233px] order-1 md:order-2 flex flex-col justify-between gap-y-[20px] md:gap-y-0 md:h-[141px]">
              <div
                className={`text-[#86888E] text-[20px] md:text-[30px] leading-[20px] md:leading-[30px] font-semibold tracking-[-1px] text-left md:text-right w-full ${wixMadeforDisplay.className}`}
              >
                {"<codereview />"}
              </div>

              <div className="flex flex-col items-start md:items-end md:text-right">
                <div className="text-[#F6F6F6] text-[20px] md:text-[24px] leading-[24px] md:leading-[26px] font-semibold tracking-[-0.5px] mt-0 md:mt-[60px] mb-[3px]">
                  +7 (499) 110-82-76
                </div>
                <div className="text-[#86888E] text-[16px] md:text-[18px] leading-[18px] md:leading-[22px] font-semibold tracking-[-0.5px]">
                  yourcodereview@gmail.com
                </div>
              </div>
            </div>

            <div className="w-full md:w-[734px] order-2 md:order-1 flex flex-col md:flex-row md:items-center items-start">
              <div className="md:flex mb-[30px] md:mb-0 gap-[50px]">
                <div className="text-[#F6F6F6] md:h-[158px] h-[156px] md:text-[18px] text-[16px] md:leading-[22px] leading-[18px] font-normal tracking-[-0.5px] flex flex-col flex-wrap space-y-4 gap-y-[12px] md:gap-x-[50px] gap-x-[23px]">
                  <span className="md:w-[228px] w-[170px] mb-0">
                    Программа <br className="md:hidden"/>и тестирование
                  </span>
                  <span className="md:w-[228px] w-[170px] mb-0">Тарифы</span>
                  <span className="md:w-[228px] w-[170px] mb-0">Команда</span>
                  <span className="md:w-[228px] w-[170px] mb-0">О нас</span>
                  <span className="md:w-[228px] w-[170px] mb-0">Блог</span>
                  <span className="md:w-[228px] w-[170px] mb-0">Вакансии</span>
                  <span className="md:w-[228px] w-[170px] mb-0">Запись</span>
                  <span className="md:w-[228px] w-[170px] mb-0">Отзывы</span>
                  <span>Вопросы и ответы</span>
                </div>
              </div>
              <div className="p-[15px] md:gap-[50px] gap-[30px] bg-[#232325] md:w-[156px] md:h-[152px] h-[114px] w-full rounded-[8px] flex flex-col xl:-translate-x-[28px] sm:-translate-y-[3px]">
                <p className="text-[#F6F6F6] text-[16px] leading-[18px] font-medium tracking-[-0.5px] text-center md:text-left md:w-full">
                  <span>
                    На какую зарплату <br className="md:hidden" /> я могу
                    претендовать?
                  </span>
                </p>
                <p className="text-[#86888E] text-[16px] leading-[18px] font-medium tracking-[-0.5px] text-center md:text-left">
                  Пройти тест
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[178px] md:h-[105px] xl:w-[1180px] mx-auto relative">
            <div className="flex md:flex-row flex-col justify-between md:mb-[19px] mb-[16px] gap-y-[12px]">
              <div className="flex gap-[10px] md:justify-start md:order-2 justify-center ">
                <a href="#" className="w-[30px] h-[30px]">
                  <img
                    src="/images/telegram-icon.svg"
                    alt="Telegram"
                    className="w-full h-full"
                  />
                </a>
                <a href="#" className="w-[30px] h-[30px]">
                  <img
                    src="/images/youtube-icon.svg"
                    alt="YouTube"
                    className="w-full h-full"
                  />
                </a>
                <a href="#" className="w-[30px] h-[30px]">
                  <img
                    src="/images/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-full h-full"
                  />
                </a>
              </div>
              <div className="md:w-[351px] h-[22px] md:order-1 flex items-center gap-[10px] md:justify-between px-4 md:px-0 justify-center text-[#F6F6F6] md:text-[18px] text-[14px] md:leading-[22px] leading-[16px] font-normal tracking-[-0.5px]">
                <a href="#">Политика конфиденциальности</a>
                <div className="w-[5px] h-[5px] rounded-full bg-[#86888E]"></div>
                <a href="#">Оферта</a>
              </div>
            </div>
            <div className="h-[1px] bg-[#414246] mb-[15px]"></div>
            <div className="flex md:justify-between md:items-start flex-col md:flex-row justify-center items-center gap-y-[21px]">
              <div className="flex items-center md:order-2">
                <Image
                  src="/images/duck-icon.svg"
                  alt="Duck Icon"
                  className="mr-[10px]"
                  width={22}
                  height={22}
                />
                <p className="text-[#F0F1F1] text-[16px] leading-[20px] font-normal tracking-[-0.5px]">
                  junior for juniors
                </p>
              </div>
              <div className="text-[#86888E] md:order-1">
                <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px] text-center md:text-left">
                  <span>
                    ИП Примак Максим Андреевич
                    <br /> ИНН 772142877813 ОГРН 322774600410191
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
