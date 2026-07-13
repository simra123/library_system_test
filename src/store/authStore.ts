import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthUser = {
  role: "admin" | "student";
  id: string;
  name: string;
  email: string;
  department?: string;
};

type State = { currentUser: AuthUser | null };
type Actions = {
  setUser: (u: AuthUser) => void;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      currentUser: null,
      setUser: (u) => set({ currentUser: u }),
      logout: () => set({ currentUser: null }),
    }),
    { name: "libraryhub-auth" },
  ),
);
