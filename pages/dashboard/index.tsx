import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import Dashboard from "../../components/layouts/Dashboard";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const [isAuth, setIsAuth] = useState(true);
  const router = useRouter();
  useEffect(() => {
    isAuth ? router.push("/dashboard") : router.push("/");
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col">
        <div className="w-full bg-white shadow-md rounded-md p-3">main</div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
export default Home;
