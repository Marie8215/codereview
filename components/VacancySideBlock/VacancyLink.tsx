import Link from "next/link";

interface VacancyLinkProps {
  title?: string;
  companyName?: string;
  href?: string;
}

export const VacancyLink = ({
  title,
  companyName,
  href = "#",
}: VacancyLinkProps) => {
  return (
    <Link href={href}>
      <p
        className={`font-semibold text-[16px] leading-[18px] tracking-[-0.5px] text-[#232325] mb-[8px]`}
      >
        {title}
      </p>
      <p
        className={`font-medium text-[16px] leading-[18px] tracking-[-0.5px] text-[#86888E]`}
      >
        {companyName}
      </p>
    </Link>
  );
};
