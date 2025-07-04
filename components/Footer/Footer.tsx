"use client";
import Link from "next/link";
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
        speed={140}
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
        <div className="py-[20px] md:pt-[60px] max-w-[345px] lg:max-w-[1024px] xl:max-w-[1200px] sm:max-w-[90%] mx-auto">
          <div className="w-full xl:max-w-[1180px] mx-auto flex flex-col lg:flex-row justify-between items-start md:mb-[60px] mb-[20px] gap-y-[34px]">
            <div className="w-full md:w-[233px] order-1 lg:order-2 flex flex-col justify-between gap-y-[20px] md:gap-y-0 lg:h-[141px]">
              <div
                className={`text-[#86888E] text-[20px] lg:text-[30px] leading-[20px] lg:leading-[30px] font-semibold tracking-[-1px] text-left lg:text-right w-full ${wixMadeforDisplay.className}`}
              >
                <Link href="/">{"<codereview />"}</Link>
              </div>

              <div className="flex flex-col items-start lg:items-end lg:text-right">
                <div className="text-[#F6F6F6] text-[20px] lg:text-[24px] leading-[24px] lg:leading-[26px] font-semibold tracking-[-0.5px] mt-0 lg:mt-[60px] mb-[3px]">
                  +7 (499) 110-82-76
                </div>
                <div className="text-[#86888E] text-[16px] lg:text-[18px] leading-[18px] lg:leading-[22px] font-semibold tracking-[-0.5px]">
                  yourcodereview@gmail.com
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[634px] order-2 lg:order-1 flex flex-col md:flex-row md:justify-between md:items-center items-start">
              <div className="md:flex mb-[30px] md:mb-0 gap-[50px]">
                <div className="text-[#F6F6F6] md:h-[158px] h-[156px] md:text-[18px] text-[16px] md:leading-[22px] leading-[18px] font-normal tracking-[-0.5px] flex flex-col flex-wrap space-y-4 gap-y-[12px] md:gap-x-[50px] gap-x-[23px]">
                  <Link
                    href="https://yourcodereview.com/#testirovanie"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Программа <br className="sm:hidden" />и тестирование
                  </Link>
                  <Link
                    href="https://yourcodereview.com/#tarifs"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Тарифы
                  </Link>
                  <Link
                    href="https://yourcodereview.com/#team"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Команда
                  </Link>
                  <div className="sm:w-[228px] w-[170px] mb-0 cursor-default">
                    О нас
                  </div>
                  <Link
                    href="https://blog.yourcodereview.com"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Блог
                  </Link>
                  <span className="sm:w-[228px] w-[170px] mb-0 cursor-default">
                    Вакансии
                  </span>
                  <Link
                    href="https://yourcodereview.com/#offer"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Запись
                  </Link>
                  <Link
                    href="https://yourcodereview.com/#feedback"
                    className="sm:w-[228px] w-[170px] mb-0"
                  >
                    Отзывы
                  </Link>
                  <Link href="https://yourcodereview.com/#faq">
                    Вопросы и ответы
                  </Link>
                </div>
              </div>
              <Link
                href="https://mrqz.me/6400c6ab9c4e9c004d2fecfa"
                className="p-[15px] md:gap-[50px] gap-[30px] bg-[#232325] lg:w-[156px] md:w-[200px] md:h-[152px] h-[114px] w-full rounded-[8px] flex flex-col lg:-translate-x-[3px] sm:-translate-y-[3px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-[#F6F6F6] text-[16px] leading-[18px] font-medium tracking-[-0.5px] text-center md:text-left md:w-full">
                  На какую зарплату <br className="md:hidden" /> я могу
                  претендовать?
                </p>
                <p className="text-[#86888E] text-[16px] leading-[18px] font-medium tracking-[-0.5px] text-center md:text-left">
                  Пройти тест
                </p>
              </Link>
            </div>
          </div>

          <div className="w-full h-[178px] md:h-[105px] xl:w-[1180px] mx-auto relative">
            <div className="flex md:flex-row flex-col justify-between md:mb-[19px] mb-[16px] gap-y-[12px]">
              <div className="flex gap-[10px] md:justify-start md:order-2 justify-center ">
                <Link
                  href="https://t.me/YourCodeReview"
                  className="w-[30px] h-[30px]"
                >
                  <TelegramIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UC6wNgLxcNW72CRow-Hyu0LA"
                  className="w-[30px] h-[30px]"
                >
                  <YouTubeIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F80207713"
                  className="w-[30px] h-[30px]"
                >
                  <LinkedInIcon />
                </Link>
              </div>
              <div className="md:w-[351px] h-[22px] md:order-1 flex items-center gap-[10px] md:justify-between px-4 md:px-0 justify-center text-[#F6F6F6] md:text-[18px] text-[14px] md:leading-[22px] leading-[16px] font-normal tracking-[-0.5px]">
                <Link href="https://yourcodereview.com/policy">
                  Политика конфиденциальности
                </Link>
                <div className="w-[5px] h-[5px] rounded-full bg-[#86888E]"></div>
                <span className="cursor-default">Оферта</span>
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
                <p className="text-[#F0F1F1] text-[16px] leading-[20px] font-normal tracking-[-0.5px] cursor-default">
                  junior for juniors
                </p>
              </div>
              <div className="text-[#86888E] md:order-1">
                <p className="text-[16px] leading-[20px] font-normal tracking-[-0.5px] text-center md:text-left">
                  ИП Примак Максим Андреевич
                  <br /> ИНН 772142877813 ОГРН 322774600410191
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
