import React from 'react';
import { wixMadeforDisplay } from '@/app/fonts';

interface TwoLineIconTextProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const TwoLineIconText: React.FC<TwoLineIconTextProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  const getInitials = (text: string) => {
    const words = text.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return text.substring(0, 2).toUpperCase();
  };

  return (
    <div className={`flex items-start gap-[10px] ${className}`}>
      {icon ? (
        <div className="w-[42px] h-[42px] rounded-[8px] shrink-0 overflow-hidden">
          {icon}
        </div>
      ) : (
        <div className="w-[42px] h-[42px] rounded-[8px] shrink-0 bg-neutral-100 flex items-center justify-center text-[14px] font-medium text-neutral-500">
          {getInitials(title)}
        </div>
      )}
      <div className={`flex flex-col ${wixMadeforDisplay.className}`}>
        <span className="text-[18px] leading-[22px] tracking-[-0.5px] text-neutral-800 font-semibold">
          {title}
        </span>
        <span className="text-[16px] leading-[20px] tracking-[-0.5px] text-neutral-500 font-semibold">
          {description}
        </span>
      </div>
    </div>
  );
};

export default TwoLineIconText;