import { Card } from "@/components/Card";
import { PhotoContIcon, FreeIcon } from "@/components/Icon/Icons";
import { MainScreenCard } from "@/components/MainScreenCard";
import { pageLinks } from "../../app/data/static-content";
import { wixMadeforText } from "@/app/fonts";
import Link from "next/link";

export const PageLinksGrid = () => {
  return (
    <div
      className={`mx-auto lg:w-[1020px] w-[345px] sm:w-[90%] ${wixMadeforText.className} mb-[50px] md:mb-[100px]`}
    >
      <div className="grid md:gap-2 md:grid-cols-4 grid-cols-2 gap-[5px]">
        {pageLinks
          .filter((link) => !link.ingoreOnMainPage)
          .toSorted((a, b) => a.orderOnMainPage - b.orderOnMainPage)
          .map((link) => {
            return (
              <Link
                key={link.title}
                href={link.link ?? "#"}
                className="contents"
              >
                <MainScreenCard
                  key={link.title}
                  className="h-[150px] md:h-[280px]"
                  title={link.onMainPageTitle ?? link.title}
                  icon={link.iconFactory(26)}
                  text={link.description}
                  hoverType="code"
                  gradient={link.gradient}
                />
              </Link>
            );
          })}
        <Link href={"#"} className="contents">
          <MainScreenCard
            className="col-span-full md:col-span-3 h-[121px] md:h-[157px]"
            title={
              <span className="md:text-2xl md:leading-[26px] text-base leading-[18px]">
                База резюме соискателей. Свяжитесь
                <br />с понравившимся кандидатами напрямую
              </span>
            }
            icon={<PhotoContIcon />}
            hoverType="stars-long"
          />
        </Link>
        <Link href="#" className="contents">
          <Card className="col-span-full md:col-span-1 h-[64px] md:h-[157px]">
            <div className="vacancy-card-container h-full bg-neutral-700">
              <div className="vacancy-card-bg hidden md:block"></div>
              <div className="vacancy-card-bg-small md:hidden"></div>
              <div className="vacancy-card-content flex md:flex-col flex-row-reverse justify-between items-center md:items-start md:p-5 px-[15px] h-full">
                <div className="flex justify-start">
                  <FreeIcon />
                </div>
                <div className="flex justify-start">
                  <span className="md:text-xl font-semibold md:leading-5 tracking-[-0.5px] align-bottom text-base leading-[18px] text-neutral-10">
                    <span>
                      Разместить <br className="md:block hidden" />
                      вакансию
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};
