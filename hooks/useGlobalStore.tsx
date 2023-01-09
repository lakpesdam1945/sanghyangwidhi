import create from "zustand";

export interface GlobalStore {
  isOpen: boolean;
  setIsOpen: () => void;
  setClose: () => void;
}
const useGlobalStore = create<GlobalStore>()((set, get) => ({
  isOpen: false,
  setIsOpen: () => set({ isOpen: !get().isOpen }),
  setClose: () => set({ isOpen: false }),
}));

export default useGlobalStore;
