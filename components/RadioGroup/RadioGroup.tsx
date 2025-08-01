"use client";
import { StackOption, stackOptionsMap } from "@/app/data/static-content";
import { wixMadeforText } from "@/app/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userClientStore } from "../../store/onClient/store";

interface RadioGroupProps {
  items: StackOption[];
  className?: string;
  size?: "small" | "normal";
}

const RadioGroup = ({ items, className, size }: RadioGroupProps) => {
  const pathname = usePathname();

  const selectedStack = userClientStore((state) => state.selectedStack);
  const setSelectedStack = userClientStore((state) => state.setSelectedStack);

  const shouldEnebleStackLinks =
    pathname === "/" || stackOptionsMap.get(pathname.split("/")[1]);

  const getLink = (linkId: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length <= 1) return `/${linkId}`;
    return `/${linkId}/${pathSegments.slice(1).join("/")}`;
  };

  const handleClick = (item: StackOption) => {
    setSelectedStack(item);
  };

  const smallSizeStyles =
    "pt-[5px] pr-[12px] pb-[7px] pl-[12px] text-[18px] leading-[22px]";
  const normalSizeStyles =
    "pt-[5px] pr-[15px] pb-[7px] pl-[15px] md:text-[22px] md:leading-[26px] text-[18px] leading-[22px]";
  const sizeDependingStyles =
    (size || "normal") === "normal" ? normalSizeStyles : smallSizeStyles;

  const getClassname = (linkId: string) => `
      rounded-xl
      cursor-pointer
      tracking-[-0.5px] 
      font-normal 
      ${sizeDependingStyles}
      ${wixMadeforText.className}
      ${selectedStack?.linkId === linkId ? "text-white" : "bg-[#F6F6F6]"}
      transition-colors
    `;

  const getStyle = (linkId: string) =>
    selectedStack?.linkId === linkId
      ? {
          background:
            "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)",
        }
      : undefined;

  return (
    <div className={`flex gap-[10px] flex-wrap ${className}`}>
      {items.map((item) =>
        shouldEnebleStackLinks ? (
          <Link
            href={getLink(item.linkId)}
            key={item.linkId}
            onClick={() => handleClick(item)}
            className={getClassname(item.linkId)}
            style={getStyle(item.linkId)}
          >
            {item.title}
          </Link>
        ) : (
          <div
            key={item.linkId}
            onClick={() => handleClick(item)}
            className={getClassname(item.linkId)}
            style={getStyle(item.linkId)}
          >
            {item.title}
          </div>
        )
      )}
    </div>
  );
};

export default RadioGroup;
