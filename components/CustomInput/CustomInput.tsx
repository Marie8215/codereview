import React from 'react';
import Image from "next/image";
import './CustomInput.css';
import { wixMadeforDisplay } from '../../app/fonts';

interface CustomInputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  isPassword = false,
  showPassword,
  onTogglePassword,
}) => (
  <div className="w-full">
    <label className="block mb-[8px] leading-[20px] font-medium text-[16px] text-[#232325] tracking-[-0.5px]">{label}</label>
    <div className="relative">
      <input
        className={`${wixMadeforDisplay.className} w-full h-[52px] px-[16px] pr-[44px] rounded-[12px] border border-[#EAEAEA] text-[18px] leading-[22px] text-[#D4D5D7] outline-none`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isPassword && (
        <Image
          src={"/images/eye-ico.svg"}
          alt="Toggle password visibility"
          width={24}
          height={24}
          onClick={onTogglePassword}
          className="absolute right-[14px] top-1/2 -translate-y-1/2 cursor-pointer opacity-0.54"
        />
      )}
    </div>
  </div>
);