import Image from "next/image";
import Link from "next/link";

export const CardNextQuestion = () => (
  <Link
    href="#"
    className="block bg-[#F6F6F6] rounded-[12px] p-[20px] mb-[10px] md:min-h-[208px] w-full"
  >
    <div className="flex justify-between w-full h-[22px] mb-[20px] md:mb-[30px]">
      <span className="font-medium text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] tracking-[-0.5px] text-[#636469]">
        Следующий вопрос
      </span>
      <Image
        src="/images/arrow-gray-to-right.svg"
        alt="Arrow"
        width={16}
        height={16}
        priority
        className="md:block md:w-[22px] md:h-[22px] w-[16px] h-[16px]"
      />
    </div>
    <div className="font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] tracking-[-0.5px] text-[#232325] mb-[8px]">
      Какие знаете шаблоны проектирования? 
       <span className="hidden md:inline"><br /></span>Расскажите о двух шаблонах, используемых в работе.
    </div>
    <div className="font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#86888E]">
      Java &bull; 1050 упоминаний
    </div>
  </Link>
);