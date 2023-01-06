// TODO custom hook buat cek user isAuthenticated

import { useEffect, useState } from "react";
import useAuthState from "./auth";
import { useRouter } from "next/router";

export type AuthType = {
  required: boolean;
};

export const useAuth = ({ middleware = "guest" } = {}) => {
  const { isAuth } = useAuthState();

  const [user, setUser] = useState(false);
  const username = "edikoswara";
  const router = useRouter();
  useEffect(() => {
    setUser(isAuth);
    if (middleware === "guest" && isAuth) router.push("/");
  }, [user]);

  return {
    user,
    username,
  };
};
