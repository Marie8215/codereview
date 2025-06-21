import React from 'react';
import './AuthButton.css';
import { wixMadeforText } from '../../app/fonts';

interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${wixMadeforText.className}w-full h-[50px] rounded-[18px] bg-gradient-to-r from-[#2093FE] to-[#C217FEE5] text-white font-medium text-[18px] leading-[22px] tracking-[-0.5px] transition-all hover:opacity-90 ${className}`}
  >
    {children}
  </button>
);