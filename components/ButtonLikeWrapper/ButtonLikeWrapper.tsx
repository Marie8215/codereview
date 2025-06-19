import React from 'react';

interface ButtonLikeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonLikeWrapper: React.FC<ButtonLikeWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div 
      className={`
        rounded-[12px] 
        py-3 
        px-[15px] 
        bg-neutral-100
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ButtonLikeWrapper;