import { useNavigationStore } from "@/store/onClient/navigationStore";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function useNavigationTracker() {
  const pathname = usePathname();
  const lastRecorded = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // не добавлять если повторно попали на тот же путь (возможно через pop)
    if (lastRecorded.current !== pathname) {
      useNavigationStore.getState().push(pathname);
      lastRecorded.current = pathname;
    }
  }, [pathname]);
}
