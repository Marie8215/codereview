import { wixMadeforText } from '@/app/fonts';
import { ReactNode } from 'react';

interface IconWithTextProps {
  icon: ReactNode;
  text: ReactNode;
  gap?: number;
  className?: string;
}

const IconWithText = ({ icon, text, className, gap = 8 }: IconWithTextProps) => {
  return (
    <div 
      className={`flex items-center whitespace-nowrap gap-[6px] ${className}`}
    >
      <span className='inline-block'>{icon}</span>
      <span className={`inline-block font-medium text-[18px] leading-[22px] tracking-[-0.5px] ${wixMadeforText.className}`}>
        {text}
      </span>
    </div>
  );
};

export default IconWithText;