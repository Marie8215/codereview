import { StackOption, stackOptions } from "@/app/data/static-content";
import { create } from "zustand";

export interface StoreState {
  selectedStack: StackOption;
  stackOptions: readonly StackOption[];
  interviewsFilter: InterviewsFilterState;
  jobsFilter: JobsFilterState;
  setSelectedStack: (stack: StackOption) => void;
  setIterviewsFilter: (stack: InterviewsFilterState) => void;
  setJobsFilter: (stack: JobsFilterState) => void;
}

export interface InterviewsFilterState {
  grade: string[];
  subStack: string[];
  [key: string]: string | boolean | string[];
}

export interface JobsFilterState {
  sources: string[];
  city: string[];
  remote: boolean;
  internship: boolean;
  [key: string]: string | boolean | string[];
}

export const useStore = create<StoreState>((set) => ({
  stackOptions,
  selectedStack: stackOptions[0],
  interviewsFilter: {
    grade: [],
    subStack: [],
  },
  jobsFilter: { sources: [], city: [], remote: false, internship: false },
  setJobsFilter: (filter) => set({ jobsFilter: filter }),
  setSelectedStack: (stack) => set({ selectedStack: stack }),
  setIterviewsFilter: (filter) => set({ interviewsFilter: filter }),
}));
