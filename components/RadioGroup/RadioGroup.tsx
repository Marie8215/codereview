"use client";
import { wixMadeforText } from "@/app/fonts";
import { StackType, useStore } from "@/store/onClient/store";

interface RadioGroupProps {
  items: string[];
  onChange?: (selected: string) => void;
  className?: string;
  size?: "small" | "normal";
}

const RadioGroup = ({ items, className, size, onChange }: RadioGroupProps) => {
  const selectedStack = useStore(state => state.selectedStack);
  const setSelectedStack = useStore(state => state.setSelectedStack);

  const handleClick = (item: string) => {
    setSelectedStack(item as StackType);
    onChange?.(item);
  };

  const smallSizeStyles = "pt-[5px] pr-[12px] pb-[7px] pl-[12px] text-[18px] leading-[22px]"
  const normalSizeStyles = "pt-[5px] pr-[15px] pb-[7px] pl-[15px] md:text-[22px] md:leading-[26px] text-[18px] leading-[22px]"

  const sizeDependingStyles = (size || "normal") === "normal" ? normalSizeStyles : smallSizeStyles;

  return (
    <div className={`flex gap-[10px] flex-wrap ${className}`}>
      {items.map((item) => (
        <button 
          key={item}
          onClick={() => handleClick(item)}
          className={`
            rounded-xl
            tracking-[-0.5px] font-normal ${sizeDependingStyles}
            ${wixMadeforText.className}
            ${selectedStack === item ? "text-white" : "bg-[#F6F6F6]"}
            transition-colors
          `}
          style={
            selectedStack === item
              ? {
                  background:
                    "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)",
                }
              : undefined
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default RadioGroup;

