"use client";

import { stackOptions } from "@/app/data/static-content";
import { useLocalStorageTokenListner } from "@/hooks/useLocalStorageTokenListner";
import { useNavigationTracker } from "@/hooks/useNavigationTracker";
import { useSyncStackFromRoute } from "@/hooks/useStackFromRoute";
import { userClientStore } from "@/store/onClient/store";

export const AppInitialization = () => {
  useLocalStorageTokenListner();
  useSyncStackFromRoute();
  useNavigationTracker();

  const selectedStack = userClientStore((store) => store.selectedStack);
  const setSelectedStack = userClientStore((store) => store.setSelectedStack);
  
  Promise.resolve().then(() => {
    if (!selectedStack) {
      setSelectedStack(stackOptions[0]);
    }
  });

  return null;
};
