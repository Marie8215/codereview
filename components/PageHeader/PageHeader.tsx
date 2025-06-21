import Image from "next/image";

interface PageHeaderProps {
  title: React.ReactNode;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center max-w-[1000px] mx-auto z-0 md:mt-[100px] mt-[88px]">
      <Image
        src="/images/sophy-main.png"
        alt="Sophy"
        width={96}
        height={99}
        className="rounded-[666px] mb-5"
        priority
      />
      <h1 className="md:w-[436px] text-[26px] leading-[30px] md:text-[50px] md:leading-[52px] font-bold tracking-[-1px] text-center mb-5 with-display text-neutral-800">
        {title}
      </h1>
      <p className="md:w-[417px] w-[279px] text-[18px] leading-[22px] tracking-[-0.5px] font-medium text-center md:mb-20 mb-12.5 md:text-[22px] md:leading-[26px]">
        {description}
      </p>
    </div>
  );
}