import Link from "next/link";
import TwoLineIconText from "../TwoLineIconText/TwoLineIconText";
import { wixMadeforDisplay, wixMadeforText } from "@/app/fonts";
import JobProperties from "../JobProperties/JobProperties";

export interface JobCardProps {
  data: JobCardDataItem;
  className?: string;
  baseUrl?: string;
}

export interface JobCardDataItem {
  id: string;
  title: string;
  salary?: string;
  remote: boolean;
  internship: boolean;
  companyName: string;
  location: string;
  datePosted: string;
  image?: string;
}

export const JobCard: React.FC<JobCardProps> = ({ data, className = "" }) => {
  const date = new Date(data.datePosted).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`jobs/${data.id}`} className="contents">
      <div
        className={`
        xl:max-w-[502px] sm:w-[calc(50%-9px)] w-[345px]
        md:h-[204px] h-[240px]
        rounded-[8px] 
        p-[15px] 
        border border-neutral-200
        bg-neutral-100
        flex
        flex-col
        ${className}
      `}
      >
        <div className="flex-1">
          <h3
            className={`
            ${wixMadeforDisplay.className}
            md:text-[22px] text-[18px]
            md:leading-[26px] leading-[22px]
            font-bold 
            tracking-[-0.5px] 
            text-neutral-800
            mb-2.5
            line-clamp-2
          `}
          >
            {data.title}
          </h3>

          <div
            className={`flex flex-wrap gap-[15px] ${wixMadeforDisplay.className}`}
          >
            <JobProperties
              remote={data.remote}
              internship={data.internship}
              salary={data.salary}
            />
          </div>
        </div>

        <div className="flex items-end justify-between">
          <TwoLineIconText
            icon={data.image}
            title={data.companyName}
            description={data.location}
          />
          <span
            className={`
          text-[16px] 
          leading-[20px] 
          text-neutral-500
          tracking-[-0.5px]
          font-medium
          ${wixMadeforText.className}
        `}
          >
            {date}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
