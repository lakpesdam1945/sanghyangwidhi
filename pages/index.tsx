import Head from "next/head";
import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/Main";
import Authenticated from "hooks/Authenticated";
const Home: NextPageWithLayout = () => {
  Authenticated(false);
  return (
    <>
      <Head>
        <title>Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div></div>
        <Link href={"/dashboard"}>Go to Dashasdboard</Link>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
