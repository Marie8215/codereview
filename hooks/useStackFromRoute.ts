"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { StackOption, stackOptions } from "@/app/data/static-content";
import { userClientStore } from "@/store/onClient/store";

export const useStackRouteFrom = (): [
  StackOption,
  (stack: StackOption) => void
] => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedStack = userClientStore((state) => state.selectedStack);
  const setSelectedStack = userClientStore((state) => state.setSelectedStack);

  const updateStack = (stack: StackOption) => {
    setSelectedStack(stack);
    const pathSegments = pathname.split("/").filter(Boolean);
    const currentParams = searchParams.toString();

    if (pathSegments[0] === stack.linkId) {
      return;
    }

    const newPath = `/${stack.linkId}/${pathSegments.slice(1).join("/")}${
      currentParams ? `?${currentParams}` : ""
    }`;
    router.push(newPath);
  };

  useEffect(() => {
    const stackFromUrl = pathname.split("/")[1];
    const stackOption = stackOptions.find(
      (option) => option.linkId === stackFromUrl
    );
    if (stackOption) {
      setSelectedStack(stackOption);
    }
  }, [pathname, setSelectedStack]);

  return [selectedStack, updateStack];
};
