"use client";
import JobCard from "@/components/Card/Card";
import Image from "next/image";
import {
  BriefcaseIcon,
  MoneybagIcon,
  WorldIcon,
} from "@/components/Icon/Icons";
import IconWithText from "@/components/IconWithText/IconWithText";
import { useRef } from "react";
// import Pagination from "@/components/Pagination/Pagination";
import SophyPromoCard from "@/components/Card/SophyPromoCard";
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay";

export const Cards = () => {
  const refForOverlay = useRef(null);

  return (
    <div className="mx-auto relative">
      <GradientOverlay cardHeight={204} childrenRef={refForOverlay} className="mb-[56px]">
        <div
          className="flex flex-row md:gap-y-4 gap-y-[10px] gap-x-[18px] flex-wrap justify-start"
          ref={refForOverlay}
        >
          <JobCard
            title={
              "Стажировка МТС Старт"
            }
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
          <JobCard
            title={"Начинающий тестировщик / AQA Engineer (Java)"}
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="1 день назад"
          />
          <JobCard
            title={
              "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)"
            }
            tags={[
              <IconWithText
                size="small"
                key={4}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={5}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={6}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
          <JobCard
            title={
              "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)"
            }
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
          <JobCard
            title={
              "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)"
            }
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
          <SophyPromoCard />
          <JobCard
            title={
              "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)"
            }
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
          <JobCard
            title={
              "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)"
            }
            tags={[
              <IconWithText
                size="small"
                key={1}
                icon={<WorldIcon size={18} />}
                text={"удаленно"}
              />,
              <IconWithText
                size="small"
                key={2}
                icon={<BriefcaseIcon size={18} />}
                text={"стажировка"}
              />,
              <IconWithText
                size="small"
                key={3}
                icon={<MoneybagIcon size={18} />}
                text={"от 50 000 ₽"}
              />,
            ]}
            icon={
              <Image
                src="/images/test-company-image.png"
                alt="Briefcase Icon"
                width={42}
                height={42}
              />
            }
            companyName="Bell Integrator"
            companyDescription="Воронеж"
            date="16.04.2025"
          />
        </div>
      </GradientOverlay>
      {/* <div className="flex justify-center mt-5">
        {" "}
        <Pagination lastPage={24} currentPage={1} />
      </div> */}
    </div>
  );
};
