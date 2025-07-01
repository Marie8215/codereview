import {
  BriefcaseIcon,
  CalendarIcon,
  CodeAsteriskIcon,
  CodeIcon,
  MessageIcon,
  MicrophoneIcon,
  PersonIcon,
  SparklesIcon,
  StackIcon,
} from "@/components/Icon/Icons";
import { ReactNode } from "react";

export type GradientType = "none" | "dark" | "light";
export type HoverType = "none" | "code" | "stars-short" | "stars-long";

interface pageLink {
  iconFactory: (iconSize: number) => ReactNode;
  title: string;
  description: string;
  orderOnMainPage: number;
  onMainPageTitle?: ReactNode;
  ingoreOnMainPage?: boolean;
  gradient?: GradientType;
  baseLink?: string;
  inDevelopment?: boolean;
}

export const pageLinks: pageLink[] = [
  {
    title: "Вакансии / Cтажировки",
    description:
      "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ",
    iconFactory: (size = 20) => <BriefcaseIcon size={size} />,
    orderOnMainPage: 0,
    baseLink: "jobs",
  },
  {
    title: "Тестовые задания",
    onMainPageTitle: (
      <span>
        Тестовые <br className="md:hidden" />
        задания
      </span>
    ),
    description:
      "Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио",
    iconFactory: (size = 20) => <CodeIcon size={size} />,
    orderOnMainPage: 2,
    gradient: "light",
    inDevelopment: true,
  },
  {
    title: "IT-мероприятия",
    description:
      "Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи",
    iconFactory: (size = 20) => <CalendarIcon size={size} />,
    orderOnMainPage: 4,
    gradient: "dark",
    inDevelopment: true,
  },
  {
    title: "Контакты рекрутеров",
    description:
      "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование",
    iconFactory: (size = 20) => <MessageIcon size={size} />,
    orderOnMainPage: 6,
    onMainPageTitle: (
      <span>
        Контакты <br />
        рекрутеров
      </span>
    ),
    inDevelopment: true,
  },
  {
    title: "Резюме соискателей",
    description: "1234",
    iconFactory: (size = 20) => <PersonIcon size={size} />,
    orderOnMainPage: 8,
    onMainPageTitle: (
      <span>
        База резюме соискателей. Свяжитесь
        <br />с понравившимся кандидатами напрямую
      </span>
    ),
    ingoreOnMainPage: true,
    inDevelopment: true,
  },
  {
    title: "Необходимые навыки",
    description:
      "Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме",
    iconFactory: (size = 20) => <StackIcon size={size} />,
    orderOnMainPage: 1,
    onMainPageTitle: (
      <span>
        Необходимые <br />
        навыки
      </span>
    ),
    inDevelopment: true,
  },
  {
    title: "Собеседования",
    description:
      "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов",
    iconFactory: (size = 20) => <MicrophoneIcon size={size} />,
    orderOnMainPage: 3,
    baseLink: "/interviews",
  },
  {
    title: "Пет-проекты",
    description:
      "Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт",
    iconFactory: (size = 20) => <CodeAsteriskIcon size={size} />,
    orderOnMainPage: 5,
    inDevelopment: true,
  },
  {
    title: "ИИ инструменты",
    description:
      "Подборка AI-тулзов для автоматизации, разработки и поиска работы — c описаниями и рейтингом полезности",
    iconFactory: (size = 20) => <SparklesIcon size={size} />,
    orderOnMainPage: 7,
    inDevelopment: true,
  },
];

export interface StackOption {
  title: string;
  linkId: string;
  filterId: string;
}

export const stackOptions: StackOption[] = [
  {
    title: "Python",
    linkId: "python",
    filterId: "Python",
  },
  {
    title: "Java",
    linkId: "java",
    filterId: "Java",
  },
  {
    title: "JavaScript",
    linkId: "javascript",
    filterId: "JS",
  },
  {
    title: "Data Science",
    linkId: "data-science",
    filterId: "ML",
  },
  {
    title: "QA",
    linkId: "qa",
    filterId: "QA",
  },
  {
    title: "C#",
    linkId: "csharp",
    filterId: "CSharp",
  },
];

export const stackOptionsMap = new Map(
  stackOptions.map((option) => [option.linkId, option])
);
