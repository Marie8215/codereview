import Image from "next/image";
import Link from "next/link";

export const AutosubscribePromo = () => {
  return (
    <Link href="#" className="block h-[65px] bg-[#ECF0FF] rounded-[12px] relative">
      <div className="h-full flex items-center">
        <Image 
          src="/images/sophi-ai.svg"
          alt="Sophi AI"
          width={47}
          height={47}
          className="ml-[16px]"
        />
        
        <div className="ml-[16px] w-[520px]">
          <p className="font-['Wix_Madefor_Display'] font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#232325]">
            Подключи автоотклики — и пусть Софи работает за тебя 24/7
          </p>
          <p className="font-['Wix_Madefor_Display'] font-bold text-[16px] leading-[20px] tracking-[-0.5px] text-[#0560C9]">
            Попробовать бесплатно
          </p>
        </div>

        <Image 
          src="/images/arrow-icon.svg"
          alt="Arrow"
          width={18}
          height={18}
          className="absolute right-[30px]"
        />
      </div>
    </Link>
  );
};