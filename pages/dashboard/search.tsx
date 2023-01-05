import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Dashboard from "../../components/layouts/Dashboard";
import Head from "next/head";
import Authenticated from "hooks/Authenticated";

type Props = {};

const Search: NextPageWithLayout = (props: Props) => {
  Authenticated(true);
  return (
    <>
      <Head>
        <title>Search - Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col">
        <div className="w-full bg-white shadow-md rounded-md p-3">Search</div>
      </div>
    </>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
export default Search;
