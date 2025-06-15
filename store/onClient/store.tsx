import { create } from "zustand";

export interface StoreState {
  selectedStack: StackType;
  stackOptions: readonly StackType[];
  setSelectedStack: (stack: StackType) => void;
}

export const stackOptions = [
  "Python",
  "Java",
  "JavaScript",
  "Data Science",
  "QA",
  "C#"
] as const;

export type StackType = typeof stackOptions[number];


export const useStore = create<StoreState>((set) => ({
  stackOptions,
  selectedStack: "Python",
  setSelectedStack: (stack) => set({ selectedStack: stack }),
}));
