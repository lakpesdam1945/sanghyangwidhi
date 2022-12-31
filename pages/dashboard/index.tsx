import Head from "next/head";
import { ReactElement } from "react";
import Dashboard from "../../components/layouts/Dashboard";
import { NextPageWithLayout } from "../_app";
import OverviewCard from "../../components/layouts/dashboard/Overview/OverviewCard";
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Sang Hyang Widhi</title>
        <meta name="description" content="Sang Hyang Widhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col relative">
        <h3 className="flex w-full items-center text-sm font-semibold text-sky-900 border-b-[1px] py-2 border-slate-500">
          Overview
        </h3>
        <OverviewCard />
        <h3 className="flex w-full items-center text-sm font-semibold text-sky-900 border-b-[1px] py-2 border-slate-500">
          Products
        </h3>
        <div className="flex w-full h-auto p-4 my-5 bg-white rounded-md ">
          <table className="table-fixed text-left w-full">
            <thead className="border-b">
              <tr>
                <th className="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                  Song
                </th>
                <th className="text-sm font-semibold text-gray-900 px-6 py-4 text-center">
                  Artist
                </th>
                <th className="text-sm font-semibold text-gray-900 px-6 py-4 text-right">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Malcolm Lockyer
                    </td>
                    <td className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                      1961
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
export default Home;
