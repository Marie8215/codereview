"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { wixMadeforText } from "@/app/fonts";
import "./Marquee.css";

interface MarqueeProps {
  text: ReactNode;
  speed?: number; // Скорость в секундах, по умолчанию 20
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [copies, setCopies] = useState<number>(3);

  useEffect(() => {
    const calculateCopies = () => {
      if (!containerRef.current || !textRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.offsetWidth;

      // Вычисляем сколько копий нужно для заполнения контейнера дважды
      // (для плавной анимации) плюс запас
      const needed = Math.ceil((containerWidth * 2) / textWidth) + 1;
      setCopies(needed);
    };

    calculateCopies();
    window.addEventListener("resize", calculateCopies);

    return () => window.removeEventListener("resize", calculateCopies);
  }, [text]);

  return (
    <div className="marquee-container flex" ref={containerRef}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="marquee-content">
          {[...Array(copies)].map((_, index) => (
            <span
              key={index}
              className={`
                marquee-text
                text-[16px]
                leading-[18px]
                tracking-[-0.5px]
                font-medium
                ${wixMadeforText.className}
              `}
              ref={index === 0 ? textRef : undefined}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="marquee-content">
          {[...Array(copies)].map((_, index) => (
            <span
              key={index}
              className={`
                marquee-text
                text-[16px]
                leading-[18px]
                tracking-[-0.5px]
                font-medium
                ${wixMadeforText.className}
              `}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};