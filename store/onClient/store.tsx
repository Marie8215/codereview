import { StackOption, stackOptions } from "@/app/data/static-content";
import { LinkedMap } from "@/common/LinkedMap";
import { create } from "zustand";

export interface User {
  id?: number;
  email?: string;
  username?: string;
  isActive?: boolean;
  isSuperuser?: boolean;
}

export interface VacancyLinkData {
  id: number,
  title: string,
  companyName: string,
}

export interface QuestionLinkData {
  id: number;
  title: string;
  stack?: string;
}

export interface StoreState {
  selectedStack?: StackOption;
  stackOptions: readonly StackOption[];
  interviewsFilter: InterviewsFilterState;
  jobsFilter: JobsFilterState;
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  user: User | null;
  loggedIn: boolean; // todo заменить на данные о текущем пользователе
  jobsList: LinkedMap<number, VacancyLinkData> | null,
  questionsList: LinkedMap<number, QuestionLinkData> | null;
  setUser: (user: User) => void;
  setLoggedIn: (loggedId?: boolean) => void; // todo заменить на данные о текущем пользователе
  setRegisterModalOpen: (open: boolean) => void;
  setLoginModalOpen: (open: boolean) => void;
  setSelectedStack: (stack: StackOption) => void;
  setIterviewsFilter: (stack: InterviewsFilterState) => void;
  setJobsFilter: (stack: JobsFilterState) => void;
  setJobsList: (list: LinkedMap<number, VacancyLinkData>) => void;
  setQuestionsList: (list: LinkedMap<number, QuestionLinkData>) => void;
}

export interface InterviewsFilterState extends FilterState {
  grade: string[];
  subStack: string[];
}

export interface FilterState {
  [key: string]: string | boolean | number | string[];
}

export interface JobsFilterState extends FilterState {
  sources: string[];
  city: string[];
  remote: boolean;
  internship: boolean;
}

export interface NavigationState {
  history: string[];
  pushPath: (path: string) => void;
  getPreviousPath: () => string | null;
}

export const userClientStore = create<StoreState>((set, get) => ({
  stackOptions,
  interviewsFilter: {
    grade: [],
    subStack: [],
  },
  jobsFilter: { sources: [], city: [], remote: false, internship: false },
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  loggedIn: false,
  user: null,
  jobsList: null,
  questionsList: null,
  setUser: (user) => set({ user: user }),
  setLoggedIn: (loggedIn = true) => set({ loggedIn: loggedIn }),
  setRegisterModalOpen: (open) => set({ isRegisterModalOpen: open }),
  setLoginModalOpen: (open) => set({ isLoginModalOpen: open }),
  setJobsFilter: (filter) => set({ jobsFilter: filter }),
  setSelectedStack: (stack) => set({ selectedStack: stack }),
  setIterviewsFilter: (filter) => set({ interviewsFilter: filter }),
  setJobsList: (list) => set({jobsList: list}),
  setQuestionsList: (list) => set({ questionsList: list }),
}));
