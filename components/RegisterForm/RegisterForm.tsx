"use client";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { SocialButton } from "../SocialButton/SocialButton";
import { Divider } from "../Divider/Divider";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";
import { Modal } from "../Modal/Modal";
import { userClientStore } from "@/store/onClient/store";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { ThankYouModal } from "../ThankYouModal/ThankYouModal";

interface RegisterFormProps {
  onLoginClick: () => void;
  onSuccessRegister: () => void;
}

export const RegisterFormModal = () => {
  type ModalContentType = "register" | "success" | "thankYou";

  const isRegisterOpen = userClientStore((state) => state.isRegisterModalOpen);
  const setIsRegisterOpen = userClientStore((state) => state.setRegisterModalOpen);
  const setIsLoginOpen = userClientStore((state) => state.setLoginModalOpen);
  const [currentContent, setCurrentContent] =
    useState<ModalContentType>("register");

  const handleCloseThankYou = () => {
    setIsRegisterOpen(false);
    setCurrentContent("register");
  };

  const renderContent = () => {
    switch (currentContent) {
      case "success":
        return (
          <SuccessModal onSubscribe={() => setCurrentContent("thankYou")} />
        );
      case "thankYou":
        return <ThankYouModal onClose={handleCloseThankYou} />;
      case "register":
      default:
        return (
          <RegisterFormModalContent
            onLoginClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            onSuccessRegister={() => setCurrentContent("success")}
          />
        );
    }
  };

  return (
    <Modal
      isOpen={isRegisterOpen}
      onClose={() => {
        setIsRegisterOpen(false);
        setCurrentContent("register");
      }}
    >
      {renderContent()}
    </Modal>
  );
};

export const RegisterFormModalContent: React.FC<RegisterFormProps> = ({
  onLoginClick,
  onSuccessRegister,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!password) {
      setPasswordError("");
    } else if (password && value !== password) {
      setPasswordError("Пароли не совпадают");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("");
    } else if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div
      className="
        w-full bg-white rounded-[24px] flex flex-col
        lg:w-[800px] md:flex-row
        max-h-[calc(100dvh-40px)] md:overflow-hidden md:max-h-none
        my-[20px] md:my-0
      "
    >
      <div
        className="
        flex flex-col items-center justify-center pt-[24px] pb-[16px]
        md:pt-[30px] md:pb-0 md:w-[380px] md:bg-[#F5F5F5] md:box-border
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

      <div
        className="
        w-full bg-white p-[20px] flex flex-col
        md:w-[calc(100%-380px)] md:p-[30px]
      "
      >
        <div className="flex flex-col gap-[8px] mb-[15px]">
          <SocialButton icon="/images/telegram-color-ico.svg" alt="Telegram">
            Войти через Telegram
          </SocialButton>
          {/* <SocialButton icon="/images/hh-color-ico.svg" alt="HH.ru">
            Войти через HH.ru
          </SocialButton> */}
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
              onChange={handlePasswordChange}
              isPassword
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword((v) => !v)}
            />
            <CustomInput
              label="Ещё раз пароль"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="****"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              isPassword
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword((v) => !v)}
              error={passwordError}
            />
          </div>

          <AuthButton onClick={onSuccessRegister} className="mb-[15px]">
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
