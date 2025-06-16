import React from 'react';
import './SocialButton.css';

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
  onClick
}) => {
  return (
    <button className="social-button" onClick={onClick}>
      <img 
        src={icon}
        alt={alt}
        className="social-icon"
      />
      {children}
    </button>
  );
};