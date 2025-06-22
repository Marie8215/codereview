import Image from "next/image";
import Link from "next/link";
import { wixMadeforDisplay } from "../../app/fonts";

interface AutosubscribePromoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  arrowClassName?: string;
  bgClassName?: string;
  topText?: string;
}

export const AutosubscribePromo: React.FC<AutosubscribePromoProps> = ({
  className = "flex items-center rounded-[12px] h-[70px] pl-[10px] py-10 md:py-0 mb-[30px] md:h-[65px] md:pl-[15px] gap-[10px] md:gap-[15px] pr-[20px]  md:pr-[20px]",
  imageClassName = "",
  buttonClassName = "",
  arrowClassName = "ml-auto hidden md:block",
  bgClassName = "bg-[#ECF0FF]",
  topText = "Подключи автоотклики — и пусть Софи работает за тебя 24/7",
}) => {
  return (
    <Link href="https://jobs.yourcodereview.com/ai/
">
      <div className={`${bgClassName} ${className}`}>
        <Image
          src="/images/sophi-ai.svg"
          alt="Sophi AI"
          width={49}
          height={49}
          className={imageClassName}
          priority
        />

        <div className="flex flex-col">
          <p className={`${wixMadeforDisplay.className} font-medium text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] tracking-[-0.5px] text-[#232325]`}>
            {topText}
          </p>
          <p className={`${wixMadeforDisplay.className} font-bold text-[14px] leading-[18px] tracking-[-0.5px] text-[#0560C9] md:text-[16px] md:leading-[20px] ${buttonClassName}`}>
            Попробовать бесплатно
          </p>
        </div>

        <Image
          src="/images/arrow-black-icon.svg"
          alt="Arrow"
          width={18}
          height={18}
          className={arrowClassName}
        />
      </div>
    </Link>
  );
};
