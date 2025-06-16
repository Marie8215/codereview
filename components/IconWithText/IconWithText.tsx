import { wixMadeforText } from '@/app/fonts';
import { ReactNode } from 'react';

type IconWithTextSize = 'normal' | 'small';

interface IconWithTextProps {
  icon: ReactNode;
  text: ReactNode;
  className?: string;
  size?: IconWithTextSize;
}

const IconWithText = ({ 
  icon, 
  text, 
  className = '', 
  size = 'normal'
}: IconWithTextProps) => {
  const textStyles = {
    normal: 'text-[18px] leading-[22px]',
    small: 'text-[16px] leading-[20px]'
  };

  const gapStyles = {
    normal: 'gap-[6px]',
    small: 'gap-[2px]'
  };

  return (
    <div 
      className={`flex items-center whitespace-nowrap ${gapStyles[size]} ${className}`}
    >
      <span className='inline-block'>{icon}</span>
      <span className={`
        inline-block 
        font-medium 
        tracking-[-0.5px] 
        ${textStyles[size]}
        ${wixMadeforText.className}
      `}>
        {text}
      </span>
    </div>
  );
};

export default IconWithText;