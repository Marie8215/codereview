import { FilterState } from "@/store/onClient/store";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function useSyncStoreFilter<T extends FilterState>(
  prevFilters: T,
  setFilter: (filters: T) => void
) {
  const searchParams = useSearchParams();

  const isMounted = useRef(false);
  const filtersRef = useRef<T>(prevFilters);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    const parsed = {} as T;

    for (const key in prevFilters) {
      const raw = searchParams.get(key);
      const value = prevFilters[key];

      if (Array.isArray(value)) {
        parsed[key] = (raw?.split("&") ?? []) as typeof value;
      } else if (typeof value === "boolean") {
        parsed[key] = (raw === "true") as typeof value;
      } else if (typeof value === "number") {
        parsed[key] = (raw ? Number(raw) : 0) as typeof value;
      } else {
        parsed[key] = (raw ?? "") as typeof value;
      }
    }

    const changed = JSON.stringify(parsed) !== JSON.stringify(prevFilters);
    if (changed) {
      filtersRef.current = parsed;
      setFilter(parsed);
    }
  }, [searchParams, prevFilters, setFilter]);
}
