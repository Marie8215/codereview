import React, { useState, useEffect } from "react";
import Image from "next/image";
import { wixMadeforDisplay } from "../../app/fonts";

interface CustomInputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  error?: string; // для других ошибок, если нужно
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  isPassword = false,
  onTogglePassword,
  error,
}) => {
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (type === "email") {
      if (!value) {
        setEmailError("");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError("Некорректный email");
      } else {
        setEmailError("");
      }
    }
  }, [type, value]);

  // Показываем ошибку: если это email — только свою, иначе — проп error
  const errorToShow = type === "email" ? emailError : error;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[8px] leading-[20px] font-medium text-[16px] text-[#232325] tracking-[-0.5px]">
        <span>{label}</span>
        {errorToShow && (
          <span className="text-red-500 text-[14px] leading-[14px] ml-2">{errorToShow}</span>
        )}
      </div>
      <div className="relative">
        <input
          className={`${wixMadeforDisplay.className} w-full h-[52px] px-[16px] pr-[44px] rounded-[12px] border border-[#D4D5D7] text-[18px] leading-[22px] text-[#232325] placeholder:text-[#D4D5D7] outline-none`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={type === "email" ? "email" : undefined}
          inputMode={type === "email" ? "email" : undefined}
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
};