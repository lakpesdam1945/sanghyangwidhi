import Head from "next/head";
import MainLayout from "../components/layouts/Main";
import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href={"/dashboard"}>Go to Dashboard</Link>Helo
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
