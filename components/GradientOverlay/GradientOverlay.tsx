"use client";

import { wixMadeforDisplay } from "@/app/fonts";
import React, { useEffect, useRef } from "react";
import GradientButton from "../GradientButton/GradientButton";
import { userClientStore } from "@/store/onClient/store";

interface GradientOverlayProps {
  children: React.ReactNode;
  childrenRef: React.RefObject<HTMLDivElement> | React.RefObject<null>;
  cardHeight: number;
  className?: string;
  overlayType?: "jobs" | "questions"; // новый проп
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  children,
  childrenRef,
  cardHeight,
  className,
  overlayType = "jobs", // по умолчанию
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const overlayStaticHeight = 320;
  const overlayCalculatedHeight = overlayStaticHeight - cardHeight - 8;

  const setIsLoginOpen = userClientStore((state) => state.setLoginModalOpen);

  useEffect(() => {
    function updateHeight() {
      if (childrenRef.current && wrapperRef.current) {
        const containerHeight = childrenRef.current.clientHeight;
        wrapperRef.current.style.height = `${
          containerHeight + overlayCalculatedHeight
        }px`;
      }
    }

    updateHeight();

    window.addEventListener("resize", updateHeight);

    const resizeObserver = new ResizeObserver(updateHeight);
    if (childrenRef.current) {
      resizeObserver.observe(childrenRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, [childrenRef, cardHeight, overlayCalculatedHeight]);

  let title = (
    <>
      Получите доступ <br className="md:hidden" />к 1200 вакансиям и стажировкам
    </>
  );
  if (overlayType === "questions") {
    title = (
      <>
        Получите доступ{" "}
        <br className="md:hidden" />
        более чем к 1000 вопросов для подготовки к собеседованию
      </>
    );
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {children}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[320px] ${wixMadeforDisplay.className}`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, #FFFFFF 54.52%)",
        }}
      >
        <div
          className={`font-bold md:text-[22px] text-[20px] md:leading-[26px] leading-[24px] tracking-[-0.5px] sm:text-center text-left mt-[129px] mb-2.5`}
        >
          {title}
        </div>
        <div className="font-medium md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] tracking-[-0.5px] sm:text-center text-left md:w-[626px] mx-auto text-neutral-500 mb-[25px]">
          Сервис можно использовать бесплатно, <br className="md:hidden" /> без
          ограничений. <br className="hidden md:inline" /> Чтобы получить полный
          доступ, <br className="md:hidden" /> вам необходимо
          зарегистрироваться.
        </div>
        <div className="flex justify-center">
          <GradientButton onClick={() => setIsLoginOpen(true)}>Войти</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default GradientOverlay;
