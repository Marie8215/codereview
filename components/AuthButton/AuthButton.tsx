import React from 'react';
import './AuthButton.css';

interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  type = 'button'
}) => {
  return (
    <button 
      className="auth-button"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};