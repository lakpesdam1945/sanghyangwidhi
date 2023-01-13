import create from "zustand";
import http from "lib/axios";
import { getCookie, setCookie } from "cookies-next";
import { TLoginInputs } from "types/typesLoginForm";
import axios, { AxiosError } from "axios";
import { GetUser, UserTypes } from "types/UserTypes";
const csrf = () => http.get("/sanctum/csrf-cookie");
const useAuthStore = create<TLoginInputs>()((set, get) => ({
  // login
  token: "",
  useLogin: async (email, password) => {
    csrf();
    try {
      await http
        .post("/api/auth/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          setCookie("token", response.data.token);
          window.location.replace("http://localhost:3000/");
        })
        .catch((error) => {
          const err = error as AxiosError;
          if (err.response?.status === 401)
            set({
              setErrors: "Email & Password does not match with our record",
            });
          // console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
  getUser: async () => {
    try {
      csrf();
      const responses = await http.get<UserTypes>("/api/user", {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      });
      set({ user: responses.data });
    } catch {
      console.log("401");
    }
  },
}));

export { useAuthStore };
