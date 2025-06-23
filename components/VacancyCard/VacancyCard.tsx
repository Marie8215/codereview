import Image from "next/image";
import Link from "next/link";
import { wixMadeforDisplay, wixMadeforText } from "../../app/fonts";

export const VacancyCard = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-[8px] p-[20px] mb-[10px]">

        <div className="flex mb-[15px]">
          <Image
            src="/images/test-company-image.png"
            alt="Company"
            width={50}
            height={50}
            className="rounded-[8px]"
          />
          <div className="ml-[15px]">
            <h3 className={`${wixMadeforDisplay.className} md: mt-[4px] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325]`}>
              Bell Integrator
            </h3>
            <p className={`${wixMadeforDisplay.className} font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#636469]`}>
              Москва
            </p>
          </div>
        </div>

        <Link
          href="https://jobs.yourcodereview.com/ai/"
          className={`w-full h-[44px] md:h-[46px] bg-[#F0F1F1] rounded-[12px] mb-[5px] ${wixMadeforText.className} font-medium text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] tracking-[-0.5px] text-[#232325] flex items-center justify-center hover:bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 transition-all`}
        >
          Получить оффер
        </Link>

        <button className={`w-full h-[44px] md:h-[46px] bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 rounded-[12px] ${wixMadeforText.className} font-medium text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] md:text-[18px] md:leading-[20px] tracking-[-0.5px] text-[#232325] md:bg-[#F0F1F1] md:hover:bg-gradient-to-r md:hover:from-[#F4B8B8]/50 md:hover:via-[#E3B3EA]/50 md:hover:to-[#C5C9F1]/50 transition-all `}>
          Откликнуться
        </button>
      </div>


      <a
        href="#"
        className="w-full bg-[#FDF6E2] bg-[url('/images/grid-square.svg')] bg-no-repeat rounded-[8px] mb-[10px] p-[20px] flex flex-col h-[245px]"
      >
        <Image
          src="/images/sophi-ai.svg"
          alt="Sophi AI"
          width={60}
          height={60}
          className="mb-[15px] ml-[23] md:ml-[0]"
          priority
        />

        <p className={`${wixMadeforDisplay.className} font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#232325]`}>
          Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту
          Софи
        </p>

        <div className="flex items-center mt-auto">
          <span className={`${wixMadeforDisplay.className} font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#976E0B]`}>
            Попробовать бесплатно
          </span>
          <Image
            src="/images/arrow-yellow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="ml-[31px]"
            priority
          />
        </div>
      </a>

      <div className="bg-[#F6F6F6] rounded-[8px] p-[23px] md:p-[20px] mb-[40px] md:mb-20">
        <h3 className={`${wixMadeforDisplay.className} font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#232325] mb-[20px]`}>
          Похожие вакансии
        </h3>

        <div className="mb-[15px]">
          <p className={`${wixMadeforDisplay.className} font-semibold text-[16px] leading-[18px] tracking-[-0.5px] text-[#232325] mb-[8px]`}>
            Начинающий тестировщик / AQA Engineer (Java)
          </p>
          <p className={`${wixMadeforDisplay.className} font-medium text-[16px] leading-[18px] tracking-[-0.5px] text-[#86888E]`}>
            Инфомаксимум
          </p>
        </div>

        <div className="h-[1px] bg-[#EAEAEA] mb-[15px]" />

        <div>
          <p className={`${wixMadeforDisplay.className} font-semibold text-[16px] leading-[18px] tracking-[-0.5px] text-[#232325] mb-[8px]`}>
            Тестировщик Java/QA инженер по автоматизированному тестированию Java
            с нуля (стажер)
          </p>
          <p className={`${wixMadeforDisplay.className} font-medium text-[16px] leading-[18px] tracking-[-0.5px] text-[#86888E]`}>
            Bell Integrator
          </p>
        </div>
      </div>
    </div>
  );
};
