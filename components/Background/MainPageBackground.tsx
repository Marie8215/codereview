"use client";
import { useEffect, useState } from "react";

export const MainPageBackground = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/stars-background-main.svg')",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    />
  );
};

export const DefaultPageBackground = () => {
  const [bgPosition, setBgPosition] = useState("center -240px");

  useEffect(() => {
    const handler = () => {
      setBgPosition(window.innerWidth < 768 ? "center top" : "center -240px");
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/stars-background-main.svg')",
        backgroundPosition: bgPosition,
        backgroundSize: "100% auto",
      }}
    />
  );
};
