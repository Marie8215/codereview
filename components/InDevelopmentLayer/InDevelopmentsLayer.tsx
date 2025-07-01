import "./InDevelopmentLayer.css";
import { WhiteDuckIcon } from "../Icon/Icons";

export const InDelevelopmentLayer = ({ className }: { className: string }) => {
  return (
    <div className={`w-full h-full inDevelopment ${className}`}>
      <div className="flex items-center gap-2 w-[513px] h-[33px] inDevelopmentBottom">
        develop
        <span className="contents">
          <WhiteDuckIcon />
        </span>
        В разработке
        <span className="contents">
          <WhiteDuckIcon />
        </span>
        В разработке
        <span className="contents">
          <WhiteDuckIcon />
        </span>
        В разработке
      </div>
      <div className="flex items-center gap-2 w-[513px] h-[33px] inDevelopmentTop">
        В разработке
        <span className="contents">
          <WhiteDuckIcon />
        </span>
        В разработке
        <span className="contents">
          <WhiteDuckIcon />
        </span>
        В разработке
        <span className="contents">
          <WhiteDuckIcon />
        </span>
      </div>
    </div>
  );
};
