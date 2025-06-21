"use client";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { SocialButton } from "../SocialButton/SocialButton";
import { Divider } from "../Divider/Divider";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";

interface RegisterFormProps {
  onLoginClick: () => void;
  onSuccessRegister: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onLoginClick,
  onSuccessRegister,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="
      w-full bg-white rounded-[24px] flex flex-col overflow-hidden
      md:w-[800px] h-[682px] md:rounded-[24px] md:flex-row
    "
    >
      {/* Левая часть */}
      <div className="
        flex flex-col items-center justify-center pt-[24px] pb-[16px]
        md:pt-[30px] md:pb-0 md:w-[380px] md:h-full md:bg-[#F5F5F5] md:box-border
      ">
        <div className="
          font-medium text-[18px] leading-[22px] tracking-[-1px] text-black text-center mb-[16px]
          md:text-[22px] md:leading-[26px] md:mb-[40px]
        ">
          <div>Вы готовы к большему.</div>
          <div>Мы поможем начать.</div>
        </div>
        <Image
          src="/images/sophi-auth.png"
          alt="Sophi Auth"
          width={75}
          height={75}
          className="object-contain md:w-[278px] md:h-[286px]"
        />
        <div className="
          hidden md:block mt-auto mb-[30px] font-semibold text-[22px] leading-[22px] tracking-[-1px] text-[#636469] text-center
        ">
          &lt;codereview/&gt;
        </div>
      </div>

      {/* Правая часть с формой */}
      <div className="
        w-full bg-white p-[20px] flex flex-col
        md:w-[calc(100%-380px)] md:p-[30px]
      ">
        <div className="flex flex-col gap-[8px] mb-[15px]">
          <SocialButton
            icon="/images/telegram-color-ico.svg"
            alt="Telegram"
          >
            Войти через Telegram
          </SocialButton>
          <SocialButton
            icon="/images/hh-color-ico.svg"
            alt="HH.ru"
          >
            Войти через HH.ru
          </SocialButton>
        </div>

        <Divider text="или" className="mb-[15px]" />

        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-[15px] mb-[20px]">
            <CustomInput
              label="Имя"
              type="text"
              placeholder="Светлана"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              onTogglePassword={() => setShowPassword((v) => !v)}
            />
            <CustomInput
              label="Ещё раз пароль"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="****"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isPassword
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword((v) => !v)}
            />
          </div>

          <AuthButton onClick={onSuccessRegister} className="md:mb-[15px]">
            Зарегистрироваться
          </AuthButton>

          <p className="font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#636469] text-center m-0">
            Уже есть аккаунт?{" "}
            <a
              href="#"
              className="text-[#0560C9] no-underline"
              onClick={(e) => {
                e.preventDefault();
                onLoginClick();
              }}
            >
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
