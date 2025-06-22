"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export const useSyncQueryParams = <
  T extends Record<string, string | boolean | string[]>
>(
  filters: T
) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (Array.isArray(value)) {
        if (value.length > 0) {
          params.set(key, value.join("&"));
        }
      } else if (typeof value === "boolean") {
        if (value) {
          params.set(key, "true");
        }
      } else if (value.toString().trim()) {
        params.set(key, value.toString());
      }
    });

    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl);
  }, [filters, pathname, router]);

  return { pathname, router };
};
