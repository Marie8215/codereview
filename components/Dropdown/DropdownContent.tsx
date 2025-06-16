'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

interface DropdownItem {
  id: string | number;
  title: ReactNode;
  isActive?: boolean;
}

interface DropdownContentProps {
  items: DropdownItem[];
  onSelect?: (id: string | number) => void;
  className?: string;
  multiselect?: boolean;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  items,
  onSelect,
  className = '',
  multiselect = true
}) => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>(
    items.filter(item => item.isActive).map(item => item.id)
  );

  const handleSelect = (id: string | number) => {
    let newSelected: (string | number)[];
    
    if (multiselect) {
      newSelected = selectedIds.includes(id) 
        ? selectedIds.filter(selectedId => selectedId !== id)
        : [...selectedIds, id];
    } else {
      newSelected = selectedIds.includes(id) ? [] : [id];
    }
    
    setSelectedIds(newSelected);
    onSelect?.(id);
  };

  return (
    <div 
      className={`
        rounded-[14px] 
        bg-white 
        shadow-[0px_4px_24px_0px_#0000001F,0px_1px_3px_0px_#0000000D]
        overflow-hidden
        pt-[10px]
        pb-[5px]
        ${className}
      `}
    >
      {items.map((item) => {
        const isSelected = selectedIds.includes(item.id);
        
        return (
          <div
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={`
              flex 
              justify-between 
              items-center 
              px-[15px] 
              py-[9px] 
              cursor-pointer
              ${isSelected ? 'bg-neutral-200' : 'bg-white'}
              hover:bg-neutral-100
              transition-colors
              duration-150
            `}
          >
            <span>{item.title}</span>
            {isSelected && (
              <Image
                src="/images/checked-icon.svg"
                alt="Selected"
                width={16}
                height={16}
                priority
              />
            )}
          </div>
        );
      })}
    </div>
  );
};