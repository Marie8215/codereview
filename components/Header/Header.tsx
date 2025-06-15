"use client";
import { useState } from "react";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { LoginForm } from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import IconWithText from "../IconWithText/IconWithText";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="md:mt-5 mt-4 mx-auto w-fit z-10 relative">
      <div className="rounded-[18px] md:py-[17px] md:px-5 py-[13px] px-5 gap-5 bg-neutral-10 md:mb-[100px] mb-[88px] shadow-header backdrop-blur-[8px]">
        <div className="flex align-center justify-between gap-5">
          <Link href="/" className="contents">
            <Logo />
          </Link>
          <NavigationMenu />
          <IconWithText
            className="hidden sm:flex"
            text={
              <span className="font-normal md:text-[18px] md:leading-[22px] text-[16px] leading-[20px] tracking-[-0.5px]">
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
        </div>
      </div>

      <LoginForm isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};
