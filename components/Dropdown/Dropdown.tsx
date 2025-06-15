"use client";
import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import Image from "next/image";
import { wixMadeforText } from "@/app/fonts";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "center";
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        className={`flex items-center gap-[5px] ${wixMadeforText.className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <Image
          src="/images/arrow-down-icon.svg"
          alt=">"
          width={16}
          height={16}
          priority
        />
      </div>
      {isOpen && (
        <div
          className={`dropdown-content ${
            align === "center" ? "dropdown-center" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
