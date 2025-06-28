"use client";
import { userClientStore } from "@/store/onClient/store";
import GradientOverlay from "../GradientOverlay/GradientOverlay";
import Pagination from "../Pagination/Pagination";
import { useSyncPage } from "@/hooks/useSyncPage";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface WithPaginationContentProps {
  cardsGrid: React.ReactNode;
  lastPageNumber: number;
  currentPage: number;
  refForOverlay: React.RefObject<HTMLDivElement | null>;
  cardHeightDesktop: number;
  cardHeight: number;
  overlayType?: "jobs" | "questions"; // новый проп
}

export const WithPaginationContent = ({
  cardsGrid: jobCardsGrid,
  lastPageNumber,
  currentPage,
  refForOverlay,
  cardHeightDesktop,
  cardHeight,
  overlayType = "jobs", // по умолчанию
}: WithPaginationContentProps) => {
  const loggedIn = userClientStore((state) => state.loggedIn);
  const setPage = useSyncPage();
  const screenWidth = useWindowWidth();

  return (
    <div className="mx-auto relative">
      {loggedIn ? (
        <div className="mb-[56px]">
          {jobCardsGrid}
          {
            // вообще можно не показывать если 1, но для конкурса покажем 1/1 страниц
            lastPageNumber > 0 && (
              <div className="flex justify-center md:mt-5 mt-[15px] md:mb-[60px] mb-[50px]">
                <Pagination
                  lastPage={lastPageNumber}
                  currentPage={currentPage}
                  onPageChange={setPage}
                />
              </div>
            )
          }
        </div>
      ) : (
        <GradientOverlay
          cardHeight={screenWidth > 768 ? cardHeightDesktop : cardHeight}
          childrenRef={refForOverlay}
          className="mb-[56px]"
          overlayType={overlayType} // прокидываем сюда
        >
          {jobCardsGrid}
        </GradientOverlay>
      )}
    </div>
  );
};
