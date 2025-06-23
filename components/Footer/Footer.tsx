"use client";
import Image from "next/image";
import { wixMadeforDisplay, wixMadeforText } from "../../app/fonts";
import {
  BlackDuckIcon,
  LinkedInIcon,
  TelegramIcon,
  YouTubeIcon,
} from "../Icon/Icons";
import { Marquee } from "../Marquee/Marquee";

export const Footer = () => {
  return (
    <footer className={`w-full ${wixMadeforText.className}`}>
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
        speed={70}
      />

      <div
        className="w-full bg-neutral-800"
        style={{
          backgroundImage: "url('/images/bg-footer.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-[20px] md:pt-[60px] max-w-[345px] lg:max-w-[1200px] sm:max-w-[90%] mx-auto">
          <div className="w-full xl:max-w-[1180px] mx-auto flex flex-col xl:flex-row justify-between items-start md:mb-[60px] mb-[20px] gap-y-[34px]">
            <div className="w-full md:w-[233px] order-1 xl:order-2 flex flex-col justify-between gap-y-[20px] md:gap-y-0 xl:h-[141px]">
              <div
                className={`text-[#86888E] text-[20px] xl:text-[30px] leading-[20px] xl:leading-[30px] font-semibold tracking-[-1px] text-left xl:text-right w-full ${wixMadeforDisplay.className}`}
              >
                {"<codereview />"}
              </div>

              <div className="flex flex-col items-start xl:items-end xl:text-right">
                <div className="text-[#F6F6F6] text-[20px] xl:text-[24px] leading-[24px] xl:leading-[26px] font-semibold tracking-[-0.5px] mt-0 xl:mt-[60px] mb-[3px]">
                  +7 (499) 110-82-76
                </div>
                <div className="text-[#86888E] text-[16px] xl:text-[18px] leading-[18px] xl:leading-[22px] font-semibold tracking-[-0.5px]">
                  yourcodereview@gmail.com
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[634px] order-2 xl:order-1 flex flex-col md:flex-row md:justify-between md:items-center items-start">
              <div className="md:flex mb-[30px] md:mb-0 gap-[50px]">
                <div className="text-[#F6F6F6] md:h-[158px] h-[156px] md:text-[18px] text-[16px] md:leading-[22px] leading-[18px] font-normal tracking-[-0.5px] flex flex-col flex-wrap space-y-4 gap-y-[12px] md:gap-x-[50px] gap-x-[23px]">
                  <span className="sm:w-[228px] w-[170px] mb-0">
                    Программа <br className="sm:hidden" />и тестирование
                  </span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Тарифы</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Команда</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">О нас</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Блог</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Вакансии</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Запись</span>
                  <span className="sm:w-[228px] w-[170px] mb-0">Отзывы</span>
                  <span>Вопросы и ответы</span>
                </div>
              </div>
              <div className="p-[15px] md:gap-[50px] gap-[30px] bg-[#232325] xl:w-[156px] md:w-[200px] md:h-[152px] h-[114px] w-full rounded-[8px] flex flex-col xl:-translate-x-[3px] sm:-translate-y-[3px]">
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
                  <TelegramIcon />
                </a>
                <a href="#" className="w-[30px] h-[30px]">
                  <YouTubeIcon />
                </a>
                <a href="#" className="w-[30px] h-[30px]">
                  <LinkedInIcon />
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
