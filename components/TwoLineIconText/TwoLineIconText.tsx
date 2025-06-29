import { wixMadeforDisplay } from "@/app/fonts";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";

interface TwoLineIconTextProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

const TwoLineIconText: React.FC<TwoLineIconTextProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`flex items-start gap-[10px] ${className}`}>
      <ImageWithFallback
        src={icon}
        alt={title}
        width={42}
        height={42}
        fallbackText={title}
        className={className}
      />
      <div className={`flex flex-col ${wixMadeforDisplay.className}`}>
        <span className="text-[18px] leading-[22px] tracking-[-0.5px] text-neutral-800 font-semibold">
          {title}
        </span>
        <span className="text-[16px] leading-[20px] tracking-[-0.5px] text-neutral-500 font-semibold">
          {description}
        </span>
      </div>
    </div>
  );
};

export default TwoLineIconText;
