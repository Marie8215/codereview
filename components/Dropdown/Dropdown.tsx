import "./Dropdown.css";
import React from "react";
import { DropdownBase } from "./DropdownBase";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "center";
  relative?: boolean;
  buttonLike?: boolean;
  onChange?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "left",
  relative = false,
  buttonLike = false,
  onChange,
}) => {
  return (
    <DropdownBase
      trigger={trigger}
      align={align}
      relative={relative}
      onChange={onChange}
      buttonLike={buttonLike}
    >
      {children}
    </DropdownBase>
  );
};