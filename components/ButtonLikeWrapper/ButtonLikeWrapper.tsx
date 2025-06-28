import React from 'react';

type ButtonLikeWrapperSize = 'normal' | 'small';

interface ButtonLikeWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: ButtonLikeWrapperSize;
}

const  ButtonLikeWrapper: React.FC<ButtonLikeWrapperProps> = ({ 
  children, 
  className = '',
  size = 'normal'
}) => {
  const sizeStyles = {
    normal: 'rounded-[12px] py-3 px-[15px]',
    small: 'rounded-[6px] py-1 px-2'
  };

  return (
    <div 
      className={`
        ${sizeStyles[size]}
        bg-neutral-100
        cursor-default
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ButtonLikeWrapper;