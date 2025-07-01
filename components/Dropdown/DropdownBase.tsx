"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import ButtonLikeWrapper from "../ButtonLikeWrapper/ButtonLikeWrapper";
import { DropdownTrigger } from "./DropdownTrigger";

export const DropdownBase = ({
  trigger,
  children,
  align = "left",
  relative = false,
  isOpen: outerIsOpen = false,
  buttonLike = false,
}: {
  trigger: ReactNode;
  children: ReactNode;
  align: "left" | "center";
  relative?: boolean;
  onChange?: () => void;
  isOpen?: boolean;
  buttonLike?: boolean;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(outerIsOpen);

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

  useEffect(() => {
    setIsOpen(outerIsOpen);
  }, [outerIsOpen]);

  const triggerUi = buttonLike ? (
    <ButtonLikeWrapper>
      <DropdownTrigger>{trigger}</DropdownTrigger>
    </ButtonLikeWrapper>
  ) : (
    <DropdownTrigger>{trigger}</DropdownTrigger>
  );

  return (
    <div
      ref={dropdownRef}
      className={relative ? "relative" : ""}
      onClick={() => setIsOpen(true)}
    >
      {triggerUi}
      {isOpen && (
        <div
          className={`dropdown-content max-h-[400px] overflow-auto ${
            align === "center" ? "dropdown-center" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
