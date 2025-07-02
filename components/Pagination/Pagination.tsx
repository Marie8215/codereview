"use client";

import { wixMadeforText } from "@/app/fonts";
import React, { useState, useEffect } from "react";

interface PaginationProps {
  lastPage: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

interface PaginationButtonProps {
  page: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={`
        w-[40px]
        h-[40px]
        rounded-[10px]
        transition-colors
        text-[18px]
        leading-[22px]
        tracking-[-0.5px]
        font-medium
        cursor-pointer
        ${wixMadeforText.className}
        ${
          isActive
            ? "bg-gradient-to-tr from-[rgba(244,184,184,0.4)] via-[rgba(234,214,181,0.4)] via-[rgba(227,234,179,0.4)] to-[rgba(197,241,208,0.4)] text-neutral-800"
            : "text-neutral-800 hover:bg-neutral-100"
        }
      `}
    >
      {page}
    </button>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  lastPage,
  currentPage: externalPage = 1,
  onPageChange,
  className = "",
}) => {
  const [activePage, setActivePage] = useState(externalPage);

  useEffect(() => {
    setActivePage(externalPage);
  }, [externalPage]);

  const handlePageClick = (page: number) => {
    if (page !== activePage) {
      setActivePage(page);
      onPageChange?.(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const siblings = 1;
    const totalNumbers = siblings * 2 + 3; // current, siblings, first & last
    const totalBlocks = totalNumbers + 2; // ... and ...

    if (lastPage <= totalBlocks) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(
          <PaginationButton
            key={i}
            page={i}
            isActive={activePage === i}
            onClick={handlePageClick}
          />
        );
      }
    } else {
      const leftSibling = Math.max(activePage - siblings, 2);
      const rightSibling = Math.min(activePage + siblings, lastPage - 1);

      pages.push(
        <PaginationButton
          key={1}
          page={1}
          isActive={activePage === 1}
          onClick={handlePageClick}
        />
      );

      if (leftSibling > 2) {
        pages.push(<Dots key="dots-left" />);
      }

      for (let i = leftSibling; i <= rightSibling; i++) {
        pages.push(
          <PaginationButton
            key={i}
            page={i}
            isActive={activePage === i}
            onClick={handlePageClick}
          />
        );
      }

      if (rightSibling < lastPage - 1) {
        pages.push(<Dots key="dots-right" />);
      }

      pages.push(
        <PaginationButton
          key={lastPage}
          page={lastPage}
          isActive={activePage === lastPage}
          onClick={handlePageClick}
        />
      );
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-[6px] ${className}`}>
      {renderPageNumbers()}
    </div>
  );
};

const Dots = () => (
  <div className="w-[40px] h-[40px] flex items-center justify-center text-[18px] text-neutral-500">
    ...
  </div>
);

export default Pagination;
