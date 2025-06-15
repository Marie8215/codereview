"use client";
import { useState } from "react";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { LoginForm } from "../LoginForm/LoginForm";
import "./Header.css";
import Logo from "../Logo/Logo";
import IconWithText from "../IconWithText/IconWithText";
import Image from "next/image";

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="mt-5 md:w-[482px] mx-auto">
      <div className="rounded-[18px] py-[17px] px-5 gap-5 bg-neutral-10 mb-[100px] shadow-header backdrop-blur-[8px]">
        <div className="header-content">
          <Logo />

          <NavigationMenu />
          <IconWithText
            text="Войти"
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
        </div>
      </div>

      <LoginForm isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};
