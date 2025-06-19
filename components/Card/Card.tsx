import React, { ReactNode } from 'react';
import TwoLineIconText from '../TwoLineIconText/TwoLineIconText';
import { wixMadeforDisplay, wixMadeforText } from '@/app/fonts';

interface JobCardProps {
  title: string;
  tags: ReactNode[];
  icon?: React.ReactNode;
  companyName: string;
  companyDescription: string;
  date: string;
  className?: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  tags,
  icon,
  companyName,
  companyDescription,
  date,
  className = ''
}) => {
  return (
    <div className={`
      w-[502px] 
      h-[204px] 
      rounded-[8px] 
      p-[15px] 
      border border-neutral-200
      bg-neutral-100
      flex
      flex-col
      ${className}
    `}>
      <div className="flex-1">
        <h3 className={`
        ${wixMadeforDisplay.className}
          text-[22px] 
          leading-[26px] 
          font-bold 
          tracking-[-0.5px] 
          text-neutral-800
          mb-2.5
          line-clamp-2
        `}>
          {title}
        </h3>

        {tags.length > 0 && (
          <div className={`flex flex-wrap gap-[15px] ${wixMadeforDisplay.className}`}>
            {tags}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <TwoLineIconText
          icon={icon}
          title={companyName}
          description={companyDescription}
        />
        <span className={`
          text-[16px] 
          leading-[20px] 
          text-neutral-500
          tracking-[-0.5px]
          font-medium
          ${wixMadeforText.className}
        `}>
          {date}
        </span>
      </div>
    </div>
  );
};

export default JobCard;