import Image from 'next/image';

export const VacancyCard = () => {
  return (
    <div className="mb-[10px]">
      <div className="bg-[#F6F6F6] rounded-[8px] p-[20px] h-[202px]">
        {/* Company info */}
        <div className="flex mb-[15px]">
          <Image
            src="/images/test-company-image.png"
            alt="Company"
            width={50}
            height={50}
            className="rounded-[8px]"
          />
          <div className="ml-[15px]">
            <h3 className="font-['Wix_Madefor_Display'] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325]">
              Bell Integrator
            </h3>
            <p className="font-['Wix_Madefor_Display'] font-medium text-[16px] leading-[20px] tracking-[-0.5px] text-[#636469]">
              Москва
            </p>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full h-[50px] bg-[#F0F1F1] rounded-[12px] mb-[8px] font-['Wix_Madefor_Text'] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325] hover:bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 transition-all">
          Получить оффер
        </button>
        <button className="w-full h-[50px] bg-[#F0F1F1] rounded-[12px] font-['Wix_Madefor_Text'] font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325] hover:bg-gradient-to-r from-[#F4B8B8]/50 via-[#E3B3EA]/50 to-[#C5C9F1]/50 transition-all">
          Откликнуться
        </button>
      </div>

      {/* Yellow card link */}
      <a href="#" className="block w-full h-[245px] bg-yellow-300 rounded-[8px]">
      </a>
    </div>
  );
};