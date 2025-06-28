import { StackOption, stackOptions } from "@/app/data/static-content";
import { create } from "zustand";

export interface User {
  id?: number;
  email?: string;
  username?: string;
  isActive?: boolean;
  isSuperuser?: boolean;
}

export interface StoreState {
  selectedStack: StackOption;
  stackOptions: readonly StackOption[];
  interviewsFilter: InterviewsFilterState;
  jobsFilter: JobsFilterState;
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  user: User | null;
  loggedIn: boolean; // todo заменить на данные о текущем пользователе
  setUser: (user: User) => void;
  setLoggedIn: (loggedId?: boolean) => void; // todo заменить на данные о текущем пользователе
  setRegisterModalOpen: (open: boolean) => void;
  setLoginModalOpen: (open: boolean) => void;
  setSelectedStack: (stack: StackOption) => void;
  setIterviewsFilter: (stack: InterviewsFilterState) => void;
  setJobsFilter: (stack: JobsFilterState) => void;
}

export interface InterviewsFilterState {
  grade: string[];
  subStack: string[];
  [key: string]: string | boolean | string[];
}

export interface FilterState {
  [key: string]: string | boolean | number | string[];
}

export interface JobsFilterState {
  sources: string[];
  city: string[];
  remote: boolean;
  internship: boolean;
  [key: string]: string | boolean | string[];
}

export const userClientStore = create<StoreState>((set) => ({
  stackOptions,
  selectedStack: stackOptions[0],
  interviewsFilter: {
    grade: [],
    subStack: [],
  },
  jobsFilter: { sources: [], city: [], remote: false, internship: false },
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  loggedIn: false,
  user: null,
  setUser: (user) => set({ user: user }),
  setLoggedIn: (loggedIn = true) => set({ loggedIn: loggedIn }),
  setRegisterModalOpen: (open) => set({ isRegisterModalOpen: open }),
  setLoginModalOpen: (open) => set({ isLoginModalOpen: open }),
  setJobsFilter: (filter) => set({ jobsFilter: filter }),
  setSelectedStack: (stack) => set({ selectedStack: stack }),
  setIterviewsFilter: (filter) => set({ interviewsFilter: filter }),
}));
