"use client";
import React, { useState, useEffect } from 'react';
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";

interface ToggleProps {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  buttonLike?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ 
  children, 
  checked = false,
  onChange,
  className = '',
  buttonLike = false
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (value: boolean) => {
    setIsChecked(value);
    onChange?.(value);
  };

  const toggleContent = (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      {children}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <div className={`
          w-[36px] 
          h-[22px] 
          rounded-[18px] 
          border-[2px]
          transition-colors
          duration-300
          ${isChecked ? 'border-neutral-800' : 'border-neutral-300'}
        `}>
          <div 
            className={`
              w-[14px] 
              h-[14px] 
              rounded-full 
              transition-all
              duration-300
              translate-x-[3px]
              translate-y-[2px]
              ${isChecked ? 'bg-neutral-800 translate-x-[17px]' : 'bg-neutral-300'}
            `}
          />
        </div>
      </div>
    </label>
  );

  return buttonLike ? (
    <ButtonLikeWrapper>{toggleContent}</ButtonLikeWrapper>
  ) : (
    toggleContent
  );
};

export default Toggle;