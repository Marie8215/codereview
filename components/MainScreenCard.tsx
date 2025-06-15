import { ReactNode } from "react";
import { Card } from "./Card";
import "./MainScreenCard.css";

type GradientType = 'none' | 'dark' | 'light';
type HoverType = 'none' | 'code' | 'stars-short' | 'stars-long';

interface MainScreenCardProps {
  className?: string;
  contentClassName?: string;
  icon?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  gradient?: GradientType;
  hoverType?: HoverType;
}

export function MainScreenCard({
  icon,
  title,
  text,
  className = "",
  gradient = 'none',
  hoverType = 'none'
}: MainScreenCardProps) {
  const gradientClass = gradient === 'dark' 
    ? 'card-gradient-bg' 
    : gradient === 'light' 
      ? 'card-gradient-bg-light' 
      : '';

  const backgroundClass = hoverType === 'code'
    ? 'card-background'
    : hoverType === 'stars-short'
      ? 'card-background-short-stars'
      : hoverType === 'stars-long'
        ? 'card-background-long-stars'
        : '';

  return (
    <Card className={className}>
      <div className="card-container">
        {backgroundClass && <div className={backgroundClass}></div>}
        <div
          className={`card-content flex flex-col justify-between md:p-5 p-[15px] h-full ${gradientClass}`}
        >
          <div className="card-icon-container flex flex-col justify-start">
            <div className="flex justify-start">{icon ?? "icon"}</div>
            <div className="card-description mt-3.5 font-medium text-base leading-5 tracking-[-0.5px]">
              {text}
            </div>
          </div>
          <div className="flex">
            <span className="md:text-xl font-semibold md:leading-5 tracking-[-0.5px] align-bottom text-base leading-[18px]">
              {title}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
