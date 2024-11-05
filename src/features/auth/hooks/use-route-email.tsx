import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type RouteEmail = {
  email?: string;
  setEmail: (email?: string) => void;
};

export const useRouteEmail = create(
  persist<RouteEmail>(
    (set) => ({
      email: undefined,
      setEmail: (email?: string) => set({ email }),
    }),
    {
      name: "route-email",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
