"use client";
import React from "react";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";
import { wixMadeforText } from "../../app/fonts";

interface SuccessModalProps {
  onSubscribe: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onSubscribe }) => {
  return (
    <div
      className="
        w-full bg-white rounded-[24px] flex flex-col overflow-hidden relative
        lg:w-[800px] lg:h-[532px] lg:rounded-[24px] lg:flex-row
      "
    >
      {/* Левая панель только на десктопе */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-[380px] lg:h-full lg:bg-[#F5F5F5]">
        <Image
          src="/images/all-chanels.svg"
          alt="All channels"
          width={380}
          height={532}
          className="object-contain"
          priority
        />
      </div>

      {/* Правая панель (в мобилке — вся модалка) */}
      <div
        className="
          w-full flex flex-col flex-1 p-[20px] relative
          lg:w-[calc(100%-380px)] lg:p-[30px]
        "
      >
        {/* Фоновая картинка только для мобилки */}
        <div className="absolute inset-0 z-0 opacity-10 lg:hidden">
          <Image
            src="/images/all-chanels.svg"
            alt="All channels"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className={`${wixMadeforText.className} flex flex-col justify-between flex-1 relative`}
        >
          <div>
            <h1 className="font-bold text-[24px] leading-[28px] tracking-[-1px] text-[#232325] text-left mb-[20px] lg:mb-[20px]">
              Ты успешно авторизовался!
            </h1>
            <div className="text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325] text-left mb-[20px] lg:mb-[30px]">
              <p className="mb-[22px]">
                На нашем сервисе собрано больше 1.000 вопросов с собеседований,
                сотни тестовых заданий, контакты рекрутеров и многое другое.
              </p>

              <p>
                Все это мы отдаем тебе бесплатно, взамен на подписку на наши
                телеграм каналы. Именно они помогают монетизировать нашу
                платформу и обновлять весь наш контент.
              </p>
            </div>
          </div>
          <AuthButton onClick={onSubscribe} className="w-full">
            Подписаться на каналы
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
