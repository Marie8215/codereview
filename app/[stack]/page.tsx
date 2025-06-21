import { stackOptions } from "../data/static-content";
import { PageLinksGrid } from "../../components/PageLinkGrid/PageLinksGrid";
import { MainPageBackground } from "../../components/Background/MainPageBackground";
import { StackOptions } from "@/components/StackOptions/StackOptions";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return stackOptions.map((stack) => ({
    stack: stack.linkId,
  }));
}

export default function StackPage({ params }: { params: { stack: string } }) {
  const currentStack = stackOptions.find(stack => stack.linkId === params.stack);
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