"use client";
import { Dropdown } from "../Dropdown/Dropdown";
import IconWithText from "../IconWithText/IconWithText";
import { pageLinks, stackOptions } from "@/app/data/static-content";
import { NavMenuButton } from "./NavMenuBurron";
import { StackOptions } from "../StackOptions/StackOptions";
import Link from "next/link";
import { userClientStore } from "@/store/onClient/store";

export const NavigationMenu = () => {
  const columnsCount = 2;
  const rowsCount = Math.ceil(pageLinks.length / columnsCount);
  const selectedStack = userClientStore(store => store.selectedStack);

  const getLink = (baseLink: string | undefined) => {
    if (!baseLink) return "#";

    const currentStack = selectedStack?.linkId || stackOptions[0].linkId;

    return `/${currentStack}/${baseLink}`;
  };

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
