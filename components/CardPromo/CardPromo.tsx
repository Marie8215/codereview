import Image from "next/image";
import Link from "next/link";

export const CardPromo = () => (
  <Link
    href="https://jobs.yourcodereview.com/ai/"
    className="relative block bg-no-repeat bg-cover bg-[url('/images/bg-propmo-pink.svg')] rounded-[12px] p-[20px] mb-[10px] last:mb-0 min-h-[245px] w-full"
    style={{ minHeight: 245 }}
  >
    <Image
      src="/images/sophi-auth.png"
      alt="Sophi"
      width={60}
      height={60}
      className="absolute left-[20px] top-[20px]"
      priority
    />
    <div className="pt-[75px] pb-[40px]">
      <div className="font-semibold text-[18px] leading-[22px] tracking-[-0.5px] text-[#232325] mb-[15px]">
        Софи собрала все вопросы. Тренируйся и получай<br/> офферы быстрее!
      </div>
    </div>
    <div className="flex items-center justify-between absolute left-[20px] right-[20px] bottom-[20px]">
      <span className="font-bold text-[18px] leading-[20px] tracking-[-0.5px] text-[#0560C9]">
        Попробовать бесплатно
      </span>
      <Image
        src="/images/arrow-blue.svg"
        alt="Arrow"
        width={16}
        height={16}
        priority
      />
    </div>
  </Link>
);