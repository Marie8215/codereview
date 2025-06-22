"use client";
import Image from "next/image";
import { DropdownBase } from "./DropdownBase";
import { DropdownItem } from "./DropdownContent";
import StatsRow from "../StatsRow/StatsRow";

interface DropdownListProps<T> {
  trigger: React.ReactNode;
  align?: "left" | "center";
  relative?: boolean;
  buttonLike?: boolean;
  onSelect?: (item: DropdownItem<T>, selectedItems: DropdownItem<T>[]) => void;
  items: DropdownItem<T>[];
  multiselect?: boolean;
  activeIds?: (string | number)[];
}

export const DropdownList = <T,>({
  trigger,
  align = "left",
  relative = false,
  buttonLike = false,
  multiselect = true,
  onSelect,
  items,
  activeIds = [],
}: DropdownListProps<T>) => {
  const handleSelect = (item: DropdownItem<T>) => {
    let newSelected: (string | number)[];

    if (multiselect) {
      newSelected = activeIds.includes(item.id)
        ? activeIds.filter((selectedId) => selectedId !== item.id)
        : [...activeIds, item.id];
    } else {
      newSelected = activeIds.includes(item.id) ? [] : [item.id];
    }

    onSelect?.(
      item,
      items.filter((item) => newSelected.includes(item.id))
    );
  };

  const itemsUi = items.map((item) => {
    const isSelected = activeIds.includes(item.id);

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
        {item.count ? (
          <StatsRow label={item.title} count={item.count} />
        ) : (
          <span>{item.title}</span>
        )}
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
