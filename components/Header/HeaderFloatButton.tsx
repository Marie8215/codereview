import Link from "next/link";
import GradientButton from "../GradientButton/GradientButton";

interface HeaderFloatButtonProps {
  href: string;
  children: React.ReactNode;
}

const HeaderFloatButton = ({ href, children }: HeaderFloatButtonProps) => (
  <>
    {/* Десктоп: справа от header */}
    <div className="hidden md:block md:absolute md:bottom-0 md:left-full md:ml-[10px]">
      <Link href={href}>
        <GradientButton
          className="h-[56px] rounded-[18px] px-5 flex items-center font-medium text-[18px] leading-[22px] w-auto"
          size="large"
        >
          <span className="whitespace-nowrap">{children}</span>
        </GradientButton>
      </Link>
    </div>
    {/* Мобилка: fixed справа снизу */}
    <div className="md:hidden fixed right-4 bottom-4 w-[calc(100vw-32px)] max-w-[345px] z-50 flex justify-end">
      <Link href={href}>
        <GradientButton
          className="h-[54px] rounded-[18px] px-5 flex items-center font-medium text-[18px] leading-[22px] w-full"
          size="large"
        >
          <span className="whitespace-nowrap">{children}</span>
        </GradientButton>
      </Link>
    </div>
  </>
);

export default HeaderFloatButton;