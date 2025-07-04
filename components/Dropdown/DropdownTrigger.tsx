import Image from "next/image";
import { wixMadeforText } from "@/app/fonts";
import React from "react";

interface DropdownTriggerProps {
  children: React.ReactNode;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
}) => {
  return (
    <div
      className={`flex items-center gap-[5px] w-max cursor-pointer ${wixMadeforText.className}`}
    >
      {children}
      <Image
        src="/images/arrow-down-icon.svg"
        alt=">"
        width={16}
        height={16}
        priority
      />
    </div>
  );
};
