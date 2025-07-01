import "./InDevelopmentLayer.css";
import { WhiteDuckIcon } from "../Icon/Icons";

export const InDelevelopmentLayer = ({ className }: { className: string }) => {
  return (
    <div className={`w-full h-full inDevelopment ${className}`}>
      <div className="flex items-center gap-2 w-[513px] h-[33px] inDevelopmentBottom">
        develop
        <WhiteDuckIcon />
        В разработке
        <WhiteDuckIcon />
        В разработке
        <WhiteDuckIcon />В разработке
      </div>
      <div className="flex items-center gap-2 w-[513px] h-[33px] inDevelopmentTop">
        В разработке
        <WhiteDuckIcon />
        В разработке
        <WhiteDuckIcon />
        В разработке
        <WhiteDuckIcon />
      </div>
    </div>
  );
};
