"use client";

import { wixMadeforDisplay } from "@/app/fonts";
import React, { useEffect, useRef } from "react";
import GradientButton from "../GradientButton/GradientButton";

interface GradientOverlayProps {
  children: React.ReactNode;
  childrenRef: React.RefObject<HTMLDivElement> | React.RefObject<null>;
  cardHeight: number;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  children,
  childrenRef,
  cardHeight,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenRef.current && wrapperRef.current) {
      const containerHeight = childrenRef.current.clientHeight;
      wrapperRef.current.style.height = `${
        containerHeight + 320 - cardHeight
      }px`;
    }
  }, [childrenRef, cardHeight]);

  return (
    <div ref={wrapperRef} className="relative w-fit">
      {children}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[320px] ${wixMadeforDisplay.className}`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, #FFFFFF 54.52%)",
        }}
      >
        <div
          className={`font-bold text-[22px] leading-[26px] tracking-[-0.5px] text-center mt-[129px] mb-2.5`}
        >
          Получите доступ к 1200 вакансиям и стажировкам
        </div>
        <div className="font-medium text-[18px] leading-[22px] tracking-[-0.5px] text-center w-[626px] mx-auto text-neutral-500 mb-[25px]">
          Сервис можно использовать бесплатно, без ограничений.Чтобы получить
          полный доступ, вам необходимо зарегистрироваться.
        </div>
        <div className="flex justify-center">
          <GradientButton>Зарегистрироваться</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default GradientOverlay;
