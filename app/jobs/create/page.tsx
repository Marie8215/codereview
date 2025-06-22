"use client";
import { useState } from "react";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import GradientButton from "../../../components/GradientButton/GradientButton";
import Image from "next/image";
import { DefaultPageBackground } from "@/components/Background/MainPageBackground";

export default function PostVacancy() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [isInternship, setIsInternship] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  return (
    <>
      <DefaultPageBackground />
      <div className="w-full flex justify-center mt-[60px] md:mt-[65px] px-[15px] md:px-0">
        <form className="w-full max-w-full md:max-w-[560px] flex flex-col items-stretch">
          <h1 className="font-bold text-[26px] leading-[30px] tracking-[-0.5px] text-black text-left mb-[25px]">
            Разместить вакансию
          </h1>

          <div className="mb-[20px]">
            <CustomInput
              label="Заголовок вакансии"
              type="text"
              placeholder="Avito.Tech"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-[20px]">
            <label className="block mb-[8px] font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#232325]">
              Описание вакансии
            </label>
            <textarea
              className="w-full min-h-[409px] rounded-[15px] border border-[#D4D5D7] px-[16px] py-[12px] text-[18px] leading-[22px] font-medium tracking-[-0.5px] text-[#232325] placeholder:text-[#D4D5D7] placeholder:font-medium placeholder:text-[18px] placeholder:leading-[22px] outline-none resize-none box-border"
              placeholder="Многофункциональный чат-бот от OpenAI, способный вести диалоги, писать тексты, решать задачи и помогать в программировании."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="mb-[20px]">
            <CustomInput
              label="Зарплата"
              type="text"
              placeholder="от 40 000 ₽"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          {/* Чекбоксы */}
          <div className="flex flex-col mb-[40px]">
            <label className="flex items-center mb-[12px]">
              <input
                type="checkbox"
                checked={isInternship}
                onChange={() => setIsInternship((v) => !v)}
                className="w-[22px] h-[22px]  accent-[#0560C9]"
              />
              <span className="ml-[8px] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325]">
                Стажировка
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isRemote}
                onChange={() => setIsRemote((v) => !v)}
                className="w-[22px] h-[22px] accent-[#3884FE]"
              />
              <span className="ml-[8px] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325]">
                Удаленно
              </span>
            </label>
          </div>

          <div className="mb-[16px]">
            <CustomInput
              label="Город"
              type="text"
              placeholder="Красноярск"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="flex items-end mb-[20px]">
            <div className="w-full md:w-[498px] sm:w-[283px]">
              <CustomInput
                label="Компания"
                type="text"
                placeholder="Bell Integrator"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <label className="ml-[12px] cursor-pointer flex-shrink-0">
              <input
                type="file"
                className="hidden"
                // onChange={handleFileChange}
              />
              <span>
                <Image
                  src="/images/upload-logo.svg"
                  alt="Загрузить логотип"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-[20px] mb-[30px]">
            <div className="w-full md:w-[280px]">
              <CustomInput
                label="Telegram"
                type="text"
                placeholder="yourTelegram"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
            <div className="w-full md:w-[285px]">
              <CustomInput
                label="Почта"
                type="email"
                placeholder="example@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <GradientButton
            variant="light"
            size="normal"
            className="w-full mb-[50px] md:mb-[100px]"
          >
            Добавить вакансию
          </GradientButton>
        </form>
      </div>
    </>
  );
}
