"use client";
import { Dropdown } from "../Dropdown/Dropdown";
import IconWithText from "../IconWithText/IconWithText";
import { pageLinks, stackOptions } from "@/app/data/static-content";
import { NavMenuButton } from "./NavMenuBurron";
import { StackOptions } from "../StackOptions/StackOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationMenu = () => {
  const pathname = usePathname();
  const columnsCount = 2;
  const rowsCount = Math.ceil(pageLinks.length / columnsCount);

  const getLink = (baseLink: string | undefined) => {
    if (!baseLink) return "#";

    // Get the first segment of the path (stack name or empty for home page)
    const pathSegments = pathname.split("/").filter(Boolean);
    const currentStack = pathSegments[0] || stackOptions[0].linkId;

    // Always return path with current/default stack and new baseLink
    return `/${currentStack}/${baseLink}`;
  };

  // Разбиваем массив на строки по колонкам — чтобы получить порядок поколоночного заполнения
  const reorderedLinks = [];

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      const index = col * rowsCount + row;
      if (index < pageLinks.length) {
        reorderedLinks.push(pageLinks[index]);
      }
    }
  }

  return (
    <Dropdown
      align="center"
      trigger={
        <span className="cursor-pointer">
          <NavMenuButton />
        </span>
      }
    >
      <div className="md:w-[584px] md:h-[270px] w-[350px] rounded-xl bg-white md:p-5 p-[15px] overflow-y-auto shadow-dropdown">
        <StackOptions size="small" />
        <div className="flex flex-wrap gap-x-20 gap-y-3.5">
          {reorderedLinks.map((link) => (
            <Link href={getLink(link.baseLink)} key={link.title}>
              <IconWithText
                key={link.title}
                icon={link.iconFactory(20)}
                text={
                  <span className="font-normal text-[18px] leading-[22px] tracking-[-0.5px] w-[196px] inline-block">
                    {link.title}
                  </span>
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};
