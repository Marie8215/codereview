"use client";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { LoginFormModal } from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import IconWithText from "../IconWithText/IconWithText";
import Image from "next/image";
import Link from "next/link";
import { RegisterFormModal } from "../RegisterForm/RegisterForm";
import { stackOptionsMap } from "@/app/data/static-content";
import { userClientStore } from "@/store/onClient/store";
import HeaderFloatButton from "./HeaderFloatButton";
import { GoBackArrow } from "./GoBackArrow";
import { Suspense } from "react";

export const Header = () => {
  const loggedIn = userClientStore((state) => state.loggedIn);
  const setLoggedIn = userClientStore((state) => state.setLoggedIn);

  const onProfileButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
      localStorage.removeItem("accessToken");
    } else {
      setIsLoginOpen(true);
    }
  };
  const setIsLoginOpen = userClientStore((state) => state.setLoginModalOpen);

  const pathname = usePathname();

  const showJobsButton =
    pathname.includes("jobs") && !pathname.includes("jobs/create");
  const showInterviewsButton = pathname.includes("interviews");

  const isHomePage = pathname.split("/").filter(Boolean).length < 2;
  const currentStack = stackOptionsMap.get(pathname.split("/")[1])?.linkId;
  const logoLink = currentStack ? `/${currentStack}` : "/";

  return (
    <div className="relative w-fit mx-auto md:mt-5 mt-4">
      <Suspense>
        <GoBackArrow />
      </Suspense>
      
      <header className="rounded-[18px] md:py-[17px] md:px-5 py-[13px] px-5 gap-5 bg-neutral-10 shadow-header backdrop-blur-[8px] flex items-center relative z-20">
        <Link href={logoLink} className="contents">
          <Logo monochrome={!isHomePage} />
        </Link>
        <NavigationMenu />
        <button onClick={onProfileButtonClick}>
          <IconWithText
            className="hidden sm:flex"
            text={
              <span className="font-normal md:text-[18px] md:leading-[22px] text-[16px] leading-[20px] tracking-[-0.5px] cursor-pointer">
                {loggedIn ? "Выйти" : "Войти"}
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
      </header>

      <LoginFormModal />
      <RegisterFormModal />

      {showJobsButton && (
        <HeaderFloatButton href="https://jobs.yourcodereview.com/ai/">
          Автоотклики
        </HeaderFloatButton>
      )}
      {showInterviewsButton && (
        <HeaderFloatButton href="https://interview.yourcodereview.com/testing">
          <span className="whitespace-nowrap">Тренажер заданий</span>
        </HeaderFloatButton>
      )}
    </div>
  );
};
