import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// ? create interface
export interface AuthState {
  isAuth: boolean;
  // getStatus?: () => Partial<PersistOptions<T,F>;
  setIsAuth: () => void;
  loggedOut: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (by: any) => void;
}

const useAuthState = create<AuthState>()(
  persist(
    (set, get) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
      isAuth: false,
      setIsAuth: () => set({ isAuth: !get().isAuth }),
      loggedOut: () => set({ isAuth: !get().isAuth }),
    }),
    {
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// const useAuthState = create<AuthState>()((set) => ({
//   isAuth: false,
//   setIsAuth: () => set((state) => ({ isAuth: !state.isAuth })),
// }));

export default useAuthState;
