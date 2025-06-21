"use client";
import { StackOption } from "@/app/data/static-content";
import { wixMadeforText } from "@/app/fonts";
import { StackType, useStore } from "@/store/onClient/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RadioGroupProps {
  items: StackOption[];
  className?: string;
  size?: "small" | "normal";
}

const RadioGroup = ({ items, className, size }: RadioGroupProps) => {
  const pathname = usePathname();
  const selectedStack = useStore((state) => state.selectedStack);
  const setSelectedStack = useStore((state) => state.setSelectedStack);

  const getLink = (linkId: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    // If we're on the home page or have only one segment, just return the new linkId
    if (pathSegments.length <= 1) return `/${linkId}`;
    // Otherwise replace first segment and keep the rest
    return `/${linkId}/${pathSegments.slice(1).join("/")}`;
  };

  const handleClick = (item: string) => {
    setSelectedStack(item as StackType);
  };

  const smallSizeStyles =
    "pt-[5px] pr-[12px] pb-[7px] pl-[12px] text-[18px] leading-[22px]";
  const normalSizeStyles =
    "pt-[5px] pr-[15px] pb-[7px] pl-[15px] md:text-[22px] md:leading-[26px] text-[18px] leading-[22px]";
  const sizeDependingStyles =
    (size || "normal") === "normal" ? normalSizeStyles : smallSizeStyles;

  return (
    <div className={`flex gap-[10px] flex-wrap ${className}`}>
      {items.map((item) => (
        <Link
          href={getLink(item.linkId)}
          key={item.linkId}
          onClick={() => handleClick(item.title)}
          className={`
            rounded-xl
            tracking-[-0.5px] 
            font-normal 
            ${sizeDependingStyles}
            ${wixMadeforText.className}
            ${selectedStack === item.title ? "text-white" : "bg-[#F6F6F6]"}
            transition-colors
          `}
          style={
            selectedStack === item.title
              ? {
                  background:
                    "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)",
                }
              : undefined
          }
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default RadioGroup;
