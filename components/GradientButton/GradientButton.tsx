import React from "react";
import { wixMadeforDisplay } from "@/app/fonts";

interface GradientButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'normal' | 'large';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = 'dark',
  size = 'large'
}) => {
  const gradientStyle = variant === 'dark' 
    ? {
        background: "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)"
      }
    : {
        background: "linear-gradient(88.79deg, rgba(244, 184, 184, 0.4) -3.7%, rgba(227, 179, 234, 0.4) 31.39%, rgba(197, 201, 241, 0.4) 74.78%)"
      };

  const sizeStyles = size === 'normal' 
    ? 'rounded-[12px] px-[15px] py-3'
    : 'rounded-[18px] px-5 py-[17px]';

  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        ${sizeStyles}
        backdrop-blur-[8px]
        text-[18px]
        font-medium
        leading-[22px]
        tracking-[-0.5px]
        ${variant === 'dark' ? 'text-neutral-10' : 'text-neutral-800'}
        ${wixMadeforDisplay.className}
        ${className}
      `}
      style={gradientStyle}
    >
      {children}
    </button>
  );
};

export default GradientButton;
