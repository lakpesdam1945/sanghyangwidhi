import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/Main";
import { useAuth } from "hooks/Authenticated";
import Navbar from "@/components/header/Navbar";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
const Home: NextPageWithLayout = () => {
  const { user, username } = useAuth({ middleware: "guest" });

  return (
    <>
      <Head>
        <title>Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col gap-4 px-4 py-16 w-full h-auto">
        <div className="w-full h-20 bg-slate-300 rounded-md flex items-center justify-center">
          <span className="text-2xl text-sky-900 font-extrabold">
            Selamat Datang
          </span>
        </div>
        <hr />
        {Array(5)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="flex w-full h-20 bg-slate-100 p-2 rounded-md gap-2"
            >
              <div className="flex h-full w-4/12 bg-sky-500 rounded-md items-center justify-center">
                <span className="text-sky-50 font-semibold">IMAGE</span>
              </div>
              <div className="flex flex-col w-full gap-1">
                <h3 className="text-xs font-semibold text-sky-900 leading-relaxed">
                  Sang Hyang Widhi
                </h3>
                <p className="text-xs font-light text-sky-700 leading-relaxed w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
      </main>
      <MobileMenu />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
