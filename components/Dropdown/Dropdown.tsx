"use client";
import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { DropdownTrigger } from "./DropdownTrigger";
import React from "react";
import ButtonLikeWrapper from "@/components/ButtonLikeWrapper/ButtonLikeWrapper";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "center";
  relative?: boolean;
  buttonLike?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "left",
  relative = false,
  buttonLike = false,
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
    <div ref={dropdownRef} className={relative ? "relative" : ""}>
      {buttonLike ? (
        <ButtonLikeWrapper>
          <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
            {trigger}
          </DropdownTrigger>
        </ButtonLikeWrapper>
      ) : (
        <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </DropdownTrigger>
      )}
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
