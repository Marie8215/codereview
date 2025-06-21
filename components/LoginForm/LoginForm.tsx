"use client";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { SocialButton } from "../SocialButton/SocialButton";
import { Divider } from "../Divider/Divider";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";
import { wixMadeforDisplay, wixMadeforText } from "../../app/fonts";

interface LoginFormProps {
  onRegisterClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Add login logic here
    console.log("Login attempt", { email, password });
  };

  return (
    <div
      className={`${wixMadeforText.className}
      w-full bg-white rounded-[24px] flex flex-col overflow-hidden
      lg:w-[800px] md:h-[522px] md:rounded-[24px] md:flex-row
    `}
    >
      {/* Левая часть */}
      <div
        className="
        flex flex-col items-center justify-center pt-[24px] pb-[16px]
        md:pt-[30px] md:pb-0 md:w-[380px] md:h-full md:bg-[#F5F5F5] md:box-border
      "
      >
        <div
          className="
          font-medium text-[18px] leading-[22px] tracking-[-1px] text-black text-center mb-[16px]
          md:text-[22px] md:leading-[26px] md:mb-[40px]
        "
        >
          <div>Вы готовы к большему.</div>
          <div>Мы поможем начать.</div>
        </div>
        <Image
          src="/images/sophi-auth.png"
          alt="Sophi Auth"
          width={278}
          height={286}
          className="object-contain w-[75px] h-[75px] md:w-[278px] md:h-[286px]"
        />
        <div
          className="
          hidden md:block mt-auto mb-[30px] font-semibold text-[22px] leading-[22px] tracking-[-1px] text-[#636469] text-center
        "
        >
          &lt;codereview/&gt;
        </div>
      </div>

      {/* Правая часть с формой */}
      <div
        className="
        w-full bg-white p-[20px] flex flex-col
        md:w-[calc(100%-380px)] md:p-[30px]
      "
      >
        {/* Кнопки входа через соцсети */}
        <div className="flex flex-col gap-[8px] mb-[15px]">
          <SocialButton icon="/images/telegram-color-ico.svg" alt="Telegram">
            Войти через Telegram
          </SocialButton>
          <SocialButton icon="/images/hh-color-ico.svg" alt="HH.ru">
            Войти через HH.ru
          </SocialButton>
        </div>

        <Divider text="или" />

        {/* Форма входа */}
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-[15px] mb-[10px]">
            <CustomInput
              label="Почта"
              type="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CustomInput
              label="Пароль"
              type={showPassword ? "text" : "password"}
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isPassword
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </div>

          <a
            href="#"
            className="font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#636469] mb-[20px] no-underline"
          >
            Забыли пароль?
          </a>

          <AuthButton onClick={handleSubmit} className="mb-[15px]">
            Войти
          </AuthButton>

          <p className="font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#636469] text-center m-0">
            Ещё нет аккаунта?{" "}
            <a
              href="#"
              className="text-[#0560C9] no-underline"
              onClick={(e) => {
                e.preventDefault();
                onRegisterClick();
              }}
            >
              Регистрация
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
