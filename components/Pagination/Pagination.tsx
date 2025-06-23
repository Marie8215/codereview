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
    const items = [];
    const visiblePages = 5;

    for (let i = 1; i <= Math.min(visiblePages, lastPage); i++) {
      items.push(
        <PaginationButton
          key={i}
          page={i}
          isActive={activePage === i}
          onClick={handlePageClick}
        />
      );
    }

    if (lastPage > visiblePages) {
      items.push(
        <div
          key="dots"
          className={`
            w-[40px] 
            h-[40px] 
            rounded-[10px]
            flex
            items-center
            justify-center
            text-[18px]
            leading-[22px]
            tracking-[-0.5px]
            font-medium
            text-neutral-800
            ${wixMadeforText.className}
          `}
        >
          ...
        </div>
      );

      items.push(
        <PaginationButton
          key={lastPage}
          page={lastPage}
          isActive={activePage === lastPage}
          onClick={handlePageClick}
        />
      );
    }

    return items;
  };

  return (
    <div
      className={`w-[298px] flex items-center justify-center gap-[3px] ${className}`}
    >
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
