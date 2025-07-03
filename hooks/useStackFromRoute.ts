"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { stackOptionsMap } from "@/app/data/static-content";
import { userClientStore } from "@/store/onClient/store";

const excludingPages = ["/jobs/create"];

export const useSyncStackFromRoute = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedStack = userClientStore((state) => state.selectedStack);
  const setSelectedStack = userClientStore((state) => state.setSelectedStack);

  const hasInitialized = useRef(false);

  // 1. При первом запуске — инициализируем selectedStack из URL
  useEffect(() => {
    if (hasInitialized.current) return;

    const stackFromUrl = pathname.split("/")[1];
    const stackOption = stackOptionsMap.get(stackFromUrl);

    if (!stackOption) {
      return;
    }

    console.log("from url to store", stackOption);
    setSelectedStack(stackOption);

    hasInitialized.current = true;
  }, [pathname, setSelectedStack]);

  // 2. Когда selectedStack меняется — обновляем URL, если он не совпадает
  useEffect(() => {
    if (!hasInitialized.current || !selectedStack) return;

    if (excludingPages.includes(pathname)) {
      console.log(pathname, "is excluded from stack sync");
      return;
    }

    const currentStackFromPath = pathname.split("/")[1];

    if (currentStackFromPath === selectedStack.linkId) return;

    const pathSegments = pathname.split("/").filter(Boolean);
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    const currentParams = params.toString();

    const newPath = `/${selectedStack.linkId}/${pathSegments
      .slice(1)
      .join("/")}${currentParams ? `?${currentParams}` : ""}`;

    console.log("from store to url", newPath);

    router.push(newPath, { scroll: false });
  }, [selectedStack, pathname, searchParams, router]);
};
