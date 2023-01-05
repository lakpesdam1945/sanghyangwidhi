import { NextPage } from "next";
import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Inter } from "@next/font/google";
import Authenticated from "hooks/Authenticated";
const inter = Inter({ subsets: ["latin"] });
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  Authenticated({ required: false });
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
