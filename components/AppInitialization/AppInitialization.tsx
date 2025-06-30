"use client";

import { useLocalStorageTokenListner } from "@/hooks/useLocalStorageTokenListner";
import { useSyncStackFromRoute } from "@/hooks/useStackFromRoute";

export const AppInitialization = () => {
  useLocalStorageTokenListner();
  useSyncStackFromRoute();

  return null;
};
