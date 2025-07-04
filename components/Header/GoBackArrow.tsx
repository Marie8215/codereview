"use client";
import { useNavigationStore } from "@/store/onClient/navigationStore";
import { userClientStore } from "@/store/onClient/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const GoBackArrow = () => {
  const router = useRouter();
  const pathname = usePathname();
  const selectedStack = userClientStore((store) => store.selectedStack);
  const pathPop = useNavigationStore((store) => store.pop);

  const shouldShowBackArrow = pathname?.split("/").filter(Boolean).length > 1;

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  if (!shouldShowBackArrow || !isDesktop) {
    return null;
  }

  const handleBack = () => {
    const currentSegments = pathname?.split("/").filter(Boolean) ?? [];
    const currentLast = currentSegments.at(-1);
    const isIdPage = /\d+/.test(currentLast || "");

    const previousPath = pathPop();

    if (isIdPage && previousPath) {
      router.back();
    } else {
      const route = selectedStack?.linkId || "";
      router.push(`/${route}`);
    }
  };

  return (
    <div
      className="
          hidden md:flex
          absolute
          items-center justify-center
          w-[64px] h-[56px]
          rounded-[18px]
          bg-neutral-10
          shadow-header
          left-[-74px] top-1/2 -translate-y-1/2
          z-10
          cursor-pointer
        "
      onClick={handleBack}
    >
      <Image
        src="/images/backspace-arrow.svg"
        alt="back"
        width={18}
        height={18}
        className="mx-auto"
        priority
      />
    </div>
  );
};
