// TODO custom hook buat cek user isAuthenticated

import { useEffect, useState } from "react";
import useAuthState from "./auth";
import { useRouter } from "next/router";

export type AuthType = {
  required: boolean;
};

const Authenticated = (required: boolean) => {
  // ? Get dari localstorage
  const { isAuth } = useAuthState();
  const router = useRouter();
  // ? set state
  const [auth, setAuth] = useState(isAuth);
  useEffect(() => {
    setAuth(isAuth);

    if (required === true) {
      router.push("/login");
    }
    // console.log(auth);
    console.log(required);
  }, [isAuth]);

  // return auth;
};

export const Auth = () => {};

export default Authenticated;
