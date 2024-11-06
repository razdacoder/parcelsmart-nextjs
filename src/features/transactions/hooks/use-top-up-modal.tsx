import { create } from "zustand";

type TopUpModalState = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useTopUpModal = create<TopUpModalState>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ id, isOpen: true }),
  onClose: () => set({ isOpen: false, id: undefined }),
}));
