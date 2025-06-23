"use client";
import React from "react";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";
import { wixMadeforText } from "../../app/fonts";

interface ThankYouModalProps {
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ onClose }) => {
  return (
    <div
      className="
        w-full bg-white rounded-[24px] flex flex-col overflow-hidden
        p-[20px] md:w-[800px] md:h-[532px] md:rounded-[24px] md:flex-row md:p-0

      "
    >
      <div className="flex flex-col items-center md:justify-center md:w-[380px] md:h-full md:bg-[#F5F5F5] md:box-border">
        <div className="md:mt-[41px] mb-[20px] md:mb-0">
          <Image
            src="/images/sophi-hearts.svg"
            alt="Sophi Hearts"
            width={75}
            height={85}
            className="object-contain md:w-[367px] md:h-[367px]"
            priority
          />
        </div>
        <div className="hidden md:block mt-auto mb-[30px] font-semibold text-[22px] leading-[22px] tracking-[-1px] text-[#636469] text-left">
          &lt;codereview/&gt;
        </div>
      </div>
      <div
        className={`${wixMadeforText.className} flex flex-col flex-1 text-center md:text-left md:justify-between md:p-[30px]`}
      >
        <div>
          <h1 className="font-bold text-[#232325] tracking-[-1px] mb-[20px] text-[24px] leading-[28px]">
            Спасибо за подписки!
          </h1>
          <div className="text-[#232325] font-normal tracking-[-0.5px] mb-[20px] md:mb-[30px] text-[18px] leading-[22px]">
            <p className="mb-[22px]">
              Доступ к платформе полностью открыт и будет всегда доступен для
              твоего аккаунта.
            </p>
            <p>Желаем тебе быстрого поиска работы🩵</p>
          </div>
        </div>
        <AuthButton onClick={onClose} className="w-full">
          {"Ура, спасибо :)"}
        </AuthButton>
      </div>
    </div>
  );
};
