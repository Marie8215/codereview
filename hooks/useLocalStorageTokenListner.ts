"use client";
import { userClientStore } from "@/store/onClient/store";
import { useEffect, useState } from "react";

const tokenKey = "accessToken";

export const useLocalStorageTokenListner = () => {
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const setLoggedIn = userClientStore((state) => state.setLoggedIn);
  const setUser = userClientStore((state) => state.setUser);

  useEffect(() => {
    const item = localStorage.getItem(tokenKey);
    if (item) {
      setStoredValue(item);
      setLoggedIn();
    }

    const handleStorageChange = async (e: StorageEvent) => {
      if (e.key === tokenKey || e.newValue) {
        const newValue = e.newValue;
        setStoredValue(newValue);
        setLoggedIn();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setLoggedIn, setUser]);

  return storedValue;
};
