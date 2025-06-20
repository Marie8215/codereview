import { GradientLinkWithArrow } from '../GradientBorderLink/GradientBorderLink';
import { Rating } from '../Rating/Rating';

interface ChallengeCardProps {
  company: string;
  level: string;
  title: string;
  description: string;
  taskLink: string;
  solutionLink?: string;
  className?: string;
}

export const ChallengeCard = ({ 
  company,
  level,
  title,
  description,
  taskLink,
  solutionLink,
  className = '' 
}: ChallengeCardProps) => {
  return (
    <div 
      className={`
        w-[502px] 
        h-[228px] 
        rounded-[8px] 
        p-[15px] 
        bg-neutral-100
        flex flex-col
        gap-2
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-800">{company}</span>
        <span className="text-sm text-neutral-800">{level}</span>
        <Rating value={75} />
      </div>

      <h3 className="text-lg font-semibold text-neutral-800">
        {title}
      </h3>

      <p className="text-sm text-neutral-600 mb-auto">
        {description}
      </p>

      <div className="flex gap-4">
        <GradientLinkWithArrow 
          href={taskLink}
          text="Посмотреть задание"
        />
        {solutionLink && (
          <GradientLinkWithArrow 
            href={solutionLink}
            text="Посмотреть решение"
          />
        )}
      </div>
    </div>
  );
};