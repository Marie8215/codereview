interface QuestionCardProps {
  title: string;
  stack: string;
  frequency: number;
  className?: string;
}

export const QuestionCard = ({
  title,
  stack,
  frequency,
  className = ''
}: QuestionCardProps) => {
  return (
    <div
      className={`
        md:w-[1020px]
        w-[345px]
        md:h-[76px]
        rounded-[8px]
        p-[15px]
        bg-neutral-100
        flex flex-col
        ${className}
      `}
    >
      <p className="md:text-[18px] text-[16px] md:leading-[24px] leading-[20px] font-bold text-neutral-800 tracking-[-0.5px] md:mb-0 mb-[5px]">
        {title}
      </p>

      <p className="flex items-center gap-2 md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] text-neutral-600 font-semibold">
        <span className="text-neutral-400">
          {`${stack} • ${frequency} упоминаний`}
        </span>
      </p>
    </div>
  );
}; 