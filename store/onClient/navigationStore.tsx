import { create } from "zustand";

interface NavigationStore {
  history: string[];
  push: (path: string) => void;
  pop: () => string | null;
  peek: () => string | null;
}

export const useNavigationStore = create<NavigationStore>((set, get) => ({
  history: [],

  push: (path) => {
    const { history } = get();

    if (history[history.length - 1] !== path) {
      const newHistory = [...history, path];
      console.log("current history", newHistory);

      set({ history: newHistory });
    }
  },

  pop: () => {
    const history = [...get().history];
    history.pop();
    set({ history });

    if (history.length <= 1) return null;
    const previous = history[history.length - 1];

    console.log("current history", history);
    return previous;
  },

  peek: () => {
    const history = get().history;
    console.log("current history", history);

    return history.length > 1 ? history[history.length - 2] : null;
  },
}));
