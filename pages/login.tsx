import Head from "next/head";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/Main";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { TLoginInputs, resolver } from "types/typesLoginForm";
import { useAuthStore } from "store/useAuthStore";
type Props = {};

/**
 * TODO
 * ! RAPIHKAN STRUKTUR HTML DAN CLASS
 * ! BUAT FUNGSI CUSTOM HOOK HANDLE LOGIN
 */

const Login: NextPageWithLayout = (props: Props) => {
  // auth
  const [disable, setDisable] = useState(false);
  const state = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>({ resolver });

  const onSubmit = async (data: TLoginInputs) => {
    try {
      await state.useLogin(data.email, data.password);
      if (state.status === 204) {
        alert(state.email);
      } else {
        alert("GAGAL");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="gap-4 flex flex-col w-full"
                >
                  {/* EMAIL */}
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      className={`${
                        errors.email
                          ? "focus:ring-red-200 focus:ring-opacity-50 focus:border-rose-300 focus:ring"
                          : "focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                      } w-full px-4 py-2 rounded form-input border-gray-300 shadow-sm `}
                      placeholder="email"
                    />
                    {errors?.email && (
                      <span className="text-rose-500 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div>
                    <input
                      {...register("password")}
                      type="password"
                      className={`${
                        errors.password
                          ? "focus:ring-red-200 focus:ring-opacity-50 focus:border-rose-300 focus:ring"
                          : "focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                      } w-full px-4 py-2 rounded form-input border-gray-300 shadow-sm `}
                      placeholder="password"
                    />
                    {errors?.password && (
                      <span className="text-rose-500 text-xs">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  {/* BUTTON */}
                  <div>
                    <button
                      disabled={disable}
                      type="submit"
                      className="px-4 py-2 text-sm font-semibold text-sky-50 bg-sky-900 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
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
