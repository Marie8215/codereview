import React from 'react';

interface StatsRowProps {
  label: string;
  count: number;
  className?: string;
}

const StatsRow: React.FC<StatsRowProps> = ({ 
  label, 
  count,
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-[10px] ${className}`}>
      <span className="text-neutral-800">{label}</span>
      <span className="text-neutral-500">{count}</span>
    </div>
  );
};

export default StatsRow;