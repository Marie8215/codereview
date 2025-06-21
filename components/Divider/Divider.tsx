import React from 'react';
import './Divider.css';

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ text, className = '' }) => (
  <div className={`flex items-center w-full h-[20] mb-[15px] ${className}`}>
    <div className="flex-grow h-[1px] bg-[#EAEAEA]" />
    {text && (
      <span className="mx-4 text-[#636469] text-[16px] font-medium">{text}</span>
    )}
    <div className="flex-grow h-[1px] bg-[#EAEAEA]" />
  </div>
);