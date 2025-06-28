"use client";
import { useRouter, usePathname } from "next/navigation";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { LoginFormModal } from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import IconWithText from "../IconWithText/IconWithText";
import Image from "next/image";
import Link from "next/link";
import { RegisterFormModal } from "../RegisterForm/RegisterForm";
import { stackOptionsMap } from "@/app/data/static-content";
import GradientButton from "../GradientButton/GradientButton";
import { userClientStore } from "@/store/onClient/store";

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

  const router = useRouter();
  const pathname = usePathname();

  const shouldShowJobsPromoButton = pathname.includes("jobs");
  const isHomePage = pathname.split("/").filter(Boolean).length < 2;
  const currentStack = stackOptionsMap.get(pathname.split("/")[1])?.linkId;
  const logoLink = currentStack ? `/${currentStack}` : "/";

  // Проверка: путь заканчивается на цифру (например, /jobs/123)
  const isIdPage = /\d+$/.test(pathname);

  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative w-fit mx-auto md:mt-5 mt-4">
      {/* Абсолютная стрелка */}
      {isIdPage && isDesktop && (
        <div
          className="
            hidden md:flex
            absolute
            items-center justify-center
            w-[64px] h-[56px]
            rounded-[18px]
            bg-neutral-10
            shadow-header
            left-[-74px] top-1/2 -translate-y-1/2
            z-10
            cursor-pointer
          "
          onClick={handleBackClick}
        >
          <Image
            src="/images/backspace-arrow.svg"
            alt="back"
            width={18}
            height={18}
            className="mx-auto"
            priority
          />
        </div>
      )}

      {/* Основной header */}
      <header className="rounded-[18px] md:py-[17px] md:px-5 py-[13px] px-5 gap-5 bg-neutral-10 shadow-header backdrop-blur-[8px] flex items-center">
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

      {shouldShowJobsPromoButton && <HeaderFloatButton />}
    </div>
  );
};

const HeaderFloatButton = () => {
  return (
    <div
      className={`
md:absolute md:bottom-0 md:left-full md:ml-[10px] md:w-auto
fixed right-10 bottom-4 w-[calc(100vw-32px)] max-w-[345px] z-50
md:max-w-none flex justify-end md:block
`}
    >
      <Link href="https://jobs.yourcodereview.com/ai/">
        <GradientButton
          className="h-[54px] md:h-[56px] rounded-[18px] px-5 flex items-center font-medium text-[18px] leading-[22px] md:w-auto w-full"
          size="large"
        >
          Автоотклики
        </GradientButton>
      </Link>
    </div>
  );
};
