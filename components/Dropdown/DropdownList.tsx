"use client";
import Image from "next/image";
import { DropdownBase } from "./DropdownBase";
import { DropdownItem } from "./DropdownContent";
import { useState } from "react";

interface DropdownListProps {
  trigger: React.ReactNode;
  align?: "left" | "center";
  relative?: boolean;
  buttonLike?: boolean;
  onSelect?: (id: DropdownItem) => void;
  items: DropdownItem[];
  multiselect?: boolean;
}

export const DropdownList: React.FC<DropdownListProps> = ({
  trigger,
  align = "left",
  relative = false,
  buttonLike = false,
  multiselect = true,
  onSelect,
  items,
}) => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>(
    items.filter((item) => item.isActive).map((item) => item.id)
  );

  const handleSelect = (item: DropdownItem) => {
    let newSelected: (string | number)[];

    if (multiselect) {
      newSelected = selectedIds.includes(item.id)
        ? selectedIds.filter((selectedId) => selectedId !== item.id)
        : [...selectedIds, item.id];
    } else {
      newSelected = selectedIds.includes(item.id) ? [] : [item.id];
    }

    setSelectedIds(newSelected);
    onSelect?.(item);
  };

  const itemsUi = items.map((item) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className={`
                  flex 
                  justify-between 
                  items-center 
                  px-[15px] 
                  py-[9px] 
                  cursor-pointer
                  ${isSelected ? "bg-neutral-200" : "bg-white"}
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
  });

  return (
    <DropdownBase
      trigger={trigger}
      align={align}
      relative={relative}
      buttonLike={buttonLike}
    >
      {itemsUi}
    </DropdownBase>
  );
};
