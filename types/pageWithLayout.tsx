import { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type PageWithMainLayoutType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type PageWithDashboardLayoutType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithDashboardLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
