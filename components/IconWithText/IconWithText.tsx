import { ReactNode } from 'react';

interface IconWithTextProps {
  icon: ReactNode;
  text: string;
  gap?: number;
}

const IconWithText = ({ icon, text, gap = 8 }: IconWithTextProps) => {
  return (
    <div 
      className={`flex items-center whitespace-nowrap gap-[${gap}px]`}
    >
      {icon}
      <span className="inline-block">{text}</span>
    </div>
  );
};

export default IconWithText;