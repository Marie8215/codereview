import React from 'react';
import Image from 'next/image';
import { wixMadeforDisplay, wixMadeforText } from '@/app/fonts';

interface SophyPromoCardProps {
  className?: string;
}

export const SophyPromoCard: React.FC<SophyPromoCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`
      md:w-[502px] w-[345px]
      md:h-[204px] h-[240px]
      rounded-[8px] 
      p-[15px]
      bg-white
      flex
      flex-col
      relative
      bg-gradient-to-r from-[rgba(244,184,184,0.4)] via-[rgba(227,179,234,0.4)] to-[rgba(197,201,241,0.4)]
      ${className}
    `}>
      <div className="flex-1">
        <h3 className={`
          ${wixMadeforDisplay.className}
          text-[22px] 
          leading-[24px] 
          font-bold 
          tracking-[-0.5px] 
          text-neutral-800
          max-w-[378px]
        `}>
          <span className='inline-block w-[100%]'>Больше никакого поиска<br /> и откликов — автоматизируй свой путь к работе вместе с Софи!</span>
        </h3>
      </div>

      <div className="flex items-end justify-between">
        <div className={`
          h-[38px]
          rounded-[12px]
          px-[15px]
          py-[10px]
          bg-neutral-800
          text-neutral-10
          flex
          items-center
          justify-center
          text-[16px]
          leading-[18px]
          tracking-[-0.5px]
          font-bold
          ${wixMadeforText.className}
        `}>
          Попробовать бесплатно
        </div>

        <Image
          src="/images/sophy-main.png"
          alt="Sophy"
          width={94}
          height={97}
          className="absolute bottom-0 right-[15px] -translate-y-[13px]"
          priority
        />
      </div>
    </div>
  );
};

export default SophyPromoCard;