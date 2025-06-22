import React from "react";
import "./SocialButton.css";
import Image from "next/image";

interface SocialButtonProps {
  icon: string;
  alt: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  alt,
  children,
  onClick,
}) => {
  return (
    <button className="social-button" onClick={onClick}>
      <Image
        src={icon}
        alt={alt}
        className="social-icon"
        height={18}
        width={18}
      />
      {children}
    </button>
  );
};
