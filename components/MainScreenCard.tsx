import { ReactNode } from "react";
import { Card } from "./Card";
import "./MainScreenCard.css";
import { GradientType, HoverType } from "@/app/data/static-content";
import { InDelevelopmentLayer } from "./InDevelopmentLayer/InDevelopmentsLayer";
import { RainbowDuckIcon } from "./Icon/Icons";

interface MainScreenCardProps {
  className?: string;
  contentClassName?: string;
  icon?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  gradient?: GradientType;
  hoverType?: HoverType;
  inDevelopment?: boolean;
}

export function MainScreenCard({
  icon,
  title,
  text,
  gradient,
  className = "",
  hoverType = "none",
  inDevelopment = false,
}: MainScreenCardProps) {
  gradient ||= "none";
  const gradientClass =
    gradient === "dark"
      ? "card-gradient-bg"
      : gradient === "light"
      ? "card-gradient-bg-light"
      : "";

  const backgroundClass =
    hoverType === "code"
      ? "card-background"
      : hoverType === "stars-short"
      ? "card-background-short-stars"
      : hoverType === "stars-long"
      ? "card-background-long-stars"
      : "";

  return (
    <Card className={className}>
      <div className="card-container">
        {backgroundClass && !inDevelopment && (
          <div className={` hidden md:block ${backgroundClass}`}></div>
        )}
        <div
          className={`card-content flex flex-col justify-between md:p-5 p-[15px] h-full ${gradientClass}`}
        >
          {inDevelopment && (
            <InDelevelopmentLayer className="lg:block hidden" />
          )}
          <div
            className={`card-icon-container flex flex-col justify-start z-10 ${
              inDevelopment ? "" : "card-icon-container-active"
            }`}
          >
            <div className="flex justify-between">
              <div className="flex justify-start">{icon ?? "icon"}</div>
              {inDevelopment && (
                <div className="flex gap-1 items-center lg:hidden">
                  <RainbowDuckIcon size={12} />{" "}
                  <span className="text-[12px] text-neutral-600">
                    в разработке
                  </span>
                </div>
              )}
            </div>

            {!inDevelopment && (
              <div className="card-description mt-3.5 font-medium text-base leading-5 tracking-[-0.5px] hidden md:block">
                <span className="line-clamp-7">{text}</span>
              </div>
            )}
          </div>
          <div className="flex z-10">
            <span className="xl:text-xl font-semibold md:leading-5 tracking-[-0.5px] align-bottom text-base leading-[18px]">
              {title}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
