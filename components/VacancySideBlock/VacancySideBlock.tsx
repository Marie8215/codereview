import Image from "next/image";
import Link from "next/link";
import { wixMadeforDisplay, wixMadeforText } from "../../app/fonts";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";
import { SimilarVacancies } from "./SimilarVacancies";
import { StackOption } from "../../app/data/static-content";

interface VacancySideBlockProps {
  companyName?: string;
  location?: string;
  sourceLink?: string;
  imageSrc?: string;
  id: number;
  selectedStack: StackOption
}

export const VacancySideBlock = ({
  companyName,
  location,
  sourceLink,
  imageSrc,
  id,
  selectedStack
}: VacancySideBlockProps) => {
  return (
    <>
      <ReplyOptions
        companyName={companyName}
        location={location}
        sourceLink={sourceLink}
        imageSrc={imageSrc}
      />
      <SophyPromo />
      <SimilarVacancies currentVacancyId={id} selectedStack={selectedStack}/>
    </>
  );
};

interface ReplyOptionsProps {
  companyName?: string;
  location?: string;
  sourceLink?: string;
  imageSrc?: string;
}

const ReplyOptions = ({
  companyName,
  location,
  sourceLink,
  imageSrc,
}: ReplyOptionsProps) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[8px] p-[20px] mb-[10px]">
      <div className="flex mb-[15px]">
        <ImageWithFallback
          src={imageSrc}
          width={50}
          height={50}
          alt={companyName || ""}
          fallbackText={companyName || ""}
        />
        <div className="ml-[15px]">
          <h3
            className={`${wixMadeforDisplay.className} md: mt-[4px] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325]`}
          >
            {companyName}
          </h3>
          <p
            className={`${wixMadeforDisplay.className} font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#636469]`}
          >
            {location}
          </p>
        </div>
      </div>

      <Link
        href="https://jobs.yourcodereview.com/ai/"
        className={`w-full h-[44px] md:h-[46px] bg-[#F0F1F1] rounded-[12px] mb-[5px] ${wixMadeforText.className} font-medium text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] tracking-[-0.5px] text-[#232325] flex items-center justify-center hover:bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 transition-all`}
      >
        Получить оффер
      </Link>

      <Link
        href={sourceLink || "#"}
        className={`w-full h-[44px] md:h-[46px] bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 rounded-[12px] ${wixMadeforText.className} font-medium text-[16px] leading-[20px] md:text-[18px] flex items-center justify-center md:leading-[20px] tracking-[-0.5px] text-[#232325] md:bg-[#F0F1F1] md:hover:bg-gradient-to-r md:hover:from-[#F4B8B8]/50 md:hover:via-[#E3B3EA]/50 md:hover:to-[#C5C9F1]/50 transition-all `}
      >
        Откликнуться
      </Link>
    </div>
  );
};

const SophyPromo = () => {
  return (
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

      <p
        className={`${wixMadeforDisplay.className} font-bold text-[18px] lg:text-[1px] md:text-[14px] leading-[20px] tracking-[-0.5px] text-[#232325]`}
      >
        Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту
        Софи
      </p>

      <div className="flex items-center mt-auto">
        <span
          className={`${wixMadeforDisplay.className} font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#976E0B]`}
        >
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
  );
};
