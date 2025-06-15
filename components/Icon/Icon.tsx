import React from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  className?: string;
  size?: number
}

const Icon: React.FC<IconProps> = ({ src, className, size=26 }) => {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt="icon"
      className={`${className ?? ""}`}
    />
  );
};

export default Icon;
