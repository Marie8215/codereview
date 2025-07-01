"use client";

import { stackOptions } from "@/app/data/static-content";
import { useLocalStorageTokenListner } from "@/hooks/useLocalStorageTokenListner";
import { useSyncStackFromRoute } from "@/hooks/useStackFromRoute";
import { userClientStore } from "@/store/onClient/store";

export const AppInitialization = () => {
  const selectedStack = userClientStore(store => store.selectedStack);
  const setSelectedStack = userClientStore(store => store.setSelectedStack);
  useLocalStorageTokenListner();
  useSyncStackFromRoute();

  if (!selectedStack){
    setSelectedStack(stackOptions[0])
  }

  return null;
};
