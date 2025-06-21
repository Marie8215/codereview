import Image from "next/image";
import Link from "next/link";
import { wixMadeforText } from "./fonts";

export default function NotFound() {
  return (
    <div className="items-center bg-white mt-[80px] md:mt-[130px]">
      {/* Отступ от хедера */}
      <div className="text-center">
        {/* Картинка */}
        <Image
          src="/images/404.svg"
          alt="404"
          width={180}
          height={116}
          className="mb-[32px] md:w-[260px] md:h-[162px] md:mb-[24px] inline"
          priority
        />
        <div>
          <h1 className={`${wixMadeforText.className}
        font-medium text-[22px] tracking-[-1px] text-[#232325] text-center mb-[16px]
        md:text-[30px] md:mb-[24px] leading-[100%]`}>
            Мы искали эту страницу, но не нашли.
            <span className="block md:mb-[8px]"></span>
            Давай{"  "}
            <Link
              href="/"
              className="text-[#3884FE]  hover:text-[#1d5bbf] transition contents"
            >
              на главную
            </Link>{" "}
            вернёмся?
          </h1>
          {/* Дополнительный текст */}
          <div className="mb-[40px] md:mb-[150px]">
            <p
              className={`${wixMadeforText.className}
          font-medium text-[14px] leading-[100%] tracking-[-1px] text-[#D4D5D7] text-center
          md:text-[16px]`}
            >
              и попробуем еще раз... ты меня спросишь, что такое безумие?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
