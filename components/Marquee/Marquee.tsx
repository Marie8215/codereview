"use client";
import { useEffect, useRef, useState } from "react";
import "./Marquee.css";

interface MarqueeProps {
  text: string;
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
    <div className="marquee-container" ref={containerRef}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {/* Первая копия для измерения и отображения */}
        <div className="marquee-content">
          {[...Array(copies)].map((_, index) => (
            <span
              key={index}
              className="marquee-text"
              ref={index === 0 ? textRef : undefined}
            >
              {text}
            </span>
          ))}
        </div>
        {/* Вторая копия для непрерывности */}
        <div className="marquee-content">
          {[...Array(copies)].map((_, index) => (
            <span key={index} className="marquee-text">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};