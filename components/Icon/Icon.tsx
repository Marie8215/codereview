import React from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className }) => {
  return (
    <Image
      width={26}
      height={26}
      src={src}
      alt="icon"
      className={`w-[26px] h-[26px] ${className ?? ""}`}
    />
  );
};

export default Icon;
