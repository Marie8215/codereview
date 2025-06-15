import { PropsWithChildren } from 'react';

interface CardProps {
  className?: string;
}

export function Card({ className = '', children }: PropsWithChildren<CardProps>) {
  return (
    <div className={`rounded-md ${className} overflow-hidden`}>
      {children}
    </div>
  );
}