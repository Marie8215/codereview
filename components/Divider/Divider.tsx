import React from 'react';
import './Divider.css';

interface DividerProps {
  text: string;
}

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="divider-line">
      <span className="divider-text">{text}</span>
    </div>
  );
};