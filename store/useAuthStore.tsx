import create from "zustand";
import { TLoginInputs } from "types/typesLoginForm";

const useAuthStore = create<TLoginInputs>()((set, get) => ({
  email: "edikoswara@test.com",
  password: "password",
  status: 0,
  useLogin: (email, password) =>
    get().email == email && get().password == password
      ? (set((state) => ({ status: (state.status = 204) })),
        set((state) => ({ email: (state.email = get().email) })))
      : set((state) => ({ status: (state.status = 404) })),
}));

export { useAuthStore };
