"use client";
import Image from "next/image";
import IconWithText from "../IconWithText/IconWithText";
import { userClientStore } from "@/store/onClient/store";

export const NavMenuButton = () => {
  const selectedStack = userClientStore((state) => state.selectedStack);

  return (
    <IconWithText
      text={
        <span className="font-normal md:text-[18px] md:leading-[22px] text-[16px] leading-[20px] tracking-[-0.5px]">
          {selectedStack?.title ?? "Специализация"}
        </span>
      }
      icon={
        <Image
          src="/images/menu-icon.svg"
          alt="menu"
          width={18}
          height={18}
          priority
        />
      }
    />
  );
};
