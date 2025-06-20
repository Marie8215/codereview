"use client";

import { wixMadeforDisplay } from "@/app/fonts";
import React, { useEffect, useRef } from "react";
import GradientButton from "../GradientButton/GradientButton";

interface GradientOverlayProps {
  children: React.ReactNode;
  childrenRef: React.RefObject<HTMLDivElement> | React.RefObject<null>;
  cardHeight: number;
  className?: string;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  children,
  childrenRef,
  cardHeight,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenRef.current && wrapperRef.current) {
      const containerHeight = childrenRef.current.clientHeight;
      wrapperRef.current.style.height = `${
        containerHeight + 320 - cardHeight - 8 // 8px is the half of the gap between the cards
      }px`;
    }
  }, [childrenRef, cardHeight]);

  return (
    <div ref={wrapperRef} className={`relative w-fit ${className}`}>
      {children}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[320px] ${wixMadeforDisplay.className}`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, #FFFFFF 54.52%)",
        }}
      >
        <div
          className={`font-bold md:text-[22px] text-[20px] md:leading-[26px] leading-[24px] tracking-[-0.5px] md:text-center text-left mt-[129px] mb-2.5`}
        >
          Получите доступ <br className="md:hidden"/>к 1200 вакансиям и стажировкам
        </div>
        <div className="font-medium md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.5px] md:text-center text-left md:w-[626px] mx-auto text-neutral-500 mb-[25px]">
          Сервис можно использовать бесплатно, <br className="md:hidden"/> без ограничений. <br className="hidden md:inline"/> Чтобы
          получить полный доступ, <br className="md:hidden"/> вам необходимо зарегистрироваться.
        </div>
        <div className="flex justify-center">
          <GradientButton>Зарегистрироваться</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default GradientOverlay;
