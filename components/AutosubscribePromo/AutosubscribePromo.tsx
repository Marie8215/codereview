import Image from "next/image";
import Link from "next/link";
import { wixMadeforDisplay } from "../../app/fonts";

export const AutosubscribePromo = () => {
  return (
    <Link href="#">
      <div className="flex items-center bg-[#ECF0FF] rounded-[12px] h-[70px] pl-[10px] py-0 mb-[30px] md:h-[65px] md:pl-[15px] gap-[10px] md:gap-[15px] md:pr-[30px]">
        <Image
          src="/images/sophi-ai.svg"
          alt="Sophi AI"
          width={49}
          height={49}
          priority
        />

        <div className="flex flex-col justify-center">
          <p className={`${wixMadeforDisplay.className} font-medium text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] tracking-[-0.5px] text-[#232325]`}>
            Подключи автоотклики — и пусть Софи работает за тебя 24/7
          </p>
          <p className={`${wixMadeforDisplay.className} font-bold text-[14px] leading-[18px] tracking-[-0.5px] text-[#0560C9] md:text-[16px] md:leading-[20px]`}>
            Попробовать бесплатно
          </p>
        </div>

        <Image
          src="/images/arrow-black-icon.svg"
          alt="Arrow"
          width={18}
          height={18}
          className="ml-auto hidden md:block"
        />
      </div>
    </Link>
  );
};
