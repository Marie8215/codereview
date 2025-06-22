import { Metadata } from "next";
import { stackOptionsMap } from "../data/static-content";
import { PageLinksGrid } from "../../components/PageLinkGrid/PageLinksGrid";
import { MainPageBackground } from "../../components/Background/MainPageBackground";
import { StackOptions } from "@/components/StackOptions/StackOptions";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { notFound } from "next/navigation";

interface StackPageProps {
  params: Promise<{
    stack: string;
  }>;
}

export async function generateMetadata({
  params,
}: StackPageProps): Promise<Metadata> {
  const { stack } = await params;
  const currentStack = stackOptionsMap.get(stack);

  if (!currentStack) {
    return {
      title: "Страница не найдена | Codereview",
      description: "Запрашиваемая страница не найдена",
    };
  }

  return {
    title: `${currentStack.title} вакансии и стажировки | Codereview`,
    description: `Поиск работы для ${currentStack.title}-разработчиков. Вакансии, стажировки, собеседования и карьерные советы специально для ${currentStack.title}-специалистов.`,
  };
}

export default async function StackPage({ params }: StackPageProps) {
  const { stack } = await params;

  const currentStack = stackOptionsMap.get(stack);
  if (!currentStack) {
    notFound();
  }

  return (
    <>
      <MainPageBackground />
      <PageHeader
        title={
          <>
            <span className="md:-translate-x-1 -translate-x-0.5 inline-block z-0">
              Твой Ассистент
            </span>
            <br />
            по поиску работы
          </>
        }
        description="Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу"
      />
      <div className="mx-auto">
        <StackOptions className="justify-center" />
      </div>
      <PageLinksGrid />
    </>
  );
}
