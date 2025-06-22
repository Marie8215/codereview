import Link from "next/link";
import { ArrowSophyIcon } from "../Icon/Icons";
import { wixMadeforDisplay } from "../../app/fonts";

interface SophyPromoCardLongProps {
  className?: string;
}

export const SophyPromoCardLong = ({
  className = "",
}: SophyPromoCardLongProps) => {
  return (
    <Link
      href="https://jobs.yourcodereview.com/ai/"
      className={`
        relative
        md:w-[1020px]
        md:h-[80px]
        rounded-[8px]
        md:px-[30px]
        md:py-[20px]
        p-[15px]
        bg-[#FDF6E2]
        flex
        md:items-center
        items-end
        justify-between
        bg-[url('/images/grid-wide-icon.svg')]
        bg-no-repeat
        bg-right
        ${wixMadeforDisplay.className}
        ${className}
      `}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[16px] leading-[20px] font-bold tracking-[-0.5px] text-neutral-800">
          Софи собрала все вопросы — тренируйся и получай офферы быстрее!
          <br />
          <span className="text-[16px] leading-[20px] font-bold tracking-[-0.5px] text-[#8E521E]">
            Попробовать бесплатно
          </span>
        </p>
      </div>

      <ArrowSophyIcon size={16} />
    </Link>
  );
};
