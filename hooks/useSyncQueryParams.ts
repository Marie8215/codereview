"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export const useSyncQueryParams = <
  T extends Record<string, string | boolean | string[]>
>(
  filters: T
) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
        return;
      }
      
      if (Array.isArray(value)) {
        if (value.length > 0) {
          params.set(key, value.join("&"));
        } else {
          params.delete(key);
        }
      } else if (typeof value === "boolean") {
        if (value) {
          params.set(key, "true");
        } else {
          params.delete(key);
        }
      } else if (value.toString().trim()) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    
    const newUrl = `${pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    
    const currentUrl = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;

    if (newUrl !== currentUrl) {
      router.push(newUrl);
    }
  }, [filters, pathname, router, searchParams]);

  return { pathname, router };
};
