import Head from "next/head";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/Main";
import Image from "next/image";
import useAuthState from "../hooks/auth";
import { useRouter } from "next/router";

type Props = {};

const Login: NextPageWithLayout = (props: Props) => {
  const { isAuth, setIsAuth } = useAuthState();
  const getAuthStatus = useAuthState();

  // const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login - Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-full relative">
        <div className="flex w-full tablet:w-1/2 bg-red-50">
          <div className="flex relative w-full h-full">
            <div className="w-full h-full absolute z-50 top-0 bg-black/50"></div>
            <Image
              alt="BG-Login"
              src={
                "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              }
              sizes="
              (max-width: 320px) 100vw,(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
              style={{ objectFit: "cover" }}
              fill
              placeholder="blur"
              blurDataURL="/favicon.ico"
            />
          </div>
        </div>
        <div className="flex absolute z-50 w-full h-screen tablet:w-1/2 tablet:relative tablet:bg-slate-300 items-center justify-center">
          <div className="bg-white m-5 rounded-md w-full h-auto flex flex-col gap-4 p-5 shadow-md">
            <h3 className="text-2xl font-semibold text-center w-full text-sky-900">
              Sang Hyang Widhi
            </h3>
            <div className="gap-4 flex w-full">
              <div className="gap-4 flex flex-col w-full">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded form-input  border-gray-300
                  shadow-sm
                  focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                  placeholder="email"
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded form-input  border-gray-300
                  shadow-sm
                  focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                  placeholder="password"
                />
                <div>
                  <button
                    className="px-4 py-2 text-sm font-semibold text-sky-50 bg-sky-900 rounded"
                    onClick={
                      setIsAuth
                      // router.replace("/dashboard");
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Login;
