import React from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  className?: string;
  size?: number;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, className, size = 26, alt }) => {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={alt}
      className={`${className ?? ""}`}
    />
  );
};

export default Icon;
