import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/Main";
import Navbar from "@/components/header/Navbar";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Carousel from "@/components/carousel/Carousel";
import MenuOfcanvas from "@/components/OfCanvas/MenuOfcanvas";
import HorizontalCard from "@/components/card/HorizontalCard";
import { useAuthStore } from "store/useAuth";
import { GetUser, UserTypes } from "types/UserTypes";
const Home: NextPageWithLayout = () => {
  const { user, getUser } = useAuthStore((state) => state);
  const [users, setUsers] = useState<UserTypes>();
  useEffect(() => {
    getUser();
    setUsers(user);
  }, [user]);
  return (
    <>
      <Head>
        <title>Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={users} />
      <MenuOfcanvas />
      <main className="flex flex-col gap-4 px-4 laptop:px-20 py-20 w-full h-auto">
        {/* CAROUSEL & POPULER POSTS */}
        <div className="flex flex-col tablet:flex-row gap-4 w-full">
          <div className="flex w-full tablet:w-8/12">
            <div className="w-full h-96 rounded-md flex items-center justify-center relative overflow-hidden">
              <Carousel />
            </div>
          </div>
          {/* POPULAR */}
          <div className="flex flex-col h-96 w-full tablet:w-4/12">
            <div className="flex items-center justify-between border-b-[1px] w-full border-sky-900 sticky top-0 bg-white pb-4">
              <h3 className="text-sm text-sky-900 font-bold leading-snug">
                Populer
              </h3>
              <span className="text-xs text-sky-700">Lihat Semua</span>
            </div>
            <div className="flex flex-col w-full bg-white rounded-md overflow-y-auto">
              <div className="flex flex-col w-full gap-3 pt-2">
                {Array(10)
                  .fill("")
                  .map((_, i) => (
                    <div key={i} className="flex w-full relative">
                      <HorizontalCard />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <MobileMenu />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
