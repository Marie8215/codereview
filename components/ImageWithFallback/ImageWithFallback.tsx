"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  className,
  fallbackText,
}: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = () => {
    const words = fallbackText.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return fallbackText.substring(0, 2).toUpperCase();
  };

  return (
    <>
      <div
        className={`rounded-[8px] shrink-0 overflow-hidden bg-neutral-10 flex items-center justify-center text-[14px] font-medium text-neutral-500`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {src && !imageError ? (
          <Image
            src={src || ""}
            alt={alt}
            width={width}
            height={height}
            className={`object-cover h-full ${className}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{getInitials()}</span>
        )}
      </div>
    </>
  );
};
