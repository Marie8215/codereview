"use client";
import { useState } from "react";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { LoginForm } from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import IconWithText from "../IconWithText/IconWithText";
import Image from "next/image";
import { Modal } from "../Modal/Modal";
import Link from "next/link";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { ThankYouModal } from "../ThankYouModal/ThankYouModal";

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  // const handleLoginClick = () => {
  //   setIsLoginOpen(true);
  // };

  // const handleRegisterClick = () => {
  //   setIsRegisterOpen(true);
  // };

  return (
    <header className="md:mt-5 mt-4 mx-auto w-fit z-50 relative">
      <div className="rounded-[18px] md:py-[17px] md:px-5 py-[13px] px-5 gap-5 bg-neutral-10 shadow-header backdrop-blur-[8px]">
        <div className="flex align-center justify-between gap-5">
          <Link href="/" className="contents">
            <Logo />
          </Link>
          <NavigationMenu />
          <button onClick={() => setIsLoginOpen(true)}>
            <IconWithText
              className="hidden sm:flex"
            text={
              <span
                className="font-normal md:text-[18px] md:leading-[22px] text-[16px] leading-[20px] tracking-[-0.5px] cursor-pointer"
              >
                Войти
              </span>
            }
              icon={
                <Image
                  src="/images/profile-icon.svg"
                  alt="menu"
                  width={18}
                  height={18}
                  priority
                />
              }
            />
          <Image
            className="sm:hidden"
            src="/images/profile-icon.svg"
            alt="menu"
            width={18}
            height={18}
            priority
          />
          </button>
        </div>
      </div>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onRegisterClick={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}/>
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterForm 
          onLoginClick={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
          onSuccessRegister={() => {
            setIsRegisterOpen(false);
            setIsSuccessOpen(true);
          }}
        />
      </Modal>

      <Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}>
        <SuccessModal 
          onSubscribe={() => {
            setIsSuccessOpen(false);
            setIsThankYouOpen(true);
          }}
        />
      </Modal>

      <Modal isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)}>
        <ThankYouModal onClose={() => setIsThankYouOpen(false)} />
      </Modal>
    </header>
  );
};
