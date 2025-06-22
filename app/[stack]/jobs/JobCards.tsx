"use client";
import JobCard, { JobCardDataItem } from "@/components/Card/Card";
import React, { useRef } from "react";
import SophyPromoCard from "@/components/Card/SophyPromoCard";
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay";

export interface JobCardsProps {
  data: JobCardDataItem[];
  baseUrl?: string;
}

function getCardsWithSophyPromo(data: JobCardDataItem[], isDesktop: boolean) {
  const cards = [...data];
  let result: (JobCardDataItem | "sophy")[] = [];

  if (isDesktop) {
    if (cards.length < 3) {
      // Не показывать promo
      return cards;
    }
    if (cards.length === 3) {
      // Вставить promo под индексом 1
      result = [cards[0], "sophy", cards[1], cards[2]];
    } else if (cards.length > 4) {
      // На второе место второго ряда
      result = [...cards];
      result.splice(3, 0, "sophy");
    }
  } else {
    if (cards.length <= 2) {
      // Не показывать promo
      return cards;
    }
    if (cards.length === 3) {
      // На второе место
      result = [cards[0], "sophy", cards[1], cards[2]];
    } else if (cards.length === 4) {
      // На третье место
      result = [cards[0], cards[1], "sophy", cards[2], cards[3]];
    } else if (cards.length > 4) {
      result = [cards[0], cards[1], "sophy", ...cards.slice(2)];
    }
  }
  return result;
}

export const JobCards = ({ data, baseUrl }: JobCardsProps) => {
  const refForOverlay = useRef(null);
  const screenWidth = useWindowWidth();

  // Пример определения десктопа через Tailwind (можно заменить на useMediaQuery)
  const isDesktop =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true;

  // SSR-safe: по умолчанию десктоп, на клиенте пересчитается
  const [isDesktopState, setIsDesktopState] = React.useState(isDesktop);

  React.useEffect(() => {
    const handler = () => {
      setIsDesktopState(window.matchMedia("(min-width: 768px)").matches);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const cardsWithPromo = getCardsWithSophyPromo(data, isDesktopState);

  return (
    <div className="mx-auto relative">
      {cardsWithPromo.length ? (
        <GradientOverlay
          cardHeight={screenWidth > 768 ? 204 : 240}
          childrenRef={refForOverlay}
          className="mb-[56px]"
        >
          <div
            className="flex flex-row md:gap-y-4 gap-y-[10px] gap-x-[18px] flex-wrap justify-between"
            ref={refForOverlay}
          >
            {cardsWithPromo.map((item) =>
              item === "sophy" ? (
                <SophyPromoCard key="sophy-promo" />
              ) : (
                <JobCard key={item.id} data={item} baseUrl={baseUrl} />
              )
            )}
          </div>
        </GradientOverlay>
      ) : null}
    </div>
  );
};

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    // Инициализация значения при монтировании
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
