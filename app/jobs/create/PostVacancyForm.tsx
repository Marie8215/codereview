"use client";

import { useRef, useState } from "react";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import GradientButton from "../../../components/GradientButton/GradientButton";
import Image from "next/image";
import { apiClient } from "../../../api/ApiClient";
import { DropdownList } from "../../../components/Dropdown/DropdownList";
import { stackOptions } from "../../data/static-content";

export const PostVacancyForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [isInternship, setIsInternship] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stack, setStack] = useState<string>(stackOptions[0].title);
  const [url, setUrl] = useState("");

  // обработчик выбора файла
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !title.trim() ||
      !desc.trim() ||
      !salary.trim() ||
      !city.trim() ||
      !company.trim() ||
      !telegram.trim() ||
      !email.trim()
    ) {
      setError("Все поля должны быть заполнены");
      return;
    }
    setError("");

    let imageBase64: string | null = null;
    if (logo) {
      imageBase64 = await fileToBase64(logo);
    }

    const vacancyData = {
      active: true,
      external_id: null,
      // company_name: company,
      company: {
        name: company,
        id: 0, // ID компании можно установить позже, если нужно
        description: "", // Описание компании можно добавить позже
      },
      title,
      salary,
      // location: city,
      speciality: stack,
      internship: isInternship,
      remote: isRemote,
      url,
      description: desc,
      source: "codereview",
      image: imageBase64,
    };

    console.log("imageBase64", imageBase64);

    const response = await apiClient.vacancies.create(vacancyData);

    if (response.isSuccess) {
      setSuccess(true);
    } else {
      setError(response.error?.message || "Ошибка при отправке вакансии");
    }
  };

  return (
    <div className="w-full flex justify-center mt-[60px] md:mt-[65px] px-[15px] md:px-0">
      <form
        className="w-full max-w-full md:max-w-[560px] flex flex-col items-stretch"
        onSubmit={handleSubmit}
      >
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
          <div className="flex flex-col md:flex-row gap-[20px] mb-[30px] items-end">
            <DropdownList
              relative
              buttonLike
              trigger={stack || "Стэк"}
              onSelect={(item) => setStack(item.title)}
              items={stackOptions.map((item) => ({
                id: item.title,
                title: item.title,
                data: item,
              }))}
              activeIds={[stack]}
              multiselect={false}
            />
            <CustomInput
              label="Сайт работодателя"
              type="text"
              placeholder="example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
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
              ref={fileInputRef}
              accept="image/*"
              onChange={handleLogoChange}
            />
            <Image
              src="/images/upload-logo.svg"
              alt="Загрузить логотип"
              width={52}
              height={52}
              className="object-contain"
            />
          </label>
        </div>
        {logo && (
          <div className="text-xs mb-2 ml-auto" style={{ color: "#C217FEE5" }}>
            Логотип выбран: {logo.name}
          </div>
        )}

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

        {error && (
          <div className="text-red-600 font-medium mb-2 mt-[-8px] text-center px-0">
            {error}
          </div>
        )}
        {success && (
          <div
            className="font-medium mb-2 mt-[-8px] text-center px-0"
            style={{ color: "#78cd0a" }}
          >
            Вакансия успешно отправлена!
          </div>
        )}

        <GradientButton
          variant="light"
          size="normal"
          className="w-full mb-[50px] md:mb-[100px]"
        >
          Добавить вакансию
        </GradientButton>
      </form>
    </div>
  );
};
